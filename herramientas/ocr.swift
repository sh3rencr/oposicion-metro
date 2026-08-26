import Foundation
import PDFKit
import Vision
import CoreGraphics
import AppKit

// Uso: ocr <fichero.pdf> <páginaInicio> <páginaFin> [escala]
let args = CommandLine.arguments
guard args.count >= 4, let doc = PDFDocument(url: URL(fileURLWithPath: args[1])) else {
    FileHandle.standardError.write("uso: ocr <pdf> <desde> <hasta> [escala]\n".data(using: .utf8)!)
    exit(1)
}
let desde = Int(args[2])!, hasta = Int(args[3])!
let escala = args.count > 4 ? CGFloat(Double(args[4])!) : 3.0

func imagen(_ pagina: PDFPage) -> CGImage? {
    let caja = pagina.bounds(for: .mediaBox)
    let w = Int(caja.width * escala), h = Int(caja.height * escala)
    guard let ctx = CGContext(data: nil, width: w, height: h, bitsPerComponent: 8,
                              bytesPerRow: 0, space: CGColorSpaceCreateDeviceRGB(),
                              bitmapInfo: CGImageAlphaInfo.noneSkipLast.rawValue) else { return nil }
    ctx.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1))
    ctx.fill(CGRect(x: 0, y: 0, width: w, height: h))
    ctx.scaleBy(x: escala, y: escala)
    ctx.translateBy(x: -caja.origin.x, y: -caja.origin.y)
    pagina.draw(with: .mediaBox, to: ctx)
    return ctx.makeImage()
}

for n in desde...hasta {
    guard n-1 < doc.pageCount, let pag = doc.page(at: n-1), let img = imagen(pag) else { continue }
    let req = VNRecognizeTextRequest()
    req.recognitionLevel = .accurate
    req.recognitionLanguages = ["es-ES", "en-US"]
    req.usesLanguageCorrection = true
    let handler = VNImageRequestHandler(cgImage: img, options: [:])
    do { try handler.perform([req]) } catch { continue }
    guard let obs = req.results else { continue }
    print("[[[ pág \(n) — \(obs.count) bloques de texto ]]]")
    // ordenar por posición: de arriba abajo, de izquierda a derecha
    let orden = obs.sorted { a, b in
        let ay = a.boundingBox.midY, by = b.boundingBox.midY
        if abs(ay - by) > 0.012 { return ay > by }
        return a.boundingBox.minX < b.boundingBox.minX
    }
    for o in orden {
        guard let top = o.topCandidates(1).first else { continue }
        print(top.string)
    }
    print("")
}

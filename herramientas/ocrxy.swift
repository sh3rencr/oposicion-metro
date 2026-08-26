import Foundation
import PDFKit
import Vision
import CoreGraphics
import AppKit

let args = CommandLine.arguments
let doc = PDFDocument(url: URL(fileURLWithPath: args[1]))!
let n = Int(args[2])!
let escala: CGFloat = args.count > 3 ? CGFloat(Double(args[3])!) : 4.0
let pag = doc.page(at: n-1)!
let caja = pag.bounds(for: .mediaBox)
let w = Int(caja.width * escala), h = Int(caja.height * escala)
let ctx = CGContext(data: nil, width: w, height: h, bitsPerComponent: 8, bytesPerRow: 0,
                    space: CGColorSpaceCreateDeviceRGB(), bitmapInfo: CGImageAlphaInfo.noneSkipLast.rawValue)!
ctx.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1))
ctx.fill(CGRect(x: 0, y: 0, width: w, height: h))
ctx.scaleBy(x: escala, y: escala)
ctx.translateBy(x: -caja.origin.x, y: -caja.origin.y)
pag.draw(with: .mediaBox, to: ctx)
let img = ctx.makeImage()!
let req = VNRecognizeTextRequest()
req.recognitionLevel = .accurate
req.recognitionLanguages = ["es-ES"]
req.usesLanguageCorrection = true
try! VNImageRequestHandler(cgImage: img, options: [:]).perform([req])
for o in req.results! {
    guard let t = o.topCandidates(1).first else { continue }
    let b = o.boundingBox
    // y=1 arriba, x=0 izquierda
    print(String(format: "y=%.3f x=%.3f  |  %@", 1 - b.midY, b.minX, t.string))
}

import Foundation
import PDFKit
import CoreGraphics
import AppKit
// render <pdf> <pág> <salida.png> [escala] [recorte: x0,y0,x1,y1 en fracción de página]
let a = CommandLine.arguments
let doc = PDFDocument(url: URL(fileURLWithPath: a[1]))!
let pag = doc.page(at: Int(a[2])!-1)!
let salida = a[3]
let escala: CGFloat = a.count > 4 ? CGFloat(Double(a[4])!) : 3.0
var rec = CGRect(x: 0, y: 0, width: 1, height: 1)
if a.count > 5 {
    let p = a[5].split(separator: ",").map { CGFloat(Double($0)!) }
    rec = CGRect(x: p[0], y: p[1], width: p[2]-p[0], height: p[3]-p[1])
}
let caja = pag.bounds(for: .mediaBox)
// recorte en coordenadas de página (y hacia abajo desde arriba)
let sub = CGRect(x: caja.minX + rec.minX*caja.width,
                 y: caja.minY + (1 - rec.maxY)*caja.height,
                 width: rec.width*caja.width, height: rec.height*caja.height)
let w = Int(sub.width*escala), h = Int(sub.height*escala)
let ctx = CGContext(data: nil, width: w, height: h, bitsPerComponent: 8, bytesPerRow: 0,
                    space: CGColorSpaceCreateDeviceRGB(), bitmapInfo: CGImageAlphaInfo.noneSkipLast.rawValue)!
ctx.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1))
ctx.fill(CGRect(x: 0, y: 0, width: w, height: h))
ctx.scaleBy(x: escala, y: escala)
ctx.translateBy(x: -sub.origin.x, y: -sub.origin.y)
pag.draw(with: .mediaBox, to: ctx)
let img = ctx.makeImage()!
let rep = NSBitmapImageRep(cgImage: img)
try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: salida))
print("\(salida)  \(w)x\(h)")

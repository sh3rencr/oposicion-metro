# Herramientas de extracción (para ti)

Tres utilidades en Swift para sacar contenido de los PDF del temario. Usan **PDFKit y Vision**
de macOS: no hay que instalar nada, solo tener Xcode.

```bash
cd ~/Code/oposicion-metro/herramientas
swiftc -O -o ocr ocr.swift && swiftc -O -o ocrxy ocrxy.swift && swiftc -O -o render render.swift
```

| Herramienta | Para qué | Uso |
|---|---|---|
| `ocr` | Leer texto de páginas que son imagen | `./ocr fichero.pdf 17 18 3.5` |
| `ocrxy` | Igual, pero con coordenadas: sirve para emparejar cifras con sus etiquetas en una infografía | `./ocrxy fichero.pdf 17 4` |
| `render` | Convertir una página, o un recorte, en PNG para mirarla | `./render fichero.pdf 17 salida.png 3 "0.1,0.28,0.92,0.83"` |

El recorte va en fracciones de página: `x0,y0,x1,y1`, con el origen arriba a la izquierda.

**Por qué importa `ocrxy`:** en una infografía a tres columnas, el OCR normal devuelve los números
y las etiquetas en bloques separados y es fácil emparejarlos mal. Con las coordenadas se agrupan
por columna y se evita inventar un dato.

**Regla de trabajo:** ninguna cifra sacada por OCR entra en la app sin haberse leído a **dos o
tres resoluciones distintas** y haberse comprobado después **a la vista** con `render`. Así se
detectó que los coches eran 2.067 y no 2.007.

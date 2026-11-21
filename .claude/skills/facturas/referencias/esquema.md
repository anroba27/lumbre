# Formato de datos.js

El informe (`informe.html`) lee este archivo y calcula él todos los totales y gráficos. Tú solo escribes las filas y los hallazgos.

```js
window.FACTURAS = {
  version: 1,
  titular: "Elena Robles",            // de quién son los papeles, si sale en ellos; si no, ""
  carpeta_origen: "Facturas sin ordenar",
  carpeta_destino: "Facturas ordenadas",
  generado: "2026-11-21T17:05",       // fecha y hora local, ISO sin zona
  documentos: [
    {
      id: "D01",                                   // D01, D02… en el orden en que se listan
      original: "cosas viejas/Scan_0034.pdf",      // ruta relativa a carpeta_origen, con subcarpetas
      nuevo: "01 Casa/2026-03-14 Eléctrica del Tajo 84,20 €.pdf",  // ruta relativa a carpeta_destino
      formato: "pdf",                              // pdf | imagen | correo | texto | web | hoja | otro
      tipo: "gasto",                               // gasto | ingreso | duplicado | no_factura | ilegible
      categoria: "casa",                           // una clave de la tabla; "ingreso" o "revisar" según el tipo
      proveedor: "Eléctrica del Tajo",             // quien emite; en un ingreso, el cliente al que factura Elena
      nif: "B12345678",                            // "" si no aparece
      numero: "ET-2026-0314",                      // nº de factura; "" si no hay
      fecha: "2026-03-14",                         // fecha de emisión AAAA-MM-DD; "" si no se lee
      concepto: "Luz, febrero",                    // corto, máximo 6 palabras
      base: 69.59,                                 // números con punto decimal, en euros; null si no aparece
      iva_pct: 21,                                 // 21, 10, 4, 0; null si no aparece
      iva: 14.61,                                  // cuota de IVA; null si no aparece
      total: 84.20,                                // lo pagado (o cobrado); null solo si es ilegible o no es factura
      recurrente: true,                            // se repite cada mes, bimestre o año con el mismo proveedor
      duplicado_de: null,                          // id del documento original si tipo = "duplicado"
      nota: ""                                     // una línea si hay algo raro («El IVA no cuadra: 69,59 + 14,61 ≠ 85,20»)
    }
  ],
  hallazgos: [
    {
      tipo: "duplicado",            // duplicado | subida | solape | error | ahorro | aviso
      titulo: "El gimnasio te cobró dos veces en mayo",   // máximo 9 palabras
      texto: "Dos facturas de Gimnasio Ápice del 3 y el 5 de mayo, con números distintos y el mismo importe.",  // 1 o 2 frases, hechos, sin consejos financieros
      importe: 39.90,               // euros en juego; null si no aplica
      ids: ["D17", "D18"]           // documentos en los que se apoya
    }
  ]
};
```

Reglas del dato:
- **Una fila por archivo** de la carpeta de origen, también los que no son factura (van con `tipo` `no_factura` y `categoria` `revisar`). Así el «antes» y el «después» suman lo mismo.
- Los duplicados (la misma factura dos veces, con otro nombre o en otro formato) van con `tipo: "duplicado"`, `categoria: "revisar"`, `duplicado_de` y los mismos importes: **la plantilla no los suma**. El original va con su tipo normal.
- La plantilla calcula todos los totales, medias y gráficos a partir de `documentos`: solo suma lo que tiene `tipo` `gasto` (gastos) o `ingreso` (ingresos). Claude no escribe totales en ningún otro sitio.
- Los importes de un abono (factura rectificativa) van en negativo y con `tipo: "gasto"`.
- `hallazgos`: entre 3 y 6, ordenados de más a menos importante.

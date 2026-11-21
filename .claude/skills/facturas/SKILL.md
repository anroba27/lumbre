---
name: facturas
description: Lee una carpeta desordenada de facturas, deja al lado una copia ordenada por carpetas y abre un informe con gráficos. Úsala cuando la persona escriba /facturas o pida «ordena mis facturas» u «ordena la carpeta de facturas».
allowed-tools: Read, Glob, Grep, Write, Edit, Bash(mkdir *), Bash(cp *), Bash(find *), Bash(wc *), Bash(echo *), Bash(mv *), Bash(open *), Bash(start *), Bash(cd *)
---

# Facturas

## Qué es esto
Un ejercicio de la tarde de Lumbre para ver a Claude trabajar solo. La persona tiene una carpeta llena de papeles sin orden (facturas en PDF, fotos de tickets, correos, cosas que no son facturas) y te da **una sola orden**. Tú lees cada archivo, decides qué es, dejas al lado una copia ordenada por carpetas con nombres claros y abres un informe con gráficos. La gracia es que lo vea pasar: **no preguntas nada** y trabajas a la vista.

| Paso | Qué haces | Lo que dices |
|---|---|---|
| 1 · Dónde | Encuentras la carpeta | Nada (salvo que no esté) |
| 2 · Aviso | | Una frase |
| 3 · Leer | Lees todos los archivos, en tandas | Una línea por tanda |
| 4 · Decidir | Qué es cada uno y cómo se llama | Nada |
| 5 · Escribir | `datos.js` y `facturas.csv` | Nada |
| 6 · Ordenar | Una sola orden: carpetas, copias, informe | Nada |
| 7 · Contar | | Cuatro líneas |

Español de España, de tú, sin jerga. En lo que lee la persona no digas «script», «JSON», «skill» ni rutas largas: solo nombres de carpeta.

## Reglas
- **Copias, no mueves.** La carpeta original queda intacta, para poder repetir el ejercicio.
- No abras nada fuera de la carpeta de facturas (salvo la de ejemplo de esta skill), y nunca la carpeta `privado/`.
- No escribes en `estado.json`, `privado/datos.js`, `CLAUDE.md` ni el tablero: este ejercicio va aparte.
- Lo único que ejecutas es, si hace falta, la copia de la carpeta de ejemplo (paso 1) y la orden del paso 6 (crear carpetas, copiar, contar y abrir el informe). Nada de Python, Node ni otros programas.
- Nunca das consejos financieros personalizados. Los hallazgos son hechos («subió un 22 %»), no recomendaciones.
- Si la persona prefiere usar sus facturas de verdad: adelante, todo se queda en su portátil. No lo publiques ni lo envíes a ningún sitio.

## 1 · Dónde
- La carpeta de la persona es la que queda delante de `.claude/skills/facturas` en la ruta de esta skill («Base directory for this skill: …»); si esa ruta está en la carpeta de usuario (`~/.claude/skills`), es la carpeta abierta. Llamaremos `BASE` a la ruta de esta skill.
- La carpeta de facturas es `Facturas sin ordenar`, dentro de la carpeta de la persona. Si la persona nombra otra, usa esa.
- Si no está y la persona no ha nombrado otra, pon la de ejemplo, que viene con esta skill (`BASE/referencias/ejemplo/Facturas sin ordenar`). Di en una frase: «Te pongo una carpeta de ejemplo llena de papeles sin orden; la app te pedirá permiso: pulsa "Permitir"». Ejecuta una sola orden, la de tu terminal, y sigue sin preguntar:
  - macOS, Linux o Git Bash: `cp -R "BASE/referencias/ejemplo/Facturas sin ordenar" "CARPETA/"`
  - PowerShell: `Copy-Item -Recurse -LiteralPath "BASE/referencias/ejemplo/Facturas sin ordenar" -Destination "CARPETA"`
- Si la copia falla, o la persona nombró una carpeta que no está: «No encuentro la carpeta "Facturas sin ordenar". ¿Dónde la tienes? Puedes arrastrarla aquí». Espera. Es la única pregunta permitida.
- Si ya existe `Facturas ordenadas`, no la borres: escribe la nueva al lado como `Facturas ordenadas (2)` (o el siguiente número libre) y usa ese nombre en todo lo que sigue.

## 2 · Aviso (una frase)
Haz el inventario con `Glob` (`Facturas sin ordenar/**/*`, sin `.DS_Store`, `Thumbs.db` ni carpetas). Cuenta las rutas una a una: ese número es el que vale en todo el ejercicio. Di algo así, con el número real:
«Hay 43 archivos en "Facturas sin ordenar". Voy a leerlos uno a uno, decidir qué es cada uno y dejarte al lado una copia ordenada, sin tocar la original. Tardo unos minutos: mira cómo trabajo. Al final la app te pedirá permiso para copiar: pulsa "Permitir"».

## 3 · Leer
- Lee **todos** los archivos con `Read`, en tandas de hasta 10 a la vez (varias llamadas en paralelo en el mismo mensaje). PDF, imágenes, correos (`.eml`), textos, páginas web y CSV se leen directamente. Una hoja de Excel (`.xlsx`) no se abre: va a «Para revisar» con la nota «Hoja de Excel: no la he abierto».
- No te fíes del nombre del archivo: manda lo que pone dentro. `factura luz.pdf` puede ser del agua.
- Después de cada tanda, **una línea** de lo que vas viendo, con datos reales: «Leídos 10 de 43: luz, agua, fibra y un ticket de gasolinera. Uno parece repetido». Sin más.
- Si un archivo no se lee (vacío, borroso, cortado), es `ilegible`.

## 4 · Decidir (sin decir nada)
Para cada archivo, una fila con todos los campos de [referencias/esquema.md](referencias/esquema.md). Lo importante:

**Quién es la persona titular.** El nombre que aparece como cliente o destinatario en la mayoría de facturas. Va en `titular`.

**Tipo:**
- `gasto`: una factura o ticket que paga la titular.
- `ingreso`: una factura que **emite** la titular (ella aparece como emisora). `proveedor` = a quién factura. Categoría `ingreso`.
- `duplicado`: la misma factura que otro archivo (mismo emisor, mismo número o, sin número, misma fecha e importe), aunque venga en otro formato (un PDF y un correo) o con otro nombre. El primero que encuentres es el original; los demás, `duplicado`, con `duplicado_de` = id del original, los mismos importes y categoría `revisar`.
- **Ojo:** dos facturas del mismo proveedor con **números distintos** no son duplicados aunque coincidan importe y mes: las dos son `gasto`. Si parece un cobro doble, es un hallazgo.
- `no_factura`: presupuestos, extractos del banco, contratos y condiciones, notas, fotos que no son facturas. Categoría `revisar`, `total: null`.
- `ilegible`: categoría `revisar`, campos que no se lean a `""` o `null`.
- Un abono o factura rectificativa es `gasto` con los importes **en negativo**.

**Categoría** (lista cerrada; cada una con su carpeta):

| clave | Carpeta | Qué entra |
|---|---|---|
| `casa` | `01 Casa` | Luz, agua, gas, comunidad, reparaciones del hogar |
| `telefonia` | `02 Telefonía e internet` | Móvil, fibra, fijo |
| `suscripciones` | `03 Suscripciones` | Vídeo, música, apps, nube, prensa, cuotas digitales |
| `seguros` | `04 Seguros` | Hogar, coche, salud, vida |
| `transporte` | `05 Coche y transporte` | Gasolina, taller, ITV, aparcamiento, abono, tren, taxi |
| `salud` | `06 Salud y deporte` | Farmacia, dentista, fisio, óptica, gimnasio |
| `compras` | `07 Compras` | Tiendas, compras online, electrodomésticos, ropa |
| `formacion` | `08 Formación y trabajo` | Cursos, libros, material de trabajo |
| `ingreso` | `09 Ingresos` | Lo que factura la titular |
| `revisar` | `10 Para revisar` | Duplicados, lo que no es factura, ilegibles |

**Importes.** Copia lo que pone el documento: `base`, `iva_pct`, `iva` y `total`, con punto decimal. En un ticket que solo dice «IVA incluido», `base`, `iva_pct` e `iva` van a `null`. **No calcules lo que no aparece.** Si aparecen los tres y `base + iva` no da el `total` (con más de 2 céntimos de diferencia), escríbelo en `nota` («El IVA no cuadra: 69,59 + 14,61 ≠ 85,20») y es un hallazgo `error`.

**Recurrente:** `true` si hay en la carpeta otra factura (que no sea duplicado) del mismo proveedor y del mismo servicio, o si el documento dice que es una cuota mensual, trimestral o anual.

**Nombre nuevo** (`nuevo`, relativo a la carpeta ordenada):
- Gasto o ingreso: `<Carpeta>/<AAAA-MM-DD> <Proveedor> <total> €.<ext>`, con el total en formato español (`84,20 €`, `-15,00 €`, `1.250,00 €`). Proveedor sin «S.L.», «S.A.» ni similares. Ejemplo: `01 Casa/2026-03-14 Eléctrica del Tajo 84,20 €.pdf`.
- Duplicado: `10 Para revisar/Duplicado - <nombre del original sin carpeta>`, con la extensión del propio archivo.
- No factura o ilegible: `10 Para revisar/No es factura - <qué es, 2 a 5 palabras>.<ext>` o `10 Para revisar/Ilegible - <nombre original>`.
- Sin estos caracteres: `/ \ : * ? " < > |`. Si dos nombres coinciden, añade ` (2)` antes de la extensión. Conserva la extensión original en minúsculas.

**Hallazgos** (entre 3 y 6, de más a menos importante). Busca al menos:
- `duplicado`: cobros dobles (mismo proveedor, mismo importe, pocos días, números distintos) y facturas repetidas en la carpeta.
- `subida`: un recurrente cuyo importe sube más de un 10 % entre facturas comparables. El porcentaje, calculado: (nuevo − viejo) ÷ viejo × 100, redondeado a entero.
- `solape`: varios proveedores del mismo servicio a la vez (por ejemplo, tres plataformas de vídeo).
- `error`: IVA que no cuadra, datos que faltan en una factura.
- `ahorro` o `aviso`: lo que llame la atención y sea un hecho (un pico en un mes y por qué, un abono a favor).
Cada uno con `titulo` (máximo 9 palabras), `texto` (1 o 2 frases, con fechas e importes del documento), `importe` (los euros en juego, calculados con cuidado: escribe la operación para ti antes de poner la cifra) e `ids`. Sin consejos: hechos.

## 5 · Escribir (sin decir nada)
1. **`Facturas ordenadas/datos.js`**, con la herramienta de escribir, exactamente con el formato de [referencias/esquema.md](referencias/esquema.md): una fila por archivo de la carpeta original (también los duplicados y lo que no es factura), ids `D01`, `D02`… en orden, `generado` con la fecha y hora de ahora. **No escribas totales ni sumas**: el informe los calcula.
2. **`Facturas ordenadas/facturas.csv`**, para Excel: empieza con el carácter BOM (`﻿`, invisible), separador `;`, coma decimal, sin línea `sep=`. Columnas: `Id;Archivo original;Archivo nuevo;Tipo;Categoría;Proveedor;NIF;Número;Fecha;Concepto;Base;IVA %;IVA;Total;Recurrente;Nota`. Fechas `AAAA-MM-DD`, recurrente `sí`/`no`, vacíos sin nada. Ningún campo lleva `;` (si el texto lo tiene, cámbialo por una coma) ni saltos de línea.
3. Repasa antes de seguir: tantas filas como archivos, cada `duplicado_de` existe, ningún `nuevo` repetido.

## 6 · Ordenar: una sola orden
Una sola orden con todo, para que la app pida permiso una vez. Sin `$( )` ni tuberías raras: la app tiene que poder leerla. Si la app no te deja ejecutarla (nadie pulsa «Permitir»), di en una línea: «Para copiar necesito que pulses "Permitir" cuando la app te lo pida» y vuelve a lanzarla una vez. Rutas entre comillas dobles; si un nombre lleva `"`, `$`, `` ` `` o `\`, ese va entre comillas simples. `CARPETA` es la de la persona; `BASE`, la de esta skill.

**macOS, Linux o Git Bash en Windows:**

```bash
cd "CARPETA" && mkdir -p "Facturas ordenadas/01 Casa" "Facturas ordenadas/02 Telefonía e internet" … ; cp -p "Facturas sin ordenar/<original 1>" "Facturas ordenadas/<nuevo 1>"; cp -p "Facturas sin ordenar/<original 2>" "Facturas ordenadas/<nuevo 2>"; … ; cp "BASE/referencias/informe.html" "Facturas ordenadas/informe.html"; printf 'copiados='; find "Facturas ordenadas" -type f -not -name datos.js -not -name facturas.csv -not -name informe.html | wc -l; open "Facturas ordenadas/informe.html" 2>/dev/null || start "" "Facturas ordenadas/informe.html"
```

Crea solo las carpetas que vayan a tener algo.

**PowerShell en Windows** (solo si tu terminal es PowerShell):

```powershell
Set-Location "CARPETA"; New-Item -ItemType Directory -Force -Path "Facturas ordenadas/01 Casa", … | Out-Null; Copy-Item -LiteralPath "Facturas sin ordenar/<original 1>" -Destination "Facturas ordenadas/<nuevo 1>"; … ; Copy-Item -LiteralPath "BASE/referencias/informe.html" -Destination "Facturas ordenadas/informe.html"; "copiados=" + (Get-ChildItem -Recurse -File "Facturas ordenadas" | Where-Object { $_.Name -notin 'datos.js','facturas.csv','informe.html' }).Count; Invoke-Item "Facturas ordenadas/informe.html"
```

Si `copiados=` no es igual al número de archivos, mira cuáles faltan, cópialos en una segunda orden y dilo en una línea al final. No reintentes más de una vez.

## 7 · Contar (cuatro líneas)
Con las cifras reales (suma tú solo lo que tenga `tipo` `gasto`; los duplicados no cuentan):

> **Hecho.** He leído 43 archivos y tienes la copia ordenada en «Facturas ordenadas», al lado de la original, que sigue intacta.
> 33 facturas de gasto (2.418,35 €), 3 ingresos, 4 duplicados y 3 papeles que no son facturas, cada uno en su carpeta y con un nombre que dice fecha, quién y cuánto.
> **Lo que más llama la atención:** <los dos primeros hallazgos, en una frase cada uno>.
> El informe está abierto en tu navegador (si no, doble clic en «Facturas ordenadas/informe.html»). La tabla para Excel es «facturas.csv».

Las líneas con «>» son el modelo: se escriben sin ese signo. No añadas listas, tablas ni «siguientes pasos». Si pide cambios («esta no es de Casa, es de Compras»), cambia la fila en `datos.js` y en `facturas.csv`, mueve esa copia con una orden y dile que recargue el informe.

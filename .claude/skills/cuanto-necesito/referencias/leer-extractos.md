# Cómo leer cada extracto

El extracto vive en `privado/extractos/`. Usa **un mes completo**, el último cerrado. Si el archivo trae varios meses, quédate con ese y dilo.

Lo que buscas en cualquier formato: fecha, concepto, importe (con signo, o en dos columnas «cargo» y «abono») y saldo. Y dos datos para la comprobación: el saldo al empezar el mes (el saldo después del primer movimiento menos ese movimiento, o la línea «saldo anterior») y el saldo al acabar.

**Privacidad.** La cabecera suele traer el IBAN, el titular y la dirección. Léelo, no lo repitas y no lo copies a ningún archivo. Tampoco números de tarjeta, de póliza, de recibo o de contrato que salgan en los conceptos, ni nombres de personas (Bizum, transferencias). En la foto van nombres genéricos.

---

## PDF

- Lo lees con la herramienta de lectura, sin instalar nada. Hasta 10 páginas, de una vez.
- Si tiene más páginas, léelo por tramos indicando las páginas (por ejemplo, 1-10 y 11-20). Si aun así no puedes, pide que descargue solo el mes, o el mismo extracto en CSV o Excel.
- Si es una foto escaneada, lo verás como imagen: lee con cuidado los importes y confirma los dudosos.
- Cuidado con los importes partidos en dos líneas y con las líneas de «suma y sigue» o «saldo anterior»: no son movimientos.

## CSV

- Es texto: lo lees directamente.
- Los bancos españoles suelen usar `;` como separador, coma decimal (`-13,99`), punto de miles (`1.250,00`) y fechas `dd/mm/aaaa`.
- Muchos lo guardan en una codificación antigua: las tildes salen como `�` (`PANADER�A`). No pasa nada: entiéndelo y sigue. No intentes convertir el archivo.
- Suele haber unas líneas de cabecera antes de la tabla (banco, cuenta, periodo). La tabla empieza en la fila con «Fecha».
- Si importe y saldo no cuadran fila a fila, revisa si hay columnas «cargo» y «abono» separadas.

## Excel `.xlsx`

La herramienta de lectura no abre un `.xlsx`. Pero un `.xlsx` es un zip de archivos de texto, y el ordenador ya trae con qué abrirlo. **Antes de ejecutar nada**, dile a la persona:

> Para leer tu Excel voy a abrirlo con una orden del sistema (`unzip` en Mac, `tar` en Windows). No instala nada ni cambia el archivo. La app te pedirá permiso: pulsa «Permitir».

Las órdenes sacan cada parte por pantalla, sin escribir nada en el disco. Ejecútalas desde la carpeta `mi-lumbre/` y cambia `ARCHIVO.xlsx` por el nombre real (entre comillas si tiene espacios).

**macOS**
```
unzip -p "privado/extractos/ARCHIVO.xlsx" xl/workbook.xml
unzip -p "privado/extractos/ARCHIVO.xlsx" xl/sharedStrings.xml
unzip -p "privado/extractos/ARCHIVO.xlsx" xl/worksheets/sheet1.xml
```

**Windows 10 u 11**
```
tar -xOf "privado/extractos/ARCHIVO.xlsx" xl/workbook.xml
tar -xOf "privado/extractos/ARCHIVO.xlsx" xl/sharedStrings.xml
tar -xOf "privado/extractos/ARCHIVO.xlsx" xl/worksheets/sheet1.xml
```
- Si `tar` responde que no reconoce el archivo, estás en un `tar` distinto del de Windows (pasa en Git Bash). Usa el de Windows con su ruta completa: `"C:/Windows/System32/tar.exe" -xOf ...`.
- Si tampoco funciona, pide que lo guarde como CSV desde Excel («Guardar como» → «CSV UTF-8») y léelo como CSV.
**Antes de leer la hoja, mira lo que pesa**: `unzip -l "ARCHIVO.xlsx"` (o `tar -tvf "ARCHIVO.xlsx"`) lista lo que hay dentro con su tamaño, y te dice cómo se llama la hoja si no es `sheet1.xml`. **Si la hoja pasa de 28.000 bytes, no la leas así**: la salida se cortaría. Pide el mismo extracto en CSV (o solo el mes). Como orientación, Excel escribe unos 250 bytes por movimiento: caben unos 110 movimientos.

**Cómo se lee lo que sale**
1. `workbook.xml` dice cómo se llaman las hojas, en orden: la primera es `sheet1.xml`, la segunda `sheet2.xml`. Si hay varias, busca la de movimientos.
2. `sharedStrings.xml` es la lista de textos, en orden y empezando en 0: cada `<si><t>…</t></si>` es uno.
3. En la hoja, cada `<row r="12">` es una fila y cada `<c r="C12">` una celda (columna C, fila 12):
   - `t="s"`: el número de `<v>` es la posición del texto en `sharedStrings.xml` (`<v>14</v>` es el texto número 15, contando desde 0).
   - `t="inlineStr"`: el texto va dentro de la celda, en `<is><t>…</t></is>`.
   - `t="str"`: el resultado de una fórmula, en `<v>`.
   - Sin `t`: un número. Los decimales van con punto (`-13.99`). A veces sale con ruido (`-3.6099999999999999`): redondea a dos decimales.
   - Las celdas vacías no aparecen: si en una fila falta la columna D, es que está vacía.
4. **Fechas**: Excel las guarda como número de días. 46296 es el 1 de octubre de 2026; suma o resta días desde ahí (46326 es el 31 de octubre; 46327, el 1 de noviembre). Si la columna dice «Fecha» y ves números de cinco cifras alrededor de 46.000, son fechas.
5. **Comprueba que has leído la hoja entera.** Al principio de la hoja, `<dimension ref="A1:E137"/>` dice cuál es la última fila (aquí, la 137). La última `<row r="…">` que has leído tiene que ser esa, y la salida tiene que acabar en `</worksheet>`. Si no, se ha cortado: pide el mismo extracto en CSV o solo el mes. No ejecutes nada más para trocearla.

Comprobado el 20-nov-2026 en macOS con `unzip` y con `tar` (el mismo `tar` que trae Windows) sobre un extracto ficticio de 133 movimientos escrito con el XML mínimo (25.047 bytes): sale entero. Un archivo guardado por Excel ocupa más por fila (cálculo propio: unos 250 bytes), y de ahí el tope de 28.000 bytes, por debajo de los 30.000 caracteres que, según creemos (sin comprobar en la app de escritorio), muestra como mucho la herramienta de órdenes. En Windows, sin probar.

## Excel antiguo `.xls`

No se puede leer así. Pide que lo abra en Excel y lo guarde como `.xlsx` o como CSV, o que lo descargue del banco en otro formato. Si no puede ahora, seguid con el correo y por categorías, y el extracto queda para el lunes.

## Varias cuentas o tarjetas

Si tiene la nómina en una cuenta y los gastos en otra, lo ideal es un extracto de cada una. Los traspasos entre ellas no son ni entrada ni salida. Si solo trae una, completa la otra de palabra.

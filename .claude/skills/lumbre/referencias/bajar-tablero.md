# Bajar el tablero al día

Se usa **cada vez** que la persona escribe `/lumbre` (primera vez o segunda vuelta), antes de cualquier otra cosa. El tablero (`tablero.html` y `piel.css`) no viene en el zip de inicio: vive en internet y siempre se baja la última versión. Así, un arreglo del tablero llega solo, sin que nadie tenga que hacer nada. (Al abrir un bloque también se baja, pero eso ya lo hace [abrir-bloque.md](abrir-bloque.md) en su misma orden.)

## Datos de la descarga

<!-- @reparto-inicio · lo escribe build/publicacion/construir.mjs; no lo edites a mano -->
- Dirección base: `https://lumbre-bloques.vercel.app`
- Sal: `7ad07c4827018690`
- Dirección del tablero: `https://lumbre-bloques.vercel.app/t/7ad07c4827018690/tablero.zip`
- Dirección de un bloque: `https://lumbre-bloques.vercel.app/b/<palabra>-7ad07c4827018690.zip`
<!-- @reparto-fin -->

Si la dirección base es `PENDIENTE`, no ejecutes nada: sigue con la entrevista y, al final, si no hay `tablero.html` en la carpeta, di que levante la mano.

## 1 · Dónde estás

Sigue [donde-estas.md](donde-estas.md) (si ya lo has hecho en esta conversación, no lo repitas). Si te dice que pares, no ejecutes nada. Si la carpeta de la persona no es la carpeta abierta, pon `cd "<carpeta>" && ` delante de la orden (en PowerShell, `Set-Location "<carpeta>"; `).

## 2 · Avisa en una frase y descarga

Antes de ejecutar nada, di en una sola frase algo así: «Primero bajo tu tablero de internet para tenerlo al día; la app te pedirá permiso para ejecutarlo: pulsa «Permitir»».

Después ejecuta **una sola orden**, la de tu terminal, con la dirección del tablero ya escrita (la de arriba, tal cual). Solo puedes ejecutar esto: `curl`, `unzip` o `tar`, y borrar el zip descargado.

**macOS, Linux o Git Bash en Windows (la terminal normal de Claude):**

```bash
curl -fsSL --connect-timeout 10 --max-time 120 -o .lumbre-tablero.zip "DIRECCION_DEL_TABLERO"; t=$?; if [ $t -eq 0 ]; then unzip -o .lumbre-tablero.zip || /c/Windows/System32/tar.exe -xvf .lumbre-tablero.zip || tar -xvf .lumbre-tablero.zip; fi; rm -f .lumbre-tablero.zip; echo "tablero=$t"
```

**PowerShell en Windows** (solo si tu terminal es PowerShell; ahí `curl` no es curl, por eso va `curl.exe`, y `tar.exe` es el de Windows):

```powershell
curl.exe -fsSL --connect-timeout 10 --max-time 120 -o .lumbre-tablero.zip "DIRECCION_DEL_TABLERO"; $t=$LASTEXITCODE; if ($t -eq 0) { tar.exe -xvf .lumbre-tablero.zip }; Remove-Item -ErrorAction SilentlyContinue .lumbre-tablero.zip; "tablero=$t"
```

Si `curl` falla no se descomprime nada: el tablero que hubiera en la carpeta se queda como estaba.

## 3 · Lee el resultado (sin contarlo, salvo que falle)

| `tablero=` | Qué pasa | Qué haces |
|---|---|---|
| `0` y la salida enseña `tablero.html` y `piel.css` | Tablero al día | No digas nada más que «Listo, ya tienes tu tablero» y sigue con lo que tocaba |
| Otro número, y en la carpeta **ya hay** `tablero.html` | No se ha podido bajar la versión nueva | Sigue con el que hay. No lo cuentes como un problema |
| Otro número, y en la carpeta **no hay** `tablero.html` | Sin tablero (casi siempre, sin internet) | Sigue con lo que tocaba y, al terminar, di: «No he podido bajar tu tablero. Levanta la mano: Jose o un facilitador te lo pasa en una memoria USB» |

No reintentes más de una vez. No intentes crear ni arreglar el tablero a mano: no se genera, se descarga.

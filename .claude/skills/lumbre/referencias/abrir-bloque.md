# Abrir un bloque con su contraseña

Se usa cuando la persona escribe `/lumbre abrir <contraseña>` o pide «abre el bloque <contraseña>» (o algo parecido: «abre <palabra>», «la contraseña es…»). Al empezar cada bloque, quien lo conduce dice la contraseña en voz alta y la escribe en la pizarra. Tú la usas para descargar el bloque desde internet y dejarlo en su carpeta. En la misma orden bajas también el tablero al día (`tablero.html` y `piel.css`), que vive aparte: así cualquier arreglo del tablero llega solo.

No sabes qué bloque abre cada contraseña ni lo intentes adivinar. Lo dice el propio bloque cuando llega.

## Datos de la descarga

<!-- @reparto-inicio · lo escribe build/publicacion/construir.mjs; no lo edites a mano -->
- Dirección base: `https://lumbre-bloques.vercel.app`
- Sal: `7ad07c4827018690`
- Dirección del tablero: `https://lumbre-bloques.vercel.app/t/7ad07c4827018690/tablero.zip`
- Dirección de un bloque: `https://lumbre-bloques.vercel.app/b/<palabra>-7ad07c4827018690.zip`
<!-- @reparto-fin -->

Si la dirección base es `PENDIENTE`, no ejecutes nada y di: «La descarga de bloques todavía no está activada en tu portátil. Levanta la mano y que te ayude Jose». Fin.

## 1 · La palabra (sin decir nada)

- Quédate solo con la contraseña: quita «abrir», «abre», «el bloque», «la contraseña es» y similares.
- Normalízala: minúsculas, sin tildes ni diéresis (á→a, é→e, í→i, ó→o, ú→u, ü→u, ñ→n) y sin espacios.
- Tiene que quedar **solo con letras de la a a la z**. Si queda vacía o con cualquier otro carácter (números, guiones, barras, comillas, puntos…), no ejecutes nada y di: «Esa contraseña no me sirve tal cual. Escríbemela como está en la pizarra, sin nada más». Así nunca llega a la terminal algo que no sea una palabra.

Ejemplos inventados: «/lumbre abrir Alerce» → `alerce`. «abre el bloque Abedúl» → `abedul`.

## 2 · Dónde estás

Sigue [donde-estas.md](donde-estas.md) (si ya lo has hecho en esta conversación, no lo repitas). Si te dice que pares, no ejecutes nada. Si la carpeta de la persona no es la carpeta abierta, pon `cd "<carpeta>" && ` delante de la orden (en PowerShell, `Set-Location "<carpeta>"; `), y en los pasos 5 y 6 usa rutas completas dentro de esa carpeta.

## 3 · Avisa en una frase y descarga

Antes de ejecutar nada, di en una sola frase algo así: «Voy a descargar ese bloque de internet y colocarlo en tu carpeta, y de paso tu tablero al día; la app te pedirá permiso para ejecutarlo: pulsa «Permitir»».

Después ejecuta **una sola orden**, la de tu terminal, con las dos direcciones ya escritas: la del bloque (`BLOQUE` = dirección base + `/b/` + palabra + `-` + sal + `.zip`) y la del tablero (`TABLERO`, tal cual arriba). Estos son los únicos programas que puedes ejecutar en Lumbre: `curl`, `unzip` o `tar`, y borrar los zips descargados.

**macOS, Linux o Git Bash en Windows (la terminal normal de Claude):**

```bash
curl -fsSL --connect-timeout 10 --max-time 120 -o .lumbre-bloque.zip "BLOQUE"; c=$?; if [ $c -eq 0 ]; then unzip -o .lumbre-bloque.zip || /c/Windows/System32/tar.exe -xvf .lumbre-bloque.zip || tar -xvf .lumbre-bloque.zip; fi; rm -f .lumbre-bloque.zip; curl -fsSL --connect-timeout 10 --max-time 120 -o .lumbre-tablero.zip "TABLERO"; t=$?; if [ $t -eq 0 ]; then unzip -o .lumbre-tablero.zip || /c/Windows/System32/tar.exe -xvf .lumbre-tablero.zip || tar -xvf .lumbre-tablero.zip; fi; rm -f .lumbre-tablero.zip; echo "curl=$c tablero=$t"
```

**PowerShell en Windows** (solo si tu terminal es PowerShell; ahí `curl` no es curl, por eso va `curl.exe`, y `tar.exe` es el de Windows):

```powershell
curl.exe -fsSL --connect-timeout 10 --max-time 120 -o .lumbre-bloque.zip "BLOQUE"; $c=$LASTEXITCODE; if ($c -eq 0) { tar.exe -xvf .lumbre-bloque.zip }; Remove-Item -ErrorAction SilentlyContinue .lumbre-bloque.zip; curl.exe -fsSL --connect-timeout 10 --max-time 120 -o .lumbre-tablero.zip "TABLERO"; $t=$LASTEXITCODE; if ($t -eq 0) { tar.exe -xvf .lumbre-tablero.zip }; Remove-Item -ErrorAction SilentlyContinue .lumbre-tablero.zip; "curl=$c tablero=$t"
```

## 4 · Lee el resultado

Mira el número de `curl=` (el bloque). El de `tablero=` va aparte y **nunca** cambia lo que dices del bloque: con `tablero=0` el tablero ya está al día; con otro número, si ya había `tablero.html` en la carpeta, sigue con el que hay y no digas nada; si no lo había, añade al final: «No he podido bajar tu tablero; levanta la mano y te lo pasan en una memoria USB».

| `curl=` | Qué pasa | Qué dices |
|---|---|---|
| `0` y la salida enseña archivos dentro de `.claude/skills/` | Bloque descargado y colocado | Sigue al paso 5 |
| `22` o `56` | La contraseña no corresponde a ningún bloque (todavía). Con HTTP/2, algunas versiones de curl dan `56` en vez de `22` ante un 404 (comprobado contra Vercel el 21-nov) | «Esa contraseña todavía no abre nada; compruébala con Pablo o Jose. Si estás seguro de que es la buena, levanta la mano». Fin |
| `6`, `7`, `28` o `35` | No hay internet o va muy lento | «No llego a internet. Levanta la mano: Jose o un facilitador te lo pasa en una memoria USB». Fin |
| Cualquier otro, o `0` sin que se haya descomprimido nada | Algo ha fallado | «Algo ha fallado al colocar el bloque. Levanta la mano y que te ayude Jose». Fin |

No reintentes por tu cuenta más de una vez, y nunca con otra palabra que no haya escrito la persona.

## 5 · Qué ha llegado (sin decir nada)

En la salida verás la carpeta nueva: `.claude/skills/<nombre>/`. Lee `.claude/skills/<nombre>/bloque.json`. Trae:

```json
{ "bloque": "nombre_del_paso", "skill": "nombre-del-paso", "provisional": false }
```

- `bloque`: la clave del paso en el tablero (con guion bajo).
- `skill`: la carpeta de la skill y su orden (`/<skill>`).
- `provisional`: `true` si ese paso todavía no está listo.

Los `tablero.html` y `piel.css` que aparecen en la salida son el tablero al día: ya están colocados, no hagas nada con ellos.

## 6 · Apunta el bloque en el tablero

En `privado/datos.js`, añade `bloque` a la lista `abiertos`, para que el tablero lo abra sin volver a teclear la contraseña.

- Si `privado/datos.js` existe: léelo entero, añade la clave a `abiertos` **solo si no está ya** y cambia `actualizado` a la fecha y hora de ahora. No toques nada más: el resto es de otros pasos.
- Si no existe (la persona aún no ha hecho la entrevista): crea la carpeta `privado/` si hace falta y copia **literalmente** [esqueleto-datos.js](esqueleto-datos.js); cambia solo `actualizado` y pon `abiertos: ["lumbre", "<bloque>"]`. El nombre se queda vacío: lo pondrá la entrevista.
- Tiene que seguir siendo JavaScript válido que empieza por `window.LUMBRE = {` y acaba en `};`. Comprueba comas y comillas.

## 7 · Empieza el bloque

- Di en una línea: «Listo: ya tienes el bloque en tu carpeta. Recarga el tablero (⌘R en Mac, Ctrl+R en Windows)». Nada sobre de qué va.
- Si `skill` es `lumbre`: la skill ya está al día. Si en la carpeta no hay `CLAUDE.md` con nombre, empieza la entrevista de [SKILL.md](../SKILL.md) (sin volver a bajar el tablero: ya lo has hecho); si lo hay, di que ya está todo en orden y termina.
- Si no: lee entero `.claude/skills/<skill>/SKILL.md` y sus referencias cuando las pida, y **síguelo desde el principio en esta misma conversación**, como si la persona hubiera escrito `/<skill>`. No le pidas que reinicie nada. Puedes decirle que la próxima vez le basta con escribir `/<skill>`.
- Si `provisional` es `true`: haz solo lo que diga ese `SKILL.md` (un aviso) y termina.

## Si vuelve a abrir un bloque que ya tenía

Se descarga otra vez y sustituye a la versión anterior (puede traer arreglos). En `abiertos` no se repite. Después, pregúntale si quiere empezar ese paso ahora o solo quería tenerlo al día.

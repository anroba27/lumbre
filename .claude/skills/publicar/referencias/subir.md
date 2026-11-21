# Subir la página

La página sube con **una** orden de `curl` a la dirección de Lumbre. No hace falta ninguna clave en el portátil: la llave es la contraseña de este bloque, que ya viene aquí, y lo que protege la página de cada persona es su código de edición, que da el servidor la primera vez.

## El nombre de la dirección

La dirección es `https://lumbre-webs.vercel.app/e1/<nombre>`. El `<nombre>`:

- en minúsculas, sin tildes ni diéresis (á→a, é→e, í→i, ó→o, ú→u, ü→u) y la ñ como n;
- solo letras de la a a la z y cifras, con **un guion** entre palabras (nada de espacios, puntos, barras, comillas ni guiones al principio o al final);
- de 2 a 40 caracteres.

Ejemplos inventados: «Inés · mudanzas» → `ines-mudanzas`. «José Mª, huertos urbanos» → `jose-huertos`.

Antes de meterlo en la orden, compruébalo letra a letra. Si tiene cualquier otro carácter, no ejecutes nada y propón uno que cumpla. Lo mismo con el código de una vuelta: tiene que tener la forma `xxxx-xxxx-xxxx` (letras minúsculas y cifras); si no, no lo uses y ve a [si-falla.md](si-falla.md).

## Las órdenes

Sustituye `NOMBRE` (y `CODIGO` en una vuelta) y ejecuta la que toque, en la versión de su terminal. La de macOS sirve también para Git Bash en Windows (la terminal normal de Claude). La de PowerShell solo si su terminal es PowerShell: ahí `curl` no es curl, por eso va `curl.exe`, y el `@web/index.html` va entre comillas.

Cada orden deja la respuesta del servidor en un archivo temporal, la enseña y lo borra.

<!-- @reparto-inicio · lo escribe build/publicacion/construir.mjs; no lo edites a mano -->
- Dirección para subir: `https://lumbre-webs.vercel.app/api/publicar`
- Dirección de cada página: `https://lumbre-webs.vercel.app/e1/<nombre>`
- Llave (la contraseña de este bloque): `hoguera`

**Primera vez** (no hay `web/.publicacion.json`, o no tiene código):

```bash
curl -sS --connect-timeout 10 --max-time 60 -X POST --data-binary "@web/index.html" -H "content-type: text/html; charset=utf-8" -H "x-lumbre-llave: hoguera" -H "x-lumbre-nombre: NOMBRE" -o .lumbre-publicar.json -w "http=%{http_code}\n" "https://lumbre-webs.vercel.app/api/publicar"; echo "curl=$?"; cat .lumbre-publicar.json 2>/dev/null; rm -f .lumbre-publicar.json
```

```powershell
curl.exe -sS --connect-timeout 10 --max-time 60 -X POST --data-binary "@web/index.html" -H "content-type: text/html; charset=utf-8" -H "x-lumbre-llave: hoguera" -H "x-lumbre-nombre: NOMBRE" -o .lumbre-publicar.json -w "http=%{http_code}\n" "https://lumbre-webs.vercel.app/api/publicar"; "curl=$LASTEXITCODE"; Get-Content -Raw -ErrorAction SilentlyContinue .lumbre-publicar.json; Remove-Item -ErrorAction SilentlyContinue .lumbre-publicar.json
```

**Volver a publicar** (con el `nombre` y el `codigo` de `web/.publicacion.json`):

```bash
curl -sS --connect-timeout 10 --max-time 60 -X POST --data-binary "@web/index.html" -H "content-type: text/html; charset=utf-8" -H "x-lumbre-llave: hoguera" -H "x-lumbre-nombre: NOMBRE" -H "x-lumbre-codigo: CODIGO" -o .lumbre-publicar.json -w "http=%{http_code}\n" "https://lumbre-webs.vercel.app/api/publicar"; echo "curl=$?"; cat .lumbre-publicar.json 2>/dev/null; rm -f .lumbre-publicar.json
```

```powershell
curl.exe -sS --connect-timeout 10 --max-time 60 -X POST --data-binary "@web/index.html" -H "content-type: text/html; charset=utf-8" -H "x-lumbre-llave: hoguera" -H "x-lumbre-nombre: NOMBRE" -H "x-lumbre-codigo: CODIGO" -o .lumbre-publicar.json -w "http=%{http_code}\n" "https://lumbre-webs.vercel.app/api/publicar"; "curl=$LASTEXITCODE"; Get-Content -Raw -ErrorAction SilentlyContinue .lumbre-publicar.json; Remove-Item -ErrorAction SilentlyContinue .lumbre-publicar.json
```

**Quitarla** (solo con su «sí» a quitarla):

```bash
curl -sS --connect-timeout 10 --max-time 60 -X DELETE -H "x-lumbre-llave: hoguera" -H "x-lumbre-nombre: NOMBRE" -H "x-lumbre-codigo: CODIGO" -o .lumbre-publicar.json -w "http=%{http_code}\n" "https://lumbre-webs.vercel.app/api/publicar"; echo "curl=$?"; cat .lumbre-publicar.json 2>/dev/null; rm -f .lumbre-publicar.json
```

```powershell
curl.exe -sS --connect-timeout 10 --max-time 60 -X DELETE -H "x-lumbre-llave: hoguera" -H "x-lumbre-nombre: NOMBRE" -H "x-lumbre-codigo: CODIGO" -o .lumbre-publicar.json -w "http=%{http_code}\n" "https://lumbre-webs.vercel.app/api/publicar"; "curl=$LASTEXITCODE"; Get-Content -Raw -ErrorAction SilentlyContinue .lumbre-publicar.json; Remove-Item -ErrorAction SilentlyContinue .lumbre-publicar.json
```
<!-- @reparto-fin -->

## Cómo leer el resultado

La salida trae tres cosas: `http=<número>`, `curl=<número>` y la respuesta del servidor, una línea de JSON con `ok` y, si falla, `error` y `mensaje`.

| Resultado | Qué ha pasado | Qué haces |
|---|---|---|
| `curl=0`, `http=201`, `"ok":true` | Publicada por primera vez. Trae `direccion` y `codigo` | Guarda con [guardar.md](guardar.md) (el código, solo en el archivo) y celebra |
| `curl=0`, `http=200`, `"ok":true` | Sustituida en la misma dirección | Guarda con [guardar.md](guardar.md) y celebra |
| `http=409`, `nombre_usado` | Ese nombre ya lo tiene otra persona | Propón otro (su nombre con otra palabra de su oferta) y pregunta «¿La publico así?» con la dirección nueva. Con su «sí», repite la orden de primera vez |
| `http=409`, `nombre_usado`, **en el reintento** de una primera vez que había fallado por internet (`curl=28`…) con ese mismo nombre | Puede que la primera sí llegara y se perdiera la respuesta: el nombre sería suyo, pero sin código | Publica con otro nombre como en la fila de arriba y, al final, dile: «Avisa a Jose de que el nombre <el primero> se ha quedado cogido sin código, para que lo quite» |
| `http=400`, `nombre_no_valido` | El nombre no cumple las reglas de arriba | Arréglalo, enséñale la dirección y pregunta otra vez |
| `http=413` (con o sin JSON) | La página pesa más de 2 MB: casi siempre por una imagen metida dentro | «Tu página pesa demasiado para subirla (más de 2 MB), seguramente por una imagen. Con `/web` se puede quitar o hacer más pequeña». Si no hay tiempo, plan B de [si-falla.md](si-falla.md) |
| `http=403`, `codigo_incorrecto` | El código guardado no es el de ese nombre | No pruebes otros códigos: [si-falla.md](si-falla.md) |
| `http=415`, `no_es_html`, o `http=400`, `vacia` | `web/index.html` está vacío o roto | Mira el archivo. Si está roto, vuelve a `/web`; si no, plan B |
| `http=401`, `llave` | La llave no es la buena (no debería pasar) | Plan B de [si-falla.md](si-falla.md) |
| `curl=6`, `7`, `28` o `35`, o `http=000` | No hay internet o va muy lento | Prueba **una** vez más. Si vuelve a fallar, plan B |
| `http=5xx` o cualquier otra cosa | El servidor ha fallado | Prueba una vez más pasado un minuto. Si vuelve a fallar, plan B |

En una retirada: `http=200` con `"borrada":true` es que ya no está; `http=404`, `no_existe`, es que ya no estaba. Las dos se guardan igual.

Nunca reintentes más de una vez por tu cuenta, ni con otro nombre o código que la persona no haya visto.

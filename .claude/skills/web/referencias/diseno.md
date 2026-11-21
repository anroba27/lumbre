# Parte 3 paso a paso: la página con las cuatro skills de diseño

Esto es para ti, no para la persona: a ella no le enseñas órdenes, nombres de skills ni palabras técnicas.

**Las reglas de Lumbre (SKILL.md, parte 3) ganan sobre todo lo que digan las skills de diseño.** Si una guía de diseño pide fotos sustitutas, contactos `.example`, carpetas `assets/`, varias páginas, iconos de marcas, cifras o testimonios: aquí no.

Rutas (desde la raíz de `mi-lumbre/`):
- `TASTE` = `.claude/skills/design-taste-frontend`
- `IMPEC` = `.claude/skills/impeccable`
- `ANIM` = `.claude/skills/animate`
- `EMIL` = `.claude/skills/emil-design-eng`

**Cómo se usan las skills de diseño en este paso:** lees sus archivos con la herramienta de leer y ejecutas sus órdenes a mano, como dice aquí. **No las invoques con la herramienta Skill** (`design-taste-frontend` engancha una revisión automática al terminar cada turno que aquí no queremos, y `animate` y `emil-design-eng`, invocadas a secas, solo contestan una frase en inglés). Nunca les pasas la carpeta entera: siempre `web/` o `web/index.html`. Nunca leen `privado/`.

Todo lo de trabajo va en `web/.taller/` (plan, textos, capturas). Las órdenes de `TASTE` se ejecutan **dentro de `web/`**, en un subshell: `(cd web && node ../.claude/skills/design-taste-frontend/scripts/… )`, para que sus archivos de trabajo (`web/.taste-skill/`) se queden ahí.

Para escribir y cambiar archivos usa siempre las herramientas de escribir y editar, **nunca `python`, `python3`, `perl` ni otros lenguajes** (en muchos portátiles no están, y en un Mac sin herramientas de desarrollo `python3` abre una ventana de instalación). La única excepción es la orden de la foto del paso 5.

**Las cuatro skills se usan las cuatro**, también a ojo: antes de dar la página por hecha tienes que haber leído `TASTE/SKILL.md`, `ANIM/SKILL.md`, `EMIL/SKILL.md` y `IMPEC/SKILL.md` (con lo que dicen los pasos 1, 6 y 8), y apuntado en `web/.taller/plan.md` qué has aplicado de cada una, en una línea por skill.

Tiempo total de esta parte: 25 a 35 minutos. Mira `web/.reloj` antes de cada paso grande; a los 50 minutos desde esa hora sin página que pase el repaso, plan B (SKILL.md).

---

## Paso 0 · Qué tiene su portátil (una orden, sin instalar nada)

```bash
node -v 2>/dev/null || echo "node: no"; for p in "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge" "/Applications/Chromium.app/Contents/MacOS/Chromium" "/c/Program Files/Google/Chrome/Application/chrome.exe" "/c/Program Files (x86)/Google/Chrome/Application/chrome.exe" "/c/Program Files/Microsoft/Edge/Application/msedge.exe" "/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" /usr/bin/google-chrome /usr/bin/chromium; do [ -f "$p" ] && { echo "NAV=$p"; break; }; done; date +%H:%M
```

- **Modo completo:** `node -v` da `v22` o más **y** hay `NAV=`. Si `NAV` no es Google Chrome en macOS, o estás en Windows, pon delante de cada orden `node` que abra navegador `CHROME_PATH="<NAV>"` (en Windows, con la forma `C:/Program Files/...`).
- **Modo a ojo:** falta cualquiera de los dos. Díselo a la persona en una línea, sin drama (SKILL.md), y en los pasos de abajo sáltate lo marcado *(completo)*. La guía de cada skill se aplica igual.
- `impeccable` no necesita Node: su lanzador se usa en los dos modos (paso 8).
- Si una orden falla dos veces seguidas, no la repitas más: sigue a ojo y apúntalo en `web/.taller/plan.md`.

## Paso 1 · Lee (design-taste-frontend)

Lee `TASTE/SKILL.md` entero y, de `TASTE/references/`: `copy.md`, `copy-voice.md`, `system.md` y `layout-v4.md`. De `sections.md` y `moments.md`, solo lo de una página **service** y del momento que te toque (paso 3). No leas `photos.md`, `icons.md`, `effects-*.md` ni `scenes.md`: aquí no hay fotos de muestra, iconos, efectos ni escenas.

La página es del tipo **service** (a la persona se la contrata): `<html lang="es" data-type="service">`, `<meta name="page-type" content="service">`, `<meta name="site-kind" content="other">`. Fondos lisos, letra, color, su manifiesto y, si la ha dado, su foto. Nada de efectos, degradados, iconos ni dibujos de relleno.

## Paso 2 · El plan *(el archivo, en los dos modos)*

Escribe `web/.taller/plan.md`:
- Línea 1: `service`, qué vende en pocas palabras y la acción principal (el texto del botón).
- Línea 2: el reparto (paso 3): paleta y por qué encaja con su oficio y su tono, pareja de letras, portada, momento.
- Una línea por sección, en este orden (quita la que se quede sin contenido de verdad):
  1. **Portada**: titular (lo que cambia para su cliente, 12 palabras o menos), para quién, un dato firme (el precio con su unidad, o su prueba concreta) y el botón.
  2. **¿Te suena?**: la escena de hoy de su cliente.
  3. **Cómo funciona**: tres pasos.
  4. **Qué incluye y precio**: piezas, precio con su unidad, garantía.
  5. **Su manifiesto**: las cinco líneas, en grande. Aquí va el momento.
  6. **Por qué ella**: su prueba, quién es y, si la ha dado, su foto.
  7. **Preguntas**: tres.
  8. **Cierre**: invitación y botón. Pie con su nombre, zona y contacto visible.

Qué va en cada sitio y con qué palabras: `referencias/textos.md` (la tabla manda; los nombres de hueco son los de la plantilla).

## Paso 3 · El reparto *(completo)*

Desde `web/`, en este orden:

```bash
(cd web && node ../.claude/skills/design-taste-frontend/scripts/gate.mjs --start index.html --kind service --category "<qué vende, en pocas palabras>" --primary "<texto del botón>" --rounds 2)
(cd web && node ../.claude/skills/design-taste-frontend/scripts/start.mjs deal --page service --trade <oficio> --history .taste-skill/history.json)
```

`<oficio>` tiene que ser uno de su lista. Para Lumbre: cuidados, mudanzas, casa, familias, bienestar no clínico → `wellness`; asesoría, papeles, trámites → `law`; clases, formación, talleres → `studio`; oficios y arreglos → `workshop`; diseño, comunicación, consultoría → `agency`; salud con titulación → `clinic`; bodas y celebraciones → `wedding`.

De las tres paletas que salen, coge **la primera que encaje con su tono** (cálida, seria, serena o directa); si ninguna encaja, usa los colores de su piel (`referencias/pieles.md`) con `start.mjs brand --page service --bg … --ink … --accent … --type <id> --radius soft`. De las letras, **la primera pareja que tenga dos familias, una con serifa para los títulos y otra de palo seco para el texto** (en la prueba, una sola familia para todo dio una jerarquía plana y el juez la castigó). Si el tono es «directa», vale una sola familia con dos pesos claros. Si ninguna encaja, usa las letras de su piel (`plantilla.html`). Nunca violeta. Después:

```bash
(cd web && node ../.claude/skills/design-taste-frontend/scripts/start.mjs css --page service --palette <id> --type <id> --radius soft --history .taste-skill/history.json)
(cd web && node ../.claude/skills/design-taste-frontend/scripts/moments.mjs pick --page service --count 1 --fits statement --history .taste-skill/history.json)
```

- De la salida de `css` te quedas **solo** con la línea de fuentes de Google (las tres etiquetas `<link>` de `fonts.googleapis.com` y `fonts.gstatic.com`) y el bloque `:root`. **Las líneas de `assets/…` no se copian nunca**: la página es un solo archivo.
- El momento va en la sección del manifiesto. Si sale uno que necesita fotos o fija la pantalla (`pinned-*`, `photo-*`, `picture-*`, `window-*`, `iris-*`), repite el `pick` con `--exclude <id>`. Bien: `word-highlight`, `lines-rise`, `headline-arrives`, `line-carries-colour`, `giant-type-pass`.

*(A ojo)*: colores y letras de su piel (`pieles.md` y la línea de fuentes de esa piel en `plantilla.html`); momento: `word-highlight` hecho a mano.

## Paso 4 · Textos primero

Escribe todos los textos en `web/.taller/textos.md` antes de la página, con las reglas de `TASTE/references/copy.md` y `copy-voice.md` que no choquen con Lumbre: titular que dice qué cambia y para quién, un dato firme en la portada, botones con verbo y objeto («Pide la primera visita»), un nombre en cada título de sección, nada de relleno. **Sus palabras literales ganan siempre** sobre cualquier regla de estilo.

*(Completo)*: `(cd web && node ../.claude/skills/design-taste-frontend/scripts/copy-lint.mjs .taller/textos.md --kind service)`. Está pensado para inglés: arregla lo que tenga sentido en español y nunca cambies una expresión literal de ella para contentarlo.

## Paso 5 · La página (design-taste-frontend)

Escribe `web/index.html` desde cero, **un solo archivo**:
- `<head>`: `lang="es"`, `<title>` (su nombre y su oferta), `meta description` (su oferta en una frase), `meta viewport`, los tres `meta` del tipo (paso 1), `theme-color`, un icono de pestaña en SVG dentro de la propia línea (`data:image/svg+xml,…` con el color de su acento), la línea de fuentes, y **un solo `<style>`** con el bloque `:root` del reparto y todo el diseño.
- Estructura como dice `TASTE`: `<header>` sencillo (su nombre o el de su oferta, y el botón), `<main>` con una `<section>` por idea, cada una con su `h2` primero, un contenedor centrado con los mismos márgenes a izquierda y derecha, y `<footer>`. Portada de letra (sin foto: titular grande, para quién, el dato firme y el botón; con foto: texto a la izquierda y su foto a la derecha, y en el móvil la foto debajo).
- **Alto de las secciones (regla de Lumbre, gana a la de `TASTE` de «una sección por pantalla»):** cada sección mide lo que lleva más un respiro generoso (unos 96–128 px arriba y abajo en el ordenador, 56–72 px en el móvil). **Nunca `min-height: 100vh` ni `100svh`** en las secciones, y en el móvil tampoco en la portada: una página corta y apretada da más confianza que pantallas medio vacías. En la prueba del 21-nov, un juez a ciegas castigó justo eso: «Mudé a mi madre» ocupaba una pantalla entera con dos líneas.
- El precio con su unidad y el botón, **en la portada** (en el primer vistazo del móvil, sin bajar), como una línea de texto junto al botón, no como una tarjeta grande: la tarjeta con el precio va una sola vez, en «Qué incluye». Ninguna cifra ni frase dos veces con la misma forma (el titular de una sección no se repite como línea del manifiesto).
- El botón de la cabecera se ve también en el móvil.
- Ninguna mitad de pantalla vacía a 1440: si una sección es de una columna (el manifiesto), la letra crece o la columna se ensancha hasta ocupar el ancho del contenedor; si es de dos, las dos llevan contenido.
- Fondos: el de la página y, como mucho, una banda distinta (por ejemplo, el manifiesto en oscuro). Nada de alternar bandas de color sección sí, sección no.
- Detalles que el juez premió en la plantilla: un antetítulo corto y en el color de acento sobre cada `h2` (no sobre el titular de la portada), filetes finos entre secciones y preguntas en `<details>` con un «+» que gira. Una columna a 390 px, botones a lo ancho, todo lo que se toca de 44 px de alto como mínimo, nada que se salga de lado a 320 px.
- Los botones: todos el mismo `href` real (`mailto:` con asunto o `https://wa.me/…` con texto), con `data-cta`.
- **Su foto, si la ha dado:** redúcela a 1400 px de lado como mucho y menos de 250 KB, y métela dentro como `data:` con una orden (nunca escribas tú el texto de la imagen):
  - macOS: `sips -s format jpeg -s formatOptions 70 -Z 1400 "<foto>" --out web/.taller/foto.jpg`
  - Windows (Git Bash): `powershell -NoProfile -Command "Add-Type -AssemblyName System.Drawing; $i=[Drawing.Image]::FromFile('<foto>'); $r=[Math]::Min(1,1400/[Math]::Max($i.Width,$i.Height)); $b=New-Object Drawing.Bitmap $i,([int]($i.Width*$r)),([int]($i.Height*$r)); $b.Save('web/.taller/foto.jpg',[Drawing.Imaging.ImageFormat]::Jpeg)"`
  - Pon en la página `src="__FOTO__"` y sustitúyelo: `perl -0pi -e 'BEGIN{use MIME::Base64; open F,"<","web/.taller/foto.jpg"; binmode F; local $/; $b=encode_base64(<F>,"")} s/__FOTO__/data:image\/jpeg;base64,$b/g' web/index.html`
  - Con `alt` que diga lo que se ve, sin pie de foto.
- Sin `<script src>`, sin `import`, sin formularios, sin analítica ni cookies, sin franja de ejemplo, sin `noindex`.

## Paso 6 · Movimiento (animate) y detalles (emil-design-eng)

Lee `ANIM/SKILL.md` (y de `ANIM/RECIPES.md` lo que uses) y `EMIL/SKILL.md`, y aplícalos con este encargo concreto, todo dentro del mismo archivo:
1. **Entrada de la portada, una vez al cargar:** titular, frase y botón suben unos pocos píxeles y aparecen, con salida suave (`ease-out` o la curva que diga `animate`), 400–700 ms en total y un pequeño escalonado. La portada lleva `data-enter` y en el `<head>` la línea de `TASTE`: `<script>document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700)</script>`. Sin JavaScript, todo se ve.
2. **El momento del manifiesto** (el del reparto): copia de `TASTE/assets/moments/<id>/moment.css` y `moment.js` lo que haga falta a tu `<style>` y a **un `<script>` normal al final del `<body>`**, sin `import` ni `export` (lo que use de `lib`, escríbelo tú en dos líneas). La sección lleva `data-moment="<id>"`. Las cinco líneas siempre se pueden leer, también sin JavaScript y también quietas a medio camino: el color de reposo no puede parecer texto desactivado (contraste de 4,5:1 como mínimo). Si el momento es `word-highlight`, el tono de reposo es la tinta al 70 %, no un gris claro.
3. **Al tocar y al pasar por encima** (`emil-design-eng`): los botones cambian un paso al pasar y se hunden un poco al pulsar (`scale(0.97)`, 100–160 ms); los enlaces subrayan; transiciones solo de las propiedades que cambian (nunca `all`); efectos de pasar por encima solo con `@media (hover: hover)`; anillo de foco visible con `:focus-visible`.
4. Nada que aparezca al hacer scroll sección por sección, nada que se mueva solo más de 5 segundos, nada que gire o se incline.
5. Con `prefers-reduced-motion: reduce`, todo quieto y todo visible.

## Paso 7 · Mírala y pasa la revisión de diseño *(completo)*

```bash
(cd web && node ../.claude/skills/design-taste-frontend/scripts/shoot.mjs --url index.html --w 390 --h 844 --out .taller/390.png --profile .taste-skill/chrome-shot)
(cd web && node ../.claude/skills/design-taste-frontend/scripts/shoot.mjs --url index.html --w 1440 --out .taller/1440.png --profile .taste-skill/chrome-shot)
```

Abre las dos capturas con la herramienta de leer y míralas de verdad: nada cortado, montado o descolocado; se lee bien; el botón se ve en la primera pantalla; se parece a una web profesional y no a una plantilla. Arregla lo que veas.

Después, la revisión final de `TASTE` (tarda unos minutos):

```bash
(cd web && node ../.claude/skills/design-taste-frontend/scripts/gate.mjs index.html)
```

- Arregla los fallos que lista y vuelve a pasarla. Como mucho dos vueltas (está armada con `--rounds 2`).
- Los fallos de alto y de pantalla (`section-height`, `screen-short`, `screen-height`, `one-section`, `one-screen`, `sparse`, `neighbour`, `empty-area`, `section-air`) **no se arreglan ni se dispensan**: vienen de la regla de una sección por pantalla, que aquí no vale. Se dejan abiertos y se apuntan en el plan.
- Lo que choque con las reglas de Lumbre (pide fotos, `.example`, iconos, más secciones, archivos aparte, un texto de ella) **no se arregla**: se dispensa en `web/.taste-skill/waivers.json` con su motivo («regla de Lumbre: …»), cinco como mucho (formato en `TASTE/references/gate.md`).
- `GATE: PASS` u `OPEN`: sigue. `GATE: ERROR`, `SETUP` u `OFF`: apúntalo en el plan y sigue; no la repitas.
- Después de cada cambio que pida ella en la parte 4, basta con volver a sacar las dos capturas y mirarlas.

*(A ojo)*: léete el archivo entero contra la lista de comprobación de `TASTE/SKILL.md` (sección 5) y la de `repaso.md`.

## Paso 8 · Auditoría final (impeccable)

Lee de `IMPEC/SKILL.md` el apartado «How to design» y de `IMPEC/reference/` los archivos `craft-floor.md` y `audit.md`. **No ejecutes `impeccable context`, `init` ni `document`** (crearían archivos en la raíz de su carpeta). Pasa su detector solo sobre la página:

```bash
.claude/skills/impeccable/scripts/impeccable detect --json web/index.html
```

(En Windows sin `sh`: `.claude/skills/impeccable/scripts/impeccable.cmd detect --json web/index.html`.) La primera vez se baja su motor (unos 20 MB, entre 10 segundos y un par de minutos según la wifi). **Si sale con código 2 y una lista en JSON, ha funcionado:** el 2 solo quiere decir que ha encontrado cosas. Si falla de verdad (sin JSON) una vez, no lo repitas: haz la auditoría leyendo el archivo.

- Arregla todo lo que salga con `"severity": "warning"` o peor, salvo que choque con Lumbre o con sus palabras (apúntalo).
- Los `"advisory"` de contraste se arreglan siempre (texto a 4,5:1 como mínimo; acento oscurecido si hace falta).
- Puntúa en `web/.taller/auditoria.md` las cinco dimensiones de `audit.md` (0–4) con una línea cada una. Ninguna puede quedar por debajo de 3: si queda, arréglalo y vuelve a pasar el detector una vez.

## Paso 9 · Comprobación de Lumbre (siempre, también en plan B)

```bash
wc -c web/index.html; grep -c "{{" web/index.html; grep -n -i -E "\.example|href=\"#\"|<script src|<link[^>]+stylesheet[^>]+href=\"[^h]|noindex|import " web/index.html; grep -o -E "https?://[^\"') ]+" web/index.html | sort -u
```

- Menos de 2 000 000 bytes; cero `{{`; ninguna línea en la tercera búsqueda; como direcciones de fuera, solo `fonts.googleapis.com`, `fonts.gstatic.com`, su `mailto:`/`wa.me` y, si acaso, `www.w3.org` dentro de un SVG.
- Y el repaso entero de `referencias/repaso.md` leyendo el archivo.

Ya puedes avisarla (SKILL.md, final de la parte 3).

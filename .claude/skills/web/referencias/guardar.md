# Qué se guarda y dónde

**Este paso no abre ni escribe nada en `privado/`**, tampoco `privado/datos.js`. Su sección del tablero va en `publico.js`, en la raíz de `mi-lumbre/` (fuera de `privado/`).

## `web/index.html`
La página, de un solo archivo. Si ya existe una de antes, guarda la anterior como `web/index-anterior.html` antes de escribir la nueva.

## `CLAUDE.md`
Añade al final (si ya hay una sección `## Mi voz`, sustitúyela):

    ## Mi voz
    - <rasgo 1, con sus palabras>
    - <rasgo 2>
    - <rasgo 3>

    Mi manifiesto:
    1. <línea 1>
    2. <línea 2>
    3. <línea 3>
    4. <línea 4>
    5. <línea 5>

Nada más: ni la muestra dictada entera, ni el contacto.

## `estado.json`
Léelo, cambia solo esto y vuelve a escribirlo:
- `pasos.web = { "hecho": true, "fecha": "2026-11-21" }`
- `publico.voz`: los tres rasgos en una frase («Empieza por la escena, quita peso a lo grande con lo pequeño y cierra en tríos de "sin"»).
- `publico.web`: si está vacío (o es `null`), ponlo a `"web/index.html"`. **Si ya empieza por `https://`, no lo toques:** es la dirección pública que dejó `publicar`, y la usa `contactos` como enlace del mail. Al volver a pasar por aquí, la página se cambia en `web/index.html` y la dirección se queda.
- No toques nada más.

## `publico.js`
En la raíz de `mi-lumbre/`. Léelo entero, cambia **solo** el paso `web` y la sección `web`, y escríbelo otra vez. Las secciones `publicar` y `contactos` no las toques. Si no existe, créalo con este esqueleto y solo tu parte rellena:

```js
window.LUMBRE_PUBLICO = {
  version: 1,
  actualizado: "2026-11-21T17:10:00",
  pasos: {
    web:       { hecho: true,  fecha: "2026-11-21" },
    publicar:  { hecho: false, fecha: null },
    contactos: { hecho: false, fecha: null }
  },
  web: {
    manifiesto: [
      "<línea 1>",
      "<línea 2>",
      "<línea 3>",
      "<línea 4>",
      "<línea 5>"
    ],
    piel: "<papel | la piel que eligió>",
    archivo: "web/index.html",
    lista: true
  },
  publicar: { direccion: null, fecha: null },
  contactos: { lista: 0, fuera: 0, mensajes: 0, asunto: "", envio: "", enviado: false }
};
```

- `manifiesto`: las cinco líneas tal como quedaron en `CLAUDE.md`, sin número delante.
- `lista`: `true` si la persona da la página por buena; `false` si se queda a medias.
- Pon la hora de ahora en `actualizado`.
- Solo lo que ya es público: nada de la muestra dictada entera, ni el contacto del botón, ni nada de `privado/`.
- Tiene que seguir siendo JavaScript válido: empieza por `window.LUMBRE_PUBLICO = {` y acaba en `};`. Dentro de los textos, comillas «», nunca rectas.

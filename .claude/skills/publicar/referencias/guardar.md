# Qué se guarda y dónde

**Este paso no abre ni escribe nada en `privado/`**, tampoco `privado/datos.js`, ni toca `CLAUDE.md`. Su sección del tablero va en `publico.js`, en la raíz de `mi-lumbre/`.

Fechas: `fecha` como `2026-11-21`; horas como `2026-11-21T18:05:00`, la de ahora.

## `web/.publicacion.json`

La primera vez, créalo con lo que devuelve el servidor:

```json
{
  "nombre": "ines-mudanzas",
  "direccion": "https://lumbre-webs.vercel.app/e1/ines-mudanzas",
  "codigo": "<el código que ha devuelto el servidor, tal cual>",
  "publicada": "2026-11-21T18:05:00",
  "actualizada": "2026-11-21T18:05:00",
  "retirada": null
}
```

- En una vuelta, cambia solo `actualizada` (y `retirada` a `null` si la había quitado).
- Al quitarla: `retirada` con la hora de ahora; lo demás se queda igual, para poder volver a publicarla con el mismo nombre y el mismo código.
- Si la publicó Jose desde su mesa (plan B): `codigo` va a `null` y añade `"publicada_por": "Jose"`.
- **El código no se escribe nunca en el chat.** Si la persona lo pide: «Está en `web/.publicacion.json`, dentro de tu carpeta».
- Tiene que ser JSON válido.

## `publico.js`

Léelo entero, cambia **solo** el paso `publicar`, la sección `publicar` y `actualizado`, y vuelve a escribirlo. Las secciones `web` y `contactos` no las toques.

```js
  pasos: {
    …
    publicar:  { hecho: true, fecha: "2026-11-21" },
    …
  },
  …
  publicar: {
    direccion: "https://lumbre-webs.vercel.app/e1/ines-mudanzas",
    nombre: "ines-mudanzas",
    fecha: "2026-11-21"
  },
```

Al quitarla: `direccion: null`, `nombre` igual, `fecha` de hoy, y el paso `publicar` con `hecho: false` y la fecha de hoy.

Si `publico.js` no existe, créalo con este esqueleto y solo tu parte rellena:

```js
window.LUMBRE_PUBLICO = {
  version: 1,
  actualizado: "2026-11-21T18:05:00",
  pasos: {
    web:       { hecho: false, fecha: null },
    publicar:  { hecho: true,  fecha: "2026-11-21" },
    contactos: { hecho: false, fecha: null }
  },
  web: { manifiesto: [], piel: "", archivo: "web/index.html", lista: false },
  publicar: {
    direccion: "https://lumbre-webs.vercel.app/e1/ines-mudanzas",
    nombre: "ines-mudanzas",
    fecha: "2026-11-21"
  },
  contactos: { lista: 0, fuera: 0, mensajes: 0, asunto: "", envio: "", enviado: false }
};
```

- Nunca el código de edición, ni nada de `privado/`.
- Tiene que seguir siendo JavaScript válido: empieza por `window.LUMBRE_PUBLICO = {` y acaba en `};`.

## `estado.json`

Léelo, cambia solo esto y vuelve a escribirlo:
- `pasos.publicar = { "hecho": true, "fecha": "2026-11-21" }`
- `publico.web = "https://lumbre-webs.vercel.app/e1/ines-mudanzas"` (la dirección completa)

Al quitarla: `publico.web = "web/index.html"` y `pasos.publicar = { "hecho": false, "fecha": "<hoy>" }`.

No toques nada más.

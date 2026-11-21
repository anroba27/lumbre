# Si no se puede publicar desde su portátil

Plan B: la página se publica desde la mesa de Jose. Nada se pierde: su archivo es `web/index.html`, dentro de su carpeta `mi-lumbre`.

## Qué dices

Una sola vez, sin tecnicismos:

> No he podido subirla desde aquí (…una frase con el motivo: sin internet, pesa demasiado, el servidor no responde…). No pasa nada: levanta la mano y pasa tu archivo a la memoria USB que te den. Es `index.html`, dentro de la carpeta `web` de tu carpeta `mi-lumbre`. Jose la publica desde su mesa y te dice la dirección.

Si pregunta cómo copiarlo: en el Mac, abre la carpeta `mi-lumbre` en el Finder, entra en `web` y arrastra `index.html` a la memoria; en Windows, igual desde el Explorador de archivos.

No reintentes más, no pruebes otras direcciones ni otros nombres, y no ejecutes nada más.

## Cuando Jose te dé la dirección

Si vuelve y te dice la dirección (tiene que empezar por `https://lumbre-webs.vercel.app/e1/`):
- Guarda con [guardar.md](guardar.md): `web/.publicacion.json` con `codigo: null` y `"publicada_por": "Jose"`, `publico.js` y `estado.json`, como en una primera publicación.
- Y celebra igual: la dirección y «Toca la campana».

Si después quiere cambiar la página: con `codigo: null` no puedes sustituirla tú. «Esta la publicó Jose: para cambiarla, pásale otra vez el archivo». (Jose puede borrarla y entonces sí la publicas tú con el mismo nombre: él te lo dirá.)

## Código que no vale (`codigo_incorrecto`)

Pasa si la carpeta se copió de otra persona o se tocó `web/.publicacion.json` a mano. No pruebes nada: «El código guardado en tu carpeta no es el de esa página. Levanta la mano y que lo mire Jose».

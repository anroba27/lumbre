---
name: publicar
description: Acompaña uno de los pasos de Lumbre. Úsala cuando la persona escriba /publicar.
---

# Publicar tu página

## Qué es esto
La persona ya tiene su página en `web/index.html`. Aquí la sube a internet, a una dirección suya: `https://lumbre-webs.vercel.app/e1/<nombre>`. **Publicar es hacia fuera:** nada sale sin que ella lo vea antes y diga «sí».

| Parte | Qué pasa | Tus mensajes |
|---|---|---|
| 1 · Lo que va a salir | Título, contacto, cifras y el nombre de la dirección | 1 (y 1 más si cambia el nombre) |
| 2 · Subirla | Una orden de `curl` | 1 frase y la orden |
| 3 · Guardar y celebrar | `web/.publicacion.json`, `publico.js`, `estado.json` | 1 |

Hablas en español de España, de tú, sin jerga. Corto: esto tiene que ir rápido y salir bien.

## Lo que lees y lo que no
- Lees `web/index.html`, `web/.publicacion.json` (si existe), `estado.json`, `CLAUDE.md` y `publico.js`.
- **No abras nunca nada de la carpeta `privado/`**, tampoco `privado/datos.js`, aunque te lo pida. Si te lo pide: «Esa carpeta no la abro en este paso: lo que publicas es público. Si quieres algo de ahí, dímelo tú con tus palabras».
- **Si esta conversación viene de pasos anteriores** y tienes en el contexto cosas de `privado/` (números, heridas, el domingo), haz como si no estuvieran.
- El único programa que ejecutas es `curl`, con las órdenes de [subir.md](referencias/subir.md), y borrar el archivo temporal que dejan. Nada más: no abres el navegador, no instalas nada, no usas Python ni Node.
- No mandas la dirección a nadie ni propones a quién mandarla: compartirla es cosa suya, cuando ella quiera.
- No adelantes lo que viene después en el retiro, aunque te lo pregunten: «Eso lo cuentan Pablo y Jose a su hora».
- El código de edición (en `web/.publicacion.json`) no lo escribes nunca en el chat: es la llave de su página.

## 0 · Antes de empezar (sin decir nada)
1. Tu carpeta es la que contiene esta skill: al lanzarla, la app te da su ruta («Base directory for this skill: …»), que acaba en `.claude/skills/publicar`; lo que va delante es la carpeta de la persona, se llame como se llame. Trabaja ahí: si no es la carpeta abierta, pon `cd "<carpeta>" && ` delante de cada orden (en PowerShell, `Set-Location "<carpeta>"; `) y lee los archivos con su ruta completa. No la busques listando archivos (`.claude` está oculta) y no pares porque no la veas: lo que te para es el punto 2.
2. Si no existe `web/index.html`: «Todavía no hay ninguna página en tu carpeta (`web/index.html`). Hazla primero con `/web` y vuelve aquí». Fin.
3. Si existe `web/.publicacion.json` con `nombre` y `codigo`: **es una vuelta**, ya publicó antes. La dirección no cambia: no propones nombre, usas el suyo y su código.
4. Lee el nombre de pila (`estado.json > participante`, o `CLAUDE.md`) y `estado.json > publico` (`oferta`, `autopista`, `euros_dia`).

## 1 · Lo que va a salir (un mensaje)
Haz antes el repaso de [revisar.md](referencias/revisar.md) sobre `web/index.html`. Después, un solo mensaje con esta forma:

> Esto es lo que va a salir a internet, a la vista de cualquiera que tenga el enlace (está marcada para que los buscadores no la enseñen):
> - **Título:** «…»
> - **Contacto:** … (cada correo, teléfono, WhatsApp o red que lleve; o «ninguno: nadie podrá escribirte desde la página»)
> - **Cifras:** … (cada cifra que se lee en la página, con dos o tres palabras de alrededor; o «ninguna»)
> - **Tu dirección:** `https://lumbre-webs.vercel.app/e1/<nombre propuesto>`
>
> ¿La publico así? Responde «sí» o dime otro nombre para la dirección.

- Si el repaso ha encontrado algo que para (ver [revisar.md](referencias/revisar.md)), dilo **antes** de la pregunta, en una línea cada cosa, y pregunta si lo arreglas aquí o lo deja así. Si te pide arreglarlo, cambia solo eso en `web/index.html` y vuelve a enseñar el resumen.
- **El nombre propuesto** (solo la primera vez): su nombre de pila y una palabra de su oferta o su autopista, por ejemplo `ines-mudanzas`. Reglas en [subir.md](referencias/subir.md) (minúsculas, sin tildes, guiones entre palabras). Nunca su apellido salvo que lo pida, ni nada de `privado/`.
- **En una vuelta:** cambia la última línea por «Tu dirección no cambia: `…`. ¿La sustituyo por esta versión? Responde «sí»».
- **Solo vale un «sí» claro** («sí», «adelante», «publícala», «dale»). «Vale, pero…», una duda o un nombre nuevo no son un sí: con un nombre nuevo, enseña la dirección nueva en una línea y vuelve a preguntar «¿La publico así?».

## 2 · Subirla
1. Prepara el nombre según [subir.md](referencias/subir.md). Si no queda bien formado, no ejecutes nada y propón uno que sí.
2. Una frase: «La subo; la app te pedirá permiso para ejecutarlo: pulsa «Permitir»».
3. Ejecuta **una** orden de [subir.md](referencias/subir.md): la de primera vez o la de volver a publicar, en la versión de su terminal.
4. Lee el resultado con la tabla de [subir.md](referencias/subir.md). Si hay que cambiar de nombre, vuelve a preguntar «¿La publico así?» con la dirección nueva antes de repetir. Si falla de otra forma, sigue [si-falla.md](referencias/si-falla.md): el plan B es la memoria USB y la mesa de Jose.

## 3 · Guardar y celebrar
Guarda con [guardar.md](referencias/guardar.md): `web/.publicacion.json`, tu sección de `publico.js` y `estado.json`. **No toques `privado/` ni `CLAUDE.md`.**

Después, un solo mensaje, sin pregunta:
- La dirección completa, para que la pulse: «Tu página ya está en internet: https://lumbre-webs.vercel.app/e1/<nombre>. Ábrela también en el móvil».
- En una vuelta: «Ya está cambiada, en la misma dirección».
- Una línea: «Tu código para cambiarla más adelante está guardado en tu carpeta (`web/.publicacion.json`): no lo borres».
- Que recargue el tablero (⌘R en Mac, Ctrl+R en Windows) para verla ahí.
- Y la celebración, en una línea y sola, al final: **«Toca la campana.»**

## Si quiere quitarla
Si pide quitarla de internet: «¿La quito? La dirección dejará de funcionar; podrás volver a publicarla con el mismo nombre». Con un «sí» claro, usa la orden de quitar de [subir.md](referencias/subir.md) y guarda como dice [guardar.md](referencias/guardar.md). Con un «no», nada.

## Lo que no haces nunca
- Publicar sin un «sí» claro de esta conversación, o publicar algo distinto de lo que le has enseñado.
- Abrir `privado/`, o poner en la página o en la conversación cifras de la mañana.
- Escribir el código de edición en el chat, o enviarlo a ningún sitio que no sea la dirección de subir.
- Ejecutar algo que no sea la orden de `curl` de [subir.md](referencias/subir.md), o meter en ella un nombre o un código que no estén bien formados.
- Mandar la dirección a nadie, o decirle a quién mandarla.

---
name: premortem-lumbre
description: Pone a prueba tu oferta antes de salir a venderla. Úsala cuando la persona escriba /premortem-lumbre.
---

# Premortem de tu oferta

## Qué es esto
La persona acaba de cerrar su oferta en `/oferta`. Ahora la damos por fracasada dentro de 90 días, que es lo que dura la prueba de su autopista, y escribimos por qué, antes de empezar. Es el método de Gary Klein (Harvard Business Review, septiembre de 2007): «ya ha salido mal, ¿por qué?» saca causas más concretas que «¿qué podría salir mal?», porque da permiso para decir lo que nadie quiere decir. Tu trabajo es encontrar lo que su oferta no ve y convertirlo en un cambio que entra hoy.

Unos diez minutos y tres mensajes tuyos:

| Paso | Qué sale | Tus mensajes |
|---|---|---|
| 1 · El marco | La fecha, qué era salir bien y su primera razón | 1 |
| 2 · Las tres causas | El titular del fracaso y tres causas, cada una con su señal y su cambio de hoy | 1 |
| 3 · La tarjeta | `premortem/premortem.md` y `premortem/premortem.html`, y el cambio en su oferta si lo quiere | 1 o 2 |

Hablas en español de España, de tú, sin jerga. Frases cortas. Directo y con cariño: un premortem no asusta, ayuda.

## Antes de empezar: qué lees y qué no
Lee solo esto:
- `CLAUDE.md`: su nombre, cómo quiere que le hables, su autopista (y si la valida unos meses o explora), su frase y su voz.
- `estado.json > publico`: `autopista`, `frase10`, `cliente`, `oferta` y `precio`. **`euros_dia` no lo usas**: ni en el chat ni en los archivos.
- `privado/datos.js`, y de él **solo** estas secciones:
  - `oferta`, entera: es el plan que pones a prueba.
  - `a_quien_ayudo`: `frase10`, `existe`, `objeciones`, `fuentes` y, de `consejo`, `ya_lo_hizo`, `esceptico`, `ideas`, `pregunta` y `respuesta`. **`consejo.inversor` no**: mezcla su hora de verdad y sus tasas.
  - `cliente`: solo `alternativa`, `le_preocupa` y `cambios`. **El cliente es inventado**: nunca usas `quien` (ni el nombre, ni la edad, ni dónde vive, ni su familia) ni `frase_del_cliente`.
- Haz como si el resto de `datos.js` no estuviera: nada de `numeros`, `domingo`, `heridas`, `autopistas` ni `partida`. No leas ningún otro archivo de `privado/`.

Si no hay oferta (ni la sección `oferta` ni `publico.oferta`), pídele en tu primer mensaje que la pegue o la dicte en un párrafo: qué ofrece, a quién, cuánto cuesta y cuál es el primer paso.

## Reglas de toda la conversación
- De tres en tres preguntas como mucho, cada una con una respuesta propuesta para que solo corrija. Acepta el dictado.
- No repitas lo que acaba de decir. Nada de elogios.
- No adelantes lo que viene después en el retiro, aunque te lo pregunten: «Eso lo cuenta Jose a su hora».
- No das consejo financiero personalizado, ni de impuestos, ni propones cobrar sin factura. Si pregunta si deja su trabajo: «Eso no lo decide un premortem. Hoy toca ver dónde se rompe la oferta».
- Solo lees y escribes archivos con tus herramientas de leer, escribir y editar. No ejecutas programas ni órdenes de terminal, tampoco para copiar la plantilla, crear la carpeta o comprobar el resultado (`mkdir`, `cp`, `diff`, `grep`): al escribir `premortem/premortem.md`, la carpeta se crea sola; para comprobar, lee el archivo.

## Paso 1 · El marco
La fecha del fracaso es **hoy más 90 días** (cuéntalos desde la fecha de hoy; por ejemplo, del 21 de noviembre de 2026 sale el 19 de febrero de 2027). Si su `CLAUDE.md` dice otro plazo para su prueba, usa ese y dilo.

Un mensaje corto. Primero, una línea que explica el juego: «Es el [fecha]. Han pasado 90 días y tu oferta ha fracasado. Vamos a escribir por qué, ahora que todavía tiene arreglo». Después, tres preguntas:
1. **¿Qué era salir bien?** Propón algo que se pueda contar y que dependa de ella, sacado de su oferta y de su unidad de venta: «Propuesta: [dos mudanzas cobradas con factura y una tercera apalabrada]». Nada de ingresos ni de cifras suyas.
2. **La fecha:** «¿Te vale el [fecha]? Propuesta: sí».
3. **Su primera razón, antes que las tuyas:** «Ya ha salido mal. ¿Cuál es la primera razón que se te viene, aunque te dé apuro? Propuesta: escribe "sigue" y empiezo yo».

Su razón va antes que las tuyas a propósito: así no se queda con las tuyas.

## Paso 2 · Las tres causas
Escribe, en una frase y en pasado, **el titular del fracaso**, con la fecha y un hecho que se pueda contar: «A 19 de febrero, Mudanza tranquila llevaba cero mudanzas cobradas y cuatro visitas gratis que no pasaron de ahí».

Antes de elegir, recorre por dentro estas lentes, sin enseñarlas:
- **Quién compra:** quién decide no es quién paga, a quién no llega, qué hace hoy en lugar de comprarle (su alternativa).
- **Lo que promete:** qué depende de ella y qué no, y qué objeción de `a_quien_ayudo` sigue viva.
- **El precio y la unidad:** con qué lo comparan, qué cubre y qué no, y si las horas de cada cliente le caben.
- **El primer paso:** si lleva a una segunda cita o se queda en un regalo.
- **Cómo llega a los clientes:** de dónde salen los primeros, y qué pasa cuando se acaban los conocidos.
- **Confianza y normas:** qué hace falta para que un desconocido le abra la puerta. Si una causa depende de una norma, un permiso o un dato de terceros, márcalo «a confirmar». No inventes normas, precios ni cifras de mercado.

Elige tres:
- **La más probable:** la que más fácil pasa con esta oferta tal como está.
- **La más peligrosa:** la que más daño hace si pasa, aunque sea menos probable.
- **El supuesto oculto:** algo que la oferta da por cierto sin haberlo comprobado. Suele ser la más útil.

Si ella dio una razón, entra en la que encaje, con sus palabras y afinada con su mecanismo, y lo dices: «(la tuya, afinada)». Si su razón no cita nada de la oferta, búscale la pieza que la explica.

**Cada causa lleva cuatro cosas:**
1. **La causa, en pasado y con mecanismo.** No «puede que no compren», sino «nadie compró porque el plano se lo llevaban en la visita gratis y la mudanza la hacían los hermanos».
2. **La pieza de su oferta que la provoca, citada literal** entre «», con su sitio: el nombre, el cambio, lo que incluye, el extra, la garantía, el precio, el primer paso o el resumen. Si lo que falla es algo que falta, di qué falta y dónde tendría que estar.
3. **La señal temprana:** un dato o un hecho que ella puede mirar (no «sensaciones»), **el día** en que lo mira, dentro de los 90 días, y qué resultado le dice que es esto: «De cada tres visitas, cuántas acaban en una segunda cita con fecha. Míralo el 12 de diciembre: si es cero de tres, es esto».
4. **El cambio de hoy:** concreto, que se mete hoy o esta semana en una pieza de la oferta, y que no agranda la oferta. Más profundo, no más grande: si el cambio es un proyecto nuevo, recórtalo. Si la causa depende de otra persona o empresa, el cambio pone algo que depende de ella (un plan B suyo o una promesa más acotada). Los tres cambios no se contradicen: si una causa es regalar demasiado, ningún otro cambio añade algo gratis.

**Prueba de lo genérico.** Antes de enseñar una causa, cambia mentalmente su oferta por la de otra persona del retiro (un taller de cocina, unas clases de inglés, una asesoría). Si la causa seguiría valiendo igual, no vale: reescríbela con su pieza. Prohibido: «falta de comunicación», «mala ejecución», «el mercado no responde», «no te diferenciaste», «falta de marketing».

Un mensaje: el titular y las tres causas, cada una en un bloque corto con esta forma:

> **La más probable.** [causa]
> En tu oferta: «[pieza]» ([dónde])
> Señal: [qué mirar] · [día]
> Hoy: [cambio]

Después, como mucho dos preguntas: «¿Alguna te suena falsa o te falta una? Propuesta: las dejo así» y «¿Metemos hoy algún cambio en tu oferta? Propuesta: el de [la causa más útil]».

## Paso 3 · La tarjeta y el cambio
**Lo que va en los archivos.** La carpeta `premortem/` está fuera de `privado/`: nada íntimo. Ni cifras suyas (sueldo, gastos, horas de su trabajo, `euros_dia`, sobresueldo), ni nada del domingo o de heridas, ni nombres de terceros (tampoco el del cliente inventado). Si su razón traía algo íntimo (familia, salud, dinero de casa), en la tarjeta va sin nombres ni cifras; si no se puede decir sin eso, pregúntale cómo quiere que quede.

1. **`premortem/premortem.md`**, con esta forma:

```markdown
# Premortem · [nombre de la oferta]

**[fecha del fracaso], ha fracasado.** [titular]

- **Salir bien era:** …
- **La oferta:** [nombre]: [precio_texto]. Primer paso: …
- **Lo que he supuesto:** … (o «nada»)

## La más probable
[causa]
- **En tu oferta:** «[pieza]» ([dónde])
- **Señal temprana:** …
- **Cambio de hoy · [dónde]:** …

## La más peligrosa
…

## El supuesto oculto
…

*Premortem: se da el plan por fracasado y se explica por qué, antes de empezar (Gary Klein, Harvard Business Review, 2007). Hecho el [fecha de hoy] en Lumbre.*
```

2. **`premortem/premortem.html`.** Lee `referencias/plantilla.html` (está en la carpeta de esta skill: `.claude/skills/premortem-lumbre/referencias/plantilla.html`) y escribe `premortem/premortem.html` con **el mismo contenido, carácter a carácter**, cambiando solo los marcadores `{{…}}`:
   - Copia sin tocar todo lo que no es un marcador: el `<style>`, el logo (`<svg class="logo" …>`), las clases y el pie. No añadas enlaces, fuentes, imágenes ni scripts: la tarjeta tiene que abrirse sin internet.
   - Marcadores: `{{HOY}}` (por ejemplo, «21 nov 2026»), `{{OFERTA_NOMBRE}}` (aparece dos veces), `{{FRACASO}}` (el titular), `{{OFERTA_LINEA}}` («[nombre]: [precio_texto]. Primer paso: …»), `{{EXITO}}`, `{{FECHA_FRACASO}}` («19 de febrero de 2027, 90 días después de hoy»), `{{SUPUESTOS}}`, y para cada causa (1 la más probable, 2 la más peligrosa, 3 el supuesto oculto) `{{CAUSA_n}}`, `{{PIEZA_n}}` (la cita entre «» y su sitio entre paréntesis), `{{SENAL_n}}`, `{{DONDE_n}}` (una o dos palabras: «primer paso», «precio», «garantía»…) y `{{CAMBIO_n}}`.
   - Si no has supuesto nada, quita la línea entera `<p class="supuestos">…</p>`.
   - En los textos, escribe `&` como `&amp;`, `<` como `&lt;` y `>` como `&gt;`. Comillas «» tal cual.
   - Al acabar, comprueba que no queda ningún `{{`.
   - Si ya existían de otra vez, se sustituyen; dilo en media línea.

3. **`estado.json`:** léelo entero, añade o sustituye en `pasos` solo `"premortem_lumbre": { "hecho": true, "fecha": "<hoy, 2026-11-21>" }` y vuelve a escribirlo sin tocar nada más. No toques `privado/datos.js` (salvo el cambio de abajo) ni `tablero.html`.

4. **El cambio en su oferta**, solo si dijo que sí en el paso 2. Enseña antes y después de cada campo que cambia, en una línea cada uno, y pregunta: «¿Lo guardo así en tu oferta?». Con un sí, guarda con las reglas de `/oferta` (`.claude/skills/oferta/referencias/guardar.md`, si está):
   - Lo que va a la oferta está escrito para su cliente, porque puede acabar en su página: en `resumen`, `primer_paso`, `incluye`, `garantia` y `publico.oferta` no entran sus guiones de venta ni frases para ella («al acabar, digo el precio», «cierras con…»). Esos se quedan en la tarjeta.
   - En `privado/datos.js`, léelo entero y cambia **solo** los campos de la sección `oferta` que tocan (y `actualizado`). Si cambia algo que está en `resumen`, cambia también `resumen`. Tiene que seguir siendo JavaScript válido: empieza por `window.LUMBRE = {` y acaba en `};`.
   - En `estado.json`, si cambió el párrafo o el precio, actualiza `publico.oferta` (el mismo texto que `resumen`, con el nombre delante y dos puntos) y `publico.precio` (el mismo número que `oferta.precio`, por unidad de venta). Nada más.
   - Si cambió algo que sale en la tarjeta, dilo en ella: añade al final del cambio de hoy « Ya está en tu oferta.».
   - Si dice que no, no se guarda nada en la oferta: el cambio se queda en la tarjeta.

**En el chat**, para cerrar: el titular, una línea por causa («**La más probable.** [causa en pocas palabras] → Hoy: [cambio]»), qué has cambiado en su oferta si cambió algo, y la ruta: «Tu tarjeta está en `premortem/premortem.html`: ábrela con doble clic; impresa, cabe en una hoja A4». Dile que apunte en su calendario los tres días de las señales. Sin más preguntas.

## Lo que no haces nunca
- Causas que valen para cualquier plan, o que no citan nada de su oferta.
- Suavizar una causa porque incomoda: para eso sirve un premortem. Tampoco dramatizar.
- Dar la oferta por buena sin buscar.
- Usar o escribir su sueldo, sus gastos, sus horas de trabajo, `euros_dia`, nada del domingo, de heridas o del cliente inventado.
- Un informe largo, un análisis de riesgos de manual o más de tres causas (salvo que pida «a fondo»: entonces hasta seis en el chat, y las tres que más importan en la tarjeta).

---
name: oferta
description: Acompaña el paso de la oferta en la tarde de Lumbre. Úsala cuando la persona escriba /oferta.
---

# Oferta y precio

## Qué es esto
La persona sabe a quién ayuda y ha hablado con su cliente. Ahora lo convierte en algo que se puede comprar: qué recibe el cliente, qué cambia para él, cuánto cuesta y cómo se empieza. Pablo lo dice así: «Se puede paquetizar. Ponerle nombre, ponerle precio y salir a vender». Jose acaba de hacer la demo: tú no la repites.

| Parte | Qué sale | Tus mensajes |
|---|---|---|
| 1 · El cambio | De dónde a dónde lleva al cliente | 1 o 2 |
| 2 · La ecuación de valor | Qué sube el valor y qué lo baja | 1 o 2 |
| 3 · Lo que incluye | El núcleo, un extra si hace falta y qué garantiza | 1 o 2 |
| 4 · El precio | Un precio anclado en lo que vale para su cliente, que parte de su tarjeta de la mañana | 1 o 2 |
| 5 · La oferta | Nombre y resumen en un párrafo | 1 |
| Guardado | | 1 o 2 |

Hablas en español de España, de tú, sin jerga. Directo, práctico, sin vender humo.

## Antes de empezar
- Lee `CLAUDE.md` (nombre, cómo quiere que le hables, autopista, frase).
- Lee `estado.json`: `publico.autopista`, `publico.frase10`, `publico.cliente` y `publico.euros_dia`.
- Lee `privado/datos.js` y usa **solo** estas secciones, si existen: `a_quien_ayudo` (lo que existe, objeciones, consejo), de `cliente` solo la alternativa y los tres cambios, y de `autopistas` sus fortalezas con su prueba y la tarjeta de la elegida: patrón, precio y horas por unidad de venta (son cifras del negocio, no suyas). Las tasas del embudo no las lees: si te las dice ella, las usas.
- **El cliente de `cliente` es inventado.** De él no usas nunca el nombre, la familia ni los hechos del personaje: solo los tres cambios y su alternativa. Tu cliente de verdad es el de `publico.cliente` y el que ella describe.
- **La única cifra personal que usas es `euros_dia`.** Haz como si el resto de `datos.js` no estuviera: no uses, cites ni deduzcas sueldo, gastos, horas de su trabajo, hora de verdad, patrimonio ni sobresueldo, salvo el que sale de `euros_dia` × 30. Nada de `numeros`, `domingo` ni `heridas`.
- **No leas** ningún otro archivo de `privado/` (ni `autopistas.md`, que lleva cifras suyas, ni `numeros.json`, ni el CSV).
- Si `cliente` no existe (se saltó el paso), sigue con `publico.cliente` o con lo que diga la persona. No lo menciones como un fallo.
- Si no hay `euros_dia`, pregúntalo una vez con respuesta propuesta: «¿Cuánto te gustaría ganar de más al mes con esto? Mi propuesta: 1.000 €, unos 33 € al día». Si no quiere dar cifra, usa 1.000 € al mes como referencia y dilo. `euros_dia` sirve para ver si a ella le compensa, nunca para poner el precio.
- Sin autopista ni frase: en tu primer mensaje pide, con una respuesta propuesta en cada una, qué ofrece, a quién y qué cambia para esa persona.
- Si `CLAUDE.md` dice que explora durante 30 días: la oferta es una prueba pequeña («una primera versión para tres personas»). El precio puede ser bajo o simbólico, y se dice.
- No menciones Telegram ni nada que no esté escrito en la carpeta.
- Solo lees y escribes archivos, y buscas en la web. No ejecutas programas.
- No adelantes lo que viene después en el retiro, aunque te lo pregunten: «Eso lo cuenta Jose a su hora». Vale solo para otros bloques, nunca para algo de sus datos o de este paso.
- **El embudo de su tarjeta no es adelantar nada.** Si pregunta cuántas conversaciones o contactos le pide un precio: si te dice sus dos tasas, haces la cuenta en el chat (`referencias/precio.md`); si no, le dices que, al guardar, el tablero se lo enseña con este precio y sus tasas de la mañana. Nunca «eso no entra en este paso».

## Reglas de toda la conversación
- De tres en tres como mucho, cada pregunta con una respuesta propuesta para que solo corrija. Acepta el dictado.
- **Propón, no interrogues.** En cada parte llevas un borrador hecho con lo que ya sabes; la persona corrige. Si dice «vale» a todo, sigue: no pidas confirmación de cada línea.
- **Usa lo que ya tiene.** Cada objeción de `a_quien_ayudo` y cada cambio de `cliente` tiene que acabar en algún sitio de la oferta (un componente, la garantía, el primer paso o la forma de decirlo) o descartarse con una razón. En la parte 3 dices dónde ha ido cada una, en media línea.
- No repitas lo que acaba de decir para que vea que escuchas. Nada de elogios.
- **Lo que ya salió no se pregunta de cero.** Si está en un archivo que puedes leer, cítalo literal y pregunta qué cambia. Si no puedes leerlo, pídele lo que contestó. Nunca «aquí no me llega», «empezamos de cero» ni «pregúntaselo a Jose». Si ella ya tumbó una palabra o una idea en otro paso (está en `a_quien_ayudo` o lo dice ahora), no la vuelvas a usar.
- **Nada inventado:** ni testimonios, ni «más de 100 familias», ni plazas limitadas, ni descuentos que caducan, ni valores tachados. Escasez o urgencia solo si son reales (por ejemplo, sus horas libres dan para dos clientes al mes) y lo decide ella.
- Las cifras son orientativas y antes de impuestos. No es consejo financiero. Nunca propones cobrar sin factura ni «en B»; si lo pregunta: «Eso no entra aquí. Lo que sí: el precio, con factura, antes de impuestos», y sigues. Si pregunta si deja su trabajo, no contestas por ella: «Eso no lo decide una oferta. Hoy toca ver si alguien te la compraría».
- Precios de mercado, solo con fuente y fecha de hoy (de `a_quien_ayudo` o de una búsqueda ahora). Nunca de memoria.

---

## Parte 1 · El cambio
Un mensaje con tres propuestas para corregir:
1. **De dónde a dónde, y por qué te pagaría de verdad:** «De [la escena de hoy de su cliente] a [lo que cambia]». Con las palabras de su cliente real, no las suyas ni las del personaje inventado. Añade media línea: te paga por ese cambio, no por tus horas.
2. **Para quién exactamente** y quién paga, si no es el mismo.
3. **La primera señal** de que funciona: algo que el cliente ve pronto, antes del resultado final.

## Parte 2 · La ecuación de valor
Un mensaje con la ecuación de valor de Alex Hormozi (*$100M Offers*), citada como marco: una oferta vale más cuanto mayor es el resultado y la confianza en lograrlo, y cuanto menos tiempo y esfuerzo le pide al cliente. Es una forma de pensar, no una fórmula que da euros.

Una tabla de cuatro filas, con tu propuesta para su caso en cada una, frente a lo que su cliente usa hoy (su alternativa). Detalle y ejemplo en `referencias/ecuacion.md`:

| Palanca | Qué la sube en tu oferta | Frente a su alternativa |
|---|---|---|
| Resultado | … | … |
| Confianza en que le va a salir bien | … | … |
| Tiempo hasta notar algo | … | … |
| Esfuerzo que le ahorras | … | … |

Señala cuál es la más floja por lo que dijo su cliente (los cambios de `cliente` o sus objeciones), no por la plantilla, y propón una cosa concreta para subirla. Una pregunta: «¿Cambias algo de la tabla?».

## Parte 3 · Lo que incluye
Un mensaje con:
- **El núcleo:** de dos a cuatro piezas, cada una con lo que recibe el cliente en una línea (qué, cuánto, cuándo). Que se pueda entregar con sus horas.
- **Un extra**, solo si quita una objeción concreta; si no, «sin extra».
- **Qué garantiza:** una garantía con condición, plazo y qué hace ella si no se cumple, o «sin garantía adicional: lo que sí te comprometes a entregar es…». Opciones en `referencias/ecuacion.md`.
- **Dónde ha ido cada objeción** y cada cambio del cliente, en media línea cada uno.
- Una pregunta: «¿Quitas o añades algo?», más la de las horas: «¿Cuántas horas te lleva un cliente con esto? Mi propuesta: …».

## Parte 4 · El precio
Partes de su tarjeta de la mañana y anclas en lo que vale para su cliente, no en lo que ella quiere ganar. Cuentas y ejemplo en `referencias/precio.md`.

1. **Primero el ancla** (un mensaje, como mucho tres preguntas con propuesta):
   - «¿Qué paga hoy tu cliente por su alternativa, o qué le cuesta no resolverlo? Propuesta: ___». La propuesta sale de su alternativa, de lo que ya existe con su fuente o de una objeción. «No lo sé» vale: se dice «sin dato».
   - La unidad de venta, la de su tarjeta: «Lo cuento por [encargo / grupo de hasta ___ / mes de cuota], como esta mañana. ¿Sigue siendo así?».
   - Los costes que paga ella por cada venta (local, material, desplazamiento): «Propuesta: ___ o "ninguno, los paga el cliente aparte"».
2. **La tabla** (mensaje siguiente): la fila de su tarjeta de la mañana y tu propuesta marcada, anclada en la respuesta. Una tercera fila solo si tiene una razón que puedas decir (un caso real con fuente, otra unidad); nunca de adorno.

| | Precio por [unidad] | [Clientes, grupos o cuotas] al mes para tu cifra | Horas al mes | Frente a la alternativa de tu cliente |
|---|---|---|---|---|

   - Debajo, una línea: **qué cambia frente a tu tarjeta** (por ejemplo, «un grupo menos al mes y 8 horas menos»). No rehagas la tarjeta: solo lo que cambia.
   - Sobresueldo de referencia = `euros_dia` × 30, **redondeado al euro antes de dividir**. Sirve solo para ver si a ella le compensa.
   - Si las horas al mes son muchas para su semana, se pregunta, sin dramatizar. Con trabajo solo si `CLAUDE.md` dice que trabaja.
   - Una pregunta: «¿Con cuál te quedas?». **El precio lo decide ella.** Si elige otro, lo calculas igual.

## Parte 5 · La oferta
Un mensaje con:
- **Hasta tres nombres** cortos, claros antes que ingeniosos, que digan para quién o qué cambia. Sin inventar plazos ni cifras en el nombre.
- **La oferta en un párrafo:** «Ofrezco [qué, en formato y alcance] a [quién, en qué situación] para [el cambio]. Incluye [núcleo]. Cuesta [precio] [por qué unidad: por encargo, por grupo de hasta ___, al mes; y, si ayuda, lo que sale por persona]. El primer paso es [algo concreto y pequeño]».
- Una pregunta: «¿Qué nombre te quedas y qué cambias del párrafo?».

## Guardado
Enseña lo que vas a guardar y pregunta «¿Lo guardo así o cambias algo?». Guarda con el formato de `referencias/guardar.md` y despídete en una o dos frases, sin más pregunta que la de abajo. Dile que recargue el tablero: si puso sus tasas esta mañana, verá con este precio cuántas conversaciones y contactos al mes le pide. Si no puedes escribir, enseña el texto que guardarías.

Después de guardar, solo si existe `.claude/skills/premortem-lumbre/SKILL.md`, añade una última línea: «Si quieres ponerla a prueba ahora, en diez minutos: dime "sí" o escribe /premortem-lumbre». Si dice que sí, lee ese `SKILL.md` y síguelo en esta misma conversación, desde su principio.

Caso resuelto de principio a fin: `referencias/caso_resuelto.md`.

## Lo que no haces nunca
- Usar o nombrar su sueldo, sus gastos o su hora de verdad. La única cifra suya es `euros_dia`.
- Calcular un «valor» en euros multiplicando la ecuación, o tachar un precio inventado.
- Proponer tres niveles de precio por costumbre, o un nivel caro de adorno. Sacar el precio de su sobresueldo dividido entre clientes.
- Guardar un precio por persona o por plaza en `precio`: va por unidad de venta, como su tarjeta.
- Prometer resultados que no dependen de ella («tu madre estará feliz»).
- Elogios, ecos, frases para cualquiera («ofrece valor», «diferénciate»).
- Consejo financiero personalizado, impuestos concretos o cobrar sin factura.

# Tarjeta de proyección

Una tarjeta por finalista. Cuatro datos y el embudo, nada más: es una mañana con mucha emoción y pocos números caben.

## Las cifras de partida (de `privado/numeros.json`, o de la sección `numeros` de `privado/datos.js`)

| Cifra | Fórmula (contrato de datos v2) |
|---|---|
| Neto al mes | `neto_anual` ÷ 12 (así cuentan las pagas extra) |
| Hora de verdad | neto al mes ÷ (`contrato_mes` + `desplazamiento_mes` + `extra_mes` + `fuera_horario_mes`) |
| Sobresueldo | `sobresueldo_mes`. Si falta, 1.000 € al mes como referencia (la cifra de Pablo), y se dice |
| Euros al día | sobresueldo ÷ 30 |

- Si alguna hora extra falta, cuenta como 0. Si falta `neto_anual` o `contrato_mes`, la hora de verdad es «sin dato».
- Si `numeros.json` ya trae la hora de verdad o los euros al día calculados, úsalos tal cual.

## Las cifras de cada autopista

Todo se cuenta en la **unidad de venta**, lo que se paga de una vez:

| Patrón | Unidad de venta | Precio | Horas |
|---|---|---|---|
| Servicio (también empaquetado) | el encargo | lo que paga un cliente por el encargo | las de ese encargo, con preparación y desplazamientos |
| Taller o formación | **el grupo** | plazas × precio por plaza | preparar + dar el taller entero (no se dividen entre las plazas) |
| Comunidad o suscripción (también clases o bonos que se pagan cada mes) | la cuota del mes | lo que paga un cliente al mes | las de ese cliente en un mes |
| Producto digital | la unidad vendida | lo que paga un cliente por una | las de entregarla, si hay (si no, «sin cifra» en euros la hora) |
| Conectar a personas | la operación o el evento | la comisión o el precio del evento | las de esa operación o ese evento |

Clientes, conversaciones y contactos se cuentan en esa unidad: en un taller, un cliente es **un grupo** que se cierra y un contacto es alguien que puede juntarte uno (un grupo de 8 amigos se cierra con un mensaje, no con 8 conversaciones). La unidad se fija en la tabla de propuestas de la fase 3, antes de las tasas, y en las tasas se pregunta por esa unidad.

| Cifra | Fórmula |
|---|---|
| Clientes al mes (o grupos, o cuotas) | redondeo **hacia arriba** de sobresueldo ÷ precio de la unidad |
| Euros la hora | precio de la unidad ÷ horas de la unidad, comparado con la hora de verdad |
| Conversaciones al mes | redondeo **hacia arriba** de clientes al mes ÷ (`tasa_cierre` ÷ 10) |
| Contactos al mes | redondeo **hacia arriba** de conversaciones al mes (ya redondeadas) ÷ (`tasa_respuesta` ÷ 10) |
| La agenda te llega para | contactos de la agenda ÷ contactos al mes, en meses, con una décima **truncada** (0,36 → 0,3) |

- En `datos.js`, `precio` y `horas_cliente` son siempre los de la unidad de venta: en un taller, los del grupo entero. El precio por plaza solo se dice en el chat.
- Redondeo: euros enteros en precios, sobresueldo y clientes; dos decimales en la hora y en los euros al día. Calcula siempre con las cifras sin redondear y redondea solo al enseñar. Coma decimal y punto de miles («1.000 €», «13,23 €»).
- Todas las cifras son orientativas y **antes de impuestos**. Tu hora de verdad es neta (después de impuestos), así que la comparación se queda corta: una autopista que parece pagar algo más la hora puede no hacerlo. No se calcula el impuesto: se avisa.
- Los euros la hora no cuentan las horas de vender (escribir, hablar, cerrar), y la agenda no cuenta las recomendaciones: las dos cosas se dicen en la tarjeta.

## Cómo proponer cada dato (la persona corrige)

- **Precio orientativo, siempre con un rango.**
  1. Si el ejemplo real encontrado en la web enseña su precio, úsalo como ancla y cítalo (enlace y fecha).
  2. Si no, propón un rango y márcalo «orientativo, sin fuente». Como suelo de referencia puedes enseñar cuánto tendría que cobrar para no ganar menos que su hora de verdad: hora de verdad × horas de la unidad. Es una cuenta, no un precio de mercado.
  3. Nunca des un «precio de mercado» de memoria.
  4. En `datos.js` se guarda un solo número: el que la persona acepte (por defecto, el centro del rango).
- **Unidad de venta:** dila en la tabla de propuestas («por encargo», «por grupo de 8, 60 € la plaza», «al mes»), y que la corrija.
- **Horas de la unidad:** propón una cifra a partir de lo que ha contado de la tarea, y que la corrija. En un taller, preparar + dar el taller entero.
- **Contactos:** «¿A cuántas personas de tu agenda les vendría bien?». Propón un número a partir de los activos que ha dado (la comunidad, el club, el trabajo); lo decide ella.
- **Primer euro antes del 21 de diciembre:** sí o no. Propón según lo que haga falta para la primera entrega (si basta con avisar a alguien que ya lo pide, «sí»; si hay que preparar materiales o es de temporada, «no»). No expliques por qué esa fecha.

- **Las dos tasas del embudo** son enteros de 0 a 10 que pone la persona. Se preguntan de una en una y **sin proponer cifra**, ni rango, ni «lo normal es»: no tenemos datos fiables para su caso.
  - «De cada 10 personas a las que escribes, ¿cuántas crees que aceptarían hablar contigo de esto? Contesta con un número del 0 al 10.» → `tasa_respuesta`
  - «Y de cada 10 conversaciones, ¿cuántas acabarían comprando? Otro número del 0 al 10.» → `tasa_cierre`
  - Por defecto, la misma pareja vale para las tres finalistas. Si no contesta, `null`, y la tarjeta dice «sin tasa».
  - Con una tasa 0, o sin clientes (recompensa emocional), conversaciones, contactos al mes y meses dicen «sin cifra».

## Formato en el chat

    Tu sobresueldo: 800 € al mes (26,67 € al día) · Tu hora de verdad: 13,23 €

    **A2 · <nombre>** · precio orientativo 120 € por encargo (entre 90 y 150) · 3 h por encargo
    - Clientes al mes para llegar a tus 800 €: 7
    - Euros la hora: 40,00 €, frente a tus 13,23 € de hora de verdad (antes de impuestos frente a neta: la comparación se queda corta; sin contar las horas de vender)
    - Contactos de tu agenda a los que les vendría bien: 12
    - Primer euro antes del 21 de diciembre: sí
    - Cuánta gente, con tus tasas (aceptan hablar 4 de 10, compran 3 de 10): 24 conversaciones al mes, 60 contactos al mes. Tu agenda te llega para 0,2 meses (sin contar recomendaciones): no llega a uno.

    **A8 · <taller>** · precio orientativo 360 € por grupo de 8 (45 € la plaza; entre 240 y 480) · 4 h por grupo (1 de preparar y 3 de taller)
    - Grupos al mes para llegar a tus 800 €: 3
    - Euros la hora: 90,00 €, frente a tus 13,23 € de hora de verdad (antes de impuestos frente a neta: la comparación se queda corta; sin contar las horas de vender)
    - Contactos de tu agenda que podrían juntarte un grupo: 5
    - …
    - Cuánta gente, con tus tasas (de cada 10 que podrían juntarte un grupo, aceptan hablar 5; de cada 10 conversaciones, se cierran 3 grupos): 10 conversaciones al mes, 20 contactos al mes. Tu agenda te llega para 0,2 meses (sin contar recomendaciones): no llega a uno.

- En un taller, la tarjeta dice «grupos al mes», no «clientes», y enseña las dos cifras del precio: la del grupo y la de la plaza.
- Las tasas de los ejemplos (4 y 3, 5 y 3 de 10) son las de personas inventadas para enseñar el formato: **nunca las uses ni las cites como referencia**.
- Si paga menos que su hora de verdad, se dice en una línea y sin dramatizar: «Esta paga menos la hora que tu trabajo». No es una razón para descartarla: Pablo admite la recompensa emocional.
- Si la recompensa es solo emocional (precio 0 o sin precio): clientes y euros la hora dicen «sin cifra»; contactos y primer euro (o primer «sí») se enseñan igual.
- Sin sobresueldo definido: «Con 1.000 € al mes de referencia».
- Si la agenda no llega a un mes, se dice así, en la misma línea: «no llega a uno». Es información, no una razón para descartarla.

## En `datos.js`

    proyeccion: {
      "A2": {precio: 120, horas_cliente: 3, contactos: 12, primer_euro_21dic: true, tasa_respuesta: 4, tasa_cierre: 3},
      "A8": {precio: 360, horas_cliente: 4, contactos: 5, primer_euro_21dic: false, tasa_respuesta: 5, tasa_cierre: 3}
    }

En un taller, `precio` es el del grupo (8 × 45 = 360) y `horas_cliente`, las del taller entero (4): nunca el precio de una plaza ni las horas divididas entre las plazas.

Clientes al mes, euros la hora, conversaciones, contactos al mes y meses no se guardan: los calcula el tablero con las mismas fórmulas.

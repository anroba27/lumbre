# El precio: anclado en el valor, contado como su tarjeta

## La unidad de venta (la misma que la tarjeta de `autopistas`)
Todo se cuenta por lo que se paga de una vez:

| Patrón | Unidad | Precio | Horas |
|---|---|---|---|
| Servicio | el encargo | lo que paga un cliente por el encargo | las del encargo, con preparación y desplazamientos |
| Taller o formación | el grupo | plazas × precio por plaza | preparar + dar el taller entero (no se dividen entre las plazas) |
| Suscripción, clases o bonos que se pagan cada mes | la cuota del mes | lo que paga un cliente al mes | las de ese cliente en un mes |
| Encargo que dura varios meses | el mes de encargo | precio total ÷ meses | horas totales ÷ meses |
| Producto | la unidad vendida | lo que paga un cliente por una | las de entregarla |

Clientes, conversaciones y contactos se cuentan en esa unidad: en un taller, un cliente es un grupo. El precio por persona o por plaza se dice en el chat y en `precio_texto`, nunca en `precio`.

## El ancla del cliente (antes de proponer nada)
1. **Lo que paga hoy por su alternativa, o lo que le cuesta no resolverlo.** Lo preguntas con una propuesta sacada de su alternativa (`cliente`), de lo que ya existe con fuente (`a_quien_ayudo`) o de una objeción («ya pagamos un offsite con facilitador»). La cifra la da ella o una fuente con fecha; nunca de memoria. «No lo sé» vale: «sin dato», y se propone preguntárselo a un cliente de verdad.
2. **Los costes que paga ella por cada venta** (local, material, producto, desplazamiento). Primero propón que los pague el cliente aparte, como el camión de Inés: así `precio` es solo su parte. Si los paga ella, se restan antes de dividir: lo que le queda por venta = precio − costes. Si no los sabe, «sin dato». El tablero cuenta con el precio entero: si hay costes, dilo en una línea al guardar.
3. **`euros_dia` solo comprueba** si a ella le compensa. No sale de ahí el precio.

## Las cuentas (una sola definición, la del contrato)
- Sobresueldo de referencia = `euros_dia` × 30, **redondeado al euro** antes de seguir. Con 36,67 € al día: 1.100,10 → 1.100 €.
- Clientes al mes (o grupos, o cuotas) = redondeo hacia arriba de sobresueldo ÷ precio (o ÷ lo que le queda, si paga costes).
- Horas al mes = clientes al mes × horas por unidad.
- Si te dice sus dos tasas (de cada 10): conversaciones al mes = redondeo hacia arriba de clientes ÷ (`tasa_cierre` ÷ 10); contactos al mes = redondeo hacia arriba de conversaciones ÷ (`tasa_respuesta` ÷ 10). Sin tasas, no propones ninguna: el tablero lo enseña al guardar.
- Euros enteros; los euros al día, con dos decimales. Todo antes de impuestos.

## La tabla
- **Fila 1, su tarjeta de la mañana:** el precio y las horas de la elegida, en su unidad.
- **Fila 2, tu propuesta, marcada:** anclada en lo que paga hoy su cliente o en lo que le cuesta no resolverlo. Di en media línea por qué ese número frente al ancla.
- **Fila 3, solo con razón:** un caso real con fuente y fecha, u otra unidad que ella haya pedido. Nunca un nivel caro de adorno.
- Columna «Frente a la alternativa de tu cliente»: la cifra del ancla con su fuente, o «sin dato». Si es de otro país o moneda, o la página no dice la unidad («por persona» o «por grupo»), lo dices.
- Debajo, **qué cambia frente a su tarjeta**, en una línea.

## Lo que se dice siempre
- Si las horas al mes son muchas para su semana (más de unas 40), se pregunta: «Son X horas al mes. ¿Te caben?». Con «tu trabajo» solo si `CLAUDE.md` dice que trabaja.
- Si el precio es más bajo que la alternativa pero hace más cosas, se dice: le van a comparar con esa alternativa.
- El precio lo decide ella. Si elige uno que no le compensa con sus euros al día, se dice una vez («a ese precio te hacen falta X al mes») y se respeta.

## Ejemplo (Inés)
`euros_dia` = 36,67 → 1.100 € al mes. Unidad: la mudanza (un encargo). Su tarjeta de la mañana: 500 € por mudanza y 12 h; en la parte 3 subió a 16 h.

Ancla: en España no ha encontrado un servicio igual con precio publicado. Su cliente hoy paga el camión aparte y pone dos fines de semana de los hermanos. Costes que paga ella: ninguno (el camión lo paga la familia).

| | Precio por mudanza | Mudanzas al mes para tu cifra | Horas al mes | Frente a la alternativa de tu cliente |
|---|---|---|---|---|
| Tu tarjeta de esta mañana | 500 € | 3 | 48 | Dos fines de semana de los hermanos, más el camión |
| **Propuesta** | **600 €** | 2 | 32 | Se paga aparte del camión: es lo que ahorra a los hermanos, no otro camión |
| Con razón: el caso real más parecido | 800 € | 2 | 32 | En EE. UU., paquete base desde 1.499 $ (mn.gov, 20-nov-2026) |

Frente a tu tarjeta: a 600 €, una mudanza menos al mes y 16 horas menos. A 500 € necesita 48 horas al mes, que no le caben. Elige 600 €.

# Categorías de la foto del mes

Diez categorías, siempre con estas claves en minúscula (el tablero las agrupa así). Para cada una: qué entra y la propuesta de pregunta cuando se hace de palabra.

| Clave | Qué entra | Normalmente |
|---|---|---|
| `vivienda` | Alquiler o hipoteca, comunidad, IBI y basuras (anuales), derramas | Fijo |
| `suministros` | Luz, gas, agua, fibra, móvil, alarma | Fijo |
| `seguros` | Coche, hogar, salud, vida, decesos, mascota | Fijo; muchos anuales |
| `suscripciones` | Plataformas, música, nube, prensa, apps, gimnasio, cuotas de club o colegio profesional | Fijo; algunas anuales |
| `transporte` | Gasolina, abono, parking, peajes, taxis, ITV y revisiones (anuales) | Variable, salvo abono y parking |
| `comida` | Supermercado, mercado, fruterías | Variable |
| `ocio` | Bares, restaurantes, comida a domicilio, cafés, viajes, planes | Variable |
| `deudas` | Préstamos, tarjeta aplazada, financiaciones | Fijo |
| `hijos` | Colegio, comedor, extraescolares, canguro, material, pensión de alimentos | Fijo casi todo |
| `otros` | Ropa, farmacia, peluquería, regalos, comisiones del banco, efectivo, donaciones, mascotas | Variable casi todo |

Si algo no encaja, va a `otros` con un nombre claro.

## Reglas de la foto

- **Fijo** (`fijo: true`): lo pagas sí o sí, aunque cambie el importe. **Variable** (`fijo: false`): depende de lo que decidas ese mes.
- **Anual** (`anual: true`): se paga una vez al año, o cada pocos meses; se guarda dividido entre 12 y con el total en el concepto: «Seguro del coche (486 € al año)». Lo trimestral, entre 3; lo semestral, entre 6.
- **Fuente**: `"extracto"` (PDF o CSV del banco), `"excel"` (extracto en `.xlsx`), `"correo"` (Gmail), `"dictado"` (lo sabe seguro) o `"estimado"` (más o menos).
- **Nombres genéricos**: «Alquiler», no «Transf. a Fulano»; «Bizum a particulares», no el nombre de quien lo recibe.
- **No son salidas**: traspasos a otra cuenta propia, dinero que pasa al ahorro o a una inversión, pagos de una tarjeta cuyo detalle ya has contado.
- **No son entradas**: traspasos desde otra cuenta propia, sacar de los ahorros, devoluciones de una compra o Bizums que te devuelven tu parte de una cena (restan de la categoría del gasto).
- **Patrimonio**, aparte: ahorros, inversiones, plan de pensiones, una casa, una herencia. Concepto e importe total, sin números de cuenta. No cuenta en el sueldo real.

## Entradas

`tipo: "sueldo"` para la nómina y las pagas extra prorrateadas; `tipo: "otro"` para lo demás que se repite: un alquiler que cobras, una pensión, una ayuda, trabajos extra habituales. Un ingreso de una sola vez (la devolución de Hacienda, un regalo) no es una entrada del mes: pregunta si quiere apuntarlo en patrimonio.

## De palabra, de tres en tres

Con la app del banco abierta en el móvil va mucho más rápido. Si no sabe la cifra, que la estime (`"estimado"`). Las propuestas son de forma, no cifras inventadas.

1. **Ronda 1 · Casa.** Alquiler o hipoteca («__, con comunidad o sin ella»); luz, gas y agua («unos __ entre todo»); fibra y móvil («__, todo junto»).
2. **Ronda 2 · Lo que se renueva solo.** Seguros, cada uno con su precio y si es al mes o al año («coche, __ al año»); suscripciones y apps («cuáles y cuánto cada una»); préstamos o pagos aplazados («ninguno», o «__ al mes»).
3. **Ronda 3 · El día a día.** Supermercado al mes («unos __»); transporte («gasolina o abono, unos __»); salir, comer fuera y pedir a domicilio («unos __»).
4. **Ronda 4 · Lo que se olvida.** Hijos («no tengo», o «colegio y comedor, __»); ropa, farmacia y peluquería («unos __»); lo que pagas una vez al año: IBI, ITV, regalos de Navidad, vacaciones («IBI __, Navidad __»).

Al final, una pregunta de red: «¿Hay algo que pagues y no haya salido?». Propuesta: «no, creo que está todo».

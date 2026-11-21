# Qué se guarda y dónde

Fecha de hoy en formato `2026-11-21`. Antes de escribir, enseña en limpio lo que vas a guardar y pregunta «¿Lo guardo así o cambias algo?».

## `privado/datos.js`
Léelo entero, cambia solo lo tuyo y vuelve a escribirlo. No toques ni comentes las demás secciones.

Añade (o sustituye, si ya existe) la sección `oferta`, después de `cliente` (o de `a_quien_ayudo` si no hay `cliente`):

```js
  oferta: {
    nombre: "Mudanza tranquila",
    cambio: "De un piso de 90 metros lleno de cosas y una madre que no quiere irse, a su primera noche en el piso nuevo con su sillón ya en su sitio.",
    valor: [
      "Resultado: …",
      "Confianza: …",
      "Tiempo: …",
      "Esfuerzo: …"
    ],
    incluye: ["…pieza 1…", "…pieza 2…", "…pieza 3…"],
    extra: "…",
    garantia: "…",
    precio: 600,
    precio_texto: "600 € por mudanza, aparte del camión",
    horas_cliente: 16,
    primer_paso: "Una visita gratis de una hora al piso, con tu madre o tu padre delante.",
    resumen: "Ofrezco … Cuesta … El primer paso es …"
  },
```

Reglas:
- Frases completas y cortas. Sin etiqueta delante (el tablero pone la suya), salvo en `valor`, que lleva su palanca delante con dos puntos («Resultado: …»). Si no hay extra, `extra: ""`. `precio` y `horas_cliente` como números, sin símbolo; `precio_texto` es la versión que se lee.
- **`precio` es siempre el de la unidad de venta**, la misma de su tarjeta de `autopistas`: el encargo, el grupo entero o la cuota de un mes (en un encargo de varios meses, el precio de un mes). Nunca el de una plaza o una persona. `horas_cliente` son las de esa misma unidad. El precio por persona va solo en `precio_texto`: «2.400 € por grupo de hasta 12 (200 € por persona), con la cocina y el producto aparte». Así el tablero cuenta grupos y horas de verdad, no personas.
- Si hay costes que paga ella por venta, van dichos en `precio_texto` («… de los que unos 450 € son el local»): el tablero cuenta con el precio entero.
- Ninguna cifra personal (ni sueldo, ni gastos, ni hora de verdad). Clientes al mes y horas al mes no se guardan: los calcula el tablero.
- `pasos.oferta = { hecho: true, fecha: "2026-11-21" }`, añade `"oferta"` a `abiertos` si no está y la hora en `actualizado`.
- Si `datos.js` no existe, créalo con el esqueleto del contrato (`window.LUMBRE = { version: 2, … }`) y solo tu sección rellena.

## `estado.json`
- `pasos.oferta = { "hecho": true, "fecha": "2026-11-21" }`
- `publico.oferta`: el párrafo de la oferta tal como quedó (nombre delante, separado por dos puntos). Es lo que podrá acabar en su página: escrito para su cliente, sin nada íntimo.
- `publico.precio`: el mismo número que `precio`, por unidad de venta, sin símbolo (por ejemplo, `600`). El párrafo de `publico.oferta` dice la unidad («por mudanza», «por grupo de hasta 12»).
- No toques `euros_dia` ni nada más.

`CLAUDE.md` no se toca en este paso.

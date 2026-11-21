# Qué se guarda y dónde

Fecha de hoy en formato `2026-11-21`. Antes de escribir, enseña en limpio lo que vas a guardar y pregunta «¿Lo guardo así o cambias algo?».

## `privado/datos.js`
Léelo entero, cambia solo lo tuyo y vuelve a escribirlo. No toques las demás secciones.

Añade (o sustituye, si ya existe) la sección `cliente`, después de `a_quien_ayudo`:

```js
  cliente: {
    quien: "Maite, 52 (inventada). Enfermera en Getafe; su padre, de 84, vive en un cuarto sin ascensor en Carabanchel.",
    alternativa: "Lo hacen ella y su hermano los fines de semana, y los muebles los saca un vaciado que le sale casi gratis.",
    le_preocupa: "«Lo difícil no es mover cajas, es que mi padre acepte irse.»",
    cambios: [
      "Empezar preguntando qué han hecho hasta ahora: cuando ofrecí antes de preguntar, contestó «hombre, sí, supongo».",
      "Decir desde el principio que el camión lo pone otra empresa: comparó los 600 € con el camión.",
      "Preguntar pronto quién va a decírselo al padre: eso le quita el sueño, no la mudanza."
    ],
    frase_del_cliente: "«Llevo desde octubre con la frase preparada y no me sale.»"
  },
```

Reglas:
- Frases completas y cortas: el tablero las enseña en lista y sin etiquetas.
- El cliente es inventado y lo dice («inventada»). Sin nombres de personas reales.
- Nada de la conversación entera: solo esto.
- `pasos.cliente = { hecho: true, fecha: "2026-11-21" }`, añade `"cliente"` a `abiertos` si no está y la hora en `actualizado`.
- Si `datos.js` no existe, créalo con el esqueleto del contrato (`window.LUMBRE = { version: 2, … }`) y solo tu sección rellena.

## `estado.json`
- `pasos.cliente = { "hecho": true, "fecha": "2026-11-21" }`
- `publico.cliente`: **una frase publicable** que describe a su cliente de verdad (no al personaje), sin nombre inventado. Ejemplo: `"Hijos de 45 a 60 años que tienen que mudar a su madre o su padre a un piso más pequeño y no saben por dónde empezar."` Esta frase puede acabar en su página: nada íntimo ni de nadie concreto.
- No toques nada más.

`CLAUDE.md` no se toca en este paso.

**Si acepta una frase nueva:** en este paso no cambias `publico.frase10` ni `## Mi frase`. La frase nueva va escrita entera dentro del cambio que la propone (en `cambios`), y se lo dices en una línea: «Tu frase guardada sigue siendo la de antes; la nueva queda en tus cambios del tablero. Cuando vuelvas a usar tu frase, di cuál quieres». Nunca «en este paso no puedo cambiar tu frase».

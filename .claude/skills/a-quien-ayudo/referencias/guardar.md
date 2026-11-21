# Qué se guarda y dónde

Fecha de hoy en formato `2026-11-21`. Antes de escribir, enseña a la persona el bloque de `CLAUDE.md` y la sección de `datos.js` en limpio (sin llaves ni comillas de código) y pregunta «¿Lo guardo así o cambias algo?».

## Hora de verdad (solo para comparar, nunca se escribe)
Neto al mes = `numeros.neto_anual` ÷ 12. Hora de verdad = neto al mes ÷ (`contrato_mes` + `desplazamiento_mes` + `extra_mes` + `fuera_horario_mes`). La autopista paga la hora = precio ÷ horas por cliente. Al inversor le pasas solo «más», «menos» o «parecido» (parecido: menos de un 10 % de diferencia). Si falta algún dato, «sin dato».

## `privado/datos.js`
Léelo entero, cambia solo lo tuyo y vuelve a escribirlo. No toques las demás secciones.

- Añade (o sustituye, si ya existe) la sección `a_quien_ayudo`, después de `autopistas`:

```js
  a_quien_ayudo: {
    frase10: "Ayudo a los hijos a mudar a sus padres sin dramas.",
    existe: [
      "Empresas de mudanzas de Madrid: transporte y embalaje, sin trato con la familia (habitissimo.es)",
      "Ayuda a domicilio del Ayuntamiento: acompaña en gestiones, no en mudanzas (madrid.es)"
    ],
    objeciones: [
      "«Eso lo hacemos mis hermanos y yo en un fin de semana.»",
      "«No meto a una desconocida en casa de mi madre.»",
      "«Ya pago a la empresa de mudanzas; ¿encima a ti?»"
    ],
    consejo: {
      ya_lo_hizo: ["…una línea por caso, con el país…"],
      esceptico: ["«…una objeción por línea…»"],
      inversor: ["…un punto que no cuadra por línea, con su cifra y su cambio…"],
      ideas: ["…", "…", "…"],
      pregunta: "…",
      respuesta: "…con sus palabras, resumida si es larga…"
    },
    fuentes: ["habitissimo.es/empresas/mudanzas/madrid · 2026-11-20"]
  },
```

Reglas de la sección:
- Frases completas y cortas, que se lean solas: el tablero las enseña en lista y sin etiquetas.
- `consejo.ideas`: cada idea como «La idea: cómo se hace», con dos puntos; el tablero pone en negrita lo de antes de los dos puntos. Por ejemplo: «Vende primero la visita, no la mudanza: una tarde en el piso de la madre con un plano del piso nuevo».
- **Sin cifras personales:** ni sueldo, ni gastos, ni la hora de verdad en euros. El inversor escribe «paga más que tu hora de verdad», no la cifra. Sí van las cifras del negocio: precio, horas por cliente, clientes al mes, contactos.
- Sin nombres de terceros (familiares, amigos, clientes). Los negocios del consejo sí, con su fuente.
- `fuentes`: sin `https://`, con la fecha, una por línea. Al final de la sección.
- Pon también `pasos.a_quien_ayudo = { hecho: true, fecha: "2026-11-21" }`, añade `"a_quien_ayudo"` a `abiertos` si no está y la hora en `actualizado`.
- Si `datos.js` no existe, créalo con el esqueleto del contrato (`window.LUMBRE = { version: 2, … }`) y solo tu sección rellena.

## `estado.json`
- `pasos.a_quien_ayudo = { "hecho": true, "fecha": "2026-11-21" }`
- `publico.frase10 = "<la frase>"`
- No toques nada más.

## `CLAUDE.md`
Añade al final (si ya hay una sección `## Mi frase`, sustitúyela):

    ## Mi frase
    <la frase de diez palabras>

Nada más: ni objeciones, ni consejo, ni cifras.

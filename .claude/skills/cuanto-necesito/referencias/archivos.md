# Qué escribe `cuanto-necesito` y cómo

Sigue el contrato de datos de Lumbre (versión 2). Todos los importes en euros, como números sin símbolo.

## 1 · `privado/datos.js`, sección `numeros`

Es lo único que lee el tablero. **Léelo entero, cambia solo esto y vuelve a escribirlo**:
- la sección `numeros`;
- `pasos.cuanto_necesito`: `{hecho: false, fecha: null}` mientras trabajas; `{hecho: true, fecha: "AAAA-MM-DD"}` al acabar;
- `actualizado`: fecha y hora de ahora (`"2026-11-21T12:40:00"`; si no sabes la hora, una aproximada);
- `abiertos`: añade `"cuanto_necesito"` si no está, la primera vez que guardes.

No toques `participante`, `domingo`, `heridas`, `autopistas` ni las secciones de otras skills. Mejor con la herramienta de editar, sustituyendo el bloque `numeros: { … }` completo.

```js
  numeros: {
    entradas: [
      {concepto: "Nómina", importe_mes: 2150, tipo: "sueldo"},
      {concepto: "Pagas extra (2 al año, prorrateadas)", importe_mes: 358.33, tipo: "sueldo"}
    ],
    patrimonio: [
      {concepto: "Ahorros en otra cuenta", importe: 8200}
    ],
    salidas: [
      {concepto: "Alquiler", categoria: "vivienda", importe_mes: 950, fijo: true, anual: false, fuente: "excel"},
      {concepto: "Seguro del coche (486 € al año)", categoria: "seguros", importe_mes: 40.5, fijo: true, anual: true, fuente: "correo"}
    ],
    recortes: [
      {concepto: "Gimnasio: darse de baja", ahorro_mes: 39.9, guion: "Qué decir: … Qué pedir: … Si dicen que no: …", cuando: "hoy", hecho: false}
    ],
    neto_anual: 30100,
    horas: { contrato_mes: 173.3, desplazamiento_mes: 10.8, extra_mes: 17.3, fuera_horario_mes: 15.2 },
    no_nomina: { noches_mes: 4, domingos_tocados_mes: 3 },
    sobresueldo_mes: 1000
  },
```

Cuidado, porque si el archivo queda mal el tablero se queda en blanco:
- Decimales con **punto** (`40.5`), nunca con coma.
- Textos entre comillas dobles; si un texto lleva comillas dentro, usa «» o comillas simples.
- Una coma entre elementos y ninguna suelta antes de `]` o `}`.
- Lo que aún no sabes, `null`; las listas vacías, `[]`.
- Ni IBAN, ni números de cuenta, tarjeta, póliza o contrato, ni nombres de terceros.

### Si `privado/datos.js` no existe

Créalo con este esqueleto (el del contrato) y rellena solo tu sección y tus campos:

```js
window.LUMBRE = {
  version: 2,
  actualizado: "2026-11-21T09:45:00",
  participante: { nombre: "" },
  abiertos: ["lumbre"],
  pasos: {
    lumbre: {hecho: false, fecha: null}, domingo: {hecho: false, fecha: null}, heridas: {hecho: false, fecha: null},
    cuanto_necesito: {hecho: false, fecha: null}, autopistas: {hecho: false, fecha: null}, a_quien_ayudo: {hecho: false, fecha: null},
    cliente: {hecho: false, fecha: null}, oferta: {hecho: false, fecha: null}, web: {hecho: false, fecha: null},
    publicar: {hecho: false, fecha: null}, contactos: {hecho: false, fecha: null}, partida: {hecho: false, fecha: null}
  },

  domingo: { nota: null, martes_igual: "", martes_quiero: "", obstaculo: "" },

  heridas: { hecho: false, lo_que_elijo: null },

  numeros: {
    entradas: [], patrimonio: [], salidas: [], recortes: [],
    neto_anual: null,
    horas: { contrato_mes: null, desplazamiento_mes: null, extra_mes: null, fuera_horario_mes: null },
    no_nomina: { noches_mes: null, domingos_tocados_mes: null },
    sobresueldo_mes: null
  },

  autopistas: {
    fortalezas: [], intereses: [], activos: [], lista: [], finalistas: [], proyeccion: {}, elegida: null, explorar: false
  }
};
```

Pon su nombre de pila en `participante.nombre` si lo sabes por `CLAUDE.md` o `estado.json`.

## 2 · `privado/numeros.json`

Para las skills que vienen después. JSON estricto: claves entre comillas, decimales con punto, sin comentarios. Mismas claves que la sección `numeros`, más tres bloques: `mes` (el mes de la foto), `calculado` y `comprobacion`.

```json
{
  "version": 2,
  "actualizado": "2026-11-21T12:40:00",
  "mes": "2026-10",
  "entradas": [],
  "patrimonio": [],
  "salidas": [],
  "recortes": [],
  "neto_anual": 30100,
  "horas": {"contrato_mes": 173.3, "desplazamiento_mes": 10.8, "extra_mes": 17.3, "fuera_horario_mes": 15.2},
  "no_nomina": {"noches_mes": 4, "domingos_tocados_mes": 3},
  "sobresueldo_mes": 1000,
  "calculado": {
    "ingresos_mes": 2568.33,
    "gastos_mes": 2451.63,
    "sueldo_real": 116.70,
    "objetivo_recorte": 490.33,
    "recorte_conseguido": 124.40,
    "neto_mes": 2508.33,
    "hora_contrato": 14.47,
    "hora_verdad": 11.58,
    "euros_dia": 33.33
  },
  "comprobacion": {
    "con_extracto": true,
    "entradas_extracto": 2210.00,
    "salidas_extracto": 2334.47,
    "traspasos_propios": 200.00,
    "variacion_saldo": -324.47,
    "diferencia": 0.00,
    "margen": 233.45,
    "cuadra": true,
    "nota": ""
  }
}
```

- En `calculado`, todo a dos decimales. Lo que no se puede calcular todavía, `null`.
- Sin extracto: `"con_extracto": false` y el resto de `comprobacion` en `null`.
- En `comprobacion` no van saldos ni números de cuenta: solo sumas y la diferencia.

## 3 · `privado/mis-numeros.csv`

Para abrir con doble clic en Excel en español. Reglas:
- **Empieza con el carácter BOM** (`﻿`, invisible) para que Excel lea bien las tildes. Sin línea `sep=;` (con ella, Excel ignora el BOM).
- Separador `;`. Decimales con **coma** (`40,50`), sin separador de miles (`2150,00`, no `2.150,00`).
- Si un texto lleva `;` o comillas, ponlo entre comillas dobles. Mejor evitarlo.
- Una fila por línea. Primero el detalle y, tras una línea vacía, el resumen.

```
Bloque;Concepto;Categoría;Importe (€);Fijo;Anual;Fuente o cuándo
Entradas;Nómina;;2150,00;;;sueldo
Patrimonio;Ahorros en otra cuenta;;8200,00;;;no cuenta en el sueldo real
Salidas;Alquiler;vivienda;950,00;sí;no;excel
Recortes;Gimnasio: darse de baja;;39,90;;;hoy

Resumen;Ingresos al mes;;2568,33;;;
Resumen;Gastos al mes;;2451,63;;;
Resumen;Sueldo real (lo que te queda el día 2);;116,70;;;
Resumen;Objetivo del recorte (20 % de los gastos);;490,33;;;
Resumen;Recorte conseguido;;124,40;;;
Resumen;Neto al mes (neto anual entre 12);;2508,33;;;
Resumen;Horas al mes según el contrato;;173,3;;;
Resumen;Horas al mes de verdad;;216,6;;;
Resumen;Tu hora según el contrato;;14,47;;;
Resumen;Tu hora de verdad;;11,58;;;
Resumen;Noches al mes que el trabajo te quita el sueño;;4;;;
Resumen;Domingos por la tarde tocados al mes;;3;;;
Resumen;Sobresueldo al mes;;1000,00;;;
Resumen;Euros al día;;33,33;;;
```

Las filas del resumen que aún no tienen dato se omiten. Ejemplo completo: `caso-resuelto.md`.

Comprobado el 20-nov-2026: un archivo así, escrito con la herramienta de escribir de Claude, se abre con doble clic en Excel para Mac (región España) con las columnas separadas, las tildes bien y los importes como números. Sin el BOM, columnas e importes salen igual de bien, pero las tildes salen rotas («N√≥mina»): si no consigues ponerlo, el archivo sigue sirviendo. En Windows, sin probar.

## 4 · `estado.json`

Al acabar, léelo, cambia solo esto y vuelve a escribirlo:
- `pasos.cuanto_necesito`: `{"hecho": true, "fecha": "AAAA-MM-DD"}`
- `publico.euros_dia`: el número con dos decimales (`33.33`)

Nada más de este bloque va a `publico`: ni el sueldo, ni los gastos, ni las horas. Si `estado.json` no existe, créalo con el esqueleto del contrato:

```json
{
  "version": 2,
  "participante": "",
  "pasos": {"cuanto_necesito": {"hecho": true, "fecha": "2026-11-21"}},
  "publico": {"autopista": null, "frase10": null, "cliente": null, "oferta": null, "precio": null, "euros_dia": 33.33, "voz": null, "web": null}
}
```

## 5 · Cuándo guardar

| Momento | Qué |
|---|---|
| Al cerrar la parte 1 | `entradas`, `patrimonio`, `salidas`; `abiertos`; `numeros.json` con `comprobacion`; CSV |
| Al cerrar la parte 2 | `recortes`; `numeros.json`; CSV |
| Al volver de la pausa, si añade un recorte | `recortes` |
| Tras las rondas de la parte 4 | `neto_anual`, `horas`, `no_nomina`; `numeros.json`; CSV |
| Tras el sobresueldo | `sobresueldo_mes`; `pasos.cuanto_necesito` hecho; `numeros.json` y CSV completos; `estado.json` |

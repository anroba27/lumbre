# Guiones de llamada

Genéricos a propósito: no recomiendan ninguna compañía ni producto. Adáptalos con las cifras de la persona (lo que paga, cuándo renueva) y con su forma de hablar. Si dice el nombre de su compañía, úsalo; no la valores.

## Para todas las llamadas

- **Nunca en altavoz ni en la sala**: te piden DNI, número de póliza o de cliente. Sal fuera.
- **Ten a mano**, en papel o en la app (no me los digas ni los escribas aquí): DNI, número de póliza o de cliente, lo que pagas ahora y cuándo renueva.
- **Antes de llamar**, mira qué cobra otra compañía por lo mismo (un comparador o la web de otra). Con una cifra delante, la conversación cambia.
- **Pide hablar con bajas o con retención.** Suelen ser quienes pueden mejorar el precio.
- **Tono**: amable y firme. No hace falta justificarse.
- **Al acabar**: pide que te manden por escrito o por correo lo que te ofrecen, y apunta en un papel el día y con quién hablaste.
- **Si te dicen que no**: «Gracias. Entonces, ¿qué tengo que hacer para darme de baja?». A veces la oferta llega ahí. Si no llega, no decidas en caliente: tienes hasta el lunes para comparar.
- Muchas no atienden en sábado. Si no contestan, la llamada va al lunes.

---

## 1 · Seguros (coche, hogar, salud, vida)

**Ten a mano**: la póliza o la app, el precio actual, la fecha de renovación, los años que llevas y si has tenido partes.

**Qué decir**
> Hola, llamo por mi seguro de [coche]. Me renueva en [marzo] y este año pago [486 €]. He visto precios más bajos por lo mismo y antes de cambiarme quería saber qué podéis hacer.

**Qué pedir**
- Que te igualen o mejoren el precio de la otra oferta.
- Que te expliquen qué cubre la póliza y qué cambiaría el precio. Qué quitar o mantener lo decide la persona; tú no lo recomiendas.
- Si pagas en varios plazos, cuánto ahorras pagando de una vez.

**Si dicen que no**
- Pregunta hasta qué fecha puedes avisar de que no renuevas y cómo hay que hacerlo (por escrito, por correo, en la web). Apúntalo en el calendario.
- No te quedes sin seguro obligatorio (el del coche lo es) mientras cambias: contrata el nuevo antes de dar de baja el viejo.

**Recorte**: lo que pidas bajar al año, dividido entre 12.

---

## 2 · Teléfono e internet

**Ten a mano**: la última factura, qué tienes contratado (fibra, líneas, televisión) y si tienes permanencia.

**Qué decir**
> Hola, tengo fibra y [dos] líneas y pago [62 €] al mes. Estoy mirando otras compañías y quería ver si me podéis mejorar la tarifa antes de irme.

**Qué pedir**
- La misma tarifa que dan a los clientes nuevos.
- Quitar lo que no usas: una línea, la televisión, más datos de los que gastas.
- Si te ofrecen algo, pregunta si lleva permanencia y hasta cuándo.

**Si dicen que no**
- Pregunta si tienes permanencia, hasta cuándo y cuánto te costaría salir.
- Sin permanencia, puedes irte cuando quieras. La portabilidad la gestiona la compañía nueva.

**Recorte**: la diferencia al mes entre lo que pagas y lo que pides.

---

## 3 · Suscripciones (plataformas, apps, gimnasio, prensa)

No hace falta llamar: casi todas se dan de baja desde la web o la app, en dos minutos.

**Antes**: pregunta a la persona cuándo usó cada una por última vez. Propuesta de criterio: lo que no has usado en el último mes, fuera.

**Qué hacer**
- Darse de baja desde la cuenta (en las del móvil, desde los ajustes de suscripciones del teléfono).
- Si quieres seguir, mira si hay un plan más barato (con anuncios, compartido o anual).
- Gimnasio: la baja suele pedirse con antelación y a veces por escrito. Pregunta en recepción o mira el contrato.

**Si no te deja**: busca «cómo darse de baja de [servicio]»; si cobran después de la baja, reclama con el justificante.

**Recorte**: lo que cuesta al mes cada una que quitas.

---

## 4 · Luz y gas

**Ten a mano**: la última factura (potencia contratada, precio del kWh y si tienes servicios añadidos como mantenimiento).

**Qué decir**
> Hola, quería revisar mi tarifa de luz. Pago unos [68 €] al mes y quiero saber si hay una opción mejor para mi consumo.

**Qué pedir**
- Qué tarifas tienen hoy y cuál te sale mejor con tu consumo real.
- Quitar servicios añadidos que no usas (mantenimiento, seguros de la factura).
- Si la potencia contratada es más de la que necesitas: pregunta cuánto ahorrarías bajándola y si el cambio tiene coste.

**Si dicen que no**: pregunta si tienes permanencia; compara con otra comercializadora y, si te cambias, lo gestiona la nueva.

**Recorte**: la diferencia al mes que esperas, como objetivo.

---

## 5 · Comisiones del banco (si salen en el extracto)

**Qué decir**
> Hola, me estáis cobrando [5 €] al mes de mantenimiento. ¿Qué tengo que cumplir para no pagarlo?

**Qué pedir**: que te la quiten o que te digan qué condición te la quita (nómina, recibos, uso de la tarjeta).

**Recorte**: la comisión al mes.

---

## Cómo guardar el guion en `recortes`

En `guion` va una versión de tres líneas, sin números de póliza ni nombres de personas:

    Qué decir: llamo por mi seguro de coche, renueva en marzo, pago 486 € y he visto precios más bajos. Qué pedir: igualar la otra oferta o quitar coberturas que no uso. Si dicen que no: preguntar hasta cuándo puedo avisar de que no renuevo y comparar hasta el lunes.

`cuando`: `"hoy"` si sale a llamar ahora, `"lunes"` si no. `hecho`: `false` hasta que la persona diga que lo ha hecho.

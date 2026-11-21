# Caso resuelto · Irene

Persona inventada. Sirve para saber qué tiene que quedar escrito y para comprobar que las cuentas cuadran al céntimo con las fórmulas del contrato. **No lo enseñes a la persona ni copies sus cifras como propuesta.**

Irene trabaja por cuenta ajena con 14 pagas, vive de alquiler y tiene coche. Deja en `privado/extractos/` el Excel de octubre de 2026 que descarga de su banco: 133 movimientos.

## Parte 1 · La foto del mes

**Leer el Excel.** Claude avisa de que va a usar `unzip` y que la app pedirá permiso. Mira el tamaño con `unzip -l` (la hoja pesa 25.047 bytes, por debajo del tope de 28.000) y lee `workbook.xml` (una hoja, «Movimientos»), `sharedStrings.xml` (36 textos) y `sheet1.xml`. Las fechas salen como 46296 (1 de octubre) a 46326 (31 de octubre). La cabecera trae el IBAN y el nombre del titular: no se copian.

**Lo que hay en el extracto** (sumado por Claude):

| | Euros |
|---|---|
| Entradas: nómina (2.150,00) y un Bizum por la plaza de garaje (60,00) | 2.210,00 |
| Salidas, sin el traspaso | 2.334,47 |
| Traspaso a su cuenta de ahorro (no es gasto) | 200,00 |
| Saldo inicial / final | 3.412,18 / 3.087,71 |

**Comprobación.** 2.210,00 − 2.334,47 − 200,00 = −324,47. El saldo varió 3.087,71 − 3.412,18 = −324,47. Diferencia: 0,00. Margen: 10 % de las salidas, 2.334,47 = 233,45. Cuadra: «Este extracto está bien leído. Lo que pagues por otro lado no sale aquí». En la primera ronda de dudas va también «¿Pagas algo con otra tarjeta, otra cuenta o en efectivo?»; aquí, «no».

**Agrupar y nombrar.** 30 compras de supermercado → «Supermercado» 410,00. 80 cafés, bares y pedidos → «Comidas fuera, cafés y a domicilio» 185,00. La transferencia a un particular con el concepto «alquiler» → «Alquiler», sin el nombre. El Bizum que le hace otra persona por la plaza → «Alquiler de la plaza de garaje», sin el nombre. El recibo del seguro de salud trae el número de póliza: no se copia. Dos retiradas de cajero de 50 € → Claude pregunta en qué se van; Irene: «mercadillo y propinas».

**Rondas con propuesta.** Ejemplo de la primera:
> 1. Veo la nómina de 2.150 €. ¿Cobras pagas extra? Propuesta: «sí, dos al año, de lo mismo».
> 2. El efectivo (100 €): ¿en qué se va sobre todo? Propuesta: «en cosas del día a día, en otros».
> 3. ¿Pagas algo una vez al año? Propuesta: «seguro del coche, de hogar, IBI, Amazon Prime, regalos de Navidad».

**Gmail** (con permiso): seguro del coche, 486 € al año; seguro de hogar, 198 € al año; Amazon Prime, 49,90 € al año. **De palabra**: IBI, 312 € al año (seguro); regalos de Navidad, unos 360 € al año (estimado).

**La foto:**

| Entradas | Tipo | Al mes |
|---|---|---|
| Nómina | sueldo | 2.150,00 |
| Pagas extra (2 al año, prorrateadas): 2.150 × 2 ÷ 12 | sueldo | 358,33 |
| Alquiler de la plaza de garaje | otro | 60,00 |
| **Ingresos al mes** | | **2.568,33** |

Patrimonio, aparte: ahorros en otra cuenta, 8.200 €. No cuenta.

| Salida | Categoría | Al mes | Fijo | Anual | Fuente |
|---|---|---|---|---|---|
| Alquiler | vivienda | 950,00 | sí | no | excel |
| IBI (312 € al año) | vivienda | 26,00 | sí | sí | dictado |
| Luz | suministros | 68,40 | sí | no | excel |
| Gas | suministros | 31,20 | sí | no | excel |
| Fibra y móvil | suministros | 62,00 | sí | no | excel |
| Seguro de salud | seguros | 54,00 | sí | no | excel |
| Seguro del coche (486 € al año) | seguros | 40,50 | sí | sí | correo |
| Seguro de hogar (198 € al año) | seguros | 16,50 | sí | sí | correo |
| Gimnasio | suscripciones | 39,90 | sí | no | excel |
| Netflix | suscripciones | 13,99 | sí | no | excel |
| Spotify | suscripciones | 11,99 | sí | no | excel |
| iCloud | suscripciones | 2,99 | sí | no | excel |
| Amazon Prime (49,90 € al año): 4,1583… → | suscripciones | 4,16 | sí | sí | correo |
| Gasolina | transporte | 120,00 | no | no | excel |
| Supermercado | comida | 410,00 | no | no | excel |
| Comidas fuera, cafés y a domicilio | ocio | 185,00 | no | no | excel |
| Préstamo del coche | deudas | 210,00 | sí | no | excel |
| Ropa | otros | 70,00 | no | no | excel |
| Efectivo (mercadillo y propinas) | otros | 100,00 | no | no | excel |
| Comisión de la cuenta | otros | 5,00 | sí | no | excel |
| Regalos de Navidad (360 € al año) | otros | 30,00 | no | sí | estimado |
| **Gastos al mes** | | **2.451,63** | | | |

Fijos: 1.536,63. Variables: 915,00. Las salidas que vienen del extracto suman 2.334,47, lo mismo que el extracto: no se ha perdido ninguna.

**Sueldo real** = 2.568,33 − 2.451,63 = **116,70** → en pantalla, «117 €».

## Parte 2 · Baja un 20 %

Objetivo: 0,20 × 2.451,63 = 490,326 → **490,33** (en pantalla, 490 €).

| Recorte | Al mes | Cuándo |
|---|---|---|
| Fibra y móvil: pedir bajar de 62 a 45 € | 17,00 | hoy |
| Seguro del coche: pedir 90 € menos al año (90 ÷ 12) | 7,50 | lunes |
| Gimnasio: darse de baja | 39,90 | hoy |
| Comidas a domicilio: la mitad (lo añade Irene) | 60,00 | hoy |
| **Recorte conseguido** | **124,40** | |

124,40 es el 25 % del objetivo. Claude lo dice sin dramatizar y pregunta si quiere añadir algo; Irene dice que no y se queda así.

## Parte 3 · Pausa

Claude guarda, pide cerrar el portátil y, al volver, hace la pregunta abierta. Irene: «ninguno, sigo».

## Parte 4 · Tu hora de verdad

| Dato | Lo que dice Irene | Al mes (× 52 ÷ 12, un decimal) |
|---|---|---|
| Neto | 2.150 € en 14 pagas → `neto_anual` = 30.100 | Neto al mes = 30.100 ÷ 12 = 2.508,333… |
| Contrato | 40 h a la semana | 173,3 |
| Desplazamiento | 50 min al día, 3 días = 2,5 h a la semana | 10,8 |
| Horas extra sin pagar | 4 a la semana | 17,3 |
| Correo y móvil fuera de horario | 30 min al día y una hora el domingo = 3,5 h a la semana | 15,2 |
| Noches sin dormir por el trabajo | 4 al mes | (contador) |
| Domingos tocados | 3 al mes | (contador) |

- Hora según el contrato = 2.508,333… ÷ 173,3 = 14,4739… → **14,47 €**
- Hora de verdad = 2.508,333… ÷ (173,3 + 10,8 + 17,3 + 15,2 = 216,6) = 11,5805… → **11,58 €**

(Si se redondea antes el neto a 2.508,33, salen las mismas cifras.)

Sobresueldo: acepta la propuesta, 1.000 € al mes. **Euros al día** = 1.000 ÷ 30 = 33,333… → **33,33 €**.

## Lo que queda escrito

- `privado/datos.js`: la sección `numeros` del ejemplo de `archivos.md`, completa; `pasos.cuanto_necesito = {hecho: true, fecha: "2026-11-21"}`; `"cuanto_necesito"` en `abiertos`.
- `privado/numeros.json`: igual, con `calculado` (2568.33, 2451.63, 116.70, 490.33, 124.40, 2508.33, 14.47, 11.58, 33.33) y `comprobacion` (2210.00, 2334.47, 200.00, −324.47, diferencia 0.00, margen 233.45, cuadra).
- `privado/mis-numeros.csv`: 30 filas de detalle y 14 de resumen.
- `estado.json`: `pasos.cuanto_necesito` hecho y `publico.euros_dia = 33.33`.

Los archivos completos de este caso, y el extracto en CSV y en Excel, están en la carpeta `prueba/` de la skill (no se instala con ella).

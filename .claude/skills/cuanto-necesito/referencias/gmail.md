# Buscar recibos en Gmail

Solo si el conector de Gmail está activo en la app (tienes herramientas de Gmail para buscar y leer). Si no lo está, no expliques cómo activarlo: seguid por categorías. Con Outlook o Hotmail, igual: sin conector, se hace de palabra.

## Antes

Pide permiso con una frase:
> ¿Busco en tu Gmail recibos de seguros, luz, teléfono y suscripciones del último año? Solo leo; no envío, no borro ni toco nada.

## Reglas

- **Solo buscar y leer.** Nunca envías, respondes, reenvías, archivas, etiquetas, marcas, borras ni descargas adjuntos.
- De cada correo sacas cuatro cosas: la compañía, qué es, el importe y cada cuánto se paga (y la fecha de renovación si sale). Nada más.
- No copias a ningún archivo números de póliza, de contrato, de cliente o de factura, direcciones ni el DNI. Tampoco los repites en el chat.
- Si un correo es personal o no tiene que ver, no lo comentes.
- Lo que encuentres se apunta con `fuente: "correo"`, y la persona confirma cada línea antes de guardarla.
- Si una búsqueda no da nada, no insistas: pasa a la siguiente.

## Búsquedas

Sintaxis de Gmail. Úsalas tal cual; si una devuelve demasiado, añade `has:attachment`.

**Seguros** (lo que más se olvida, porque muchos son anuales):
```
newer_than:13m (seguro OR póliza OR "recibo de prima" OR renovación) (Mapfre OR Mutua OR AXA OR Allianz OR "Línea Directa" OR Generali OR Zurich OR Reale OR Pelayo OR Liberty OR Sanitas OR Adeslas OR DKV OR Asisa OR Santalucía OR Ocaso OR Verti OR Qualitas)
```
```
newer_than:13m subject:(seguro OR póliza OR renovación OR vencimiento)
```

**Luz y gas** (puede ir cada dos meses):
```
newer_than:4m (factura OR "tu factura") (luz OR electricidad OR gas OR Iberdrola OR Endesa OR Naturgy OR Repsol OR TotalEnergies OR Holaluz OR "Octopus" OR "Curenergía" OR "Energía XXI")
```

**Agua** (a veces trimestral):
```
newer_than:6m (factura OR recibo) (agua OR "Canal de Isabel II" OR Aqualia OR "Aigües" OR Emasesa OR Emaya)
```

**Teléfono e internet**:
```
newer_than:3m (factura OR "tu factura") (Movistar OR Vodafone OR Orange OR Yoigo OR MásMóvil OR Digi OR Lowi OR Pepephone OR O2 OR Jazztel OR Simyo OR Finetwork OR Avatel)
```

**Suscripciones** (mensuales y anuales):
```
newer_than:13m (recibo OR receipt OR "tu suscripción" OR "your subscription" OR renovación OR "se ha renovado" OR "has been renewed") (Netflix OR Spotify OR "Amazon Prime" OR "Disney+" OR HBO OR Max OR Filmin OR DAZN OR "Apple" OR iCloud OR "Google One" OR "YouTube Premium" OR Audible OR Kindle OR "Microsoft 365" OR Canva OR ChatGPT OR Claude OR Strava)
```
```
newer_than:13m subject:(suscripción OR subscription OR "renovación automática" OR "auto-renewal")
```

**Gimnasio y cuotas**:
```
newer_than:3m (cuota OR recibo OR mensualidad) (gimnasio OR gym OR club OR colegio OR asociación)
```

**Lo anual de la casa y el coche** (IBI, basuras, ITV):
```
newer_than:13m (IBI OR "impuesto de bienes inmuebles" OR "tasa de basuras" OR ITV OR "impuesto de circulación" OR IVTM)
```

## Cómo enseñarlo

Una tabla corta con lo encontrado, agrupado, y debajo las dudas de tres en tres:
> Encontrado en tu correo: seguro del coche, 486 € al año, renueva en marzo · seguro de hogar, 198 € al año · Amazon Prime, 49,90 € al año.
> 1. ¿El seguro del coche sigue en vigor? Propuesta: «sí».
> 2. …

Lo que ya está en el extracto no se apunta dos veces.

Sin probar al escribir esto (20-nov): que el conector de Gmail funcione dentro de la pestaña Code con una cuenta Pro. Se comprueba en el ensayo.

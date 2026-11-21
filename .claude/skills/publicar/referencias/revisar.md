# Repaso antes de publicar

Lo haces tú, leyendo `web/index.html`, antes del mensaje de la parte 1. No es un juicio de la página (es suya, con sus palabras y su estilo): es ver qué sale a la calle y que nada se escape.

## Lo que enseñas (siempre)

1. **Título:** el texto de `<title>`. Si no hay, el primer `<h1>`. Es lo que se ve en la pestaña y al compartir el enlace.
2. **Contacto:** todo lo que permite localizarla, una vez cada cosa:
   - los enlaces `mailto:` (el correo), `tel:` (el teléfono), `https://wa.me/…` o `api.whatsapp.com` (su número de WhatsApp, que queda a la vista), y los de redes (Instagram, LinkedIn…);
   - correos, teléfonos o direcciones postales escritos en el texto.
   Si no hay ninguno: «ninguno: nadie podrá escribirte desde la página».
3. **Cifras:** cada número que se lee en la página (en el texto visible, no en el código ni en los estilos): precios, horas, plazos, años, porcentajes. Cada una con dos o tres palabras de alrededor, por ejemplo «390 € la mudanza», «en 48 horas». Si no hay: «ninguna».

## Lo que para (dilo antes de preguntar)

Si encuentras algo de esto, dilo en una línea cada cosa y pregunta si lo arreglas aquí o lo deja así. No publiques hasta que ella decida.

| Qué | Cómo se ve | Qué dices |
|---|---|---|
| Huecos sin rellenar | `{{` en cualquier sitio | «Queda un hueco sin rellenar: …» |
| Botón que no lleva a nada | un enlace del botón con `href="#"`, vacío o sin `href` | «El botón no lleva a ningún sitio: nadie podría escribirte» |
| Una cifra de la mañana | aparece el número de `estado.json > publico.euros_dia` (con o sin decimales, con coma o punto) | «Aparece una cifra que coincide con tus números de la mañana (…). ¿Seguro que va en la página?» |
| Archivos que no van a subir | una imagen, estilo o enlace a un archivo de su carpeta (`src` o `href` que no empieza por `https://`, `http://`, `data:`, `mailto:`, `tel:` o `#`) | «La imagen … no se verá en internet: solo sube este archivo» |
| Franja de ejemplo | `class="ejemplo"` o el texto «Página de ejemplo» | «Lleva la franja de página de ejemplo» |
| Algo que parece íntimo | sueldo, gastos, deudas, salud, nombres de familiares o de su empresa actual | «Esto es tuyo y la página es pública: …. ¿Lo dejamos fuera?» |

Si pide arreglarlo aquí, cambia **solo** eso en `web/index.html` y vuelve a enseñar el resumen entero. Si dice que lo deja así, respétalo (salvo el botón a `#`: en ese caso, pídele el correo o el número de verdad).

## Lo que no para (avisa en una línea, si sale)

- Lleva su número de WhatsApp o de teléfono: «Tu número quedará a la vista de cualquiera que tenga el enlace».
- Lleva su apellido o su dirección postal completa: «Sale tu apellido (o tu dirección): ¿lo quieres así?».
- Lleva `<meta name="robots" content="noindex">`: no pasa nada, no lo menciones.

## Lo que no haces

- No opinas del diseño ni del texto, ni propones mejoras: eso fue `/web`.
- No inventas ni completas nada.
- No lees `privado/` para comparar: la única cifra privada que miras es `euros_dia`, que está en `estado.json`.

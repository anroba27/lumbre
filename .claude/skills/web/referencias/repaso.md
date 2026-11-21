# El repaso antes de enseñarla

Léete `web/index.html` entero y comprueba, una a una. Si algo falla, lo arreglas y no lo cuentas como un logro.

## Nada íntimo
- Ninguna cifra que no sea el precio: ni euros al día, ni sobresueldo, ni sueldo, ni horas de su trabajo.
- Ningún nombre de familiares, amigos ni clientes reales. Ninguna escena de su infancia o de su casa que no haya pedido ella para la página.
- Ni su empresa actual ni su cargo, salvo que lo haya pedido.
- Ni teléfono, ni apellido, ni dirección, salvo los que ella ha dado para la página.

## Nada inventado
- Ni testimonios, ni nombres de clientes, ni «X familias ya…», ni logos, ni premios, ni plazas o fechas que caducan.
- Nada que dé a entender que ya tiene clientes o experiencia que ella no ha contado: ni «ahora acompaño a otras familias», ni «llevo años ayudando a…», ni «mis clientes dicen…». Si no ha vendido todavía, se dice en futuro o como oferta («Te acompaño a…», «Lo hago para ti»). Su prueba es solo la que ella ha dado (lo que hizo con su madre, su oficio).
- Las frases de «¿Te suena?» van sin comillas, sin nombre y sin decir que alguien las dijo.
- Precio, piezas, garantía y primer paso coinciden con `publico.oferta` y `publico.precio`, o con lo que ella ha cambiado hoy. El precio lleva la unidad que dice el párrafo de la oferta (por encargo, por grupo, al mes), nunca solo la cifra.

## Profesión regulada o empleo con exclusividad
Si `CLAUDE.md` dice que es de sanidad, derecho, psicología, función pública o banca, o si la página se apoya en su profesión («médica», «abogada», «quince años en banca»):
- **Una línea de límites, visible:** quién decide qué. Por ejemplo: «No sustituyo a vuestra médica: lo que cambia en un tratamiento lo decide ella». Va al final de `bio` y, si hay preguntas, también como respuesta a «¿Esto sustituye a ___?».
- **Ninguna promesa de acto profesional:** ni «sabrás qué pastilla le han cambiado», ni «te diré si el diagnóstico está bien». Lo que ofrece es entender y preparar, no decidir.
- **El nombre no lleva palabras de acto profesional** («consulta», «diagnóstico», «tratamiento», «asesoría jurídica», «terapia») si no ejerce eso por su cuenta. Vale también para el nombre que sale de su autopista.
- No frena la publicación: se arregla en la página y se sigue.

## Funciona
- Ningún `{{` en el archivo. Ningún comentario de la plantilla.
- Todos los `data-cta` llevan el mismo `href`, que empieza por `mailto:` o `https://wa.me/`. Nunca `#`.
- Un solo archivo de menos de 2 MB (`wc -c web/index.html`): estilos, movimiento y fotos dentro. Ninguna hoja de estilo, `<script src>` ni imagen de fuera.
- Como mucho una línea de fuentes de Google (la del reparto o la de su piel). Ningún otro recurso externo.
- Ningún `.example` ni contacto de muestra.
- Sin franja de ejemplo ni `noindex` (salvo en un ejemplo).
- `<html lang="es">`, `<title>` y `meta description` con su oferta.

## Se lee
- El titular dice qué cambia para su cliente, no lo que hace ella. Doce palabras o menos.
- Ninguna frase de web genérica («soluciones a medida», «nos apasiona», «calidad y compromiso»).
- Su voz se nota: al menos tres expresiones suyas en la página.

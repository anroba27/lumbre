# Qué va en cada hueco de la plantilla

Todo sale de `CLAUDE.md`, de `estado.json > publico` (`frase10`, `cliente`, `oferta`, `precio`) y de lo que ha dicho hoy en esta conversación. Nada de `privado/`.

| Hueco | Qué va | Regla |
|---|---|---|
| `nombre_oferta` | Nombre de su oferta (la parte de `publico.oferta` antes de los dos puntos) | Si no hay, su autopista en dos o tres palabras. Sin palabras de acto profesional («consulta», «diagnóstico», «tratamiento», «terapia») salvo que ejerza eso por su cuenta: si el nombre de la oferta o de la autopista las lleva, propón otro y pregunta |
| `nombre_persona` | Su nombre de pila (con apellido solo si lo pidió) | — |
| `para_quien_corto` | A quién, en cinco palabras («Para hijos con padres mayores») | De `publico.cliente` |
| `titular` | Lo que cambia para su cliente, en 12 palabras o menos | Puede ser su frase de diez palabras tal cual o girada hacia el cliente («Tus padres a su piso nuevo, sin dramas») |
| `frase_apoyo` | Para quién es y qué recibe, en una o dos frases | Con palabras de su cliente |
| `texto_boton` / `texto_boton_corto` | Verbo + lo que pasa al pulsar («Pide la visita gratis» / «Escríbeme») | Nunca «Enviar» ni «Más información» |
| `nota_boton` | Lo que quita miedo a pulsar («La primera visita no tiene compromiso») | Solo si es verdad en su oferta |
| `enlace_boton` | `mailto:direccion?subject=…` o `https://wa.me/34XXXXXXXXX?text=…` con el texto codificado | Lo da ella. Los cuatro botones, el mismo |
| `titulo_hoy`, `frase_cliente_1`, `frase_cliente_2`, `cierre_hoy` | La escena de hoy de su cliente (bajo el antetítulo «¿Te suena?»); dos frases en primera persona, como las pensaría él | **No son testimonios:** sin comillas, sin nombre y sin decir que alguien las dijo |
| `titulo_como`, `paso_N_titulo`, `paso_N_texto` | Cómo funciona, en tres pasos de su oferta | El primero es su primer paso |
| `pieza_N_titulo`, `pieza_N_texto` | Lo que incluye (de `publico.oferta`) | Las que haya, de dos a cuatro |
| `extra` | El extra si lo hay; si no, se borra el párrafo | — |
| `precio`, `unidad_precio` | `publico.precio` y su unidad tal como la dice el párrafo de `publico.oferta` («por mudanza, aparte del camión», «por grupo de hasta 12, 200 € por persona») | `publico.precio` es por unidad de venta, nunca por persona: la unidad va siempre. Si no hay precio, se borra el bloque de cifra y se pone «Escríbeme y te cuento» |
| `garantia` | Lo que se compromete a entregar o la garantía de su oferta | Solo lo que diga su oferta |
| `titulo_quien`, `bio` | Por qué ella, en una línea: una prueba concreta de algo que ya ha hecho; una o dos frases de quién es | La prueba sale de `CLAUDE.md` o de lo que diga aquí, no del manifiesto. Sin su empresa actual salvo que lo pida. Sin nada de su familia salvo que ella lo diga para la página. Si es profesión regulada, la línea de límites va al final (`repaso.md`) |
| `linea_1` a `linea_5` | Las cinco líneas del manifiesto | Tal cual quedaron |
| `pregunta_N`, `respuesta_N` | Tres preguntas que se haría su cliente antes de escribirle (precio, confianza, qué tiene que hacer él) | Respuestas cortas y verdaderas. Si no sabes la respuesta, pregúntasela |
| `titulo_final`, `texto_final` | Una invitación a dar el primer paso | Sin urgencia inventada |
| `zona`, `contacto_visible` | Ciudad o barrio si quiere; el correo o «WhatsApp» | Si no quiere zona, se borra |
| `franja_ejemplo` | Solo en ejemplos | En su página, se borra el `<div>` entero |

Si una sección se queda sin contenido de verdad, bórrala entera antes que rellenarla con frases de relleno.

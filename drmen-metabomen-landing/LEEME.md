# Landing METABOMEN +40 · estilo TALA para hombres · Shopify

Misma estructura que la landing de TALA, adaptada a hombres +40. Ángulo: **envejecimiento** · titular "Tenés 45. ¿Por qué te sentís de 60?" · concepto "No es la edad. Es el desgaste."
Se compra en la misma página (sección 08) y va directo al checkout.

## Cómo se arma
1. Tienda online > Personalizar > nuevo **template de página** (ej. `page.metabomen-40`).
2. Agregar 17 secciones **Liquid personalizado** en este orden:

| # | Archivo | Sección (equivalente en TALA) |
|---|---|---|
| 00 | `00-ocultar-header-footer.liquid` | Oculta header, ticker y footer del theme Shrine solo en esta página |
| 01 | `01-estilos-hero.liquid` | **Estilos de todo** + hero con foto de fondo, titular y CTA |
| 02 | `02-resultados-clientes.liquid` | Carrusel "Resultados de clientes reales" (antes/después) |
| 03 | `03-beneficios-iconos.liquid` | 4 beneficios con ícono |
| 03b | `03b-el-desgaste-explicado.liquid` | NUEVA · La ciencia del desgaste: sueño profundo, testosterona, cortisol, hormona de crecimiento |
| 04 | `04-antes-despues-destacado.liquid` | Antes/después grande + testimonio + mini producto |
| 05 | `05-timeline-que-vas-a-notar.liquid` | Línea de tiempo "qué vas a notar" |
| 06 | `06-los-numeros.liquid` | "Los números hablan" (barras de encuesta) |
| 07 | `07-testimonios-citas.liquid` | Testimonios en cita |
| 08 | `08-oferta.liquid` | Galería + packs + upsell TESTO BOOST + regalos (se compra acá) |
| 09 | `09-ticker-marca.liquid` | Cinta en movimiento con la marca |
| 10 | `10-video-testimonio.liquid` | Video testimonio + historia |
| 11 | `11-ingredientes.liquid` | Ingredientes + "lo que vas a encontrar en la etiqueta" |
| 12 | `12-comentarios-redes.liquid` | Comentarios en redes |
| 13 | `13-ugc-confianza.liquid` | Fotos de clientes + puntos de confianza |
| 14 | `14-faq-dudas.liquid` | Preguntas frecuentes + "¿todavía tenés dudas?" |
| 15 | `15-garantia-sticky-whatsapp.liquid` | Garantía 60 días + sellos + barra fija celular + botón WhatsApp |

3. Páginas > Agregar > asignar el template. Esa URL va en los anuncios.

## Completar antes de publicar
- **08**: `producto_handle` (por defecto `metabomen`). La galería toma sola las fotos del producto.
- **14 y 15**: número de `whatsapp` (formato 549 + área + número, sin espacios).
- **Todo lo que está [entre corchetes]**: RNPA, laboratorio, dosis (11), cantidad de clientes (01), condiciones de la garantía (15).
- **Antes/después, reseñas, video, comentarios y fotos de clientes (02, 04, 07, 10, 12, 13)**: SOLO clientes reales, con permiso por escrito.
- **06 · números**: tienen que salir de una encuesta real a clientes. Mientras digan [XX] se ven los recuadros.

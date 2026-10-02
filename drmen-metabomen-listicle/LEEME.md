# Listicle METABOMEN +40 · "5 razones" · Shopify

Ángulo: **sueño + envejecimiento**. "No es lo que comés. Es lo que pasa en tu cuerpo cuando dormís 5 o 6 horas."
Se vende desde el listicle: la oferta (bloque 09) agrega al carrito y va directo al checkout.

## Cómo se arma
1. Shopify > Tienda online > Personalizar > crear un **template de página** nuevo (ej. `page.listicle-metabomen`).
2. Agregar 10 secciones **Liquid personalizado**, en este orden, pegando cada archivo:

| # | Archivo | Qué es |
|---|---|---|
| 01 | `01-estilos-hero.liquid` | **Va primero**: tiene los estilos de todos los bloques (menos el 09) + hero |
| 02 | `02-razon-1-grasa.liquid` | Misma dieta, 55% menos grasa |
| 03 | `03-razon-2-hambre.liquid` | Leptina, grelina, antojos |
| 04 | `04-razon-3-testosterona-cta.liquid` | Testosterona + CTA intermedio |
| 05 | `05-razon-4-sueno-profundo.liquid` | Sueño profundo, gráfico 18,9% contra 3,4% |
| 06 | `06-razon-5-metabomen.liquid` | Presentación del producto, 14 activos |
| 07 | `07-antes-despues-resenas.liquid` | Dato 83% + antes/después + reseñas |
| 08 | `08-comparativa-rutina.liquid` | Tabla comparativa + rutina día/noche |
| 09 | `09-oferta.liquid` | Packs + upsell TESTO BOOST + regalos (se compra acá) |
| 10 | `10-faq-garantia-sticky.liquid` | FAQ + garantía + fuentes + barra fija en celular |

3. Crear la página (Páginas > Agregar) y asignarle ese template. Esa URL va en los anuncios.
4. Quitar margen o padding de las secciones del theme si quedan espacios de más.

## Lo que hay que completar antes de publicar
- **09 · `producto_handle`**: el handle real de Metabomen (por defecto `metabomen`).
- **Dosis**: `toma_texto` en el 06 y la primera respuesta del FAQ en el 10 (`[X] cápsulas`).
- **Imágenes**: cada `img... = ''` muestra un recuadro punteado que dice qué foto va.
- **07 · antes/después y reseñas**: SOLO clientes reales, con permiso por escrito.
- **01**: cantidad de clientes (`cant_clientes`). **10**: número de RNPA/ANMAT (`registro`).
- **Dato 83%**: tener a mano de dónde sale (encuesta a clientes) por si lo piden Meta o ANMAT.
- Precios de los packs: los mismos de la página de producto (descuentos automáticos o variantes).

## Notas de compliance
- Los claims de ingredientes usan frases aprobadas (zinc → testosterona normal; magnesio, vit. C, B3 → cansancio y fatiga; vit. C → estrés oxidativo).
- No se promete bajar de peso; los estudios citados hablan del sueño, no de Metabomen (aclarado en el pie).
- Lleva té verde y naranja amarga, por eso se indica tomarlo **a la mañana**.

# Metabomen · Secciones nativas del theme (estructura tipo Create)

Son secciones de verdad del theme: cada una con su `{% schema %}`, bloques y ajustes.
Se editan desde **Personalizar** como cualquier sección del theme (textos, imágenes, colores, agregar/quitar/ordenar bloques).

## Cómo instalarlas (una sola vez)
**Tienda online › Temas › … › Editar código**

1. **Assets › Agregar un nuevo recurso › Crear un archivo en blanco** → nombre `mb-metabomen`, extensión `.css` → pegá `assets/mb-metabomen.css`.
2. **Sections › Agregar una nueva sección** → una por archivo, con el mismo nombre (sin `.liquid`) → pegá el contenido completo:
   - `mb-hero`
   - `mb-trust-bar`
   - `mb-reviews-slider`
   - `mb-habit-videos`
   - `mb-benefits`
   - `mb-science`
   - `mb-buy-box`
   - `mb-compare`
   - `mb-image-text`
   - `mb-cta-band`
   - `mb-faq`
   - `mb-reviews`
3. **Templates › Agregar una nueva plantilla** → tipo **product**, formato **JSON**, nombre `metabomen` → borrá lo que trae y pegá `templates/product.metabomen.json`.
4. **Productos › Metabomen › Plantilla del tema** (columna derecha) → elegí **metabomen** → Guardar.
5. **Personalizar** → arriba elegí **Productos › metabomen** y cargá: imágenes, producto upsell (TESTO BOOST) en "MB · Compra", reseñas reales, videos.

## Orden de la plantilla (igual que Create)
| # | Sección | Qué es |
|---|---|---|
| 1 | MB · Hero | Título, beneficios con tilde, botón, imagen |
| 2 | MB · Barra de confianza | Sellos o logos |
| 3 | MB · Reseñas (carrusel) | Reseñas con filtros por beneficio: sueño, panza, energía, ganas, verse más joven |
| 4 | MB · Hábito + videos | 3 datos + videos verticales de clientes |
| 5 | MB · Beneficios | Producto al centro y 6 beneficios alrededor |
| 6 | MB · Datos con fuente | -80% sueño profundo, +45% cortisol, -15% testosterona |
| 7 | MB · Compra (packs) | Galería + packs + upsell + regalos. Los botones de toda la página bajan acá (#mb-comprar) |
| 8 | MB · Comparativa | Metabomen vs suplementos comunes vs soluciones sueltas |
| 9 | MB · Imagen con texto | Versión "Oferta destacada" (banda roja) |
| 10 | MB · Imagen con texto | Versión "Nuestra historia" (fundador) |
| 11 | MB · Banda con botón | Cierre rojo con botón |
| 12 | MB · Preguntas frecuentes | Con datos estructurados para Google |
| 13 | MB · Reseñas (lista) | Promedio, barras por estrellas, filtros y "ver más" |

Todas aceptan **fondo** (blanco, crema, arena, negro, rojo) y **espacio arriba/abajo**. En los títulos, lo que pongas en *itálica* sale en rojo.

## Compra (packs)
- En la plantilla de producto usa el producto solo. Si la ponés en otra página, elegí el producto en sus ajustes.
- Cada pack es un bloque: nombre, frascos, precios que se muestran, cinta, etiquetas, upsell (sin / con descuento / gratis) y "elegido por defecto".
- Cada regalo es un bloque con "se desbloquea desde X frascos".
- El precio del pack lo ponen tus **descuentos automáticos** (o un código por pack, o variantes por pack).
- Opciones: ir directo al checkout y vaciar el carrito antes de agregar.

## Reseñas
- Las secciones de reseñas vienen con textos entre corchetes para que veas el diseño. Reemplazalos por **reseñas reales** de clientes, con permiso.
- Si usás una app de reseñas (Judge.me, Loox, etc.), podés agregar su bloque de app dentro de las dos secciones de reseñas.
- En "Reseñas (lista)", cargá el promedio y el % por estrellas reales.

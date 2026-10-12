# DR.MEN · HAIR — Landing de producto (secciones nativas Shopify)

Secciones hechas desde cero (prefijo `hm-`), editables desde el personalizador del theme.
Se trabajan **bloque por bloque**.

## Bloques terminados

| # | Sección | Archivo |
|---|---------|---------|
| 1 | Galería + oferta (packs, precio, botón, regalos, garantías, desplegables, barra fija) | `sections/hm-producto-hero.liquid` |

Vista previa: `docs/bloque-1-desktop.png` y `docs/bloque-1-mobile.png`.

## Archivos que hay que subir

En Shopify: **Tienda online → Temas → ⋯ → Editar código**. Creá cada archivo con el mismo nombre y pegá el contenido:

| Carpeta | Archivo |
|---------|---------|
| `assets/` | `hm-base.css`, `hm-base.js` |
| `snippets/` | `hm-assets.liquid`, `hm-icon.liquid`, `hm-stars.liquid`, `hm-vars.liquid` |
| `sections/` | `hm-producto-hero.liquid` |
| `templates/` | `product.hair.json` |

## Configurar el producto (importante)

La oferta usa las **variantes** del producto. Creá el producto HAIR con una opción "Pack" y 4 variantes, **en este orden**:

| Variante | Precio |
|----------|--------|
| 1 frasco (60 días) | $57.900 |
| 2 frascos (120 días) | $80.800 |
| 3 frascos (180 días) | $99.700 |
| 6 frascos (12 meses) | $121.500 |

- No hace falta cargar "precio de comparación": el tachado y el "Ahorrás $X" se calculan solos contra comprar los frascos de a uno (ej: 3 × $57.900 = $173.700).
- Si cargás una foto a cada variante, la galería salta a esa foto al elegir el pack.
- Después, en el producto: **Plantilla del tema → `product.hair`**.

## Antes de publicar

Revisar y reemplazar por datos reales: cantidad de reseñas, "+10.000 frascos vendidos", aviso de stock, regalos, días de garantía, envío gratis y días de entrega. Todo se edita desde el personalizador.

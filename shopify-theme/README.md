# DR.MEN · HAIR — Secciones para la página de producto

## Instalación rápida (recomendada): plantilla completa

1. Creá las 11 secciones (más abajo, una por una) en **Editar código → Secciones**.
2. En **Editar código → Plantillas → Agregar una nueva plantilla** → tipo **product**, formato **JSON**, nombre `hair` → borrá todo, pegá el contenido de `templates/product.hair.json` → **Guardar**.
3. En el admin del producto: **Plantilla del tema → `product.hair`**.

La plantilla ya trae los 11 bloques en orden con todo el copy (ángulo DHT) y la oferta cargada.

Cada bloque es **un solo archivo** de sección (CSS, JS e íconos incluidos). Se crea una sección, se pega el código y listo.

## Bloque 1 · Galería + info + oferta (Liquid) → `sections/hm-producto-oferta.liquid`

Galería, título, beneficios, envío, prueba social, aviso, desplegables y tarjetas. La oferta (packs + upsell Multimagnesio + botón negro) va **adentro de la sección** en el bloque **Liquid (oferta)**.

### 1. Crear la sección
1. Shopify → **Tienda online → Temas** → en tu tema: **⋯ → Editar código**.
2. Carpeta **Secciones** → abrí `hm-producto-oferta` (o **Agregar una nueva sección** con ese nombre si no existe).
3. Borrá todo lo que trae el archivo, pegá el código completo y tocá **Guardar**.

### 2. Pegar la oferta
1. **Temas → Personalizar** → plantilla de producto `hair` → sección **HM · Producto (oferta)**.
2. Tocá el bloque **Liquid (oferta)**. Si no está: **Agregar bloque → Liquid (oferta)**.
3. En **Código Liquid** pegá todo `custom-liquid/hm-oferta-hair.liquid` → **Guardar**.
4. Arrastrá el bloque para ubicarlo donde quieras (va después de los beneficios).

Los estilos de la sección no tocan lo que pegues: la oferta se ve igual que sola.

### 3. Ponerla en la página (primera vez)
1. **Temas → Personalizar** → arriba elegí **Productos → Crear plantilla** → nombre `hair`.
2. **Agregar sección → HM · Producto (oferta)**.
3. Ocultá la sección original del theme (**Información del producto**, el ojito) para que no quede duplicada.
4. **Guardar**. Después, en el producto del admin: **Plantilla del tema → `hair`**.

## Bloque 2 · Cinta de confianza + Transformaciones → `sections/hm-transformaciones.liquid`

1. **Editar código → Secciones → Agregar una nueva sección** → nombre: `hm-transformaciones` → borrá todo, pegá el código y **Guardar**.
2. **Personalizar → plantilla `hair` → Agregar sección → HM · Transformaciones** (debajo de la oferta).
3. En cada bloque **Transformación** subí una foto con el antes/después ya armado (o dos fotos separadas). Las frases de la cinta son los bloques **Insignia**.

## Bloque 3 · DHT → `sections/hm-dht.liquid`

1. **Editar código → Secciones → Agregar una nueva sección** → nombre: `hm-dht` → borrá todo, pegá el código y **Guardar**.
2. **Personalizar → plantilla `hair` → Agregar sección → HM · DHT**.
3. La ilustración de folículos viene incluida (textos y colores editables). Si preferís una foto, cargala en **Imagen**.

## Bloque 4 · Historias reales → `sections/hm-historias.liquid`

1. **Editar código → Secciones → Agregar una nueva sección** → nombre: `hm-historias` → borrá todo, pegá el código y **Guardar**.
2. **Personalizar → plantilla `hair` → Agregar sección → HM · Historias reales**.
3. Bloques **Foto (cinta)**: fotos de clientes con el producto. Bloques **Reseña**: reseñas reales (puntaje, título, texto, nombre, foto, etiquetas).

## Bloque 5 · Por qué elegirnos + Razones → `sections/hm-razones.liquid`

1. **Editar código → Secciones → Agregar una nueva sección** → nombre: `hm-razones` → borrá todo, pegá el código y **Guardar**.
2. **Personalizar → plantilla `hair` → Agregar sección → HM · Razones**.
3. Bloques **Sello**: los sellos del banner. Bloques **Razón**: imagen, título y el texto que se despliega con el +.

## Bloque 6 · Problema / solución → `sections/hm-problema-solucion.liquid`

1. **Editar código → Secciones → Agregar una nueva sección** → nombre: `hm-problema-solucion` → borrá todo, pegá el código y **Guardar**.
2. **Personalizar → plantilla `hair` → Agregar sección → HM · Problema/solución**.
3. Bloques **Problema** y **Solución**: ícono (o emoji/imagen) + texto. Abajo, cargá la foto ANTES y DESPUÉS (ideal PNG sin fondo).

## Bloque 7 · ¿Qué hay dentro de cada cápsula? → `sections/hm-capsula.liquid`

1. **Editar código → Secciones → Agregar una nueva sección** → nombre: `hm-capsula` → borrá todo, pegá el código y **Guardar**.
2. **Personalizar → plantilla `hair` → Agregar sección → HM · Cápsula**.
3. Bloques **Dato**: número grande + título + texto. Las cápsulas decorativas se pueden reemplazar por una foto propia (PNG sin fondo).

## Bloque 8 · Comparativa → `sections/hm-comparativa.liquid`

1. **Editar código → Secciones → Agregar una nueva sección** → nombre: `hm-comparativa` → borrá todo, pegá el código y **Guardar**.
2. **Personalizar → plantilla `hair` → Agregar sección → HM · Comparativa**.
3. Cargá la **foto del producto** (PNG sin fondo). Bloques **Fila**: lo tuyo vs lo de los otros. Bloques **Punto**: los checks de la derecha.

## Bloque 9 · Garantía → `sections/hm-garantia.liquid`

1. **Editar código → Secciones → Agregar una nueva sección** → nombre: `hm-garantia` → borrá todo, pegá el código y **Guardar**.
2. **Personalizar → plantilla `hair` → Agregar sección → HM · Garantía**.
3. Cargá la **foto** de la derecha (PNG recortado). Los días se cambian en un solo lugar y se actualizan los dos sellos.

## Bloque 10 · Preguntas frecuentes → `sections/hm-faq.liquid`

1. **Editar código → Secciones → Agregar una nueva sección** → nombre: `hm-faq` → borrá todo, pegá el código y **Guardar**.
2. **Personalizar → plantilla `hair` → Agregar sección → HM · Preguntas frecuentes**.
3. Cada **Pregunta** es un bloque. Abajo podés poner el link de WhatsApp. Las preguntas también aparecen en Google (SEO).

## Bloque 11 · Línea de tiempo → `sections/hm-timeline.liquid`

1. **Editar código → Secciones → Agregar una nueva sección** → nombre: `hm-timeline` → borrá todo, pegá el código y **Guardar**.
2. **Personalizar → plantilla `hair` → Agregar sección → HM · Línea de tiempo**.
3. Cada **Etapa** es un bloque: texto del botón, altura en el gráfico, texto del sello y el texto que aparece abajo. El gráfico se arma solo.

## Oferta (Liquid) → `custom-liquid/hm-oferta-hair.liquid`

Misma oferta que la del Bronzer, adaptada a HAIR: 3 packs (1, 2 y 3 frascos) + upsell Multimagnesio + botón negro que abre el carrito lateral. Se pega en el bloque **Liquid (oferta)** del Bloque 1 (o en un bloque **Liquid personalizado** de cualquier sección de producto).

1. Arriba del código están el handle del upsell (`super-magnesio-13-upsell`), su nombre y sus 2 beneficios: cambialos ahí. La foto sale sola del producto. El precio y el tachado del upsell salen solos del producto (cargale "precio de comparación" para que muestre el % OFF).
2. HAIR tiene que costar **$59.900 por unidad** en Shopify (una sola variante). Los packs agregan 1, 2 o 3 unidades.
3. Agregar al carrito abre el carrito lateral (Dawn y temas parecidos); si el theme no tiene, lleva a /cart.

### Descuentos para los packs (Shopify → Descuentos)
HAIR a **$59.900 por unidad**, una sola variante. Se crean 2 descuentos **automáticos**:

**1) Pack 2 frascos — $97.990**
- Crear descuento → **Monto de descuento en productos** → **Descuento automático**. Nombre: `Pack 2 frascos 50% OFF`.
- Valor: **Monto fijo $10.905** → *Se aplica a:* Productos específicos → **HAIR**.
- **NO** tildar "Aplicar el descuento solo una vez por pedido" (se descuenta $10.905 por frasco).
- Requisitos mínimos: **Cantidad mínima de artículos: 2**.
- 2 × ($59.900 − $10.905) = **$97.990**.

**2) Pack 3x2 — $119.800**
- Crear descuento → **Comprá X y llevate Y** → **Descuento automático**. Nombre: `3x2 HAIR`.
- *El cliente compra:* **Cantidad mínima de artículos: 2** → Productos específicos → **HAIR**.
- *El cliente obtiene:* **Cantidad: 1** → Productos específicos → **HAIR** → **Gratis**.
- **Establecer un número máximo de usos por pedido: 1**.
- 3 × $59.900 − $59.900 = **$119.800**.

**Combinaciones:** en los dos dejá **sin tildar** "Descuentos de productos" (que no se sumen entre sí). Con 3 frascos Shopify aplica el que más conviene (el 3x2). Si tenés envío gratis por descuento, tildá **Descuentos de envío**.

El upsell Multimagnesio no entra en estos descuentos: cobra el precio del producto.

Probalo antes de pautar: agregá cada pack al carrito y fijate que el checkout muestre $97.990 (2 frascos) y $119.800 (3 frascos), y que con 1 HAIR + 1 Multimagnesio no se aplique ningún descuento.

## METABOMEN · Buy box con oferta Liquid → `sections/mb-buy-box.liquid` + `custom-liquid/mb-oferta-metabomen.liquid`

Tu sección `mb-buy-box` (galería, encabezado, características, sellos, desplegables) pero sin los packs: la oferta va en el bloque **Liquid (oferta)**. La oferta es la misma que la de HAIR (mismos precios, upsell Multimagnesio, botón negro al carrito lateral) en rojo/negro Metabomen.

1. **Editar código → Secciones → `mb-buy-box`** → borrá todo, pegá `sections/mb-buy-box.liquid` → **Guardar**. Lo que ya tenías cargado (títulos, características, desplegables) queda igual.
2. **Personalizar** → producto Metabomen → sección **MB · Buy box** → **Agregar bloque → Liquid (oferta)** → pegá `custom-liquid/mb-oferta-metabomen.liquid` → **Guardar**.
3. Los bloques **Pack viejo (borrar)** y **Regalo viejo (borrar)** ya no se muestran: borralos cuando quieras.

Descuentos: los mismos que HAIR pero con el producto **METABOMEN** a **$59.900** por unidad (una sola variante):
- `Pack 2 frascos 50% OFF`: Monto de descuento en productos, automático, monto fijo **$10.905** por artículo (sin "una vez por pedido"), productos específicos → METABOMEN, cantidad mínima **2** → $97.990.
- `3x2 METABOMEN`: Comprá X y llevate Y, automático, compra mínimo **2** METABOMEN, obtiene **1** METABOMEN **gratis**, máximo **1** uso por pedido → $119.800.
- No combinar entre sí. Si ya creaste los de HAIR, podés editar esos y agregar METABOMEN en "productos específicos" (en los dos campos del 3x2).

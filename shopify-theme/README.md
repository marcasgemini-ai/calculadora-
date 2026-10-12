# DR.MEN · HAIR — Secciones para la página de producto

## Instalación rápida (recomendada): plantilla completa

1. Creá las 11 secciones (más abajo, una por una) en **Editar código → Secciones**.
2. En **Editar código → Plantillas → Agregar una nueva plantilla** → tipo **product**, formato **JSON**, nombre `hair` → borrá todo, pegá el contenido de `templates/product.hair.json` → **Guardar**.
3. En el admin del producto: **Plantilla del tema → `product.hair`**.

La plantilla ya trae los 11 bloques en orden con todo el copy (ángulo DHT) y la oferta cargada.

Cada bloque es **un solo archivo** de sección (CSS, JS e íconos incluidos). Se crea una sección, se pega el código y listo.

## Bloque 1 · Galería + oferta → `sections/hm-producto-oferta.liquid`

### 1. Crear la sección
1. Shopify → **Tienda online → Temas** → en tu tema: **⋯ → Editar código**.
2. Carpeta **Secciones** → **Agregar una nueva sección** → nombre: `hm-producto-oferta` → Hecho.
3. Borrá todo lo que trae el archivo, pegá el código completo y tocá **Guardar**.

### 2. Cargar el producto
Producto HAIR con una opción "Pack" y 4 variantes **en este orden**:

| Variante | Precio |
|---|---|
| 1 frasco | $57.900 |
| 2 frascos | $80.800 |
| 3 frascos | $99.700 |
| 6 frascos | $121.500 |

No hace falta "precio de comparación": el tachado y el "Ahorrás $X" se calculan solos.

### 3. Ponerla en la página
1. **Temas → Personalizar** → arriba elegí **Productos → Crear plantilla** → nombre `hair`.
2. **Agregar sección → HM · Producto (oferta)**. Ya viene con todos los bloques cargados.
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

## Oferta simple (Liquid personalizado) → `custom-liquid/hm-oferta-hair.liquid`

Alternativa rápida al bloque 1: selector de packs + upsell Multimagnesio dentro de la página de producto del theme.

1. **Personalizar → Producto → en la sección del producto: Agregar bloque → Liquid personalizado** → pegá todo el código → **Guardar**.
2. Arriba del código está el handle del upsell: `multimagnesio-oferta-upsell`. Cambialo si tu producto tiene otro handle. Precio y precio tachado del upsell salen solos del producto.
3. Los packs suman 1, 2, 3 o 6 unidades del producto. Para que el carrito cobre $80.800 / $99.700 / $121.500, creá un **descuento automático por cantidad** en Shopify (o ajustá los precios del código a tu descuento real).
4. Agregar al carrito abre el carrito lateral (Dawn y temas parecidos); si el theme no tiene, lleva a /cart.

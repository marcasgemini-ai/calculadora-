# DR.MEN · HAIR — Secciones para la página de producto

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

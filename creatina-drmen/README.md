# DR.MEN · Creatina PURE Activator® · Página de producto "Creatina Verificada"

Réplica de la estructura de la página de producto de Gains in Bulk (Instantized Creatine®) adaptada a Argentina.
Ángulo (el de Gains): **"Monohidrato de creatina hiperfiltrado para una absorción óptima, cero hinchazón y máxima eficacia."** Enemigo: la creatina común de partícula gruesa ("¿Te dijeron que la creatina es solo creatina?"). Tipografía: toma la del tema (`--font-heading-family` / `--font-body-family`).

## Título del producto (para cargar en Shopify)

**Creatina Hiperfiltrada PURE Activator® · Monohidrato 300 g**

- Título SEO: `Creatina Monohidrato Hiperfiltrada 300 g | DR.MEN PURE Activator®`
- Meta descripción: `Creatina monohidrato hiperfiltrada: se disuelve por completo, cero hinchazón, 5 g reales por porción. Kit de Inicio con 4 regalos y envío gratis.`

## Cómo instalar

**Recomendado: carpeta `bloques/`** → 20 bloques autocontenidos (cada uno trae sus estilos). Se pegan de a uno en "Liquid personalizado" y funcionan solos, en cualquier orden. El bloque 20 incluye la barra de compra fija para celular. Se regeneran con `python3 preview/standalone.py`.

Alternativa: carpeta `liquids/` (base 00 + 21 secciones):

1. Tienda online → Personalizar → plantilla de **Producto** (conviene duplicarla como `producto-creatina` y asignarla solo a este producto).
2. Pegá cada archivo `.liquid` en un bloque/sección **"Liquid personalizado"** (Custom Liquid), en este orden.
3. **`00-base-estilos` va una sola vez, antes que todos.** Sin ese bloque las demás secciones se ven sin formato.
4. Las fotos y videos se suben en **Contenido → Archivos**. En cada sección, arriba de todo, hay variables `assign` con el nombre del archivo (ej: `{%- assign img_dolor = 'vaso-grumos.jpg' -%}`). Si quedan vacías se muestra un recuadro gris de "subí foto".

| # | Archivo | Dónde va | Equivalente en Gains in Bulk |
|---|---|---|---|
| 00 | base-estilos | Primera sección (una vez) | — |
| 01 | barra-promo | Arriba de todo | "$10 Off + 4 Free Gifts" |
| 02 | bajo-titulo-beneficios | Info del producto, debajo del título/precio | Bullets bajo "Instantized Creatine®" |
| 03 | regalos-kit | Info del producto, debajo del selector | "4 Free Gifts" |
| 04 | confianza-iconos | Info del producto, debajo del botón comprar | Íconos de envío/garantía |
| 05 | cinta-claims | Debajo del bloque de producto | Logos Ironman · Flex · M&F |
| 06 | resenas-video | | "Raving Reviews From Verified Customers" |
| 07 | dolor-creencia | | **"Did Someone Tell You Creatine Was Just Creatine...?"** |
| 08 | hiperfiltrada-particula | | Mecanismo "filtered 3X finer" |
| 09 | solucion-4-pilares | | Hiperfiltrada · absorción · cero hinchazón · eficacia |
| 10 | prueba-del-vaso | | Demo del vaso transparente |
| 11 | gente-real | | "Real people. Real gains." |
| 12 | tabla-comparativa | | "The Choice is Clear" |
| 13 | evidencia-ciencia | | "The Evidence is Overwhelming" |
| 14 | calidad-pureza | | "Informed Sport · Clean gains. Zero guesswork." |
| 15 | modo-de-uso | | "One Scoop, Once a Day" |
| 16 | precio-por-dia-oferta | | "Start For <$1/Day" |
| 17 | garantia | | "The 90 Day Gains Guarantee" |
| 18 | por-que-nos-eligen | | "Why 250K Choose us daily" |
| 19 | preguntas-frecuentes | | (FAQ) |
| 20 | cta-final | Antes del footer | — |
| 21 | barra-compra-fija-mobile | Cualquier lugar (solo si el tema no trae sticky) | Sticky add to cart |

Los botones de compra (12, 16, 20, 21) agregan la variante seleccionada y mandan **directo al checkout**.
El precio, el tachado y el "menos de $X por día" salen solos del producto (precio y "precio de comparación").

## Antes de publicar · checklist obligatorio

- [ ] Confirmar con el proveedor que el proceso justifica "hiperfiltrada" (dato de malla/mesh → variable `malla` en 08). La etiqueta hoy dice "MICRONIZADA": alinear.
- [ ] Completar RNPA y RNE en `14-calidad-pureza` (y link a análisis si lo tienen).
- [ ] Hacer **la prueba del vaso real** (5 g en 500 ml, 30 s) contra una creatina común sin micronizar. Si no se ve la diferencia, sacar la sección 10.
- [ ] Días de garantía iguales en 01, 04, 12, 16, 17, 19 y 20 (`garantia_dias`) y en la política de devoluciones.
- [ ] Valores de regalos en 03 (texto) y 16 (en centavos: `990000` = $9.900).
- [ ] Rating (02), reseñas (18), videos (06) y fotos (11): **solo reales**. Si están vacíos no muestran datos inventados.

## Qué NO agregar (Meta / ANMAT)

- Porcentajes o plazos: "+23% de fuerza en 30 días", "sentilo en una semana".
- "Recuperate más rápido / menos dolor", "tonificá", "adelgazá", beneficios cognitivos como promesa.
- Nombres, logos o fotos de marcas competidoras (la tabla compara **tipos** de producto).

## Vista previa

`python3 preview/build.py` genera `preview/preview.html` con un producto de ejemplo ($34.990, tachado $45.990).

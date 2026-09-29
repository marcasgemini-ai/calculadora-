# Advertorial DR WOMAN Bronzer · 12 prompts de secciones Liquid + prompts de imágenes

Ángulo adaptado de la referencia ("5 razones por las que las mujeres están dejando el autobronceante") al público argentino y al producto: **DR WOMAN Bronzer, cápsulas de bronceado natural** (60 cápsulas · vitaminas C, E, B2, B3, B5, B6, B12, ácido fólico, betacaroteno, licopeno, extracto de cúrcuma · sin gluten · Formulated in USA).

**Cómo se usa este documento**
1. Pegá el **CONTEXTO BASE** al principio de cada chat (o una sola vez si hacés todo en el mismo chat).
2. Pegá los prompts **de a uno** (1 → 12). Cada uno genera **un archivo** `sections/bronzer-adv-XX-nombre.liquid`.
3. En Shopify: Tienda online → Temas → Editar código → `sections` → Agregar sección → pegá el código.
4. Creá un template de página `page.bronzer-advertorial.json` (o desde el editor: Páginas → Nuevo template) y agregá las 12 secciones en orden.
5. Generá las imágenes con los prompts del final y subilas desde el editor del tema (todas las imágenes son `image_picker`, nada va hardcodeado).

---

## CONTEXTO BASE (pegar antes de cada prompt)

```
Sos un desarrollador senior de temas Shopify (Online Store 2.0) y copywriter de respuesta directa para Argentina.
Estamos armando un ADVERTORIAL (formato nota editorial, no landing de producto clásica) para DR WOMAN Bronzer:
suplemento dietario en cápsulas para un bronceado natural "desde adentro". 60 cápsulas. Vitaminas C, E, B2, B3,
B5, B6, B12, ácido fólico, betacaroteno, licopeno y extracto de cúrcuma. Sin gluten. Formulated in USA.
Prueba social real: "Viral en TikTok" y "#1 en Mercado Libre".

Ángulo: "5 razones por las que las argentinas están dejando el autobronceante (y la cama solar)".
Público: mujeres argentinas 22–45, se quieren ver doradas todo el año, cansadas de manchas naranjas,
sábanas teñidas, olor a autobronceante y de exponerse al sol sin cuidado.
Tono: argentino, voseo ("vos", "tomás", "fijate"), cercano, como una nota de revista de belleza. Nada de
exageraciones médicas.

REGLAS TÉCNICAS (obligatorias):
- Entregá UN solo archivo .liquid completo, listo para pegar en /sections. Nada de explicaciones largas.
- Liquid simple: HTML + <style> scopeado + {% schema %}. Sin librerías externas, sin apps, sin jQuery.
  JS solo si es imprescindible, vanilla, dentro de la sección y scopeado.
- TIPOGRAFÍA DEL THEME: no importes fuentes. Usá
    títulos: font-family: var(--font-heading-family, inherit); font-weight: var(--font-heading-weight, 700);
    texto:   font-family: var(--font-body-family, inherit);
- Todo el CSS scopeado con #shopify-section-{{ section.id }} o una clase única .bza-{{ section.id }}.
- Colores como variables CSS dentro de la sección, editables desde el schema (type "color"):
    --bz-peach: #F4A98C   (durazno/salmón de la etiqueta)
    --bz-peach-light: #FBE3D6
    --bz-cream: #FFF8F3   (fondo)
    --bz-brown: #3A2317   (texto/títulos, marrón oscuro de "Bronzer")
    --bz-gold: #C99A3B    (acento cápsula)
    --bz-cta: #E0795A     (botón)
- Columna de lectura tipo nota: max-width 720px centrada, padding lateral 20px en mobile.
  Mobile first (el 85% del tráfico viene de Meta Ads en celular). Sin scroll horizontal.
- Todos los textos, imágenes (image_picker), links del CTA (type "url") y colores editables desde el schema.
  Listas repetibles como blocks. Incluí "presets" para que aparezca en el editor.
- Imágenes con image_url + image_tag, loading="lazy" (excepto el hero: eager + fetchpriority high),
  con width/height y alt editable. Si no hay imagen cargada, mostrar un placeholder_svg_tag con fondo --bz-peach-light.
- Kicker de sección estilo editorial: texto chico, mayúsculas, letter-spacing .08em, color --bz-cta,
  con número a la derecha (ej: "RAZÓN #1 · AUTOBRONCEANTE ........ 01").
- Accesibilidad: contraste AA, botones con :focus-visible, jerarquía h1 solo en el hero, h2 en el resto.

REGLAS DE COPY (ANMAT / Meta-safe):
- Es un suplemento dietario: nada de "cura", "trata", "previene", "protege del sol", "reemplaza el protector".
- Siempre que se hable de sol: "Bronzer NO reemplaza el protector solar".
- Usar "ayuda a", "acompaña", "aporta", "contribuye a un tono dorado".
- Nada de números inventados: donde haya estadísticas o testimonios, dejá placeholders editables [XX%] / [Nombre].
- El betacaroteno y el licopeno son carotenoides: se acumulan de forma gradual en la piel y aportan un tono
  dorado cálido con uso constante. Ese es el mecanismo que explicamos, en lenguaje simple.
```

---

## PROMPT 1 · Header de nota + Hero

```
Sección 1 de 12: "bronzer-adv-01-hero.liquid"

Estructura (arriba hacia abajo):
1. Barra superior fina fondo --bz-brown, texto crema centrado, editable:
   "🔥 Viral en TikTok · #1 en Mercado Libre · Envío gratis a todo el país"
2. Mini header de "revista": logo (image_picker, opcional) o texto "DR WOMAN Journal" + menú fake de 4
   categorías no clickeables (Belleza · Bienestar · Piel · Tendencias) solo desktop.
3. Tag pill: "BELLEZA · NOTA DESTACADA" fondo --bz-peach-light, texto --bz-cta.
4. H1 (grande, 34px mobile / 48px desktop, line-height 1.1, color --bz-brown), con la palabra clave resaltada
   en --bz-cta:
   "5 razones por las que las argentinas están dejando el autobronceante (y bronceándose desde adentro)"
5. Bajada (18px): "Sin manchas naranjas, sin sábanas teñidas y sin horas al rayo del sol. Así funciona el
   bronceado que se volvió viral en TikTok y ya es #1 en Mercado Libre."
6. Línea de autor: avatar redondo 40px (image_picker) + "Por Carolina Méndez · Editora de Belleza" +
   "Actualizado: {fecha editable} · 4 min de lectura".
7. Imagen hero grande (image_picker, ratio 4:5 mobile / 16:9 desktop, border-radius 16px).
8. Card flotante superpuesta abajo a la izquierda de la imagen (fondo blanco, sombra suave):
   ★★★★★ + "“Dejé el autobronceante y no vuelvo más. Me ven dorada todo el año.”" + "— Clienta verificada".
9. Párrafo de intro (richtext editable): "Si alguna vez te pusiste autobronceante antes de un casamiento y
   terminaste con las palmas naranjas, las rodillas manchadas y las sábanas arruinadas, esta nota es para vos.
   Cada vez más argentinas están cambiando la loción por algo mucho más simple: una cápsula por día."
10. Botón CTA secundario tipo texto-link: "Ir directo al producto →" (url editable, ancla por defecto #oferta).

Todo editable desde el schema. Preset name: "Bronzer Adv · 01 Hero".
```

---

## PROMPT 2 · Razón #1 — El autobronceante mancha y se nota

```
Sección 2 de 12: "bronzer-adv-02-razon-1.liquid"

Crear una sección de "RAZÓN" REUTILIZABLE (las razones 1 a 5 usan esta misma estructura, así que
diseñala genérica con todo editable), y precargala con el contenido de la razón 1.

Layout:
- Kicker: "RAZÓN #1 · AUTOBRONCEANTE" + número "01" alineado a la derecha, línea fina debajo color --bz-peach.
- H2 (28px mobile / 36px desktop): "El autobronceante se queda en la superficie… y se nota."
  (Setting para resaltar una frase del título en --bz-cta: "y se nota.")
- Imagen (image_picker, ratio 4:3, radius 16px). Setting para poner la imagen arriba o abajo del texto.
- Richtext:
  "El autobronceante tiñe solo la capa más superficial de la piel. Por eso se acumula en codos, rodillas y
  tobillos, se va en parches con la ducha y te deja ese tono anaranjado que todas reconocemos a una cuadra.
  Además: olor raro, ropa blanca prohibida, sábanas manchadas y 20 minutos de guante cada tres días.
  <strong>No es que lo estés aplicando mal. Es que el color está en el lugar equivocado.</strong>"
- Opcional (toggle): caja de "dato" con borde izquierdo 4px --bz-gold y fondo --bz-peach-light:
  "💡 Por qué pasa: el DHA del autobronceante reacciona con las células muertas de la superficie,
  que se renuevan cada pocos días. Por eso el color se va desparejo."

Settings: kicker, número, título, frase resaltada, imagen, posición imagen, richtext, toggle + texto del dato,
colores. Preset name: "Bronzer Adv · Razón".
```

---

## PROMPT 3 · Razón #2 — La cama solar y el sol sin cuidado

```
Sección 3 de 12: "bronzer-adv-03-razon-2.liquid"

Misma estructura y estilo que la sección "Razón" anterior (si ya la tengo, podés decirme que reutilice
bronzer-adv-02 cambiando textos; igual entregá el archivo completo con este contenido precargado).

- Kicker: "RAZÓN #2 · SOL Y CAMA SOLAR" · "02"
- H2: "Broncearte al rayo del sol te pasa factura (aunque no la veas hoy)." Resaltar: "te pasa factura"
- Imagen: mujer en la costa argentina / pileta tapándose del sol (ver prompt de imagen 3).
- Richtext:
  "Mar del Plata, la pile del club, el balcón en enero: todas lo hicimos. Pero la radiación UV es la principal
  responsable del envejecimiento prematuro de la piel: manchas, líneas finas y pérdida de firmeza.
  Y la cama solar, lejos de ser la alternativa 'controlada', concentra esa radiación en pocos minutos.
  El problema es que ese bronceado dura dos semanas… y las manchas, años."
- Caja de dato (toggle ON por defecto), borde --bz-gold:
  "☀️ Importante: DR WOMAN Bronzer no reemplaza el protector solar. Seguí usándolo todos los días.
  La idea es que no necesites exponerte de más para verte dorada."

Preset name: "Bronzer Adv · Razón 2".
```

---

## PROMPT 4 · Razón #3 — El color se forma desde adentro (mecanismo)

```
Sección 4 de 12: "bronzer-adv-04-razon-3-mecanismo.liquid"

Esta es la razón del MECANISMO. Layout distinto a las otras:
- Kicker: "RAZÓN #3 · CÓMO FUNCIONA" · "03"
- H2: "Por qué el color se ve distinto cuando se forma desde adentro." Resaltar: "desde adentro"
- Imagen ilustración científica (image_picker, ratio 16:10, fondo crema) — ver prompt de imagen 4.
- Richtext:
  "El betacaroteno y el licopeno son carotenoides: los mismos pigmentos que le dan el color a la zanahoria y
  al tomate. Cuando los consumís de forma constante, se van depositando de a poco en la piel y le aportan un
  tono dorado cálido, parejo y natural. No es una capa que se despega: es tu propio tono, un poco más dorado."
- Debajo: 3 cards de ingredientes en grilla (1 columna mobile, 3 desktop), como BLOCKS editables
  (ícono image_picker o emoji, nombre, descripción corta):
    1. "Betacaroteno" — "Carotenoide precursor de la vitamina A. Aporta el tono dorado."
    2. "Licopeno" — "El pigmento del tomate. Suma calidez al tono de la piel."
    3. "Extracto de cúrcuma" — "Antioxidante natural de color dorado."
  + fila extra de chips chicos: "Vitamina C · Vitamina E · Complejo B (B2, B3, B5, B6, B12) · Ácido fólico"
  con texto "Vitaminas C y E: antioxidantes que acompañan el cuidado de la piel."
- Cards: fondo blanco, borde 1px --bz-peach-light, radius 14px, ícono en círculo --bz-peach-light.

Preset name: "Bronzer Adv · Razón 3 Mecanismo".
```

---

## PROMPT 5 · Razón #4 — Mantenerlo es mucho más fácil

```
Sección 5 de 12: "bronzer-adv-05-razon-4.liquid"

Estructura "Razón" + una comparativa visual.
- Kicker: "RAZÓN #4 · RUTINA" · "04"
- H2: "Mantener el dorado pasa a ser tan simple como tomar una cápsula." Resaltar: "una cápsula"
- Imagen: frasco de Bronzer en la mesa del desayuno con mate (ver prompt de imagen 5).
- Richtext:
  "Con el autobronceante vivís pendiente: exfoliar, aplicar, esperar que seque, no transpirar, retocar cada
  tres días. Con Bronzer es una cápsula por día con el desayuno (o el mate). Sin guantes, sin olor, sin
  manchar nada. Lo tomás de forma constante y el tono se va construyendo solo."
- Tabla comparativa (2 columnas, header con fondo --bz-brown y texto crema), filas como BLOCKS:
  | | Autobronceante | DR WOMAN Bronzer |
  | Tiempo por semana | 1 a 2 horas | 10 segundos por día |
  | Manchas naranjas | Sí | No |
  | Mancha ropa/sábanas | Sí | No |
  | Olor | Sí | No |
  | Tono parejo | Depende de la aplicación | Gradual y parejo |
  Columna Bronzer resaltada con fondo --bz-peach-light y ✔ en --bz-cta; columna autobronceante con ✕ gris.
  En mobile la tabla NO debe scrollear horizontalmente (usar grid de 3 columnas compactas, texto 14px).

Preset name: "Bronzer Adv · Razón 4".
```

---

## PROMPT 6 · Razón #5 — No querés ser otra persona (antes/después)

```
Sección 6 de 12: "bronzer-adv-06-razon-5-antes-despues.liquid"

- Kicker: "RAZÓN #5 · RESULTADO NATURAL" · "05"
- H2: "No se trata de verte más oscura: se trata de verte con buena cara." Resaltar: "con buena cara"
- Comparador ANTES / DESPUÉS con slider arrastrable (vanilla JS, touch + mouse, input range accesible):
  dos image_picker (antes/después), labels "ANTES" y "DESPUÉS" en pills blancas arriba a izquierda/derecha,
  ratio 4:5, radius 16px, handle circular blanco con flechas ‹ ›. Si JS falla, mostrar las dos imágenes
  lado a lado.
- Texto chico debajo de la imagen (editable): "Foto real de clienta tras [X] semanas de uso constante.
  Los resultados pueden variar según cada persona."
- Richtext:
  "La mayoría no busca un bronceado de Punta del Este en julio. Busca verse descansada, con color en la cara,
  sin base, sin bronzer de maquillaje, sin explicarle a nadie qué se puso.
  Eso es lo que más nos repiten nuestras clientas: 'me dicen que estoy radiante y no saben por qué'."
- Lista con checks (blocks): "Tono dorado parejo" · "Sin manchas ni vetas" · "Se ve natural en fotos y con
  luz de día" · "Funciona para todos los tonos de piel".

Preset name: "Bronzer Adv · Razón 5 Antes/Después".
```

---

## PROMPT 7 · Presentación del producto (primer CTA fuerte)

```
Sección 7 de 12: "bronzer-adv-07-producto.liquid"

Bloque de producto dentro de la nota, fondo --bz-peach-light a todo el ancho, contenido centrado 720px.
Tiene id="oferta" (editable) para los links ancla.
- Pill arriba: "LO QUE USAN LAS QUE YA DEJARON EL AUTOBRONCEANTE"
- Imagen del producto (image_picker) grande, con 2 stickers superpuestos estilo la foto de marca:
  pill blanca "🔥 Viral en" + pill negra "TikTok", y pill blanca "#1 en" + pill amarilla (#FFE600) con texto
  azul (#2D3277) "Mercado Libre". Stickers como HTML/CSS, textos editables, toggle para ocultarlos.
- Nombre: "DR WOMAN Bronzer" · subtítulo "Bronceado natural · 60 cápsulas · 1 por día"
- ★★★★★ + "[4.8]/5 · [+2.300] opiniones" (placeholders editables).
- 3 íconos en fila (como en la etiqueta): ☀ "Tono dorado" · ✦ "Antioxidante" · 🌿 "Piel sana"
- Bullets con check (blocks): "Tono dorado parejo sin manchar" · "Betacaroteno + licopeno + cúrcuma" ·
  "Vitaminas C, E y complejo B" · "Sin gluten · Formulated in USA" · "Envío gratis a todo el país".
- Precio: precio tachado (settings compare_price) + precio actual + badge "-XX%" calculado a mano (setting texto).
  Línea de cuotas editable: "3 cuotas sin interés de $XX.XXX".
- Botón CTA grande full-width en mobile, fondo --bz-cta, radius 999px, 56px de alto, texto blanco uppercase:
  "QUIERO MI BRONZER →" (url editable, por defecto el /products/ del producto).
  Setting opcional "product" (type product): si está elegido, el botón hace submit de un form de /cart/add
  con la primera variante y redirige al checkout (return_to=/checkout). Si no, usa la url.
- Microcopy debajo: "🔒 Pago seguro · 🚚 Envío gratis · ↩ Garantía de satisfacción"

Preset name: "Bronzer Adv · 07 Producto".
```

---

## PROMPT 8 · Resultados en números

```
Sección 8 de 12: "bronzer-adv-08-resultados.liquid"

- H2 centrado: "Resultados del uso constante de DR WOMAN Bronzer" (resaltar "DR WOMAN Bronzer" en --bz-cta).
- Subtítulo chico: "Encuesta a [XXX] clientas después de [X] semanas de uso." (editable)
- 3 stats como BLOCKS (grilla 1 col mobile con layout horizontal número+texto; 3 col desktop):
  número grande (48px, --bz-cta, font heading) + texto:
    "[XX]%" — "notó un tono más dorado y parejo"
    "[XX]%" — "dejó de usar autobronceante"
    "[XX]%" — "lo recomendaría a una amiga"
  (Dejar los números como placeholder: los completa la marca con datos reales.)
- Animación: los números cuentan de 0 al valor cuando entran en pantalla (IntersectionObserver,
  respetar prefers-reduced-motion). Si el valor no es numérico, mostrarlo tal cual.
- Nota al pie chica gris: "Resultados autopercibidos. Pueden variar según cada persona."

Preset name: "Bronzer Adv · 08 Resultados".
```

---

## PROMPT 9 · Testimonios UGC (fotos de clientas)

```
Sección 9 de 12: "bronzer-adv-09-ugc.liquid"

- H2: "Lo que dicen las que ya lo probaron"
- Carrusel horizontal con scroll-snap (CSS puro, sin librería), cards de 78% de ancho en mobile, 4 visibles
  en desktop, flechas prev/next solo desktop (JS vanilla mínimo con scrollBy).
- Cada card es un BLOCK: imagen o video vertical 4:5 (image_picker + opcional video_url/video),
  nombre + provincia ("Sofi, Córdoba"), badge "✔ Compra verificada", ★★★★★, texto de la reseña (máx. 3 líneas
  con "Leer más" expandible) y un chip abajo tipo "Usa Bronzer hace [X] semanas".
- Precargar 5 blocks con placeholders [Nombre], [Ciudad], [Reseña real] — NO inventes testimonios,
  los reemplaza la marca con reseñas reales de Mercado Libre / TikTok.
- Debajo: botón outline "VER TODAS LAS OPINIONES" (url editable) y link CTA "Quiero probarlo →" a #oferta.

Preset name: "Bronzer Adv · 09 UGC".
```

---

## PROMPT 10 · Capturas de mensajes y reseñas (prueba social masiva)

```
Sección 10 de 12: "bronzer-adv-10-capturas.liquid"

- Título estilo cartel (uppercase, 26px, --bz-brown, centrado): "LO QUE NOS ESCRIBEN LAS CLIENTAS"
- Grilla tipo masonry con CSS columns (2 columnas mobile, 3 desktop, gap 12px) de capturas (BLOCKS con
  image_picker + alt): capturas reales de WhatsApp, DMs de Instagram, comentarios de TikTok y
  preguntas/opiniones de Mercado Libre. Cada captura con radius 12px y sombra suave.
- Al tocar una captura se abre en lightbox simple (dialog nativo <dialog>, cerrar con X, click afuera y Esc).
- Barra de rating resumen arriba de la grilla: "★★★★★ [4.8] · basado en [+2.300] opiniones" + un botón
  pill "Escribir una opinión" (url editable, toggle para ocultar).
- Toggle "Mostrar más": muestra las primeras 6 capturas y el resto con botón "Ver más capturas".

Preset name: "Bronzer Adv · 10 Capturas".
```

---

## PROMPT 11 · Preguntas frecuentes

```
Sección 11 de 12: "bronzer-adv-11-faq.liquid"

- H2: "Preguntas frecuentes"
- Acordeón con <details>/<summary> nativo (sin JS), ícono + que rota a ×, borde inferior --bz-peach-light.
  Cada pregunta es un BLOCK (pregunta + richtext). Primer item abierto por defecto (setting).
- Incluir JSON-LD FAQPage generado desde los blocks.
- Precargar:
  1. "¿Cómo se toma?" — "1 cápsula por día, preferentemente con una comida. La constancia es la clave."
  2. "¿En cuánto tiempo se ve el tono dorado?" — "Es gradual: los carotenoides se van acumulando en la piel
     con el uso diario. La mayoría de las clientas nota cambios después de [X] semanas de uso constante."
  3. "¿Reemplaza el protector solar?" — "No. DR WOMAN Bronzer es un suplemento dietario y no reemplaza el
     protector solar. Seguí usándolo todos los días."
  4. "¿Me voy a poner naranja?" — "No se trata de una capa de color sobre la piel como el autobronceante:
     el tono se construye de forma gradual y pareja. Respetá la dosis indicada."
  5. "¿Sirve para todos los tonos de piel?" — "Sí, el efecto se adapta a tu tono natural."
  6. "¿Tiene gluten o contraindicaciones?" — "Es sin gluten. Si estás embarazada, en período de lactancia o
     tomás medicación, consultá con tu médico antes de consumirlo."
  7. "¿Cuánto dura un frasco?" — "60 cápsulas: 2 meses tomando 1 por día."
  8. "¿Cuánto tarda el envío?" — "Enviamos a todo el país. CABA y GBA: [X] días hábiles. Interior: [X] días hábiles."
- Debajo del acordeón, línea legal chica editable: "Suplemento dietario. Consumir dentro de una dieta variada
  y equilibrada. Consulte a su médico. [RNPA/RNE]".

Preset name: "Bronzer Adv · 11 FAQ".
```

---

## PROMPT 12 · Oferta final + garantía + CTA fijo mobile

```
Sección 12 de 12: "bronzer-adv-12-oferta-final.liquid"

Cierre de la nota, fondo degradé del packaging: linear-gradient(180deg, #F7C3A6 0%, #F2A488 100%).
- Kicker blanco: "OFERTA POR TIEMPO LIMITADO"
- H2 blanco/--bz-brown (setting): "Probá el bronceado desde adentro y dejá el autobronceante en el cajón."
- Selector de packs como BLOCKS (radio buttons estilizados como cards, el del medio preseleccionado con
  badge "MÁS ELEGIDO"):
    "1 frasco · 2 meses" — precio [$XX.XXX]
    "2 frascos · 4 meses" — precio [$XX.XXX] — badge "MÁS ELEGIDO" — "Ahorrás [$X.XXX]"
    "3 frascos · 6 meses" — precio [$XX.XXX] — "Ahorrás [$X.XXX]"
  Cada block tiene: título, precio, precio tachado, badge, y url o variant id. El botón usa la opción elegida:
  si hay variant id → /cart/add?id=VARIANT&quantity=1 y redirect a /checkout; si no, la url.
- Botón CTA grande "QUIERO MI BRONZER →" + debajo "3 cuotas sin interés · Envío gratis".
- Card de garantía (fondo blanco, ícono sello): "Garantía de satisfacción de [30] días. Si no te gusta,
  te devolvemos el dinero." (editable)
- Fila de medios de pago (texto o imágenes: Mercado Pago, Visa, Mastercard, transferencia).
- Countdown opcional (toggle, default OFF): "La oferta termina en HH:MM:SS" que se reinicia a medianoche
  (hora Argentina). No mostrar fechas falsas.
- CTA FIJO MOBILE: barra sticky abajo (solo < 750px) con miniatura del producto, "DR WOMAN Bronzer" + precio
  y botón "COMPRAR". Aparece después de scrollear 600px y se oculta cuando la sección de oferta está
  visible (IntersectionObserver). Respetar safe-area-inset-bottom.
- Footer mínimo de la nota: "Este artículo es publicidad de DR WOMAN." (obligatorio, editable pero no vacío)
  + links a Términos / Privacidad.

Preset name: "Bronzer Adv · 12 Oferta final".
```

---

# Prompts de imágenes

**Recomendación de herramienta:** Nano Banana (Gemini) / GPT Image / Flux Kontext **subiendo la foto oficial del frasco como referencia** en todas las imágenes donde aparece el producto (así se respeta la etiqueta). Midjourney solo para imágenes sin producto.

**Estilo común (agregalo al final de cada prompt):**
> Warm golden-hour light, soft peach and cream color palette (#F4A98C, #FBE3D6, #FFF8F3), natural skin texture, editorial beauty magazine photography, shot on 35mm, shallow depth of field, realistic, no text, no watermark.

**Regla de producto:** "Keep the DR WOMAN Bronzer bottle EXACTLY as in the reference image: clear PET bottle, white cap, peach gradient label, 'DR WOMAN' and 'Bronzer' text, golden yellow capsules. Do not change or invent label text."

| # | Sección | Formato | Prompt |
|---|---|---|---|
| 1 | Hero | 4:5 y 16:9 | Argentine woman in her late 20s, light-medium skin with a natural golden glow, wavy brown hair, lying on a linen sun lounger on a terrace in Buenos Aires at golden hour, wearing a cream swimsuit, relaxed smile, eyes closed, soft sunlight on her shoulders and legs. Skin evenly bronzed, luminous, no orange tones. Beside her on a small wooden table: the DR WOMAN Bronzer bottle (reference image) and a glass of water. |
| 1b | Avatar autora | 1:1 | Headshot of a friendly Argentine woman in her mid 30s, beauty editor look, natural makeup, neutral cream background, soft window light. |
| 2 | Razón 1 | 4:3 | Close-up of a woman's hand and wrist with patchy, streaky orange self-tanner: orange palm creases, darker knuckles, uneven patches. Background: white bed sheet with light orange stains, a self-tanner mitt lying next to it. Realistic, slightly unflattering bathroom-bedroom light. No brand visible. |
| 3 | Razón 2 | 4:3 | Woman on a crowded Argentine beach (Mar del Plata style, colorful umbrellas, windbreakers) covering her face from the harsh midday sun with her hand, skin slightly reddened on shoulders, squinting. Harsh overhead light, documentary style. |
| 3b | Alternativa | 4:3 | Macro shot of sun damage on a woman's cheek: fine lines and small sun spots, natural light, clinical but respectful. |
| 4 | Razón 3 mecanismo | 16:10 | Clean scientific illustration, cross-section of human skin layers (epidermis, dermis) on a cream background, tiny golden-orange carotenoid particles traveling from blood vessels up into the skin layers, soft peach accents, minimal labels-free medical infographic style, flat vector with subtle gradients. (Los rótulos agregalos después en Canva: "Betacaroteno", "Licopeno", "Epidermis".) |
| 4b | Íconos ingredientes | 1:1 | Three minimal line icons in dark brown on transparent background: a carrot, a tomato, a turmeric root. Thin 2px stroke, rounded, consistent style. |
| 5 | Razón 4 rutina | 4:3 | Argentine breakfast table in morning light: a mate with bombilla, medialunas on a plate, coffee cup, and the DR WOMAN Bronzer bottle (reference) with two golden capsules in a woman's open palm in the foreground. Cozy kitchen, warm tones. |
| 6 | Razón 5 antes/después | 4:5 | **Usar fotos REALES de clientas** con autorización (misma luz, mismo encuadre, sin filtro). No generar antes/después con IA: Meta lo rechaza y es engañoso. Si todavía no tenés, reemplazá el slider por una imagen lifestyle: *Close portrait of a smiling Argentine woman, no makeup, healthy golden skin tone, freckles visible, natural daylight by a window, wearing a white t-shirt.* |
| 7 | Producto | 1:1 | The DR WOMAN Bronzer bottle (reference) on a sunlit stone ledge at golden hour, loose golden capsules scattered in front, blurred warm background with bokeh and a plant. (Es la foto oficial que ya tenés: usala directamente.) |
| 7b | Producto packshot | 1:1 | The DR WOMAN Bronzer bottle (reference) centered on a seamless peach (#F4A98C) background, soft shadow, a few capsules in front, studio lighting, e-commerce packshot. |
| 9 | UGC | 4:5 | **Usar fotos/videos reales** de clientas (TikTok, Mercado Libre, DMs). Para rellenar mientras tanto, solo lifestyle sin presentarlo como clienta: *Selfie-style photo of a young Argentine woman in her bathroom holding the DR WOMAN Bronzer bottle (reference) next to her face, smiling, iPhone photo quality, natural light.* |
| 10 | Capturas | 9:16 | **Capturas reales** (WhatsApp, IG, ML). Tapá nombres y fotos de perfil. No las fabriques. |
| 12 | Fondo oferta | 16:9 | Abstract soft background, peach to salmon vertical gradient (#F7C3A6 to #F2A488), subtle sunlight flare top right, light grain texture, empty space for text. |
| 12b | Sello garantía | 1:1 | Minimal badge icon, circular seal with a check mark, dark brown line art on transparent background. |

### Tamaños para subir a Shopify
- Hero: 1600×2000 (4:5) mobile y 2400×1350 (16:9) desktop.
- Imágenes de razones: 1600×1200.
- Producto: 1500×1500.
- Exportá en WebP o JPG calidad 80 (el advertorial viene de Meta, la velocidad importa).

---

## Checklist antes de pautar
- [ ] Reemplazar todos los `[XX]` (stats, precios, reseñas, semanas) por datos reales.
- [ ] Revisar que no quede ningún claim de "protege del sol" / "reemplaza el protector".
- [ ] RNPA/RNE del producto en el pie legal.
- [ ] Probar el slider y el sticky CTA en iPhone y Android.
- [ ] Parámetros UTM en los CTA para medir desde Meta.

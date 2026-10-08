# Bronzer · DR WOMAN — Prompts de todas las imágenes de la landing

Un prompt por imagen, en inglés, listo para copiar y pegar.

**Reglas que respetan todos los prompts**
- Misma luz (cálida, dorada, suave), misma paleta (crema, arena, bronce, cacao) y mismo estilo de campaña de lujo: la landing se ve como una sola sesión de fotos.
- **Nada de tomar sol ni camas solares**: la marca es "bronceado sin sol". En el Hero la playa aparece al atardecer: *llegás a la playa ya dorada*. Nunca tirada al mediodía, piel roja ni aceite bronceador.
- **El frasco real**: ninguna IA copia bien la etiqueta. En los prompts con producto, subí la **foto real del frasco** como imagen de referencia (ChatGPT: adjuntala; Midjourney: `--oref` o image prompt; Flux Kontext / Gemini: edición con referencia) y pedí que mantenga la etiqueta idéntica. Si la etiqueta sale deformada, retocala en Photoshop o Canva con la etiqueta original.
- Modelos: mujeres argentinas reales y diversas (25–45 años), piel con textura natural, sin retoque plástico.

---

## Inventario

| # | Sección | Imagen | Formato | Cantidad |
|---|---|---|---|---|
| 1 | Hero | Playa al atardecer (escritorio, columna derecha) | 1:1 · 2000×2000 | 1 |
| 2 | Hero | Playa al atardecer (celular) + variante 2B | 4:5 · 1200×1500 | 1 (+1) |
| 3 | Hero | Avatares de la prueba social | 1:1 · 400×400 | 3 |
| 4 | Beneficios | 3 cápsulas flotando (o frasco, alternativa) | 1:1 · 2000×2000 PNG | 1 |
| 5–9 | Oferta | Galería del producto | 1:1 · 2000×2000 | 5 |
| 10 | Preguntas | Lifestyle con el producto | 4:5 · 1600×2000 | 1 |
| 11–16 | Reseñas | Antes / después **ilustrativos** (fotos separadas) | 4:5 · 1200×1500 | 6 pares |
| 17–23 | Ingredientes | Ingredientes sin fondo | 1:1 · 2048×2048 PNG | 7 (ver `prompts-ingredientes.md`) |

---

## 1. Hero · Escritorio — playa, atardecer (foto estilo celular)

> Va en la columna derecha del Hero (pantalla dividida): formato **cuadrado 1:1, 2000×2000**. Realismo de foto tomada con un Samsung, no de estudio.

```
A candid, hyper-realistic photo taken on a Samsung Galaxy S24 Ultra main camera (24mm wide lens, default phone processing, slight HDR, natural phone sharpening), square 1:1 format. A real-looking Argentine woman, 29 years old, from Buenos Aires, with natural features, light olive skin that already has an even, warm golden tan, a few freckles on her nose and shoulders, sun-lightened honey-brown hair loose, messy and slightly wind-blown with flyaway strands, minimal makeup and natural brows. She sits on a sand dune covered in beach grass at a wide Argentine Atlantic beach like Cariló or Pinamar, at golden hour just before sunset, wearing a terracotta bikini under an open oversized white linen shirt slipping off one shoulder, a thin gold chain necklace and small gold hoops. She is laughing naturally while looking at the camera, one knee up, relaxed and spontaneous, as if a friend just took the photo. Next to her on a striped Turkish towel: a straw tote bag, a pair of sunglasses and the Bronzer supplement bottle from the reference image, label facing the camera and identical to the reference. Light: low warm sun behind her and to the side, creating a soft golden rim light on her hair and shoulders, her face evenly lit by the bright sand reflection, warm glowing skin with real texture, visible pores, tiny imperfections, a bit of sand on her legs. Background: soft dunes, the ocean and a pastel peach-and-gold sky, slightly hazy. Composition: subject in the center-right, face in the upper half of the frame, natural phone-photo framing, not perfectly symmetrical. Colors natural and warm, not over-saturated, not orange skin. Aspirational yet authentic Instagram summer moment. No studio lighting, no heavy bokeh, no beauty filter, no plastic skin, no sunburn, no lying down sunbathing, no tanning oil shine, no text, no watermark, no extra logos.
```

## 2. Hero · Celular — playa, atardecer (foto estilo celular)

> Formato **vertical 4:5, 1200×1500**. La cara va en la mitad de arriba; la mitad de abajo (arena) queda libre para el título que se funde con el fondo.

```
A candid, hyper-realistic vertical 4:5 photo taken on a Samsung Galaxy S24 Ultra main camera (24mm wide lens, default phone processing, slight HDR, natural phone sharpening), for a mobile hero banner. A real-looking Argentine woman around 30, natural features, light olive skin with an even, warm golden tan already glowing, freckles on her cheeks and shoulders, long honey-brown hair loose and tousled by the sea breeze, minimal makeup. She walks barefoot toward the camera along the shoreline of a wide Argentine Atlantic beach (Mar del Plata or Pinamar style) at golden hour, wearing a simple white linen button-up shirt open over a nude-toned bikini, holding her sandals in one hand and the Bronzer supplement bottle from the reference image in the other hand at chest height, label facing the camera and identical to the reference, smiling softly with a confident, effortless look into the camera. Her face and shoulders are in the upper half of the frame; the lower half shows her legs, the wet sand reflecting golden light and gentle foamy waves, softer and slightly darker in tone so text can be placed over it. Light: low warm sunset light from behind and to the side, golden rim light on hair and arms, face softly lit by sky reflection, realistic skin texture with pores, peach fuzz and tiny imperfections, a few grains of sand on her calves. Natural phone-camera depth of field, slight wind motion in the hair, warm but true-to-life colors, not orange skin, not over-saturated. Aspirational, authentic summer moment as if shot by a friend. No studio lighting, no beauty filter, no plastic skin, no sunburn, no sunbathing pose, no tanning oil shine, no text, no watermark, no extra logos.
```

## 2B. Hero · Variante alternativa (para testear)

> Misma estética, otra escena. Sirve como segunda opción para el Hero o para un anuncio A/B. Formato 1:1 (o 4:5 cambiando "square 1:1").

```
A candid, hyper-realistic square 1:1 photo taken on a Samsung Galaxy S24 Ultra (main 24mm camera, default processing, slight HDR), golden hour at a beach bar terrace on an Argentine Atlantic beach. A real-looking Argentine woman in her early 30s with dark wavy hair in a loose low bun with escaping strands, medium-light skin with an even warm golden tan, freckles, natural brows, sitting in the shade of a straw umbrella on a wooden deck, wearing a ribbed cream knit dress over a black bikini, gold hoop earrings, laughing with her head slightly tilted while holding a glass of lemonade; on the wooden table in front of her, the Bronzer supplement bottle from the reference image next to her phone and sunglasses, label facing the camera and identical to the reference. Behind her, blurred dunes, the ocean and a soft peach sky. Light: warm sunset light bouncing off the sand and wood, soft golden glow on her shoulders and cheekbones, real skin texture with pores and tiny imperfections. Natural phone framing, slightly off-center, spontaneous moment captured by a friend, warm true-to-life colors, not orange skin. No studio lighting, no beauty filter, no plastic skin, no sunburn, no sunbathing, no text, no watermark, no extra logos.
```

### Consejos para que se vean 100% reales

- **Pedí "photo", no "render" ni "illustration"**, y mantené la mención al Samsung: eso le da el procesado típico del celular (HDR suave, nitidez de teléfono, sin bokeh exagerado).
- **Si sale demasiado perfecta**, agregá al final: `slight lens flare, minor noise in the shadows, imperfect framing, a few stray hairs across the face`.
- **Si la piel sale naranja**, agregá: `skin tone 30% less saturated, natural honey-gold, not orange`.
- **El frasco**: subí la foto real como referencia. Si la etiqueta se deforma, generá la escena sin frasco (borrá esa parte del prompt) y pegalo después en Canva o Photoshop con una sombra suave sobre la toalla o en la mano.
- **ChatGPT / imagen 4o**: adjuntá la foto del frasco y pegá el prompt. **Midjourney v7**: agregá `--ar 1:1 --style raw --v 7` (o `--ar 4:5`) y el frasco con `--oref`.
- **Misma modelo en toda la landing**: cuando tengas la del Hero, usala como referencia de personaje (ChatGPT: "same woman as this image"; Midjourney: `--cref`) para la galería de la oferta y la foto de preguntas.

## 3. Hero · Avatares de la prueba social (hacer 3 veces cambiando la descripción)

> Ideal: usar fotos reales de clientas (con su permiso). Estos son placeholders para armar la maqueta.

```
Ultra-realistic close-up headshot portrait, square 1:1, of a friendly Argentine woman (variant A: late 20s, light olive skin, dark straight hair · variant B: late 30s, fair skin with freckles, wavy light-brown hair · variant C: mid 40s, medium warm skin, curly dark hair), smiling naturally with a soft, genuine expression, looking at the camera. Her skin has a healthy, warm, even golden glow. Framed from shoulders up, centered, with a softly blurred warm cream interior background. Lighting: soft window light, warm and flattering, natural skin texture, casual everyday style like a real customer photo taken with a good phone camera, approachable and authentic rather than model-like. Color palette: warm neutrals, cream and soft bronze. No heavy makeup, no text, no logos, no watermark.
```

## 4A. Beneficios · 3 cápsulas flotando (recomendada)

> Formato **cuadrado 1:1, 2000×2000, PNG sin fondo**. La sección ya le agrega el brillo dorado detrás, la sombra suave debajo y la animación de flotar: por eso la imagen va **sin fondo y sin sombra**. Adjuntá una foto de la **cápsula real** como referencia para que copie el color exacto.

```
Hyper-realistic premium 3D product photograph of exactly three supplement capsules floating weightlessly in mid-air, isolated on a fully transparent background (PNG with alpha channel, no backdrop, no floor, no cast shadow), square 1:1 composition centered with generous empty margin around them. The capsules are two-piece hard gelatin capsules with a glossy, semi-translucent warm amber-orange shell, the same color as the reference capsule, through which a fine golden-orange beta-carotene powder is subtly visible inside, with a slightly lighter cap section and a clean seam where both halves join. Arrangement: one large hero capsule in the front center, tilted at about 35 degrees and perfectly sharp; a second capsule behind it to the upper right, rotated at a different angle and slightly smaller to create depth; a third capsule to the lower left, partially rotated toward the viewer, very slightly softer in focus — together forming an elegant dynamic diagonal, as if suspended in a slow-motion moment. Around them, a delicate halo of tiny glowing golden powder particles and a few micro specks of light drifting in the air, very subtle and refined, never messy. Lighting: luxury studio setup with a large warm softbox key light from the upper left creating long soft specular highlights along each capsule, a warm golden backlight that makes the shells glow translucent from within like liquid sunset, gentle rim light separating the edges, soft internal caustics and light refraction through the gelatin. Ultra-detailed surface: smooth glossy gelatin with tiny realistic micro-reflections, crisp clean edges ideal for cutout. Color palette: amber, sunset orange, honey gold and warm cream highlights, harmonizing with a bronze and cream luxury brand palette. Shot with a 100mm macro lens at f/11, focus-stacked so the hero capsule is tack sharp. Style: top-tier global beauty and wellness brand campaign, the kind of floating product hero shot used by premium skincare and supplement brands, minimal, sensorial and aspirational. No bottle, no hands, no surface, no shadow, no smoke, no splashes, no text, no logos, no watermark, no plastic CGI look, no cartoon style.
```

**Variaciones (agregalas al final si querés):**
- Si la cápsula real es **blanda (softgel) y redonda u ovalada**, cambiá la parte del tipo de cápsula por: `seamless oval softgel capsules with a glossy translucent amber-orange shell filled with golden beta-carotene oil`.
- Más lujo: `a thin swirl of liquid golden-orange beta-carotene oil curling elegantly between the capsules, glossy and glowing`.
- Con ingrediente: `a single fresh carrot slice and a tiny turmeric root piece floating in the background, slightly out of focus`.
- Si tu herramienta no genera fondo transparente: reemplazá la primera parte por `on a pure seamless white background` y después quitá el fondo con remove.bg, Photoroom o Canva.

**Ajustes en la sección Beneficios:** "Ajuste de la foto" = **Completa (PNG sin fondo)** · **Brillo dorado** activado · **Sombra** activada · **Producto flotando** activado.

## 4B. Beneficios · Frasco sin fondo (alternativa)

```
Ultra-realistic premium studio packshot of the Bronzer supplement bottle from the reference image, isolated on a fully transparent background (PNG with alpha channel, no backdrop, no surface). The bottle stands upright, three-quarter view rotated slightly to the left, label facing the camera, sharp, perfectly legible and identical to the reference: same colors, typography, layout and logo. Two or three warm amber-orange softgel capsules rest in front of the bottle at an elegant angle, glowing translucent as if filled with golden beta-carotene oil. Lighting: large soft key light from the upper left, gentle fill from the right, a soft vertical highlight along the bottle edge, subtle realistic reflections, clean and premium. Shot with a 100mm macro lens at f/11, everything tack sharp, crisp clean edges ideal for cutout. Style: luxury wellness brand e-commerce hero shot, minimal and elegant. No cast shadow on any surface, no background, no props other than the capsules, no extra text, no watermark.
```

## 5. Oferta · Galería 1 — Packshot principal

```
Ultra-realistic premium e-commerce hero image, square 1:1, of the Bronzer supplement bottle from the reference image standing in the center on a sculpted travertine stone pedestal, label facing the camera, sharp and identical to the reference. Background: a seamless warm cream-to-peach gradient wall with a soft circular glow of golden light behind the bottle, like a sunset halo, evoking a tan without sun. A few warm amber softgel capsules and a thin slice of fresh carrot rest at the base of the pedestal as subtle ingredient cues. Lighting: soft large key light from the upper left, gentle fill, soft contact shadow under the pedestal, delicate highlights on the bottle edges. Color palette: cream, peach, honey gold, bronze. Shot with 100mm lens, f/11, fully sharp, luxury skincare brand e-commerce aesthetic, clean, minimal, high-end. No text, no extra logos, no watermark.
```

## 6. Oferta · Galería 2 — Ritual diario (mano + cápsula)

```
Ultra-realistic lifestyle close-up, square 1:1, of a woman's hand with warm, glowing golden skin and a delicate gold ring, holding a single translucent amber-orange softgel capsule between thumb and index finger, the capsule glowing like liquid sunlight. In the softly blurred background, the Bronzer bottle from the reference image stands on a cream marble bathroom counter next to a glass of water and a small linen towel, label recognizable and identical to the reference. Morning ritual mood, calm and aspirational. Lighting: warm diffused morning light from a frosted window, soft highlights on the capsule and the hand, gentle shadows. Shot on 100mm macro lens, f/2.8, shallow depth of field focused on the capsule. Color palette: cream, honey gold, warm white, bronze. Luxury wellness brand aesthetic. No text, no extra logos, no watermark.
```

## 7. Oferta · Galería 3 — Pack (bundle)

```
Ultra-realistic premium e-commerce bundle shot, square 1:1, of three identical Bronzer supplement bottles from the reference image arranged in an elegant staggered row on a warm sand-colored linen surface, the center bottle slightly forward, all labels facing the camera, sharp and identical to the reference. Beside them, a small ceramic dish with warm amber softgel capsules and a folded cream gift card with a thin gold ribbon, suggesting a 3-month protocol gift set. Background: seamless warm cream wall with a soft diagonal shadow of a window frame and a gentle golden glow. Lighting: soft key light from the upper left, gentle fill, soft contact shadows, premium and inviting. Shot with 85mm lens, f/11, fully sharp. Color palette: cream, sand, honey gold, bronze, ivory. Luxury wellness brand aesthetic. No text on the card, no extra logos, no watermark.
```

## 8. Oferta · Galería 4 — Macro textura cápsulas

```
Ultra-realistic macro photograph, square 1:1, of a generous scatter of translucent amber-orange softgel capsules on a smooth cream travertine surface, the capsules glowing from within as if filled with golden beta-carotene oil, with tiny light caustics and warm reflections cast on the stone. A few capsules are stacked, one is cut open releasing a single drop of rich golden-orange oil. The Bronzer bottle from the reference image appears softly out of focus in the upper right corner, label recognizable. Lighting: warm backlight and side light to make the capsules glow translucent, soft fill from the front. Shot on 100mm macro lens, f/5.6, extremely detailed, luxurious and sensorial. Color palette: amber, sunset orange, honey gold, cream. No text, no extra logos, no watermark.
```

## 9. Oferta · Galería 5 — Lifestyle con producto

```
Ultra-realistic lifestyle campaign photograph, square 1:1, of a radiant Argentine woman in her early 30s with warm, even golden skin, wearing a white linen shirt with rolled sleeves, sitting in the shade of a whitewashed terrace with terracotta pots and olive branches, holding the Bronzer bottle from the reference image in one hand and a glass of water in the other, smiling softly while looking slightly off camera. The bottle label faces the camera and matches the reference. She is fully in the shade; the background shows bright warm bokeh, but no direct sun touches her skin. Lighting: soft bounced warm light, natural skin texture, healthy glow on shoulders and face. Shot on 50mm lens, f/2.2, editorial luxury wellness campaign aesthetic, aspirational summer mood without sunbathing. Color palette: white, cream, terracotta, olive green, honey gold. No beach, no tanning, no text, no extra logos, no watermark.
```

## 10. Preguntas · Lifestyle (producto en la cartera)

```
Ultra-realistic lifestyle photograph, vertical 4:5, close crop of a woman's torso and hands: she wears a cream ribbed knit top and is slipping the Bronzer supplement bottle from the reference image into an open tan leather tote bag, label facing the camera, sharp and identical to the reference. Her arms and hands show a warm, natural, even golden glow, with neutral almond-shaped manicured nails and a thin gold bracelet. Background: softly blurred bright warm interior near a window. Mood: effortless daily ritual, "my glow goes everywhere with me". Lighting: soft diffused window light from the left, warm tones, gentle shadows, natural skin texture. Shot on 85mm lens, f/2.8, shallow depth of field focused on the bottle. Color palette: cream, tan leather, honey gold, bronze. Luxury lifestyle brand aesthetic. No face visible, no text, no extra logos, no watermark.
```

---

## 11–16. Reseñas · Antes / después — SOLO EJEMPLO PARA LA CLIENTA

> **Importante:** estas imágenes son **ilustrativas**, para mostrarle a tu clienta cómo se vería la sección. **No las publiques como resultados reales**: son personas generadas por IA, y publicarlas como clientas sería publicidad engañosa (va contra las políticas de Meta, ANMAT y Defensa del Consumidor). Para la tienda, usá fotos reales de clientas con su autorización escrita.

**Cómo hacerlas para que sea la misma mujer en las dos fotos:**
1. Generá la foto **ANTES** con su prompt (formato vertical 4:5).
2. Para la foto **DESPUÉS**, **adjuntá la foto del ANTES** y pegá el prompt de edición. Así la herramienta solo cambia el tono de piel y deja todo lo demás igual. (ChatGPT: adjuntá la imagen y pegá el texto · Gemini / Flux Kontext: modo edición · Midjourney: editor / "Vary Region" sobre la piel.)
3. Cargá cada una en **Foto antes** y **Foto después** del bloque Reseña.
4. Si el cambio se ve exagerado o naranja, pedí: `make the tan 30% more subtle and less orange`. Si se nota poco: `make the golden tan one shade deeper, keep it natural`.

### 11. Rostro — piel clara

**ANTES** (generar desde cero):
```
A hyper-realistic vertical 4:5 photo taken on a Samsung Galaxy S24 Ultra main camera (default phone processing, slight HDR, natural phone sharpening), used as the 'before' photo of a skincare progress comparison. A real-looking Argentine woman, 27 years old, with very fair, slightly pale and cool-toned skin, light freckles on her nose and cheeks, natural light-brown hair pulled back in a low ponytail with a few loose strands, no makeup, natural brows. She faces the camera with a neutral, relaxed expression, framed from the top of her head to mid-chest, wearing a plain white ribbed tank top. Background: a plain warm off-white wall in her apartment. Light: soft, even, diffused daylight from a window in front of her, no harsh shadows, no warm filter. Her skin looks natural but a bit dull and washed out, with visible pores, a few tiny blemishes and real texture. Honest, unretouched progress-photo style, like a real customer photo. No beauty filter, no makeup, no text, no watermark.
```

**DESPUÉS** (adjuntá la foto del ANTES y pedí que la edite):
```
Keep absolutely everything identical to the attached photo: same woman, same face and features, same expression, same pose, same framing, same hair, same clothing, same background, same lighting, same phone-camera look and image quality. Change ONLY her skin tone: her face, neck, ears, shoulders and chest. The new tone must be a clearly visible, natural, warm golden-bronze tan, about two shades deeper than in the attached photo, like a healthy summer glow achieved from within with a beta-carotene supplement after 18 days: rich honey-gold and bronze undertones, even and uniform, luminous, with a soft healthy sheen on the high points. It must still look like real skin with the same pores, freckles, moles and texture — not orange, not yellow, not a spray tan, no streaks, no patches, no tan lines, no makeup added, no beauty filter, no smoothing.
```

### 12. Rostro — piel trigueña

**ANTES** (generar desde cero):
```
A hyper-realistic vertical 4:5 photo taken on a Samsung Galaxy S24 Ultra main camera (default phone processing, slight HDR), used as the 'before' photo of a skincare progress comparison. A real-looking Argentine woman, 34 years old, with light olive skin that looks slightly sallow, tired and uneven, dark wavy shoulder-length hair loose behind her shoulders, no makeup, natural thick brows. Three-quarter angle toward the camera, soft neutral expression, framed from the top of her head to the chest, wearing a plain black ribbed crew-neck top. Background: a plain light beige wall. Light: soft diffused daylight from a window on the left, even and neutral, no warm tones. Real skin texture with visible pores, slight under-eye shadows and small imperfections. Honest, unretouched progress-photo style, like a real customer photo. No beauty filter, no makeup, no text, no watermark.
```

**DESPUÉS** (adjuntá la foto del ANTES y pedí que la edite):
```
Keep absolutely everything identical to the attached photo: same woman, same face and features, same expression, same pose, same framing, same hair, same clothing, same background, same lighting, same phone-camera look and image quality. Change ONLY her skin tone: her face, neck, ears and décolletage. The new tone must be a clearly visible, natural, warm golden-bronze tan, about two shades deeper than in the attached photo, like a healthy summer glow achieved from within with a beta-carotene supplement after 18 days: rich honey-gold and bronze undertones, even and uniform, luminous, with a soft healthy sheen on the high points. It must still look like real skin with the same pores, freckles, moles and texture — not orange, not yellow, not a spray tan, no streaks, no patches, no tan lines, no makeup added, no beauty filter, no smoothing.
```

### 13. Escote y hombros

**ANTES** (generar desde cero):
```
A hyper-realistic vertical 4:5 close-up photo taken on a Samsung Galaxy S24 Ultra main camera (default phone processing), used as the 'before' photo of a skin progress comparison. A real-looking woman's upper body from the chin down to just below the collarbones, no face visible except the lower jawline, wearing a thin-strap ivory cotton camisole, standing straight in front of a plain light-grey wall. Her skin is fair to light, slightly cool and pale, with a couple of small moles on the shoulder, fine natural texture and visible pores. Light: soft, even, diffused daylight from a window in front, neutral color, no shadows. Honest, unretouched progress-photo style, centered framing, like a real customer photo. No beauty filter, no oil shine, no text, no watermark.
```

**DESPUÉS** (adjuntá la foto del ANTES y pedí que la edite):
```
Keep absolutely everything identical to the attached photo: same woman, same face and features, same expression, same pose, same framing, same hair, same clothing, same background, same lighting, same phone-camera look and image quality. Change ONLY her skin tone: her neck, collarbones, shoulders, upper arms and chest. The new tone must be a clearly visible, natural, warm golden-bronze tan, about two shades deeper than in the attached photo, like a healthy summer glow achieved from within with a beta-carotene supplement after 18 days: rich honey-gold and bronze undertones, even and uniform, luminous, with a soft healthy sheen on the high points. It must still look like real skin with the same pores, freckles, moles and texture — not orange, not yellow, not a spray tan, no streaks, no patches, no tan lines, no makeup added, no beauty filter, no smoothing.
```

### 14. Brazos y manos

**ANTES** (generar desde cero):
```
A hyper-realistic vertical 4:5 close-up photo taken on a Samsung Galaxy S24 Ultra main camera (default phone processing), used as the 'before' photo of a skin progress comparison. A real-looking woman's forearm and hand resting palm down on a plain cream linen sofa cushion, seen from above at a slight angle, wearing a thin gold ring and with short nude-colored nails. Her skin is naturally fair and slightly pale with cool undertones, visible fine hairs, a few freckles and realistic texture on the knuckles. Light: soft, even overhead daylight from a nearby window, neutral color temperature, no harsh shadows. Honest, unretouched progress-photo style, like a real customer photo. No beauty filter, no lotion shine, no text, no watermark.
```

**DESPUÉS** (adjuntá la foto del ANTES y pedí que la edite):
```
Keep absolutely everything identical to the attached photo: same woman, same face and features, same expression, same pose, same framing, same hair, same clothing, same background, same lighting, same phone-camera look and image quality. Change ONLY her skin tone: her forearm, wrist and the back of her hand (keep the palms and nails natural). The new tone must be a clearly visible, natural, warm golden-bronze tan, about two shades deeper than in the attached photo, like a healthy summer glow achieved from within with a beta-carotene supplement after 18 days: rich honey-gold and bronze undertones, even and uniform, luminous, with a soft healthy sheen on the high points. It must still look like real skin with the same pores, freckles, moles and texture — not orange, not yellow, not a spray tan, no streaks, no patches, no tan lines, no makeup added, no beauty filter, no smoothing.
```

### 15. Piernas

**ANTES** (generar desde cero):
```
A hyper-realistic vertical 4:5 photo taken on a Samsung Galaxy S24 Ultra main camera (default phone processing), used as the 'before' photo of a skin progress comparison. A real-looking woman's legs from mid-thigh to feet, standing relaxed with feet slightly apart on a light grey porcelain tile floor in front of a plain white wall, wearing short light-blue denim shorts and barefoot. Her legs are naturally fair, slightly pale and cool-toned, with real skin texture, a few tiny moles and slight natural unevenness around the knees. Light: soft, even, diffused daylight from a window, neutral color, no strong shadows. Honest, unretouched progress-photo style taken by someone standing in front of her, like a real customer photo. No beauty filter, no oil shine, no text, no watermark.
```

**DESPUÉS** (adjuntá la foto del ANTES y pedí que la edite):
```
Keep absolutely everything identical to the attached photo: same woman, same face and features, same expression, same pose, same framing, same hair, same clothing, same background, same lighting, same phone-camera look and image quality. Change ONLY her skin tone: her thighs, knees, calves, ankles and the top of her feet. The new tone must be a clearly visible, natural, warm golden-bronze tan, about two shades deeper than in the attached photo, like a healthy summer glow achieved from within with a beta-carotene supplement after 18 days: rich honey-gold and bronze undertones, even and uniform, luminous, with a soft healthy sheen on the high points. It must still look like real skin with the same pores, freckles, moles and texture — not orange, not yellow, not a spray tan, no streaks, no patches, no tan lines, no makeup added, no beauty filter, no smoothing.
```

### 16. Rostro — mujer de 40+

**ANTES** (generar desde cero):
```
A hyper-realistic vertical 4:5 photo taken on a Samsung Galaxy S24 Ultra main camera (default phone processing, slight HDR), used as the 'before' photo of a skin progress comparison. A real-looking Argentine woman, 45 years old, with fair-to-medium skin that looks slightly dull and uneven, natural expression lines around the eyes and mouth, shoulder-length dark blonde hair with some natural grey strands, no makeup. She faces the camera with a calm, natural half-smile, framed from the top of her head to the chest, wearing a white linen button-up shirt. Background: a plain warm light-grey wall at home. Light: soft, even, diffused daylight from a window in front, neutral color, no warm filter. Real skin texture with pores, fine lines and small sunspots, honest and unretouched, like a real customer photo. No beauty filter, no makeup, no text, no watermark.
```

**DESPUÉS** (adjuntá la foto del ANTES y pedí que la edite):
```
Keep absolutely everything identical to the attached photo: same woman, same face and features, same expression, same pose, same framing, same hair, same clothing, same background, same lighting, same phone-camera look and image quality. Change ONLY her skin tone: her face, neck, ears and the open collar area of her chest (keep every wrinkle, line and spot exactly as they are). The new tone must be a clearly visible, natural, warm golden-bronze tan, about two shades deeper than in the attached photo, like a healthy summer glow achieved from within with a beta-carotene supplement after 18 days: rich honey-gold and bronze undertones, even and uniform, luminous, with a soft healthy sheen on the high points. It must still look like real skin with the same pores, freckles, moles and texture — not orange, not yellow, not a spray tan, no streaks, no patches, no tan lines, no makeup added, no beauty filter, no smoothing.
```

---

## 17–23. Ingredientes

Los 7 prompts (betacaroteno, licopeno, cúrcuma, vitamina C, vitamina E, complejo B, ácido fólico) están en **`prompts-ingredientes.md`**, con el mismo estilo de luz y paleta.

---

## Consejos para que salgan nivel marca top

- **Generá primero la imagen 1 (Hero)** y usala como **referencia de estilo y de modelo** para todas las demás: así toda la landing tiene la misma luz, paleta y protagonista.
- **Usá la misma modelo** en Hero, Galería 5 y Preguntas para que se sienta como una campaña real (en ChatGPT, pedí "same woman as the previous image"; en Midjourney, `--cref`).
- **Midjourney:** agregá al final `--ar 16:9` / `--ar 4:5` / `--ar 1:1` / `--ar 8:5`, más `--style raw --v 7`.
- **Producto:** si el frasco sale con la etiqueta deformada, generá la escena sin frasco y después pegá encima la foto real del producto en Photoshop o Canva (sombra suave abajo).
- **Antes / después:** chequeá que el "después" no se vea naranja. Si se ve exagerado, pedí "make the after effect 50% more subtle".

# Prompts de imágenes · Listicle Metabomen +40 · estilo "foto de celular argentino"

Formato: **1:1 (1080x1080)** salvo que se indique otra cosa. Prompts en inglés (rinden mejor en Midjourney, Flux, GPT-image, Imagen o Nano Banana).
Cuando aparece el frasco, **subí la foto real de Metabomen como referencia** y revisá la etiqueta: la IA deforma letras.

## Bloque de realismo (pegalo al FINAL de cada prompt)

```
Amateur smartphone photo taken with a mid-range Android phone (Samsung Galaxy A54 / Motorola), not professional.
Slightly imperfect framing, a bit tilted, subject not perfectly centered. Natural mixed indoor lighting
(warm ceiling bulb + cold window light), mild digital noise and grain, slight motion softness, auto-HDR look,
JPEG compression. Real skin with pores, wrinkles, uneven tone, stubble, a few grey hairs, under-eye bags.
Ordinary Argentine middle-class home in Buenos Aires suburbs: everyday clutter, worn furniture, nothing staged.
Candid, unposed, looks like a photo a friend sent on WhatsApp. No text, no watermark, no logos except the supplement bottle.
```

## Negativo (si la herramienta lo acepta: Midjourney `--no`, Flux/SD "negative prompt")

```
studio lighting, professional photography, model, perfect skin, airbrushed, symmetrical face, six-pack, fitness model,
stock photo, cinematic color grading, bokeh balls, 3D render, illustration, CGI, oversaturated, plastic skin,
extra fingers, deformed hands, distorted text, American-style kitchen, luxury interior
```

Midjourney: agregá `--style raw --ar 1:1 --v 7`. GPT-image / Nano Banana: pegá el prompt + el bloque de realismo tal cual.

---

## 01 · Hero (3 AM, no puede dormir)
**Archivo:** `img_hero` en el bloque 01.

> Selfie-angle photo of a 46-year-old Argentine man with a noticeable beer belly, sitting on the edge of an unmade double bed at night, wearing an old faded striped football t-shirt (no logos, no club crest) and boxer shorts. The room is dark; his face is lit only by the cold light of his phone. Tired, puffy eyes, messy hair. On the wooden nightstand: a glass of water, reading glasses, a phone charger cable and a black supplement bottle with a red-and-white label (use reference). Cheap wardrobe with a mirror in the background, a ceiling fan.

## 02 · Razón 1 (misma dieta, distinto sueño)
**Archivo:** `img` en el bloque 02.

> Overhead phone photo of a typical Argentine kitchen table with a plastic-patterned tablecloth: two identical plates of grilled chicken breast with lettuce and tomato salad, a mate with its bombilla and a thermos next to them, a cheap analog wall clock partly visible. Taken quickly, slightly crooked, warm kitchen light, some breadcrumbs and a fork out of place.

## 03 · Razón 2 (la heladera de noche)
**Archivo:** `img` en el bloque 03.

> Photo taken by someone else from the kitchen doorway at night: a 45-year-old Argentine man with a belly, in shorts and a worn t-shirt, standing in front of an open old white refrigerator covered in magnets and a delivery menu. The fridge light illuminates him. He is eating a slice of bread with dulce de leche straight from the jar. A plastic bag of bread and a soda bottle on the counter, small tiled kitchen (old beige tiles), dirty dishes in the sink. Caught off guard, half-smiling.

## 04 · Razón 3 (el jean que no abrocha)
**Archivo:** `img` en el bloque 04.

> Mirror photo in a small Argentine bathroom with old white and blue tiles: a 47-year-old man, side profile, shirtless or in an undershirt, struggling to button his jeans over his belly. He holds the phone in one hand, reflected in a slightly dirty mirror with toothpaste spots. Shaving cream, toothbrush cup and a towel hanging in the background, cold fluorescent light. Real dad bod, relatable, not humiliating.

## 04 · Frasco del CTA intermedio
**Archivo:** `img_frasco` en el bloque 04. Este va **limpio** (packshot), sin el bloque de realismo:

> Product packshot of the attached black supplement bottle "METABOMEN" by DR.MEN, front-facing, three capsules and a little powder at the base, isolated on transparent background, soft studio light, ultra sharp label, keep label text exactly as reference.

## 06 · Producto en la vida real (alternativa a la placa)
**Archivo:** `img` en el bloque 06.

> Phone photo of the attached black supplement bottle "METABOMEN" (keep label exactly as reference) on an Argentine kitchen counter in the morning, next to a mate and a thermos, a toast with butter, keys and a wallet, a phone with a cracked screen protector. Natural window light, slightly overexposed background, everyday breakfast mess. Taken quickly with one hand.

## 09 · Imagen de la oferta
**Archivo:** `img_oferta` en el bloque 09.

> Phone photo of an opened cardboard delivery box on a wooden table in an Argentine home: inside, three black supplement bottles "METABOMEN" (use reference, same label) and two printed booklets, crumpled paper filling, a shipping label (no readable text) on the box, a cutter knife beside it. Unboxing feel, warm afternoon light from a window, slightly messy table with a mate.

---

## Cómo lograr que salga bien
- **Generá 4 variantes por prompt** y quedate con la que tenga manos y frasco perfectos; descartá cualquiera con dedos raros.
- **Etiqueta del frasco:** si la IA la deforma, generá la escena sin frasco y pegá el frasco real encima en Photoshop/Canva (con una sombra suave).
- **Que no parezca IA:** bajale un poco la nitidez, sumale grano y recortá torcido. Las fotos "perfectas" delatan.
- **Caras:** que no sean siempre el mismo modelo; cambiá edad (42 a 52), contextura, barba o canas en cada imagen.

## 07 · Antes / después
**No lo generes con IA.** Esas fotos llevan la etiqueta "Antes / Después" y se leen como resultados reales del producto: tienen que ser de un cliente real, con permiso por escrito.
Mientras no las tengas, dejá `img_antes` e `img_despues` vacías.

## Para los anuncios de Meta (opcional)
Mismos prompts en **4:5 (1080x1350)** y **9:16 (1080x1920)**, agregando: `vertical phone photo, subject in the middle third, empty space at the top for a headline`.

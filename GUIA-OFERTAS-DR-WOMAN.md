# Ofertas DR WOMAN · reemplazo de Kaching (copiar y pegar)

Cómo funciona: cada producto queda con **1 sola variante** (precio del frasco). El bloque agrega ×1, ×2, ×3 o ×6 y un **descuento automático** deja el precio del pack. El upsell (bump) y los regalos se agregan solos.

---

## 0 · Antes de empezar (5 min)

- [ ] **Precios de los frascos** (Productos → cada uno, 1 sola variante, sin precio de comparación):
  | Producto | Precio |
  |---|---|
  | CELUFIT | `49900` |
  | SLIMFIT | `59700` |
  | MULTIMAGNESIO | `55800` |
  | MENOFIT | `57900` |
  | BRONZER | `53990` |
- [ ] Borrá las variantes de pack que hayan quedado (tiene que decir "1 de 1 variante").
- [ ] Sacá el banner "válida hasta el 26 de agosto" de CELUFIT.
- [ ] Ocultá los bloques de Kaching en cada plantilla de producto.

---

## 1 · Descuentos de packs (3 por producto)

**Descuentos → Crear descuento → Monto de descuento en productos**, para todos:
- Método: **Descuento automático**
- Valor: **Monto fijo** · Se aplica a: **Productos específicos → (el producto)**
- ✅ **Aplicar el descuento solo una vez por pedido**
- Requisito mínimo: **Cantidad mínima de artículos**
- Combinaciones: ✅ **Descuentos de productos** ✅ **Descuentos de envío**

### CELUFIT
| Título | Cant. mínima | Monto fijo | Queda en |
|---|---|---|---|
| `Celufit · Protocolo 60 días (2 frascos)` | 2 | `29900` | $69.900 |
| `Celufit · Protocolo Verano Completo (3 frascos)` | 3 | `63800` | $85.900 |
| `Celufit · Piernas 6 meses (6 frascos)` | 6 | `194500` | $104.900 |

### SLIMFIT
| Título | Cant. mínima | Monto fijo | Queda en |
|---|---|---|---|
| `Slimfit · Protocolo 60 días (2 frascos)` | 2 | `35800` | $83.600 |
| `Slimfit · Protocolo Verano Completo (3 frascos)` | 3 | `75900` | $103.200 |
| `Slimfit · Transformación 6 meses (6 frascos)` | 6 | `232500` | $125.700 |

### MULTIMAGNESIO
| Título | Cant. mínima | Monto fijo | Queda en |
|---|---|---|---|
| `Multimagnesio · Protocolo 120 días (2 frascos)` | 2 | `33500` | $78.100 |
| `Multimagnesio · Protocolo 180 días (3 frascos)` | 3 | `71000` | $96.400 |
| `Multimagnesio · Descanso 12 meses (6 frascos)` | 6 | `217300` | $117.500 |

### MENOFIT (cambian los nombres: 1 frasco = 30 días)
Editá los 3 que ya creaste y cambiá solo el título (los montos quedan igual):
| Título nuevo | Cant. mínima | Monto fijo |
|---|---|---|
| `Menofit · Protocolo 60 días (2 frascos)` | 2 | `37500` |
| `Menofit · Protocolo 90 días (3 frascos)` | 3 | `75910` |
| `Menofit · Tratamiento 6 meses (6 frascos)` | 6 | `229500` |

---

## 2 · Descuentos de upsell (bump)

**Descuentos → Crear descuento → Compra X y llévate Y → Automático.**
En todos: **Máximo de usos por pedido: 1** · Combinaciones: ✅ Productos ✅ Envío.

### SLIMFIT como regalo (se usa en CELUFIT, MULTIMAGNESIO y MENOFIT)
| Título | El cliente compra | El cliente obtiene | Valor |
|---|---|---|---|
| `SLIMFIT 50% OFF` | Cantidad mínima **1** de **CELUFIT, MULTIMAGNESIO, MENOFIT** | 1 × SLIMFIT | Monto por artículo `29850` |
| `SLIMFIT de regalo` | Cantidad mínima **6** de **CELUFIT, MULTIMAGNESIO, MENOFIT** | 1 × SLIMFIT | **Gratis** |

> Si ya tenías "SLIMFIT 50% con Menofit" (con 26000), **borralo**: este nuevo lo reemplaza y deja SLIMFIT en $29.850.

### CELUFIT como regalo (se usa en SLIMFIT)
| Título | El cliente compra | El cliente obtiene | Valor |
|---|---|---|---|
| `CELUFIT 50% OFF con Slimfit` | Cantidad mínima **1** de **SLIMFIT** | 1 × CELUFIT | Monto por artículo `24950` |
| `CELUFIT de regalo con Slimfit` | Cantidad mínima **6** de **SLIMFIT** | 1 × CELUFIT | **Gratis** |

### BRONZER (ya lo tenés) · revisar el monto
El bloque de Bronzer muestra CELUFIT a **$23.990**. Si CELUFIT ahora vale **$49.900**, el descuento "CELUFIT 50% con Bronzer" tiene que ser **`25910`** (antes era 26000).

---

## 3 · Guías de regalo (productos de $0)

**Productos → Agregar producto**, para cada guía:
- Precio `0` · Precio de comparación según la tabla
- ❌ destildá "Es un producto físico" y "Hacer seguimiento de cantidad"
- Abajo, en **Publicación en motores de búsqueda → Identificador de URL**, poné **exactamente** el handle de la tabla
- Estado: **Activo** · Canal: **Tienda online**

| Producto | Título | Comparación | Handle (URL) |
|---|---|---|---|
| CELUFIT | Guía Protocolo Piel Firme 30+ | `25000` | `guia-protocolo-piel-firme-30` |
| CELUFIT | Guía Alimentación antirretención | `20000` | `guia-alimentacion-antirretencion` |
| SLIMFIT | Ebook Slimfit: hábitos y comidas | `25000` | `ebook-slimfit-habitos-y-comidas` |
| SLIMFIT | Guía Recetas saciantes de verano | `20000` | `guia-recetas-saciantes-de-verano` |
| MULTIMAGNESIO | Guía Protocolo Descanso y Energía | ya existe (Menofit) | `guia-protocolo-descanso-y-energia` |
| MULTIMAGNESIO | Guía Rutina nocturna anti-estrés | `20000` | `guia-rutina-nocturna-anti-estres` |

Mientras no existan, la oferta muestra los regalos igual (con ícono) pero no los agrega al carrito. El editor te avisa con un cartel amarillo.

---

## 4 · Pegar los bloques

En **Personalizar**, en la plantilla de cada producto: **Agregar bloque → Liquid personalizado → borrar todo → pegar → Guardar**.

| Producto | Archivo |
|---|---|
| CELUFIT | `bloque/celufit-offer-liquid-personalizado.liquid` |
| SLIMFIT | `bloque/slimfit-offer-liquid-personalizado.liquid` |
| MULTIMAGNESIO | `bloque/multimagnesio-offer-liquid-personalizado.liquid` |
| MENOFIT | `bloque/menofit-offer-liquid-personalizado.liquid` (actualizado) |

Si el bloque da "Algo salió mal" al guardar: **Editar código → Snippets → nuevo snippet** (`celufit-offer`, etc.), pegá ahí, y en el Liquid personalizado poné `{% render 'celufit-offer', product: product %}`.

---

## 5 · Prueba (2 min por producto)

| Pack | CELUFIT | SLIMFIT | MULTIMAGNESIO |
|---|---|---|---|
| 1 frasco | ×1 $49.900 | ×1 $59.700 | ×1 $55.800 |
| 2 frascos | ×2 $69.900 | ×2 $83.600 | ×2 $78.100 |
| 3 frascos | ×3 $85.900 | ×3 $103.200 | ×3 $96.400 |
| 6 frascos | ×6 $104.900 + SLIMFIT $0 | ×6 $125.700 + CELUFIT $0 | ×6 $117.500 + SLIMFIT $0 |
| Bump tildado (1–3 frascos) | SLIMFIT $29.850 | CELUFIT $24.950 | SLIMFIT $29.850 |

---

## Pendientes a revisar

1. **Colores**: Celufit `#FC4B91`, Slimfit `#F65E68`, Multimagnesio `#9DBAD5` (bordes, badges y fondos con el color exacto; textos y el botón de Multimagnesio en un tono más oscuro del mismo color para que se lean). Para cambiarlos: editá `main` en `tools/gen_offers.py` y corré `python3 tools/gen_offers.py`.
2. **Menofit "1 comprimido al día"**: el bloque de beneficios de Menofit dice 1 comprimido; si son 2 por día, hay que corregirlo.
3. **Sorteo**: bases y condiciones publicadas, con forma de participar sin compra.
4. **Garantía de 60 días**: tiene que estar escrita en tu política de devoluciones.

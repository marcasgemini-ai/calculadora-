# Oferta Glow · Bronzer: paso a paso (15 min)

Hacelo en este orden. Las partes A, B y C no cambian nada de lo que ve la clienta, así que podés hacerlas en cualquier momento. La parte D es el cambio real: hacela en un horario de poco tráfico.

---

## A. Regalos · 3 min

**Productos → Agregar producto.** Creá 2 productos:

| Título | Precio | Precio comparativo |
|---|---|---|
| Guía "Rutina Glow" | 0 | 25000 |
| Guía "Alimentación para un tono dorado" | 0 | 20000 |

En cada uno:
- Destildá **"Este es un producto físico"**.
- Destildá **"Hacer un seguimiento de la cantidad"**.
- Estado: **Activo** → **Guardar**.

---

## B. Descuentos · 5 min

**Descuentos → Crear descuento.** Creá los 3:

**1) CELUFIT a $23.990**
- Tipo: **Compra X y llévate Y** · Método: **Descuento automático**
- Título: `CELUFIT 50% con Bronzer`
- El cliente compra: **Cantidad mínima de artículos = 1** · Productos: **Bronzer**
- El cliente obtiene: **Cantidad 1** · Productos: **CELUFIT**
- Valor del descuento: **Monto de descuento por artículo = 26000**
- ✅ Establecer número máximo de usos por pedido: **1**
- Combinaciones: ✅ **Descuentos de envío**
- Guardar

**2) CELUFIT gratis con 6 frascos** (hacelo después de cargar las variantes del paso D2)
- Igual que el anterior, pero:
- Título: `CELUFIT gratis Glow 12 meses`
- El cliente compra: **Cantidad mínima 1** · Productos: **Bronzer → solo la variante "6 frascos"**
- Valor del descuento: **Gratis**

**3) Envío gratis**
- Tipo: **Envío gratis** · Método: **Descuento automático**
- Título: `Envío gratis`
- Requisito mínimo: **Monto mínimo de compra = 53990**
- Combinaciones: ✅ **Descuentos de productos**
- Guardar

---

## C. Pegar la sección en el tema · 4 min

1. **Tienda online → Temas** → en tu tema actual: **⋯ → Duplicar**.
2. En la **copia**: **⋯ → Editar código**.
3. Carpeta **Sections** → **Agregar una nueva sección** → nombre: `glow-offer` → Listo.
4. Borrá todo lo que viene por defecto y **pegá entero** el archivo `sections/glow-offer.liquid` → **Guardar**.

---

## D. Activar la oferta · 3 min + prueba (horario de poco tráfico)

**D1. Variantes del Bronzer.** Productos → Bronzer → Variantes → **Agregar opciones**:
- Nombre de la opción: `Pack`
- Valores, **en este orden**: `1 frasco`, `2 frascos`, `3 frascos`, `6 frascos`

Después cargá precios y SKU:

| Variante | Precio | Precio comparativo | SKU |
|---|---|---|---|
| 1 frasco | 53990 | (vacío) | BRZ-1 |
| 2 frascos | 75800 | 107980 | BRZ-2 |
| 3 frascos | 93300 | 161970 | BRZ-3 |
| 6 frascos | 113700 | 323940 | BRZ-6 |

Guardar. Ahora creá el **descuento B2** (CELUFIT gratis con 6 frascos).

**D2. Armar la página.** En la copia del tema: **Personalizar** → arriba, elegí **Productos → Bronzer**.
1. **Agregar sección → "Oferta Glow (packs)"** y arrastrala abajo del título del producto.
2. En la sección elegí:
   - **Producto bump** → CELUFIT
   - **Regalo 1 · Producto** → Guía "Rutina Glow"
   - **Regalo 2 · Producto** → Guía "Alimentación para un tono dorado"
3. En el bloque **Información del producto** del tema, **ocultá** (ícono del ojo): Kaching, Selector de variantes y Botones de compra.
4. **Guardar** → **⋯ → Publicar**.

**D3. Prueba rápida (en el celular).**
- [ ] Elegí 1 frasco + tildá CELUFIT → en el checkout CELUFIT sale **$23.990**.
- [ ] Elegí 6 frascos → CELUFIT sale **$0** y entran las 2 guías a $0.
- [ ] Elegí 2 frascos → entra 1 guía a $0.
- [ ] En todos los casos, el envío sale **gratis**.

Si todo da bien: **Apps → Kaching Bundles → Desinstalar**.

---

## Después (no bloquea el lanzamiento)

- **Sorteo:** publicá bases y condiciones con una forma de participar **sin comprar** (la ley argentina lo exige). En Shopify Flow: *Pedido creado* → si tiene la variante "3 frascos" o "6 frascos" → *Agregar etiqueta* `SORTEO-CARIBE`.
- **Cuotas sin interés:** se activan en Mercado Pago, no en Shopify. Si no las tenés, sacá ese badge desde la sección.
- **PDF de las guías:** app **Digital Downloads** (gratis) → asignale el PDF a cada guía.
- **Stock por frasco:** app **Shopify Bundles** (gratis) si querés que el pack de 6 descuente 6 unidades. Si no, controlá el stock a mano.
- **Fotos:** asigná a cada variante una foto con 1, 2, 3 y 6 frascos.
- **Margen del pack de 6:** $18.950 por frasco + CELUFIT gratis. Confirmá que te cierra.

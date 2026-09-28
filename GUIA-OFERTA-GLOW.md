# Oferta Glow · Bronzer (DR WOMAN): reemplazo de Kaching Bundles

Cada pack es una **variante del producto** con su precio real y su precio comparativo. Así lo que se ve en la página es exactamente lo que se cobra en el checkout, el Pixel/CAPI manda el valor correcto y no dependés de descuentos automáticos para el precio principal.
CELUFIT va con descuentos automáticos nativos y los regalos son productos digitales de $0 que la sección agrega sola.

---

## 0. Números de la oferta (revisalos antes de cargar)

| Pack | Variante | Precio | Precio comparativo | Ahorro | Por frasco |
|---|---|---|---|---|---|
| Protocolo 60 días | 1 frasco | $53.990 | (sin comparativo) | 0 | $53.990 |
| Protocolo 120 días | 2 frascos | $75.800 | $107.980 | $32.180 (30%) | $37.900 |
| Protocolo Verano Completo ⭐ | 3 frascos | $93.300 | $161.970 | $68.670 (42%) | $31.100 |
| Glow 12 meses | 6 frascos | $113.700 | $323.940 | $210.240 (65%) | $18.950 |

⚠️ **Ojo con el margen del pack de 6.** Pasar de 3 a 6 frascos cuesta solo $20.400 más y encima lleva CELUFIT gratis (valor $49.990). Es un decoy muy fuerte: mucha gente va a elegir el de 6 aunque esté preseleccionado el de 3. Antes de publicar, confirmá que 6 × costo Bronzer + costo CELUFIT + envío + comisión de pago entra en $113.700.

"60% OFF segunda unidad" da 59,6% ($21.810 la segunda). Queda bien, pero si querés el 60% exacto el pack de 2 va a $75.586.

---

## 1. Variantes del producto Bronzer

1. **Productos → Bronzer**.
2. En **Variantes**, agregá la opción **"Pack"** con estos valores y **en este orden** (la sección usa la posición):
   1. `1 frasco`
   2. `2 frascos`
   3. `3 frascos`
   4. `6 frascos`
3. Cargá **Precio** y **Precio comparativo** de la tabla de arriba.
4. Poné un SKU distinto a cada variante (ej. `BRZ-1`, `BRZ-2`, `BRZ-3`, `BRZ-6`) para que el depósito sepa cuántos frascos despachar.
5. **Inventario.** Si controlás stock, tenés dos opciones:
   - **Recomendada:** instalar **Shopify Bundles** (app oficial y gratis) y crear los packs como *multipack* de Bronzer. Cada venta descuenta 2, 3 o 6 unidades del stock real.
   - **Simple:** desactivar "Hacer un seguimiento de la cantidad" en las variantes de pack y controlar el stock a mano.
6. **Peso.** Poné el peso real de cada pack (1×, 2×, 3× y 6×) para que las tarifas de envío calculen bien.

## 2. Producto CELUFIT (bump)

1. Verificá que CELUFIT esté activo con precio **$49.990**.
2. **Descuentos → Crear descuento → Compra X y llévate Y** (automático):
   - Nombre: `CELUFIT 50% con Bronzer`
   - Cliente compra: **cantidad mínima 1** del producto **Bronzer** (todas las variantes)
   - Cliente obtiene: **1 × CELUFIT**, valor: **Monto de descuento por artículo: $26.000** (queda en $23.990)
   - Usos máximos por pedido: 1
   - Combinaciones: ✅ Descuentos de envío
3. Creá otro descuento del mismo tipo:
   - Nombre: `CELUFIT gratis Glow 12 meses`
   - Cliente compra: **cantidad mínima 1** de la **variante Bronzer · 6 frascos**
   - Cliente obtiene: **1 × CELUFIT**, valor **Gratis**
   - Usos máximos por pedido: 1
   - Combinaciones: ✅ Descuentos de envío
4. Si los dos califican, Shopify aplica el mejor (gratis) sobre la línea de CELUFIT. No marques que se combinen entre sí.

## 3. Regalos (guías)

1. Instalá **Digital Downloads** (app oficial y gratis) o preparate para mandar el PDF en el mail de confirmación.
2. Creá 2 productos:
   - `Guía "Rutina Glow: bronceado parejo y duradero"`: precio **$0**, comparativo **$25.000**
   - `Guía "Alimentación para un tono dorado"`: precio **$0**, comparativo **$20.000**
3. En los dos: destildá **"Este es un producto físico"** para que no sumen peso ni envío. Asigná el PDF desde Digital Downloads.
4. Sacalos del canal **Tienda online** para que no aparezcan en colecciones ni en la búsqueda. La sección los agrega igual por ID, pero probalo (paso 8). Si tu tema no los deja agregar sin publicar, dejalos publicados y sacalos de las colecciones.
5. **Sorteo "Viaje al Caribe":**
   - ⚖️ En Argentina (Ley de Lealtad Comercial, DNU 274/2019) **no podés condicionar un sorteo a una compra**. Tenés que publicar **bases y condiciones** con una **forma de participar sin comprar** y poner el link a las bases cerca de la oferta. Consultalo con un abogado antes de lanzar.
   - Para registrar a las participantes, en **Shopify Flow** creá: *Pedido creado* → condición *algún artículo tiene variante "3 frascos" o "6 frascos"* → *Agregar etiqueta al pedido* `SORTEO-CARIBE`.

## 4. Envío gratis y cuotas

- **Envío gratis:** Descuentos → Crear → **Envío gratis** (automático) → Requisito: **monto mínimo $53.990** → Combinaciones: ✅ Descuentos de productos. Así cubrís los 4 packs.
- **3 cuotas sin interés:** no se configura en Shopify. Se activa en tu medio de pago (Mercado Pago → Costos y cuotas → cuotas sin interés, o la promo del banco). Si no lo tenés activo, **sacá el badge** de los packs.

## 5. Instalar la sección en el tema

1. **Tienda online → Temas → ⋯ → Duplicar** (trabajá sobre la copia).
2. En la copia: **⋯ → Editar código → Sections → Agregar sección nueva** → nombre `glow-offer` → pegá el contenido de [`sections/glow-offer.liquid`](sections/glow-offer.liquid) → Guardar.
3. **Personalizar** → abrí la plantilla del producto Bronzer (te conviene crear una plantilla propia: *Plantillas → Crear plantilla → `product.bronzer`* y asignarla al producto).
4. **Agregar sección → "Oferta Glow (packs)"** y ubicala justo debajo del título y el precio (arriba del pliegue en mobile).
5. En la sección: elegí **Producto bump = CELUFIT**, y en cada regalo elegí el producto guía que creaste. El sorteo queda sin producto.
6. Los 4 packs ya vienen cargados con tus textos, badges y bajadas. El de 3 frascos está preseleccionado. Revisá que **"Posición de la variante"** coincida con el orden del paso 1.

## 6. Sacar Kaching y lo que duplica

1. En la plantilla del producto: **ocultá el bloque de Kaching**, el **selector de variantes** y los **botones Agregar al carrito / Comprar ahora** del tema. La sección ya tiene su propio botón.
2. Dejá la sección nueva activa y probala entera (paso 8) **antes** de desinstalar Kaching.
3. Recién ahí: **Apps → Kaching Bundles → Desinstalar** y verificá que no quede ningún bloque `kaching` huérfano en *Personalizar*.

## 7. Detalles premium que suman conversión

- **Foto por pack:** asigná a cada variante una imagen (1 frasco, 2, 3 y 6 frascos juntos). Si tu tema cambia la imagen al cambiar de variante, se ve mucho más pro.
- Poné **reseñas con estrellas** justo arriba del selector y el link a las **bases del sorteo** abajo del botón.
- El texto del botón por defecto es "Quiero mi tono dorado". Se cambia en la sección.
- Si tu carrito es tipo drawer y convierte bien, dejá "Ir al carrito". Si querés menos fricción, probá "Ir directo al checkout" en un test A/B.

## 8. Checklist de prueba (hacelo en mobile)

- [ ] Cada pack muestra el precio, el comparativo tachado y el "c/u" correctos.
- [ ] Al cambiar de pack se actualizan el total y el "Ahorrás".
- [ ] 1 frasco + bump → en el checkout CELUFIT sale **$23.990**.
- [ ] 6 frascos → CELUFIT viene tildado y en el checkout sale **$0**.
- [ ] 2 frascos → entra 1 guía a $0. Con 3 o 6 frascos → entran las 2 guías.
- [ ] Envío gratis aplicado en los 4 packs.
- [ ] Pedido de prueba con 3 frascos → queda con la etiqueta `SORTEO-CARIBE`.
- [ ] El evento de Meta **AddToCart / Purchase** llega con el valor del pack (Events Manager → Test events).
- [ ] Kaching desinstalado y sin scripts colgados (revisá que la página no cargue `kaching` en DevTools → Network).

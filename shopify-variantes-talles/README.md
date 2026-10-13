# Selector de talles con referencia de calzado (Shopify)

Convierte los botones "Talle M / Talle L" en tarjetas con el rango de calzado y destaca el Talle L como "Más elegido".

![Vista previa](vista-previa.png)

## Instalación (Editar código)

1. Shopify > **Tienda online > Temas > ··· > Editar código**.
2. Carpeta **snippets** > **Agregar un nuevo snippet** > `selector-talles` > pegar el contenido de `selector-talles.liquid` > Guardar.
3. Abrir `layout/theme.liquid` y pegar justo antes de `</body>`:

   ```liquid
   {% if template.name == 'product' %}{% render 'selector-talles' %}{% endif %}
   ```

4. Guardar y revisar un producto en compu y celular.

## Requisitos

- Los valores de la variante tienen que llamarse exactamente **Talle M** y **Talle L** (mayúsculas no importan).
- El selector de talle tiene que estar en modo **botones** (no desplegable) en el bloque "Selector de variantes".

## Editar textos

Arriba del `<script>`, en `TALLES`, se cambia el rango (`sub`), el sello (`badge`) y en `HINT` la frase de ayuda.
Para sacar el sello "Más elegido", borrá `, badge: '★ Más elegido'`.

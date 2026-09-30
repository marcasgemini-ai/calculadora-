"""Renderiza todas las secciones .liquid con un producto de ejemplo -> preview.html"""
import glob, os
from liquid import Environment

env = Environment()
def money(cents, *a):
    try: v = int(cents or 0) / 100
    except Exception: return str(cents)
    return "$" + f"{v:,.0f}".replace(",", ".")
env.filters["money"] = money
env.filters["money_without_trailing_zeros"] = money
env.filters["file_url"] = lambda v, *a: f"/files/{v}"
env.filters["image_url"] = lambda v, *a, **k: v
env.filters["image_tag"] = lambda v, *a, **k: f'<img src="{v}" alt="">'

here = os.path.dirname(os.path.abspath(__file__))
product = {
    "title": "Creatina PURE Activator®",
    "featured_image": "../assets/drmen-creatina.webp",
    "selected_or_first_available_variant": {"id": 123, "price": 3499000, "compare_at_price": 4599000},
}
parts = []
for f in sorted(glob.glob(os.path.join(here, "..", "liquids", "*.liquid"))):
    name = os.path.basename(f)
    html = env.from_string(open(f, encoding="utf-8").read()).render(product=product, section={"id": "x"})
    if name.startswith(("02", "03", "04")):  # bloques que van dentro de la info del producto
        html = f'<div style="max-width:480px;margin:0 auto;padding:16px;background:#fff;color:#141414">{html}</div>'
    parts.append(f"<!-- {name} -->\n{html}")
page = ('<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
        '<title>Preview PURE Activator</title><style>body{margin:0;background:#fff}</style></head><body>' + "\n".join(parts) + "</body></html>")
open(os.path.join(here, "preview.html"), "w", encoding="utf-8").write(page)
print("ok", len(parts), "secciones")

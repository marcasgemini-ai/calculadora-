"""Genera bloques/ : 20 bloques autocontenidos (cada uno trae su base de estilos) para pegar de a uno."""
import glob, os, re
here = os.path.dirname(os.path.abspath(__file__))
src = os.path.join(here, "..", "liquids")
out = os.path.join(here, "..", "bloques")
os.makedirs(out, exist_ok=True)
for f in glob.glob(os.path.join(out, "*.liquid")): os.remove(f)

def mini(css):
    css = re.sub(r"\s+", " ", css)
    css = re.sub(r"\s*([{};,>])\s*", r"\1", css)
    return css.replace(";}", "}").strip()

base = open(os.path.join(src, "00-base-estilos.liquid"), encoding="utf-8").read()
base_css = mini(re.search(r"<style>(.*?)</style>", base, re.S).group(1))
fonts = '<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">'
head = fonts + "\n<style>" + base_css + "</style>\n"

files = sorted(f for f in glob.glob(os.path.join(src, "*.liquid")) if not os.path.basename(f).startswith("00"))
sticky = [f for f in files if os.path.basename(f).startswith("21")][0]
files.remove(sticky)
for n, f in enumerate(files, 1):
    body = open(f, encoding="utf-8").read()
    if os.path.basename(f).startswith("20"):
        s = open(sticky, encoding="utf-8").read()
        s = re.sub(r"\{%- comment -%\}.*?\{%- endcomment -%\}\n", "", s, flags=re.S)
        s = s.replace("{%- assign variante = product.selected_or_first_available_variant -%}\n", "")
        body += "\n" + s
    body = re.sub(r"<style>(.*?)</style>", lambda m: "<style>" + mini(m.group(1)) + "</style>", body, flags=re.S)
    m = re.match(r"(\{%- comment -%\}.*?\{%- endcomment -%\}\n)(.*)", body, re.S)
    body = m.group(1) + head + m.group(2)
    name = re.sub(r"^\d+", f"{n:02d}", os.path.basename(f))
    open(os.path.join(out, name), "w", encoding="utf-8").write(body)
    print(name, len(body))

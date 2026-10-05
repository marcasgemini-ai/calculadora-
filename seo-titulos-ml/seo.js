// Reglas SEO para títulos de Mercado Libre.
// Funciona en navegador (window.SeoML) y en Node (module.exports).
(function (root) {
  const MAX_LEN = 60;

  // ML penaliza o rechaza títulos con datos de la publicación (precio, envío, cuotas, promos).
  const PALABRAS_PROHIBIDAS = [
    'oferta', 'ofertas', 'promo', 'promocion', 'promoción', 'descuento', 'off', 'gratis',
    'envio', 'envío', 'cuotas', 'sin interes', 'sin interés', 'liquidacion', 'liquidación',
    'mejor precio', 'precio', 'barato', 'stock', 'nuevo', 'original', 'garantia', 'garantía',
    'imperdible', 'outlet', 'mayorista', 'hot sale', 'cyber', '3x2', '4x3', '6x5',
  ];

  // Claims de salud que ML y ANMAT no permiten en suplementos.
  const CLAIMS_RIESGOSOS = [
    'cura', 'curar', 'trata', 'tratamiento', 'elimina', 'previene', 'medicamento', 'remedio',
    'ansiedad', 'depresion', 'depresión', 'insomnio', 'cancer', 'cáncer', 'diabetes',
    'menopausia', 'cortisol', 'adelgazar', 'quema grasa', 'milagro', 'memoria',
  ];

  // Términos que la gente busca en ML para esta categoría.
  const KEYWORDS_CATEGORIA = [
    'extracto', 'gotas', 'hongo', 'suplemento', 'adaptogeno', 'adaptógeno', 'sublingual',
    'liquido', 'líquido', 'tintura', 'natural', 'organico', 'orgánico',
  ];

  const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  function contiene(tituloNorm, termino) {
    const t = norm(termino).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp('(^|[^a-z0-9])' + t + '($|[^a-z0-9])').test(tituloNorm);
  }

  function analizar(titulo, opts = {}) {
    const t = (titulo || '').trim();
    const tn = norm(t);
    const checks = [];
    const add = (ok, peso, msg, tipo = ok ? 'ok' : 'error') => checks.push({ ok, peso, msg, tipo });

    // 1. Largo
    if (t.length === 0) add(false, 25, 'El título está vacío');
    else if (t.length > MAX_LEN) add(false, 25, `Supera ${MAX_LEN} caracteres (${t.length}). ML lo corta o lo rechaza`);
    else if (t.length < 40) add(false, 15, `Solo ${t.length} caracteres: estás dejando keywords afuera (ideal 50-60)`, 'warn');
    else add(true, 25, `Largo ${t.length}/${MAX_LEN} — bien aprovechado`);

    // 2. Palabras prohibidas
    const prohibidas = [...new Set(PALABRAS_PROHIBIDAS.filter((p) => contiene(tn, p)).map(norm))];
    if (prohibidas.length) add(false, 20, `Datos de la publicación en el título (van en otros campos): ${prohibidas.join(', ')}`);
    else add(true, 20, 'Sin precio, envío, cuotas ni promos en el título');

    // 3. Claims de salud
    const claims = [...new Set(CLAIMS_RIESGOSOS.filter((p) => contiene(tn, p)).map(norm))];
    if (claims.length) add(false, 15, `Claims de salud riesgosos (pueden dar de baja la publicación): ${claims.join(', ')}`);
    else add(true, 15, 'Sin claims de salud prohibidos');

    // 4. Producto al inicio
    if (opts.producto) {
      const inicio = norm(opts.producto);
      if (tn.startsWith(inicio)) add(true, 15, `Arranca con el producto ("${opts.producto}")`);
      else if (contiene(tn, opts.producto)) add(false, 8, `"${opts.producto}" está, pero conviene que sea lo primero del título`, 'warn');
      else add(false, 15, `Falta el producto principal "${opts.producto}"`);
    }

    // 5. Keywords de categoría
    const kws = KEYWORDS_CATEGORIA.filter((k) => contiene(tn, k));
    if (kws.length >= 2) add(true, 10, `Keywords de categoría: ${kws.join(', ')}`);
    else if (kws.length === 1) add(false, 5, `Solo 1 keyword de categoría (${kws[0]}). Sumá "extracto", "gotas" o "hongo"`, 'warn');
    else add(false, 10, 'Sin keywords de categoría (extracto, gotas, hongo, suplemento)');

    // 6. Presentación (ml, unidades)
    if (/\d+\s?(ml|g|gr|caps|capsulas|cápsulas|unidades|u)\b/i.test(t) || /\bx\s?\d+/i.test(t)) add(true, 5, 'Incluye presentación/cantidad');
    else add(false, 5, 'Falta la presentación (ej: 50ml, x3 unidades)', 'warn');

    // 7. Marca
    if (opts.marca) {
      if (contiene(tn, opts.marca)) add(true, 5, `Incluye la marca (${opts.marca})`);
      else add(false, 5, `No incluye la marca "${opts.marca}"`, 'warn');
    }

    // 8. Formato
    const formato = [];
    if (/[A-ZÁÉÍÓÚÑ]{4,}/.test(t) && t === t.toUpperCase()) formato.push('todo en mayúsculas');
    else if ((t.match(/\b[A-ZÁÉÍÓÚÑ]{5,}\b/g) || []).length) formato.push('palabras en mayúsculas');
    if (/[!¡?¿*#$%@★✓✔•|]/.test(t)) formato.push('símbolos');
    if (/\p{Extended_Pictographic}/u.test(t)) formato.push('emojis');
    if (/\s{2,}/.test(t)) formato.push('espacios dobles');
    if (formato.length) add(false, 5, `Formato no permitido: ${formato.join(', ')}`);
    else add(true, 5, 'Formato limpio (sin mayúsculas, símbolos ni emojis)');

    // 9. Palabras repetidas
    const stop = new Set(['de', 'la', 'el', 'y', 'con', 'para', 'x', 'en', '+']);
    const conteo = {};
    tn.split(/[^a-z0-9]+/).filter((w) => w && !stop.has(w)).forEach((w) => (conteo[w] = (conteo[w] || 0) + 1));
    const repetidas = Object.keys(conteo).filter((w) => conteo[w] > 1);
    if (repetidas.length) add(false, 5, `Palabras repetidas (desperdician caracteres): ${repetidas.join(', ')}`, 'warn');
    else add(true, 5, 'Sin palabras repetidas');

    const total = checks.reduce((a, c) => a + c.peso, 0);
    const logrado = checks.reduce((a, c) => a + (c.ok ? c.peso : 0), 0);
    return { titulo: t, largo: t.length, score: total ? Math.round((logrado / total) * 100) : 0, checks };
  }

  // Arma un título en el orden que mejor posiciona en ML:
  // Producto + tipo + formato + presentación + marca + keyword secundaria/beneficio.
  function generar({ producto, tipo, formato, presentacion, marca, extras = [] }) {
    const partes = [producto, tipo, formato, presentacion, marca, ...extras].filter(Boolean);
    let titulo = '';
    for (const p of partes) {
      const candidato = titulo ? `${titulo} ${p}` : p;
      if (candidato.length <= MAX_LEN) titulo = candidato;
    }
    return titulo;
  }

  const api = { MAX_LEN, analizar, generar, PALABRAS_PROHIBIDAS, CLAIMS_RIESGOSOS };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.SeoML = api;
})(typeof window !== 'undefined' ? window : globalThis);

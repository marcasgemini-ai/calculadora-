const fs = require('fs');
const { chromium } = require('playwright');
const I = require('./icons');
const F=[400,600,700].map(w=>`@font-face{font-family:Poppins;font-weight:${w};src:url(data:font/woff2;base64,${fs.readFileSync(__dirname+'/fonts/p'+w+'.woff2').toString('base64')}) format('woff2')}`).join('');
const cards = [
  ['dedos', 'Que tus dedos no se aprieten más'],
  ['ampollas', 'Chau ampollas y dolor de pies'],
  ['secos', 'Pies secos y frescos todo el día'],
  ['olor', 'Olvidarte del mal olor'],
  ['nube', 'Sentir tus pies en una nube'],
  ['reforzadas', 'Talón y punta reforzados, para que duren'],
];
const html = (mobile) => `<!doctype html><html><head><meta charset="utf-8">
<style>${F}</style>
<style>
*{margin:0;box-sizing:border-box}
html,body{background:transparent}
body{font-family:Poppins,sans-serif;color:#1B2A4A;width:${mobile?1080:1320}px;padding:${mobile?'70px 56px':'64px 100px'};text-align:center}
h1{font-weight:700;font-size:${mobile?76:64}px;letter-spacing:-1.5px;line-height:1.1}
.sub{font-size:${mobile?34:28}px;margin-top:14px;color:#33415c}
.grid{display:grid;grid-template-columns:repeat(${mobile?2:3},1fr);gap:${mobile?28:24}px;margin-top:${mobile?56:48}px}
.card{background:#1B2A4A;border-radius:24px;height:${mobile?300:200}px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${mobile?22:16}px;padding:0 ${mobile?28:30}px;color:#F5F1E8}
.card svg{width:${mobile?84:60}px;height:${mobile?84:60}px}
.card p{text-wrap:balance;font-weight:600;font-size:${mobile?32:22}px;line-height:1.3}
.foot{font-size:${mobile?28:20}px;margin-top:${mobile?48:36}px;color:#33415c}
</style></head><body>
<h1>¿Son para vos?</h1>
<p class="sub">Cloud Socks son ideales si querés:</p>
<div class="grid">${cards.map(([k,t])=>`<div class="card">${I[k]}<p>${t}</p></div>`).join('')}</div>
<p class="foot">¿Tenés dudas? Escribinos y te ayudamos.</p>
</body></html>`;
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' }).catch(()=>chromium.launch());
  for (const [name, mobile] of [['seccion-beneficios-desktop', false], ['seccion-beneficios-mobile', true]]) {
    const p = await b.newPage({ deviceScaleFactor: 2 });
    await p.setContent(html(mobile), { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    const el = await p.$('body');
    await el.screenshot({ path: name + '.png', omitBackground: true });
    fs.writeFileSync(name + '.html', html(mobile));
  }
  fs.mkdirSync('iconos', { recursive: true });
  for (const [k, v] of Object.entries(I)) {
    fs.writeFileSync(`iconos/${k}-crema.svg`, v.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" color="#F5F1E8" '));
    fs.writeFileSync(`iconos/${k}-azul.svg`, v.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" color="#1B2A4A" '));
  }
  await b.close();
})();

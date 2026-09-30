const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const [name, w] of [['desktop', 1280], ['mobile', 390]]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    await p.goto('file://' + __dirname + '/preview.html');
    await p.waitForTimeout(800);
    await p.screenshot({ path: `/tmp/claude-0/-home-user-calculadora-/eb7a9461-9dfe-5c53-aafc-be0f63327e68/scratchpad/${name}.png`, fullPage: true });
    console.log(name, await p.evaluate(() => [document.body.scrollHeight, document.documentElement.scrollWidth]));
  }
  await b.close();
})();

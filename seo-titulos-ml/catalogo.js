// Títulos optimizados para el catálogo Slifit + REM (máx. 60 caracteres).
// "producto" = keyword principal que debe ir primero.
const CATALOGO = [
  { marca: 'Slifit', producto: 'Tremella', titulos: [
    'Tremella Extracto Hongo Gotas Sublingual 50ml Slifit Piel',
    'Tremella Fuciformis Extracto Líquido Gotas 50ml Slifit',
  ]},
  { marca: 'Slifit', producto: 'Ashwagandha', titulos: [
    'Ashwagandha Extracto Líquido Gotas Sublingual 50ml Slifit',
    'Ashwagandha Adaptógeno Extracto Gotas 50ml Slifit Natural',
  ]},
  { marca: 'Slifit', producto: 'Melena De León', titulos: [
    'Melena De León Extracto Hongo Gotas 50ml Slifit Lions Mane',
    'Melena De León Hongo Extracto Líquido Sublingual 50ml Slifit',
  ]},
  { marca: 'Slifit', producto: 'Cordyceps', titulos: [
    'Cordyceps Extracto Hongo Gotas Sublingual 50ml Slifit',
    'Cordyceps Militaris Extracto Líquido Gotas 50ml Slifit',
  ]},
  { marca: 'Slifit', producto: 'Reishi', titulos: [
    'Reishi Extracto Hongo Gotas Sublingual 50ml Slifit Natural',
    'Reishi Ganoderma Extracto Líquido Gotas 50ml Slifit',
  ]},
  { marca: 'Slifit', producto: 'Kit', titulos: [
    'Kit Tremella + Ashwagandha Extracto Gotas 2x50ml Slifit',
  ], nota: 'Kit Armonía' },
  { marca: 'Slifit', producto: 'Kit', titulos: [
    'Kit Melena De León Tremella Ashwagandha Extracto x3 Slifit',
  ], nota: 'Kit Equilibrio' },
  { marca: 'Rem', producto: 'Cordyceps', titulos: [
    'Cordyceps Extracto Hongo Gotas 100ml Rem Adaptógeno',
  ]},
  { marca: 'Rem', producto: 'Reishi', titulos: [
    'Reishi Extracto Hongo Ganoderma Gotas 100ml Rem Adaptógeno',
  ]},
  { marca: 'Rem', producto: 'Ashwagandha', titulos: [
    'Ashwagandha Extracto Líquido Gotas 100ml Rem Adaptógeno',
  ]},
  { marca: 'Rem', producto: 'Melena De León', titulos: [
    'Melena De León Extracto Hongo Gotas 100ml Rem Lions Mane',
  ]},
  { marca: 'Rem', producto: 'Cola De Pavo', titulos: [
    'Cola De Pavo Extracto Hongo Turkey Tail Gotas 100ml Rem',
  ]},
  { marca: 'Rem', producto: 'Shiitake', titulos: [
    'Shiitake Extracto Hongo Gotas Sublingual 100ml Rem Natural',
  ]},
  { marca: 'Rem', producto: 'Blend', titulos: [
    'Blend Melena De León Reishi Cordyceps Hongo Gotas 100ml Rem',
  ], nota: 'Blend Tres' },
  { marca: 'Rem', producto: 'Blend', titulos: [
    'Blend Cola De Pavo Cordyceps Reishi Extracto Gotas 100ml Rem',
  ], nota: 'Blend Inmunológico' },
  { marca: 'Rem', producto: 'Blend', titulos: [
    'Blend Melena De León Cordyceps Extracto Gotas 100ml Rem',
  ], nota: 'Blend Regenerativo' },
  { marca: 'Rem', producto: 'Blend', titulos: [
    'Blend Melena De León Reishi Extracto Hongos Gotas 100ml Rem',
  ], nota: 'Blend Dúo' },
];
if (typeof module !== 'undefined' && module.exports) module.exports = CATALOGO;
else window.CATALOGO = CATALOGO;

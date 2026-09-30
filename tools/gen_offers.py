"""Genera los bloques de oferta de DR WOMAN a partir de la plantilla de Menofit.
Uso: python3 tools/gen_offers.py
"""
import re

BASE = 'bloque/menofit-offer-liquid-personalizado.liquid'
PURPLE = '#6922A5'


def hx(c):
    c = c.lstrip('#')
    return [int(c[i:i + 2], 16) for i in (0, 2, 4)]


def mix(a, b, t):
    a, b = hx(a), hx(b)
    return '#' + ''.join('%02X' % round(a[i] * t + b[i] * (1 - t)) for i in range(3))


def lum(c):
    def ch(v):
        v /= 255
        return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4
    r, g, b = hx(c)
    return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b)


def contrast(a, b='#FFFFFF'):
    la, lb = sorted((lum(a), lum(b)), reverse=True)
    return (la + 0.05) / (lb + 0.05)


def darken_to(c, ratio):
    t = 1.0
    out = c
    while contrast(out) < ratio and t > 0:
        t -= 0.02
        out = mix(c, '#000000', t)
    return out


def theme(main):
    r, g, b = hx(main)
    return {
        'accent': mix(main, '#FFFFFF', 0.20), 'soft': mix(main, '#FFFFFF', 0.05),
        'ink': mix(main, '#000000', 0.38),
        'text': darken_to(main, 4.6), 'cta': main if contrast(main) >= 3 else darken_to(main, 4.6),
        'hard': {
            '#CDBEDC': mix(main, '#D4D4D4', 0.22), PURPLE: main, '#8A7C98': mix(main, '#8A8A8A', 0.20),
            '#4E3F5E': mix(main, '#444444', 0.25), '#7D7089': mix(main, '#7A7A7A', 0.15),
            '#DDD0EA': mix(main, '#E2E2E2', 0.14), '#F3EAFB': mix(main, '#FFFFFF', 0.10),
            '#D6C8E4': mix(main, '#D9D9D9', 0.18), '#E1D5EE': mix(main, '#E3E3E3', 0.14),
            '#D9C4EE': mix(main, '#FFFFFF', 0.25), '#7F7290': mix(main, '#7E7E7E', 0.12),
            '#561A88': mix(main if contrast(main) >= 3 else darken_to(main, 4.6), '#000000', 0.85),
            'rgba(105,34,165,.45)': 'rgba(%d,%d,%d,.45)' % (r, g, b),
            'rgba(105,34,165,.7)': 'rgba(%d,%d,%d,.7)' % (r, g, b),
        },
    }


PROOF = '🏆 Más comprado en Mercado Libre|📸 Viral en Instagram|🔥 Viral en TikTok'
DESCANSO_IMG = 'https://cdn.shopify.com/s/files/1/0789/3421/2779/files/Imagen_de_ChatGPT_28_sept_2026_17_24_59.png?v=1790628069'
BADGES = ('Envío gratis, ⭐ Mejor precio, Pagás 3 llevás 6|🔥 Más comprado, Recomendado, Pagás 2 llevás 3|'
          'Envío gratis, 3 cuotas sin interés, 60% OFF 2da unidad|Envío gratis, 3 cuotas sin interés')

PRODUCTS = {
    'celufit': dict(
        name='CELUFIT', handle='drenaje-linfatico-y-celulitis', main='#FC4B91', heading='Elegí tu tratamiento', tip='',
        bump_handle='slimfit-tratamiento-metabolico-para-mujeres-copia', bump_title='SLIMFIT', bump_price=29850, bump_offer='slimfit-oferta-upsell',
        bump_text='Tenés <b>50% OFF</b> en SLIMFIT para bajar kilos este verano',
        bump_text_free='🎁 <b>SLIMFIT de regalo</b> para bajar kilos este verano',
        titles='Piernas 6 meses|Protocolo Verano Completo|Protocolo 60 días|Protocolo 30 días',
        meta='6 frascos · 6 meses|3 frascos · 90 días|2 frascos|1 frasco',
        subtitles='Seis meses de tratamiento: llegás al verano y mantenés las piernas livianas hasta el otoño.|'
                  'Empezás ahora y llegás a enero con piernas más firmes y sin pesadez.|-|-',
        prices='104900|85900|69900|49900',
        g_title='Guía Protocolo Piel Firme 30+|Guía Alimentación antirretención|Viaje al Caribe para Enero',
        g_handle='guia-protocolo-piel-firme-30|guia-alimentacion-antirretencion|-', g_icon='book|leaf|sun',
        g_image='https://cdn.shopify.com/s/files/1/0789/3421/2779/files/402ad5ac-ee84-45ff-a80e-1a9dc5eaf4c2.png?v=1790773661|https://cdn.shopify.com/s/files/1/0789/3421/2779/files/Imagen_de_ChatGPT_30_sept_2026_09_41_38.png?v=1790773663|https://cdn.shopify.com/s/files/1/0789/3421/2779/files/Imagen_de_ChatGPT_30_sept_2026_09_56_57.png?v=1790773668',
        guarantee=('60 días para probarlo.', 'Si no sentís tus piernas más livianas, te devolvemos el dinero.'),
        trust='🥇 Top 1 en Mercado Libre|🚚 Envío gratis con seguimiento y fecha estimada'),
    'slimfit': dict(
        name='SLIMFIT', handle='slimfit-tratamiento-metabolico-para-mujeres-copia', main='#F65E68', heading='Elegí tu tratamiento', tip='',
        bump_handle='drenaje-linfatico-y-celulitis', bump_title='CELUFIT', bump_price=24950, bump_offer='celufit-oferta-upsell',
        bump_text='Tenés <b>50% OFF</b> en CELUFIT para lucir tus piernas este verano',
        bump_text_free='🎁 <b>CELUFIT de regalo</b> para lucir tus piernas este verano',
        titles='Transformación 6 meses|Protocolo Verano Completo|Protocolo 60 días|Protocolo 30 días',
        meta='6 frascos · 6 meses|3 frascos · 90 días|2 frascos|1 frasco',
        subtitles='Seis meses acompañando tu metabolismo: llegás al verano y sostenés el cambio.|'
                  'Empezás ahora y llegás a enero sintiéndote más liviana y con menos ansiedad por comer.|-|-',
        prices='125700|103200|83600|59700',
        g_title='Ebook Slimfit: hábitos y comidas para el día a día|Guía Recetas saciantes de verano|Viaje al Caribe para Enero',
        g_handle='ebook-slimfit-habitos-y-comidas|guia-recetas-saciantes-de-verano|-', g_icon='book|leaf|sun',
        g_image='https://cdn.shopify.com/s/files/1/0789/3421/2779/files/Imagen_de_ChatGPT_30_sept_2026_09_44_20.png?v=1790773665|https://cdn.shopify.com/s/files/1/0789/3421/2779/files/Imagen_de_ChatGPT_30_sept_2026_09_44_15.png?v=1790773667|https://cdn.shopify.com/s/files/1/0789/3421/2779/files/Imagen_de_ChatGPT_30_sept_2026_09_57_22.png?v=1790773668',
        guarantee=('60 días para probarlo.', 'Si no notás menos ansiedad por comer, te devolvemos el dinero.'),
        trust='🥇 Top 1 en Mercado Libre|🚚 Envío gratis con seguimiento'),
    'multimagnesio': dict(
        name='MULTIMAGNESIO', main='#9DBAD5', heading='Elegí tu tratamiento', tip='',
        bump_handle='slimfit-tratamiento-metabolico-para-mujeres-copia', bump_title='SLIMFIT', bump_price=29850, bump_offer='slimfit-oferta-upsell',
        bump_text='Tenés <b>50% OFF</b> en SLIMFIT para bajar kilos este verano',
        bump_text_free='🎁 <b>SLIMFIT de regalo</b> para bajar kilos este verano',
        titles='Descanso 12 meses|Protocolo 180 días|Protocolo 120 días|Protocolo 60 días',
        meta='6 frascos · 12 meses|3 frascos · 180 días|2 frascos|1 frasco',
        subtitles='Un año entero durmiendo de corrido y levantándote con energía.|'
                  'Seis meses sin despertarte a las 3 de la mañana: de octubre a fin de marzo.|-|-',
        prices='117500|96400|78100|55800',
        g_title='Guía Protocolo Descanso y Energía|Guía Rutina nocturna anti-estrés|Viaje al Caribe para Enero',
        g_handle='guia-protocolo-descanso-y-energia|guia-rutina-nocturna-anti-estres|-', g_icon='book|leaf|sun',
        g_image='https://cdn.shopify.com/s/files/1/0789/3421/2779/files/Imagen_de_ChatGPT_30_sept_2026_09_41_44.png?v=1790773668|https://cdn.shopify.com/s/files/1/0789/3421/2779/files/Imagen_de_ChatGPT_30_sept_2026_09_38_05.png?v=1790773666|https://cdn.shopify.com/s/files/1/0789/3421/2779/files/Imagen_de_ChatGPT_30_sept_2026_09_57_03.png?v=1790773668',
        guarantee=('60 días para probarlo.', 'Si no notás que descansás mejor, te devolvemos el dinero.'),
        trust='🥇 Top 1 en Mercado Libre|🚚 Envío gratis con seguimiento'),
}


def q(v):
    return v.replace("'", '’')


def main():
    base = open(BASE, encoding='utf-8').read()
    for key, p in PRODUCTS.items():
        s = base
        cfg = {
            'product_handle': "'%s'" % p.get('handle', ''),
            'bump_handle': "'%s'" % p['bump_handle'], 'bump_title': "'%s'" % p['bump_title'],
            'heading': "'%s'" % p['heading'], 'tip_title': "'%s'" % p['tip'],
            'proof': "'%s'" % PROOF, 'trust': "'%s'" % p['trust'],
            't_title': "'%s' | split: '|'" % p['titles'], 't_meta': "'%s' | split: '|'" % p['meta'],
            't_badges': "'%s' | split: '|'" % BADGES, 't_subtitle': "'%s' | split: '|'" % q(p['subtitles']),
            't_price': "'%s' | split: '|'" % p['prices'], 'bump_price': str(p['bump_price']),
            'bump_offer_handle': "'%s'" % p['bump_offer'],
            'bump_text': "'%s'" % p['bump_text'], 'bump_text_free': "'%s'" % p['bump_text_free'],
            'g_title': "'%s' | split: '|'" % p['g_title'], 'g_handle': "'%s' | split: '|'" % p['g_handle'],
            'g_icon': "'%s' | split: '|'" % p['g_icon'], 'g_image': "'%s' | split: '|'" % p['g_image'],
            'guarantee_title': "'%s'" % p['guarantee'][0], 'guarantee_text': "'%s'" % p['guarantee'][1],
        }
        th = theme(p['main'])
        cfg.update({'c_accent': "'%s'" % th['accent'], 'c_soft': "'%s'" % th['soft'],
                    'c_text': "'%s'" % th['text'], 'c_ink': "'%s'" % th['ink']})
        for k, v in cfg.items():
            s, n = re.subn(r"^assign %s\s*=.*$" % re.escape(k), lambda m: 'assign %s = %s' % (k, v), s, count=1, flags=re.M)
            assert n == 1, (key, k)
        s = s.replace('OFERTA MENOFIT', 'OFERTA ' + p['name'])
        s = s.replace('menofit-offer', key + '-offer').replace('menofit-tier', key + '-tier')
        s = s.replace('--g-ink: {{ c_ink }};', '--g-ink: {{ c_ink }}; --g-cta: %s;' % th['cta'], 1)
        a = s.index('<style>'); b = s.index('</style>')
        css = s[a:b]
        for old, new in th['hard'].items():
            css = css.replace(old, new)
        css = css.replace('border-radius:10px;background:var(--g-text)', 'border-radius:10px;background:var(--g-cta)', 1)
        s = s[:a] + css + s[b:]
        open('bloque/%s-offer-liquid-personalizado.liquid' % key, 'w', encoding='utf-8').write(s)
        print('ok', key, len(s))


if __name__ == '__main__':
    main()

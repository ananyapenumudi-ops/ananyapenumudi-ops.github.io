"""Generates the poster-style mascot illustrations in public/art/.

Run: python scripts/make_art.py
"""
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "public" / "art"
OUT.mkdir(parents=True, exist_ok=True)

GRAIN = (
    '<filter id="g"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/>'
    '<feColorMatrix values="0 0 0 0 0.1 0 0 0 0 0.08 0 0 0 0 0.05 0 0 0 0.22 0"/></filter>'
)
STAR = "l8 18 l20 3 l-15 13 l4 19 l-17 -10 l-17 10 l4 -19 l-15 -13 l20 -3Z"


def svg(name, defs, body):
    doc = (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="400" height="500">'
        f"<defs>{GRAIN}{defs}</defs>{body}"
        '<rect width="400" height="500" filter="url(#g)"/></svg>'
    )
    (OUT / f"{name}.svg").write_text(doc, encoding="utf-8")


def petals(n, cy, rx, ry, extra=""):
    return "".join(
        f'<ellipse cx="0" cy="{cy}" rx="{rx}" ry="{ry}" transform="rotate({i * 360 / n:.1f})" {extra}/>' for i in range(n)
    )


def eyes(lx, rx_, y, r=12):
    return (
        f'<ellipse cx="{lx}" cy="{y}" rx="{r * .75}" ry="{r}" fill="#1b1b1b"/><ellipse cx="{rx_}" cy="{y}" rx="{r * .75}" ry="{r}" fill="#1b1b1b"/>'
        f'<circle cx="{lx + 3}" cy="{y - 5}" r="3.5" fill="#fff"/><circle cx="{rx_ + 3}" cy="{y - 5}" r="3.5" fill="#fff"/>'
    )


# 1. black cat in a striped jumper with a mug of chai
svg(
    "cat",
    '<pattern id="st" width="18" height="10" patternUnits="userSpaceOnUse"><rect width="18" height="10" fill="#f4ead8"/><rect width="5" height="10" fill="#1b1b1b"/></pattern>',
    '<rect width="400" height="500" fill="#2f6b6b"/><circle cx="330" cy="80" r="120" fill="#3c7c79"/>'
    '<path d="M70 500 Q80 320 200 300 Q320 320 330 500Z" fill="url(#st)"/>'
    '<path d="M118 200 L132 100 L185 158Z M282 200 L268 100 L215 158Z" fill="#1b1b1b"/>'
    '<path d="M130 175 L137 125 L165 157Z M270 175 L263 125 L235 157Z" fill="#e88aa0"/>'
    '<ellipse cx="200" cy="225" rx="100" ry="82" fill="#1b1b1b"/>'
    '<path d="M146 222 Q166 210 186 222 Q166 236 146 222Z M214 222 Q234 210 254 222 Q234 236 214 222Z" fill="#f2b632"/>'
    '<rect x="163" y="214" width="5" height="16" rx="2" fill="#1b1b1b"/><rect x="231" y="214" width="5" height="16" rx="2" fill="#1b1b1b"/>'
    '<path d="M191 250 L209 250 L200 260Z" fill="#e88aa0"/>'
    '<path d="M200 260 Q192 272 182 266 M200 260 Q208 272 218 266" stroke="#f4ead8" stroke-width="3" fill="none" stroke-linecap="round"/>'
    '<path d="M150 255 L80 245 M150 263 L82 270 M250 255 L320 245 M250 263 L318 270" stroke="#f4ead8" stroke-width="2.5" stroke-linecap="round"/>'
    '<rect x="150" y="372" width="100" height="88" rx="14" fill="#f37a1f"/>'
    '<path d="M150 392 H250 M150 412 H250 M150 432 H250" stroke="#c4521a" stroke-width="6"/>'
    '<path d="M250 392 q38 4 32 30 q-4 22 -32 22" stroke="#f37a1f" stroke-width="12" fill="none"/>'
    '<ellipse cx="148" cy="410" rx="30" ry="22" fill="#1b1b1b"/><ellipse cx="252" cy="410" rx="30" ry="22" fill="#1b1b1b"/>'
    '<path d="M180 362 q-10 -16 0 -30 q10 -14 0 -28 M212 362 q-10 -16 0 -30 q10 -14 0 -28" stroke="#f4ead8" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/>',
)

# 2. duck saying hi on orange stripes
svg(
    "duck",
    '<pattern id="s" width="56" height="10" patternUnits="userSpaceOnUse"><rect width="56" height="10" fill="#f37a1f"/><rect width="28" height="10" fill="#f8a24a"/></pattern>',
    '<rect width="400" height="500" fill="url(#s)"/>'
    '<text x="200" y="112" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="80" fill="#fdf6ea" letter-spacing="4">HI!</text>'
    '<path d="M95 500 L95 300 Q95 165 200 165 Q305 165 305 300 L305 500Z" fill="#fdf6ea"/>'
    + eyes(160, 240, 268, 13)
    + '<path d="M140 310 Q200 285 260 310 Q272 360 200 378 Q128 360 140 310Z" fill="#f6a21a"/>'
    '<path d="M142 330 Q200 345 258 330" stroke="#c96f12" stroke-width="5" fill="none" stroke-linecap="round"/>'
    '<circle cx="185" cy="312" r="3.5" fill="#c96f12"/><circle cx="215" cy="312" r="3.5" fill="#c96f12"/>'
    '<circle cx="122" cy="318" r="14" fill="#f6b3c6" opacity=".85"/><circle cx="278" cy="318" r="14" fill="#f6b3c6" opacity=".85"/>',
)

# 3. abstract blob flowers
svg(
    "flower",
    "",
    '<rect width="400" height="500" fill="#f7d3db"/>'
    f'<g transform="translate(130 160)" fill="#f08aa5">{petals(6, -70, 42, 72)}<circle r="34" fill="#f6a21a"/></g>'
    f'<g transform="translate(290 360) rotate(20)" fill="#e23b3b">{petals(7, -78, 38, 80)}<circle r="36" fill="#f6a21a"/></g>'
    f'<g transform="translate(70 425)" fill="#e23b3b">{petals(5, -30, 18, 32)}<circle r="14" fill="#f6a21a"/></g>',
)

# 4. frog in boots holding an ESP32
pins = "".join(f'<rect x="{x}" y="-6" width="5" height="8"/><rect x="{x}" y="50" width="5" height="8"/>' for x in range(6, 70, 12))
svg(
    "frog",
    '<pattern id="s" width="60" height="10" patternUnits="userSpaceOnUse"><rect width="60" height="10" fill="#f4c6cf"/><rect width="30" height="10" fill="#8fa37a"/></pattern>',
    '<rect width="400" height="500" fill="url(#s)"/>'
    '<path d="M150 360 L148 430 L172 430 L174 360Z M226 360 L228 430 L252 430 L250 360Z" fill="#9cc27a"/>'
    '<path d="M140 420 h40 v40 q0 14 -14 14 h-44 q-6 -18 18 -22Z M220 420 h40 v40 q0 14 -14 14 h-44 q-6 -18 18 -22Z" fill="#2d4a2a"/>'
    '<ellipse cx="200" cy="300" rx="72" ry="88" fill="#9cc27a"/><ellipse cx="200" cy="315" rx="44" ry="58" fill="#cfe0a8"/>'
    '<ellipse cx="200" cy="200" rx="80" ry="52" fill="#9cc27a"/>'
    '<circle cx="160" cy="158" r="26" fill="#9cc27a"/><circle cx="240" cy="158" r="26" fill="#9cc27a"/>'
    '<circle cx="160" cy="158" r="13" fill="#1b1b1b"/><circle cx="240" cy="158" r="13" fill="#1b1b1b"/>'
    '<circle cx="164" cy="153" r="4" fill="#fff"/><circle cx="244" cy="153" r="4" fill="#fff"/>'
    '<path d="M165 215 Q200 240 235 215" stroke="#1b1b1b" stroke-width="4" fill="none" stroke-linecap="round"/>'
    '<circle cx="148" cy="210" r="9" fill="#f08aa5" opacity=".7"/><circle cx="252" cy="210" r="9" fill="#f08aa5" opacity=".7"/>'
    '<path d="M135 280 Q105 300 115 335" stroke="#9cc27a" stroke-width="18" fill="none" stroke-linecap="round"/>'
    '<path d="M265 280 Q290 290 285 300" stroke="#9cc27a" stroke-width="18" fill="none" stroke-linecap="round"/>'
    f'<g transform="translate(262 280) rotate(-12)"><rect width="80" height="52" rx="6" fill="#1f6f5c"/><rect x="24" y="12" width="30" height="28" rx="3" fill="#1b1b1b"/><g fill="#f2b632">{pins}</g>'
    '<text x="39" y="31" text-anchor="middle" font-family="monospace" font-size="9" fill="#f4ead8">ESP32</text></g>'
    f'<path d="M58 90 {STAR}" fill="#f2b632"/><path d="M330 400 {STAR}" fill="#f2b632"/>',
)

# 5. smiley daisy climbing the stairs
svg(
    "daisy",
    '<pattern id="c" width="50" height="50" patternUnits="userSpaceOnUse"><rect width="50" height="50" fill="#f4ead8"/><rect width="25" height="25" fill="#1b1b1b"/><rect x="25" y="25" width="25" height="25" fill="#1b1b1b"/></pattern>',
    '<rect width="400" height="500" fill="url(#c)"/>'
    '<path d="M0 400 h120 v-40 h100 v-40 h100 v-40 h80 v220 h-400Z" fill="#f2b632"/>'
    '<path d="M0 400 h120 v-40 h100 v-40 h100 v-40 h80" stroke="#c98d12" stroke-width="6" fill="none"/>'
    '<path d="M200 250 L200 320 M200 320 L165 355 M200 320 L240 330 M200 280 L160 262 M200 280 L240 262" stroke="#4f8a3c" stroke-width="9" fill="none" stroke-linecap="round"/>'
    '<path d="M138 352 h40 q8 0 8 10 v6 h-58 q-4 -14 10 -16Z M232 322 h40 q8 0 8 10 v6 h-58 q-4 -14 10 -16Z" fill="#2fb3a6"/>'
    '<path d="M128 368 h58 M222 338 h58" stroke="#f4ead8" stroke-width="5"/>'
    f'<g transform="translate(200 175)" fill="#fdf9f0" stroke="#1b1b1b" stroke-width="3">{petals(12, -62, 20, 46)}</g>'
    '<circle cx="200" cy="175" r="44" fill="#f6b21a" stroke="#1b1b1b" stroke-width="3"/>'
    '<circle cx="186" cy="168" r="5" fill="#1b1b1b"/><circle cx="214" cy="168" r="5" fill="#1b1b1b"/>'
    '<path d="M182 186 Q200 202 218 186" stroke="#1b1b1b" stroke-width="4" fill="none" stroke-linecap="round"/>'
    '<circle cx="174" cy="184" r="6" fill="#f08aa5"/><circle cx="226" cy="184" r="6" fill="#f08aa5"/>',
)

# 6. KAVACH: a cheerful locomotive with a safety shield and a green signal
waves = "".join(
    f'<path d="M{x} 0 q22 62 0 125 q-22 62 0 125 q22 62 0 125 q-22 62 0 125" stroke="#f2b632" stroke-width="26" fill="none"/>'
    for x in range(20, 400, 70)
)
svg(
    "train",
    "",
    f'<rect width="400" height="500" fill="#f6d78a"/>{waves}'
    '<path d="M60 500 L170 400 M340 500 L230 400" stroke="#5a4632" stroke-width="10"/>'
    '<path d="M95 480 h210 M125 450 h150 M150 425 h100" stroke="#8a6a48" stroke-width="10"/>'
    '<rect x="335" y="120" width="12" height="300" fill="#1b1b1b"/><rect x="318" y="80" width="46" height="96" rx="20" fill="#1b1b1b"/>'
    '<circle cx="341" cy="106" r="14" fill="#3c3c3c"/><circle cx="341" cy="148" r="22" fill="#5ed36a" opacity=".35"/><circle cx="341" cy="148" r="14" fill="#5ed36a"/>'
    '<rect x="105" y="150" width="190" height="250" rx="40" fill="#d81e2c"/><rect x="105" y="330" width="190" height="70" rx="14" fill="#a3121e"/>'
    '<rect x="128" y="176" width="144" height="86" rx="20" fill="#fdf6ea"/>'
    + eyes(172, 228, 220)
    + '<path d="M186 244 Q200 254 214 244" stroke="#1b1b1b" stroke-width="4" fill="none" stroke-linecap="round"/>'
    '<circle cx="150" cy="242" r="8" fill="#f08aa5"/><circle cx="250" cy="242" r="8" fill="#f08aa5"/>'
    '<circle cx="200" cy="138" r="16" fill="#f6c22a" stroke="#1b1b1b" stroke-width="4"/>'
    '<path d="M200 278 l28 10 v18 q0 22 -28 32 q-28 -10 -28 -32 v-18Z" fill="#fdf6ea"/>'
    '<path d="M188 304 l9 9 l16 -18" stroke="#2f6b6b" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
    '<circle cx="140" cy="368" r="14" fill="#f6c22a"/><circle cx="260" cy="368" r="14" fill="#f6c22a"/>',
)

# 7. Elementium: a happy conical flask on pink checks
FLASK = "M170 150 h60 v70 l85 170 q10 40 -30 40 h-170 q-40 0 -30 -40 l85 -170Z"
svg(
    "flask",
    '<pattern id="c" width="80" height="80" patternUnits="userSpaceOnUse"><rect width="80" height="80" fill="#f6a5b8"/><rect width="40" height="40" fill="#e23b3b"/><rect x="40" y="40" width="40" height="40" fill="#e23b3b"/></pattern>'
    f'<clipPath id="f"><path d="{FLASK}"/></clipPath>',
    '<rect width="400" height="500" fill="url(#c)"/>'
    f'<path d="{FLASK}" fill="#fdf6ea"/>'
    '<g clip-path="url(#f)"><path d="M60 300 q35 -18 70 0 t70 0 t70 0 t70 0 v200 h-280Z" fill="#7b61e0"/></g>'
    f'<path d="{FLASK}" fill="none" stroke="#1b1b1b" stroke-width="7" stroke-linejoin="round"/>'
    '<rect x="158" y="136" width="84" height="20" rx="8" fill="#1b1b1b"/>'
    + eyes(178, 222, 360, 11)
    + '<path d="M188 385 Q200 397 212 385" stroke="#1b1b1b" stroke-width="4" fill="none" stroke-linecap="round"/>'
    '<circle cx="160" cy="382" r="8" fill="#f6a5b8"/><circle cx="240" cy="382" r="8" fill="#f6a5b8"/>'
    '<g fill="#fdf6ea" stroke="#1b1b1b" stroke-width="4"><circle cx="205" cy="110" r="14"/><circle cx="182" cy="74" r="10"/><circle cx="214" cy="44" r="7"/></g>'
    f'<path d="M70 90 {STAR}" fill="#f2b632"/>',
)

# 8. Secure wipe: a padlock in sunglasses with an eraser
svg(
    "lock",
    '<pattern id="s" width="50" height="10" patternUnits="userSpaceOnUse"><rect width="50" height="10" fill="#cdd8b8"/><rect width="25" height="10" fill="#8fa37a"/></pattern>',
    '<rect width="400" height="500" fill="url(#s)"/>'
    '<path d="M130 240 v-60 a70 70 0 0 1 140 0 v60" stroke="#2b2b2b" stroke-width="30" fill="none"/>'
    '<rect x="95" y="230" width="210" height="190" rx="34" fill="#f2b632" stroke="#1b1b1b" stroke-width="6"/>'
    '<path d="M132 284 h60 q6 0 6 8 q-2 34 -36 34 q-32 0 -30 -42Z M208 284 h60 q2 42 -30 42 q-34 0 -36 -34 q0 -8 6 -8Z" fill="#1b1b1b"/>'
    '<path d="M196 292 h8" stroke="#1b1b1b" stroke-width="6"/>'
    '<path d="M148 296 l14 -6" stroke="#fdf6ea" stroke-width="4" stroke-linecap="round"/>'
    '<path d="M175 360 Q200 378 225 360" stroke="#1b1b1b" stroke-width="5" fill="none" stroke-linecap="round"/>'
    '<circle cx="200" cy="394" r="9" fill="#1b1b1b"/><rect x="196" y="397" width="8" height="14" fill="#1b1b1b"/>'
    '<g transform="translate(290 110) rotate(25)"><rect width="74" height="34" rx="6" fill="#f08aa5" stroke="#1b1b1b" stroke-width="4"/><rect width="26" height="34" rx="6" fill="#2f6b6b" stroke="#1b1b1b" stroke-width="4"/></g>'
    '<g fill="#fdf6ea"><circle cx="292" cy="186" r="4"/><circle cx="312" cy="200" r="3"/><circle cx="282" cy="206" r="3"/></g>'
    f'<path d="M60 410 {STAR}" fill="#d81e2c"/>',
)

print("wrote", sorted(p.name for p in OUT.glob("*.svg")))

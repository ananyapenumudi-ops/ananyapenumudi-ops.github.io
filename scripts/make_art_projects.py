"""Mascots for projects added in October 2026.

Run: python scripts/make_art_projects.py   (also regenerates the base set)
"""
from make_art import OUT, STAR, eyes, svg

# SignalSafe: a signal mast checking its own clipboard of test verdicts
ticks = "".join(
    f'<path d="M{x} {y} l7 7 l13 -15" stroke="#2f6b6b" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
    f'<path d="M{x + 30} {y + 2} h48" stroke="#1b1b1b" stroke-width="5" stroke-linecap="round"/>'
    for x, y in ((228, 262), (228, 300), (228, 338))
)
svg(
    "signal",
    '<pattern id="c" width="56" height="56" patternUnits="userSpaceOnUse"><rect width="56" height="56" fill="#cdd8b8"/><rect width="28" height="28" fill="#e3ead6"/><rect x="28" y="28" width="28" height="28" fill="#e3ead6"/></pattern>',
    '<rect width="400" height="500" fill="url(#c)"/>'
    '<rect x="96" y="210" width="20" height="250" fill="#1b1b1b"/><rect x="60" y="440" width="92" height="20" rx="4" fill="#1b1b1b"/>'
    '<rect x="56" y="70" width="100" height="160" rx="50" fill="#1b1b1b"/>'
    '<circle cx="106" cy="112" r="26" fill="#5a2020"/><circle cx="106" cy="182" r="38" fill="#5ed36a" opacity=".3"/><circle cx="106" cy="182" r="26" fill="#5ed36a"/>'
    + eyes(96, 116, 180, 6)
    + '<path d="M98 194 Q106 200 114 194" stroke="#1b1b1b" stroke-width="3" fill="none" stroke-linecap="round"/>'
    '<rect x="200" y="200" width="150" height="200" rx="10" fill="#fdf6ea" stroke="#1b1b1b" stroke-width="6"/>'
    '<rect x="245" y="188" width="60" height="26" rx="6" fill="#9a9a9a" stroke="#1b1b1b" stroke-width="5"/>'
    + ticks
    + '<text x="275" y="384" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-size="22" fill="#d81e2c">PASS</text>'
    '<path d="M156 300 Q180 290 205 300" stroke="#1b1b1b" stroke-width="8" fill="none" stroke-linecap="round"/>'
    f'<path d="M320 80 {STAR}" fill="#f2b632"/>',
)

# Capture Factory: a retro camera printing a photo strip
frames = "".join(f'<rect x="246" y="{y}" width="64" height="52" fill="#d9d6cc" stroke="#1b1b1b" stroke-width="3"/>' for y in (70, 132, 194))
svg(
    "camera",
    '<pattern id="g2" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="#fde3e5"/><rect width="20" height="40" fill="#f7d3db" opacity=".8"/><rect width="40" height="20" fill="#f4a9bb" opacity=".35"/></pattern>',
    '<rect width="400" height="500" fill="url(#g2)"/>'
    f'<g transform="rotate(6 278 160)"><rect x="236" y="56" width="84" height="210" fill="#fdf6ea" stroke="#1b1b1b" stroke-width="5"/>{frames}</g>'
    '<rect x="60" y="230" width="280" height="190" rx="26" fill="#2f6b6b" stroke="#1b1b1b" stroke-width="6"/>'
    '<rect x="60" y="300" width="280" height="40" fill="#c8642f" stroke="#1b1b1b" stroke-width="6"/>'
    '<rect x="96" y="208" width="70" height="30" rx="8" fill="#1b1b1b"/><rect x="270" y="246" width="44" height="26" rx="6" fill="#fdf6ea" stroke="#1b1b1b" stroke-width="4"/>'
    '<circle cx="200" cy="325" r="72" fill="#fdf6ea" stroke="#1b1b1b" stroke-width="6"/><circle cx="200" cy="325" r="50" fill="#1b1b1b"/>'
    '<circle cx="180" cy="305" r="12" fill="#fdf6ea" opacity=".85"/>'
    + eyes(118, 282, 392, 7)
    + '<path d="M180 408 Q200 418 220 408" stroke="#fdf6ea" stroke-width="4" fill="none" stroke-linecap="round"/>'
    f'<path d="M60 120 {STAR}" fill="#d81e2c"/><path d="M350 360 {STAR}" fill="#f2b632"/>',
)

# Bulk Certificate Generator: a certificate with a rosette, and copies behind it
svg(
    "certificate",
    '<pattern id="s" width="10" height="44" patternUnits="userSpaceOnUse"><rect width="10" height="44" fill="#bfe0e6"/><rect width="10" height="22" fill="#a7d3da"/></pattern>',
    '<rect width="400" height="500" fill="url(#s)"/>'
    '<rect x="96" y="96" width="230" height="300" rx="8" fill="#ebdcc2" stroke="#1b1b1b" stroke-width="5" transform="rotate(-8 211 246)"/>'
    '<rect x="86" y="104" width="230" height="300" rx="8" fill="#f6d78a" stroke="#1b1b1b" stroke-width="5" transform="rotate(-3 201 254)"/>'
    '<rect x="78" y="112" width="240" height="300" rx="8" fill="#fdf6ea" stroke="#1b1b1b" stroke-width="6"/>'
    '<rect x="94" y="128" width="208" height="268" rx="4" fill="none" stroke="#c8642f" stroke-width="3"/>'
    '<text x="198" y="172" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="22" fill="#1b1b1b">CERTIFICATE</text>'
    '<path d="M128 200 h140 M146 222 h104 M128 244 h140" stroke="#1b1b1b" stroke-width="4" stroke-linecap="round" opacity=".45"/>'
    '<path d="M214 330 l-16 80 l22 -14 l18 18 l8 -80Z M262 330 l16 80 l-22 -14 l-18 18 l-8 -80Z" fill="#d81e2c" stroke="#1b1b1b" stroke-width="4" stroke-linejoin="round"/>'
    '<circle cx="238" cy="318" r="40" fill="#f2b632" stroke="#1b1b1b" stroke-width="5"/>'
    + eyes(226, 250, 314, 6)
    + '<path d="M228 330 Q238 338 248 330" stroke="#1b1b1b" stroke-width="3.5" fill="none" stroke-linecap="round"/>'
    '<text x="128" y="280" font-family="monospace" font-size="18" fill="#2f6b6b">.pdf ×5000</text>'
    f'<path d="M330 70 {STAR}" fill="#d81e2c"/>',
)

print("projects done:", sorted(p.name for p in OUT.glob("*.svg")))

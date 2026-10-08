"""Mascots for the project ideas shown in the scrapbook strip.

Run: python scripts/make_art_ideas.py   (also regenerates the base set)
"""
from make_art import OUT, STAR, eyes, petals, svg

# Moody Monstera: a grumpy potted plant
leaf = (
    '<path d="M0 0 C-60 -20 -70 -110 0 -140 C70 -110 60 -20 0 0Z" fill="#4f8a3c"/>'
    '<path d="M0 -10 V-130 M0 -50 l-32 -22 M0 -80 l28 -24 M0 -100 l-24 -18" stroke="#cfe0a8" stroke-width="5" stroke-linecap="round"/>'
)
svg(
    "plant",
    '<pattern id="s" width="10" height="44" patternUnits="userSpaceOnUse"><rect width="10" height="44" fill="#f6d78a"/><rect width="10" height="22" fill="#f2b632"/></pattern>',
    '<rect width="400" height="500" fill="url(#s)"/>'
    f'<g transform="translate(200 300) rotate(-30)">{leaf}</g><g transform="translate(200 300) rotate(28)">{leaf}</g><g transform="translate(200 300) scale(1.15)">{leaf}</g>'
    '<path d="M110 300 h180 l-22 160 h-136Z" fill="#c8642f" stroke="#1b1b1b" stroke-width="5"/>'
    '<rect x="100" y="290" width="200" height="34" rx="8" fill="#e07a3c" stroke="#1b1b1b" stroke-width="5"/>'
    '<path d="M160 360 l22 8 M240 360 l-22 8" stroke="#1b1b1b" stroke-width="5" stroke-linecap="round"/>'
    '<circle cx="176" cy="384" r="7" fill="#1b1b1b"/><circle cx="224" cy="384" r="7" fill="#1b1b1b"/>'
    '<path d="M186 418 Q200 406 214 418" stroke="#1b1b1b" stroke-width="5" fill="none" stroke-linecap="round"/>'
    '<path d="M330 120 q-14 24 0 34 q14 -10 0 -34Z" fill="#5aa9e6" stroke="#1b1b1b" stroke-width="3"/>',
)

# Daily Poster Printer: a cheerful printer printing a tiny poster
svg(
    "printer",
    '<pattern id="c" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="60" height="60" fill="#f7d3db"/><rect width="30" height="30" fill="#f4a9bb"/><rect x="30" y="30" width="30" height="30" fill="#f4a9bb"/></pattern>',
    '<rect width="400" height="500" fill="url(#c)"/>'
    '<g transform="rotate(-4 200 160)"><rect x="135" y="60" width="130" height="190" fill="#fdf6ea" stroke="#1b1b1b" stroke-width="5"/>'
    f'<g transform="translate(200 120)" fill="#e23b3b">{petals(6, -20, 11, 20)}<circle r="10" fill="#f6a21a"/></g>'
    '<path d="M155 175 h90 M155 195 h70 M155 215 h80" stroke="#1b1b1b" stroke-width="5" stroke-linecap="round"/></g>'
    '<rect x="90" y="240" width="220" height="170" rx="30" fill="#2f6b6b" stroke="#1b1b1b" stroke-width="6"/>'
    '<rect x="120" y="232" width="160" height="22" rx="6" fill="#1b1b1b"/>'
    + eyes(165, 235, 310, 12)
    + '<path d="M180 340 Q200 356 220 340" stroke="#1b1b1b" stroke-width="5" fill="none" stroke-linecap="round"/>'
    '<circle cx="140" cy="335" r="9" fill="#f4a9bb"/><circle cx="260" cy="335" r="9" fill="#f4a9bb"/>'
    '<circle cx="270" cy="385" r="8" fill="#5ed36a" stroke="#1b1b1b" stroke-width="3"/><rect x="120" y="378" width="60" height="12" rx="6" fill="#f2b632"/>'
    f'<path d="M330 90 {STAR}" fill="#f2b632"/>',
)

# KAVACH Jr.: a wooden toy train
wheels = "".join(f'<circle cx="{x}" cy="352" r="22" fill="#1b1b1b"/><circle cx="{x}" cy="352" r="8" fill="#f2b632"/>' for x in (95, 165, 245, 315))
puffs = "".join(f'<circle cx="{x}" cy="{y}" r="{r}" fill="#fdf6ea"/>' for x, y, r in ((95, 160, 22), (118, 122, 30), (156, 86, 36), (206, 62, 26)))
ties = "".join(f'<rect x="{x}" y="372" width="10" height="20" fill="#8a6a48"/>' for x in range(10, 400, 40))
svg(
    "toytrain",
    "",
    f'<rect width="400" height="500" fill="#bfe0e6"/>{puffs}'
    f'<rect x="0" y="380" width="400" height="120" fill="#8fa37a"/>{ties}<path d="M0 382 H400" stroke="#5a4632" stroke-width="8"/>'
    '<rect x="200" y="250" width="160" height="90" rx="12" fill="#f2b632" stroke="#1b1b1b" stroke-width="5"/>'
    '<rect x="225" y="270" width="40" height="34" rx="6" fill="#fdf6ea" stroke="#1b1b1b" stroke-width="4"/><rect x="290" y="270" width="40" height="34" rx="6" fill="#fdf6ea" stroke="#1b1b1b" stroke-width="4"/>'
    '<rect x="50" y="240" width="140" height="100" rx="12" fill="#d81e2c" stroke="#1b1b1b" stroke-width="5"/>'
    '<rect x="120" y="190" width="70" height="60" rx="8" fill="#d81e2c" stroke="#1b1b1b" stroke-width="5"/><rect x="70" y="192" width="28" height="50" fill="#1b1b1b"/>'
    + eyes(80, 120, 285, 9)
    + '<path d="M88 312 Q100 322 112 312" stroke="#1b1b1b" stroke-width="4" fill="none" stroke-linecap="round"/>'
    '<rect x="190" y="300" width="12" height="10" fill="#1b1b1b"/>'
    + wheels
    + '<circle cx="38" cy="290" r="10" fill="#f6c22a" stroke="#1b1b1b" stroke-width="3"/>',
)

# KAVACH-Lite: a level-crossing barrier on duty
arm = "".join(f'<rect x="{x}" y="0" width="30" height="26" fill="{c}"/>' for x, c in zip(range(0, 300, 30), ["#d81e2c", "#fdf6ea"] * 5))
svg(
    "crossing",
    '<pattern id="s" width="50" height="10" patternUnits="userSpaceOnUse"><rect width="50" height="10" fill="#cdd8b8"/><rect width="25" height="10" fill="#8fa37a"/></pattern>',
    '<rect width="400" height="500" fill="url(#s)"/>'
    '<rect x="0" y="420" width="400" height="80" fill="#5a4632"/><path d="M0 440 H400 M0 480 H400" stroke="#8a6a48" stroke-width="8"/>'
    f'<g transform="translate(110 300) rotate(-18)">{arm}<rect width="300" height="26" fill="none" stroke="#1b1b1b" stroke-width="4"/></g>'
    '<rect x="92" y="150" width="26" height="290" fill="#1b1b1b"/>'
    '<rect x="40" y="110" width="130" height="80" rx="40" fill="#1b1b1b"/>'
    '<circle cx="80" cy="150" r="36" fill="#ff4b4b" opacity=".3"/><circle cx="80" cy="150" r="24" fill="#ff4b4b"/><circle cx="130" cy="150" r="24" fill="#5a2020"/>'
    '<rect x="55" y="215" width="100" height="70" rx="12" fill="#f2b632" stroke="#1b1b1b" stroke-width="4"/>'
    + eyes(88, 122, 245, 8)
    + '<path d="M95 268 Q105 262 115 268" stroke="#1b1b1b" stroke-width="4" fill="none" stroke-linecap="round"/>'
    f'<path d="M320 90 {STAR}" fill="#f2b632"/>',
)

# Status Badge: an e-ink lanyard badge
svg(
    "badge",
    "",
    '<rect width="400" height="500" fill="#2f6b6b"/><circle cx="60" cy="430" r="110" fill="#3c7c79"/>'
    '<path d="M150 0 L185 150 M250 0 L215 150" stroke="#f4a9bb" stroke-width="26"/>'
    '<rect x="170" y="140" width="60" height="28" rx="8" fill="#9a9a9a" stroke="#1b1b1b" stroke-width="4"/>'
    '<rect x="95" y="165" width="210" height="280" rx="24" fill="#fdf6ea" stroke="#1b1b1b" stroke-width="6"/>'
    '<rect x="120" y="195" width="160" height="120" rx="10" fill="#d9d6cc" stroke="#1b1b1b" stroke-width="4"/>'
    '<path d="M160 240 q10 -10 20 0 M220 240 q10 -10 20 0" stroke="#1b1b1b" stroke-width="5" fill="none" stroke-linecap="round"/>'
    '<path d="M180 270 Q200 285 220 270" stroke="#1b1b1b" stroke-width="5" fill="none" stroke-linecap="round"/>'
    '<text x="200" y="352" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-size="24" fill="#d81e2c">DEBUGGING</text>'
    '<path d="M180 392 a20 20 0 0 1 0 28 M192 384 a32 32 0 0 1 0 44 M204 376 a44 44 0 0 1 0 60" stroke="#2f6b6b" stroke-width="5" fill="none" stroke-linecap="round"/>'
    f'<path d="M330 120 {STAR}" fill="#f2b632"/>',
)

# Doodle-to-Circuit: a pencil drawing a resistor squiggle
svg(
    "pencil",
    '<pattern id="c" width="70" height="70" patternUnits="userSpaceOnUse"><rect width="70" height="70" fill="#fdf6ea"/><rect width="35" height="35" fill="#f6d78a"/><rect x="35" y="35" width="35" height="35" fill="#f6d78a"/></pattern>',
    '<rect width="400" height="500" fill="url(#c)"/>'
    '<path d="M40 430 H90 l12 -26 l18 52 l18 -52 l18 52 l18 -52 l12 26 H230" stroke="#1b1b1b" stroke-width="7" fill="none" stroke-linejoin="round" stroke-linecap="round"/>'
    '<circle cx="40" cy="430" r="9" fill="#d81e2c"/>'
    '<g transform="translate(232 430) rotate(-55)">'
    '<path d="M0 0 L40 -22 L40 22Z" fill="#f2c08a" stroke="#1b1b1b" stroke-width="5" stroke-linejoin="round"/><path d="M0 0 L14 -8 L14 8Z" fill="#1b1b1b"/>'
    '<rect x="40" y="-34" width="230" height="68" fill="#f2b632" stroke="#1b1b1b" stroke-width="5"/>'
    '<rect x="270" y="-34" width="26" height="68" fill="#9a9a9a" stroke="#1b1b1b" stroke-width="5"/>'
    '<rect x="296" y="-34" width="44" height="68" rx="12" fill="#f4a9bb" stroke="#1b1b1b" stroke-width="5"/>'
    '<g transform="rotate(90 150 0)">'
    + eyes(136, 164, -4, 7)
    + '<path d="M140 14 Q150 22 160 14" stroke="#1b1b1b" stroke-width="4" fill="none" stroke-linecap="round"/></g></g>'
    f'<path d="M80 100 {STAR}" fill="#d81e2c"/><path d="M60 300 {STAR}" fill="#2f6b6b"/>',
)

print("ideas done:", sorted(p.name for p in OUT.glob("*.svg")))

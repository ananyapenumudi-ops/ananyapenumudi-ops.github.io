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

# Pocket Museum: one (1) sock, displayed with great seriousness
svg(
    "museum",
    '<pattern id="s" width="10" height="44" patternUnits="userSpaceOnUse"><rect width="10" height="44" fill="#d81e2c"/><rect width="10" height="22" fill="#c4161f"/></pattern>',
    '<rect width="400" height="500" fill="url(#s)"/>'
    '<path d="M120 0 L60 330 H340 L280 0Z" fill="#fdf6ea" opacity=".18"/>'
    '<rect x="110" y="330" width="180" height="170" fill="#fdf6ea" stroke="#1b1b1b" stroke-width="6"/><rect x="95" y="315" width="210" height="26" fill="#ebdcc2" stroke="#1b1b1b" stroke-width="6"/>'
    '<path d="M170 170 h50 v95 q0 18 18 28 l20 12 q16 10 6 28 q-8 14 -26 6 l-48 -26 q-20 -12 -20 -36Z" fill="#f2b632" stroke="#1b1b1b" stroke-width="6" stroke-linejoin="round"/>'
    '<path d="M170 190 h50 M170 210 h50" stroke="#d81e2c" stroke-width="8"/>'
    '<circle cx="186" cy="245" r="5" fill="#1b1b1b"/><circle cx="206" cy="245" r="5" fill="#1b1b1b"/><path d="M188 262 Q196 268 204 262" stroke="#1b1b1b" stroke-width="4" fill="none" stroke-linecap="round"/>'
    '<rect x="140" y="380" width="120" height="58" rx="4" fill="#fdf6ea" stroke="#1b1b1b" stroke-width="4"/>'
    '<text x="200" y="404" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="15" fill="#1b1b1b">EXHIBIT 01</text>'
    '<text x="200" y="424" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="12" fill="#4b4339">one (1) sock, c. 2026</text>'
    f'<path d="M70 90 {STAR}" fill="#f2b632"/><path d="M320 140 {STAR}" fill="#fdf6ea"/>',
)

# Fridge Chef: a tomato in a chef hat
svg(
    "tomato",
    '<pattern id="c" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="60" height="60" fill="#e3ead6"/><rect width="30" height="30" fill="#cdd8b8"/><rect x="30" y="30" width="30" height="30" fill="#cdd8b8"/></pattern>',
    '<rect width="400" height="500" fill="url(#c)"/>'
    '<circle cx="200" cy="320" r="120" fill="#e23b3b" stroke="#1b1b1b" stroke-width="6"/>'
    '<path d="M150 230 q50 -30 100 0 q-25 10 -50 0 q-25 10 -50 0Z" fill="#4f8a3c" stroke="#1b1b1b" stroke-width="4"/>'
    '<path d="M130 210 q-30 -60 30 -70 q20 -50 80 -20 q60 -10 50 50 q20 30 -10 40 h-150 q-20 -10 0 0Z" fill="#fdf6ea" stroke="#1b1b1b" stroke-width="6"/>'
    '<rect x="135" y="205" width="130" height="34" rx="6" fill="#fdf6ea" stroke="#1b1b1b" stroke-width="6"/>'
    + eyes(165, 235, 310, 13)
    + '<path d="M175 352 Q200 375 225 352" stroke="#1b1b1b" stroke-width="5" fill="none" stroke-linecap="round"/>'
    '<circle cx="135" cy="345" r="14" fill="#f4a9bb" opacity=".8"/><circle cx="265" cy="345" r="14" fill="#f4a9bb" opacity=".8"/>'
    '<path d="M300 380 L360 300" stroke="#8a6a48" stroke-width="12" stroke-linecap="round"/><ellipse cx="368" cy="288" rx="18" ry="26" transform="rotate(38 368 288)" fill="#8a6a48"/>'
    f'<path d="M60 100 {STAR}" fill="#f2b632"/>',
)

# Mixtape Posters: a vinyl record with a happy label
grooves = "".join(f'<circle cx="200" cy="260" r="{r}" fill="none" stroke="#3a3a3a" stroke-width="2"/>' for r in range(70, 150, 12))
svg(
    "vinyl",
    '<pattern id="s" width="56" height="10" patternUnits="userSpaceOnUse"><rect width="56" height="10" fill="#f7d3db"/><rect width="28" height="10" fill="#f4a9bb"/></pattern>',
    '<rect width="400" height="500" fill="url(#s)"/>'
    f'<circle cx="200" cy="260" r="160" fill="#1b1b1b"/>{grooves}'
    '<circle cx="200" cy="260" r="62" fill="#f2b632" stroke="#1b1b1b" stroke-width="5"/><circle cx="200" cy="260" r="6" fill="#1b1b1b"/>'
    '<circle cx="182" cy="248" r="5" fill="#1b1b1b"/><circle cx="218" cy="248" r="5" fill="#1b1b1b"/>'
    '<path d="M184 280 Q200 294 216 280" stroke="#1b1b1b" stroke-width="4" fill="none" stroke-linecap="round"/>'
    '<path d="M90 110 a40 40 0 0 1 60 -30" stroke="#fdf6ea" stroke-width="6" fill="none" stroke-linecap="round" opacity=".7"/>'
    '<g fill="#d81e2c"><path d="M320 380 v-60 l40 -10 v60" stroke="#d81e2c" stroke-width="6" fill="none"/><ellipse cx="312" cy="382" rx="12" ry="9"/><ellipse cx="352" cy="372" rx="12" ry="9"/></g>'
    '<path d="M60 420 v-40" stroke="#2f6b6b" stroke-width="6"/><ellipse cx="52" cy="422" rx="11" ry="8" fill="#2f6b6b"/>',
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

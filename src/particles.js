import * as THREE from 'three';

// One shape per section (hero, about, experience, projects, skills, contact).
// Each entry: generator + where the cloud sits on screen + how bright it is.
// Sits inside the hero canvas, centred; only the wave field shifts down.
const LAYOUTS = [
  { x: 0, y: 0, scale: 1.0, opacity: 1 },   // sphere
  { x: 0, y: 0, scale: 1.05, opacity: 1 },  // microchip
  { x: 0, y: 0, scale: 0.9, opacity: 1 },   // helix
  { x: 0, y: 0, scale: 1.0, opacity: 1 },   // atom (Elementium nod)
  { x: 0, y: 0, scale: 1.1, opacity: 1 },   // torus knot
  { x: 0, y: -0.6, scale: 0.6, opacity: 1 }, // wave field
];

const rand = (a, b) => a + Math.random() * (b - a);
const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;

function sphere(n) {
  const out = new Float32Array(n * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    let r = 2.2;
    if (i % 9 === 0) r = rand(2.6, 3.6); // loose halo
    const y = 1 - (i / (n - 1)) * 2;
    const rad = Math.sqrt(1 - y * y);
    const th = golden * i;
    const j = 1 + gauss() * 0.015;
    out.set([Math.cos(th) * rad * r * j, y * r * j, Math.sin(th) * rad * r * j], i * 3);
  }
  return out;
}

function chip(n) {
  const out = new Float32Array(n * 3);
  const S = 1.6; // half-size of the board
  const step = 0.2;
  const snap = (v) => Math.round(v / step) * step;
  for (let i = 0; i < n; i++) {
    let x, y, z = 0;
    const k = Math.random();
    if (k < 0.22) { // die: filled raised square
      x = rand(-0.6, 0.6); y = rand(-0.6, 0.6); z = 0.18;
    } else if (k < 0.32) { // die outline
      const t = rand(-0.7, 0.7), side = Math.floor(Math.random() * 4);
      [x, y] = side === 0 ? [t, 0.7] : side === 1 ? [t, -0.7] : side === 2 ? [0.7, t] : [-0.7, t];
      z = 0.18;
    } else if (k < 0.55) { // pins sticking out of every edge
      const pin = Math.floor(rand(-7, 8)) * step;
      const len = rand(S, S + 0.45), side = Math.floor(Math.random() * 4);
      [x, y] = side === 0 ? [pin, len] : side === 1 ? [pin, -len] : side === 2 ? [len, pin] : [-len, pin];
    } else if (k < 0.65) { // board outline
      const t = rand(-S, S), side = Math.floor(Math.random() * 4);
      [x, y] = side === 0 ? [t, S] : side === 1 ? [t, -S] : side === 2 ? [S, t] : [-S, t];
    } else { // manhattan traces along a grid
      if (Math.random() < 0.5) { x = rand(-S, S); y = snap(rand(-S, S)); }
      else { x = snap(rand(-S, S)); y = rand(-S, S); }
      if (Math.abs(x) < 0.75 && Math.abs(y) < 0.75) { x *= 2; y *= 2; }
      x = Math.max(-S, Math.min(S, x)); y = Math.max(-S, Math.min(S, y));
    }
    // tilt the board so it reads as 3D
    const a = -1.0, b = 0.45;
    const y1 = y * Math.cos(a) - z * Math.sin(a);
    const z1 = y * Math.sin(a) + z * Math.cos(a);
    const x2 = x * Math.cos(b) + z1 * Math.sin(b);
    const z2 = -x * Math.sin(b) + z1 * Math.cos(b);
    out.set([x2 * 1.15, y1 * 1.15, z2 * 1.15], i * 3);
  }
  return out;
}

function helix(n) {
  const out = new Float32Array(n * 3);
  const H = 6.5, R = 1.0, turns = 3.2;
  for (let i = 0; i < n; i++) {
    const t = Math.random();
    const ang = t * Math.PI * 2 * turns;
    const y = (t - 0.5) * H;
    let x, z;
    if (Math.random() < 0.72) { // the two strands
      const off = Math.random() < 0.5 ? 0 : Math.PI;
      x = Math.cos(ang + off) * R + gauss() * 0.05;
      z = Math.sin(ang + off) * R + gauss() * 0.05;
    } else { // rungs between them, snapped to discrete heights
      const tt = Math.round(t * 40) / 40;
      const a2 = tt * Math.PI * 2 * turns;
      const s = rand(-1, 1);
      x = Math.cos(a2) * R * s; z = Math.sin(a2) * R * s;
      out.set([x, (tt - 0.5) * H, z], i * 3);
      continue;
    }
    out.set([x, y, z], i * 3);
  }
  // lean it diagonally
  const c = Math.cos(0.5), s = Math.sin(0.5);
  for (let i = 0; i < n; i++) {
    const x = out[i * 3], y = out[i * 3 + 1];
    out[i * 3] = x * c - y * s; out[i * 3 + 1] = x * s + y * c;
  }
  return out;
}

function atom(n) {
  const out = new Float32Array(n * 3);
  const tilts = [[0, 0], [Math.PI / 3, 0.3], [-Math.PI / 3, -0.3]];
  for (let i = 0; i < n; i++) {
    const k = Math.random();
    if (k < 0.16) { // nucleus
      const u = Math.random() * Math.PI * 2, v = Math.acos(2 * Math.random() - 1), r = 0.45 * Math.cbrt(Math.random());
      out.set([r * Math.sin(v) * Math.cos(u), r * Math.sin(v) * Math.sin(u), r * Math.cos(v)], i * 3);
      continue;
    }
    if (k < 0.2) { // electrons: tight clusters on the orbits
      const e = Math.floor(Math.random() * 3);
      const th = e * 2.1 + 0.6;
      const [rz, rx] = tilts[e];
      let x = Math.cos(th) * 2.6 + gauss() * 0.06, y = Math.sin(th) * 1.0 + gauss() * 0.06, z = gauss() * 0.06;
      [x, y] = [x * Math.cos(rz) - y * Math.sin(rz), x * Math.sin(rz) + y * Math.cos(rz)];
      [y, z] = [y * Math.cos(rx) - z * Math.sin(rx), y * Math.sin(rx) + z * Math.cos(rx)];
      out.set([x, y, z], i * 3);
      continue;
    }
    const [rz, rx] = tilts[Math.floor(Math.random() * 3)];
    const th = Math.random() * Math.PI * 2;
    let x = Math.cos(th) * 2.6 + gauss() * 0.03, y = Math.sin(th) * 1.0 + gauss() * 0.03, z = gauss() * 0.03;
    [x, y] = [x * Math.cos(rz) - y * Math.sin(rz), x * Math.sin(rz) + y * Math.cos(rz)];
    [y, z] = [y * Math.cos(rx) - z * Math.sin(rx), y * Math.sin(rx) + z * Math.cos(rx)];
    out.set([x, y, z], i * 3);
  }
  return out;
}

function torusKnot(n) {
  const out = new Float32Array(n * 3);
  const p = 2, q = 3, R = 1.5, r = 0.55;
  for (let i = 0; i < n; i++) {
    const t = Math.random() * Math.PI * 2;
    const cx = (R + r * Math.cos(q * t)) * Math.cos(p * t);
    const cy = (R + r * Math.cos(q * t)) * Math.sin(p * t);
    const cz = r * Math.sin(q * t);
    const tube = 0.18 * Math.sqrt(Math.random());
    const a = Math.random() * Math.PI * 2, b = Math.random() * Math.PI;
    out.set([cx + tube * Math.cos(a) * Math.sin(b), cy + tube * Math.sin(a) * Math.sin(b), cz + tube * Math.cos(b)], i * 3);
  }
  return out;
}

function wave(n) {
  const out = new Float32Array(n * 3);
  const cols = Math.ceil(Math.sqrt(n * 2.2));
  const rows = Math.ceil(n / cols);
  for (let i = 0; i < n; i++) {
    const cx = i % cols, cz = Math.floor(i / cols);
    const x = (cx / cols - 0.5) * 16;
    const z = (cz / rows - 0.5) * 7;
    const y = Math.sin(x * 0.6) * 0.35 + Math.cos(z * 0.9 + x * 0.3) * 0.3;
    out.set([x, y, z], i * 3);
  }
  return out;
}

const vertex = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform float uOpacity;
  uniform float uSpread;
  uniform float uWave;
  uniform float uAspect;
  uniform vec2 uMouse;
  attribute float aRandom;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec3 p = position;
    float n = aRandom * 6.2831;
    p += 0.045 * vec3(sin(uTime * 0.8 + n + p.y * 2.0), cos(uTime * 0.7 + n + p.x * 2.0), sin(uTime * 0.9 + n + p.z * 2.0));
    // rolling wave, only for the contact field
    p.y += uWave * (sin(p.x * 0.7 + uTime * 1.1) * 0.35 + cos(p.z * 1.2 + uTime * 0.8) * 0.25);
    // fast scrolling blows the cloud apart a little
    p += normalize(p + 0.0001) * uSpread * (0.3 + aRandom);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vec4 clip = projectionMatrix * mv;
    vec2 ndc = clip.xy / clip.w;
    vec2 d = ndc - uMouse;
    d.x *= uAspect;
    float force = smoothstep(0.32, 0.0, length(d));
    mv.xy += normalize(d + 0.0001) * force * 0.55;
    gl_Position = projectionMatrix * mv;

    gl_PointSize = uSize * uPixelRatio * (0.55 + aRandom * 0.9) / -mv.z;

    vec3 cyan = vec3(0.97, 0.70, 0.1);    // mustard
    vec3 violet = vec3(0.96, 0.92, 0.84); // cream
    vec3 pink = vec3(0.94, 0.36, 0.16);   // orange
    vColor = aRandom < 0.5 ? mix(cyan, violet, aRandom * 2.0) : mix(violet, pink, (aRandom - 0.5) * 2.0);
    vColor = mix(vColor, vec3(1.0), force * 0.6);
    vAlpha = uOpacity * (0.45 + 0.55 * aRandom) + force * 0.5;
  }
`;

const fragment = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    a *= a;
    gl_FragColor = vec4(vColor, a * vAlpha);
  }
`;

export function createParticles(canvas, { mobile = false, reduced = false } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
  const dpr = Math.min(window.devicePixelRatio, 2);
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 8);

  const count = mobile ? 4500 : 9000;
  const shapes = [sphere, chip, helix, atom, torusKnot, wave].map((fn) => fn(count));
  const randoms = new Float32Array(count);
  for (let i = 0; i < count; i++) randoms[i] = Math.random();

  const positions = new Float32Array(shapes[0]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));

  const uniforms = {
    uTime: { value: 0 },
    uSize: { value: mobile ? 52 : 46 },
    uPixelRatio: { value: dpr },
    uOpacity: { value: 1 },
    uSpread: { value: 0 },
    uWave: { value: 0 },
    uAspect: { value: 1 },
    uMouse: { value: new THREE.Vector2(9, 9) },
  };
  const mat = new THREE.ShaderMaterial({
    vertexShader: vertex, fragmentShader: fragment, uniforms,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geo, mat);
  const group = new THREE.Group();
  group.add(points);
  scene.add(group);

  // distant star dust
  const starCount = mobile ? 500 : 1400;
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) starPos.set([rand(-30, 30), rand(-20, 20), rand(-30, -6)], i * 3);
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x8fa0ff, size: 0.05, transparent: true, opacity: 0.55, depthWrite: false }));
  scene.add(stars);

  let morph = 0, morphTarget = 0, lastMorph = -1;
  let spread = 0, spreadTarget = 0;
  const mouse = { x: 9, y: 9, tx: 9, ty: 9 };
  const tilt = { x: 0, y: 0 };
  let wide = true;

  function resize() {
    const box = canvas.parentElement ?? document.body;
    const w = box.clientWidth, h = box.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    uniforms.uAspect.value = w / h;
    wide = window.innerWidth > 760;
  }
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(canvas.parentElement ?? document.body);

  const ease = (t) => t * t * (3 - 2 * t);

  function updateMorph() {
    if (Math.abs(morph - lastMorph) < 0.0005) return;
    lastMorph = morph;
    const i = Math.min(Math.floor(morph), shapes.length - 1);
    const j = Math.min(i + 1, shapes.length - 1);
    const t = morph - i;
    const A = shapes[i], B = shapes[j];
    for (let k = 0; k < count; k++) {
      // stagger particles so the morph flows rather than snaps
      let tk = Math.min(1, Math.max(0, t * 1.6 - randoms[k] * 0.6));
      tk = ease(tk);
      const o = k * 3;
      positions[o] = A[o] + (B[o] - A[o]) * tk;
      positions[o + 1] = A[o + 1] + (B[o + 1] - A[o + 1]) * tk;
      positions[o + 2] = A[o + 2] + (B[o + 2] - A[o + 2]) * tk;
    }
    geo.attributes.position.needsUpdate = true;
  }

  function lerpLayout(m) {
    const i = Math.min(Math.floor(m), LAYOUTS.length - 1);
    const j = Math.min(i + 1, LAYOUTS.length - 1);
    const t = ease(m - i);
    const L = {};
    for (const key of ['x', 'y', 'scale', 'opacity']) L[key] = LAYOUTS[i][key] + (LAYOUTS[j][key] - LAYOUTS[i][key]) * t;
    return L;
  }

  const clock = new THREE.Clock();
  let running = true;
  function tick() {
    if (!running) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    const time = clock.elapsedTime;
    uniforms.uTime.value = reduced ? 0 : time;

    morph += (morphTarget - morph) * Math.min(1, dt * 3.2);
    updateMorph();

    spread += (spreadTarget - spread) * Math.min(1, dt * 4);
    spreadTarget *= 0.9;
    uniforms.uSpread.value = reduced ? 0 : spread;

    const L = lerpLayout(morph);
    group.position.x += ((wide ? L.x : 0) - group.position.x) * 0.08;
    group.position.y += (L.y - group.position.y) * 0.08;
    const s = L.scale * (wide ? 1 : 0.78);
    group.scale.setScalar(group.scale.x + (s - group.scale.x) * 0.08);
    uniforms.uOpacity.value = wide ? L.opacity : L.opacity * 0.7;
    uniforms.uWave.value = Math.max(0, morph - 4);

    mouse.x += (mouse.tx - mouse.x) * 0.12;
    mouse.y += (mouse.ty - mouse.y) * 0.12;
    uniforms.uMouse.value.set(mouse.x, mouse.y);

    // auto-rotate, slowed down for the flat wave field
    const flat = Math.max(0, morph - 4);
    if (!reduced) group.rotation.y += dt * 0.12 * (1 - flat);
    group.rotation.y *= 1 - flat * 0.04;
    const mx = Math.abs(mouse.tx) > 2 ? 0 : mouse.tx, my = Math.abs(mouse.ty) > 2 ? 0 : mouse.ty;
    tilt.x += (my * 0.25 + flat * 0.35 - tilt.x) * 0.05;
    tilt.y += (mx * 0.3 - tilt.y) * 0.05;
    group.rotation.x = tilt.x;
    points.rotation.y = tilt.y;
    stars.rotation.y = time * 0.01;
    stars.rotation.x = mouse.y * 0.02;

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  const onVisibility = () => {
    const was = running;
    running = !document.hidden;
    if (running && !was) { clock.getDelta(); requestAnimationFrame(tick); }
  };
  document.addEventListener('visibilitychange', onVisibility);

  return {
    setMorph(v) { morphTarget = Math.max(0, Math.min(LAYOUTS.length - 1, v)); },
    setMouse(nx, ny) { mouse.tx = nx; mouse.ty = ny; },
    clearMouse() { mouse.tx = 9; mouse.ty = 9; },
    kick(v) { spreadTarget = Math.min(0.9, Math.max(spreadTarget, Math.abs(v))); },
    destroy() {
      running = false;
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      geo.dispose(); mat.dispose(); starGeo.dispose(); renderer.dispose();
    },
  };
}

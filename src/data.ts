// All portfolio content lives here — edit this file to update the site.

export const links = {
  email: 'ananyapenumudi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ananya-penumudi-b539482a0/',
  github: 'https://github.com/ananyapenumudi-ops',
  resume: './Ananya_Penumudi_Resume.pdf',
};

const art = (name: string) => `./art/${name}.svg`;

export const images = {
  elLogo: './projects/elementium/logo.png',
  cat: art('cat'),
  duck: art('duck'),
  flower: art('flower'),
  frog: art('frog'),
  daisy: art('daisy'),
  train: art('train'),
  flask: art('flask'),
  lock: art('lock'),
  plant: art('plant'),
  printer: art('printer'),
  museum: art('museum'),
  tomato: art('tomato'),
  vinyl: art('vinyl'),
  signal: art('signal'),
  camera: art('camera'),
  certificate: art('certificate'),
  badge: art('badge'),
  pencil: art('pencil'),
};

const drive = (id: string) => `https://drive.google.com/file/d/${id}/view`;

// Public documents linked from the resume.
export const docs = {
  thesis: drive('1GO4mDjF_dgNs_bGwBQmBrbEVATUGQPoT'),
  bhelCert: drive('16mDEpE9koYvorrJpGuh5ZN004jtG2wrX'),
  alfagoCert: drive('1Gtoaz6f3XO0bQzgjHT4G-XAV1L3BHDb_'),
  ideathonCert: drive('1jPCXMfigmvvXgMQub1-DiE9gDc0QkC1H'),
  convergenceCert: drive('1ziS1uKQ0UtFztXfHGNv8Hq73acEiVBjp'),
  demuxCert: drive('1IDa8FzrdquvvZvrPapB-Qs3R_pxVY9Fd'),
  conclaveCert: drive('1jPLxF_J3GC9K4ZC5wNVo5O-M-0838fr_'),
  tableauCert: 'https://www.udemy.com/certificate/UC-f3417426-3a7c-4bad-aeaf-892ec4fb1019/',
  wipeRepo: 'https://github.com/VedarthamSaaket/oblvn',
  kartgenLor: './docs/Kartgen_Letter_of_Recommendation.pdf',
  signalsafeRepo: 'https://github.com/ananyapenumudi-ops/signalsafe',
  signalsafeDocs: 'https://github.com/ananyapenumudi-ops/signalsafe/blob/main/docs/SignalSafe-Documentation.pdf',
  captureRepo: 'https://github.com/ananyapenumudi-ops/capture-factory',
  certRepo: 'https://github.com/ananyapenumudi-ops/AEREO_assignment',
};

// The hover-expand strip: standalone things I'd love to build, hardware and software, each with its own mascot.
export const ideas = [
  { src: images.duck, alt: 'Duck mascot', code: '# 01 · software', title: 'Desk Duck', caption: 'A VS Code rubber duck that asks you questions while you explain your bug' },
  { src: images.cat, alt: 'Cat with chai mascot', code: '# 02 · hardware', title: 'Chai-o-meter', caption: 'A smart coaster that knows when your chai is getting cold' },
  { src: images.museum, alt: 'Sock on a museum pedestal', code: '# 03 · software', title: 'Pocket Museum', caption: 'Snap any everyday object and get a very serious museum placard for it' },
  { src: images.plant, alt: 'Grumpy plant mascot', code: '# 04 · hardware', title: 'Moody Monstera', caption: 'A plant Tamagotchi that sulks on e-ink when it is thirsty' },
  { src: images.tomato, alt: 'Tomato chef mascot', code: '# 05 · software', title: 'Fridge Chef', caption: 'Photograph your fridge and get recipes for what is actually in it' },
  { src: images.printer, alt: 'Printer mascot', code: '# 06 · hardware', title: 'Daily Poster Printer', caption: 'A thermal printer that prints a tiny illustrated poster every morning' },
  { src: images.daisy, alt: 'Daisy mascot', code: '# 07 · software', title: 'Cosy Focus Room', caption: 'A Pomodoro timer where every focus session adds furniture to a pixel room' },
  { src: images.badge, alt: 'E-ink badge mascot', code: '# 08 · hardware', title: 'Status Badge', caption: 'An NFC e-ink badge that shows your mood and swaps contacts with a tap' },
  { src: images.vinyl, alt: 'Vinyl record mascot', code: '# 09 · software', title: 'Mixtape Posters', caption: 'Turns your week of music into a printable retro gig poster' },
  { src: images.pencil, alt: 'Pencil mascot', code: '# 10 · software', title: 'Doodle-to-Circuit', caption: 'Sketch a circuit on paper and computer vision turns it into a simulation' },
];

export const roles = ['embedded engineer', 'IoT tinkerer', 'safety nerd', 'maker of cute things'];

export const traits = [
  { title: 'Systems-first', art: images.train, body: 'I start with requirements, failure modes and safety margins, then write code. KAVACH taught me that the boring parts are what keep people safe.' },
  { title: 'Hardware that thinks', art: images.frog, body: 'My happy place is where sensors meet models: an ESP32 reading the world, a model deciding what to do about it.' },
  { title: 'Serious, but make it fun', art: images.duck, body: 'Calm and structured on the inside, playful on the outside. My chemistry lab has a mascot, and I think more engineering should.' },
];

export const experience = [
  {
    role: 'Industrial Trainee',
    org: 'Bharat Heavy Electricals Limited (BHEL), Bengaluru',
    date: 'Jun – Jul 2026',
    link: { label: 'Certificate', url: docs.bhelCert },
    points: [
      'Industrial training at the BHEL Solar Business Division: manufacturing, production workflows and large-scale engineering systems.',
      'Studied railway safety, signalling infrastructure and KAVACH through technical discussions and documentation.',
    ],
  },
  {
    role: 'Software Engineering Intern · Position Tracker',
    org: 'Alfago',
    date: 'Jan 2026',
    link: { label: 'Certificate', url: docs.alfagoCert },
    points: ['Implemented tax-lot based PnL calculations for transaction- and portfolio-level profit & loss tracking.'],
  },
  {
    role: 'Operations Intern',
    org: 'Kartgen Infotech LLP',
    date: 'Jan – Apr 2025',
    link: { label: 'Letter of recommendation', url: docs.kartgenLor },
    points: ['Supported business development, process coordination and stakeholder communication (remote).'],
  },
];

export const education = [
  { school: 'VNR Vignana Jyothi Institute of Engineering & Technology', degree: 'B.Tech, CSE (IoT)', date: '2023 – now', score: 'CGPA 8.92 / 10' },
  { school: 'Sri Chaitanya Junior College', degree: 'Intermediate, Telangana State Board', date: '2021 – 23', score: '97.4%' },
  { school: 'Bharatiya Vidya Bhavan’s Public School', degree: 'High School, CBSE', date: '2021', score: 'GPA 9.38 / 10' },
];

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  date: string;
  art: string;
  body: string;
  more?: string;
  tags: string[];
  links: { label: string; url: string }[];
  status?: string;
  theme: 'red' | 'pink' | 'sage' | 'mustard';
};

export const projects: Project[] = [
  {
    slug: 'elementium',
    title: 'Elementium AI',
    kicker: 'Virtual chemistry lab · 3D + AI · team project',
    date: '2026',
    art: images.flask,
    theme: 'pink',
    body: 'An intelligent virtual chemistry lab I built with my team. Explore a 360° 3D lab, drag apparatus onto the bench and run a real-time titration with colour-change chemistry, guided by Elio, a Gemini-powered tutor who catches your mistakes.',
    more: 'A rule-based engine enforces safe experimental order, an observation notebook records every reading, and results such as water hardness are calculated automatically at the endpoint. Built for a whole class at once.',
    tags: ['React Three Fiber', 'Three.js', 'FastAPI', 'MongoDB Atlas', 'Gemini AI'],
    links: [{ label: 'GitHub', url: 'https://github.com/Ananyapenumudi/elementium' }],
  },
  {
    slug: 'kavach',
    title: 'Beyond Collision Prevention',
    kicker: 'KAVACH · research thesis',
    date: 'Jun 2026',
    art: images.train,
    theme: 'mustard',
    body: 'A systems-engineering analysis of KAVACH, India’s indigenous Automatic Train Protection system: architecture, operational modes, communication framework and functional safety, written under industry guidance from BHEL Bengaluru.',
    more: 'It comes with an interactive simulator of KAVACH’s modes of operation and a digital twin.',
    tags: ['Functional Safety', 'System Architecture', 'V&V', 'Requirements Traceability'],
    links: [
      { label: 'Thesis report', url: docs.thesis },
      { label: 'Mode simulator', url: 'https://github.com/Ananyapenumudi/kavach-mode-simulator' },
      { label: 'Digital twin', url: 'https://github.com/Ananyapenumudi/KAVACH-Digital-Twin' },
    ],
  },
  {
    slug: 'signalsafe',
    title: 'SignalSafe',
    kicker: 'KAVACH test-bench digital twin · in progress',
    date: 'Oct 2026',
    art: images.signal,
    theme: 'sage',
    body: 'A browser-based digital twin of the KAVACH Generic Test Bench. Build a yard, run onboard and stationary KAVACH through it, inject the faults the field throws at them, and get a clause-by-clause verdict on what the system did and why.',
    more: 'Grounded in RDSO’s KAVACH System Requirements Specification, with a deterministic simulation engine, causal event logs and a scroll-driven 3D landing page. Weeks 1–3 of an 8-week plan are done.',
    tags: ['TypeScript', 'React', 'three.js', 'Web Workers', 'Zod', 'Vitest'],
    links: [
      { label: 'GitHub', url: docs.signalsafeRepo },
      { label: 'Documentation', url: docs.signalsafeDocs },
    ],
  },
  {
    slug: 'capture-factory',
    title: 'Capture Factory',
    kicker: 'Retro photo booth · web',
    date: 'Oct 2026',
    art: images.camera,
    theme: 'pink',
    body: 'A retro photo booth that runs in your browser: strike a pose, get a 3-2-1 countdown and walk away with a printed-style photo strip and an “Admit One” ticket stub.',
    more: '40 original stickers, 12 frames, filters written as pixel maths so they work on iPhone Safari, and undo/redo. Everything stays on your device: no uploads, no accounts.',
    tags: ['React 19', 'TypeScript', 'Konva', 'Zustand', 'Canvas', 'Camera API'],
    links: [{ label: 'GitHub', url: docs.captureRepo }],
  },
  {
    slug: 'wipe',
    title: 'AI-Enhanced Secure Data Wiping',
    kicker: 'AI + cybersecurity · collaboration',
    date: 'Nov 2025',
    art: images.lock,
    theme: 'sage',
    body: 'A data-sanitisation platform I built with a teammate: upload any number of files and folders and they are binary-overwritten so they cannot be recovered. Every wipe comes with cryptographic proof, and AI-based anomaly detection flags anything that looks off.',
    tags: ['Cryptographic verification', 'Anomaly detection', 'Binary overwrite', 'Team project'],
    links: [{ label: 'GitHub (collab)', url: docs.wipeRepo }],
  },
  {
    slug: 'certificates',
    title: 'Bulk Certificate Generator',
    kicker: 'Backend API',
    date: 'Oct 2026',
    art: images.certificate,
    theme: 'mustard',
    body: 'A FastAPI backend that takes a list of recipients as JSON or CSV, generates a PDF certificate for each one in the background, and lets you track progress and download them one by one or as a ZIP.',
    tags: ['Python', 'FastAPI', 'SQLAlchemy 2', 'ReportLab', 'pytest', 'GitHub Actions'],
    links: [{ label: 'GitHub', url: docs.certRepo }],
  },
];

// Not built yet: shown honestly as a concept.
export const inTheLab: Project[] = [
  {
    slug: 'auralyn',
    title: 'Auralyn',
    kicker: 'Wearable wellness · concept',
    date: 'Designing',
    art: images.flower,
    theme: 'red',
    status: 'Concept',
    body: 'A wearable emotional-wellness ecosystem: biometric sensing on an ESP32-S3, BLE to apps for the wearer, their therapist and their family, with AI mood analysis in between.',
    tags: ['ESP32-S3', 'BLE', 'Biometrics', 'Mood AI'],
    links: [],
  },
];

export const skills = [
  'Arduino', 'ESP32', 'SPI · I2C · PWM', 'BLE', 'GPS · GSM', 'Sensor fusion', 'C', 'C++', 'Python', 'Java', 'JavaScript', 'R', 'SQL',
  'Computer vision', 'Edge inference', 'Anomaly detection', 'Functional safety', 'Requirements', 'V&V', 'System architecture',
  'MongoDB', 'MySQL', 'AWS', 'DevOps / CI', 'Tableau', 'Figma', 'AutoCAD', 'StarUML',
];

export const certifications = [
  { title: 'DevOps with Real-Time Practical Exposure', org: 'Brainovision · AICTE approved', date: 'Jul – Nov 2025' },
  { title: 'Tableau Certified Data Analyst Training', org: 'Udemy · 59 hours', date: 'Jun 2024', url: docs.tableauCert },
  { title: 'RoboJAM Robotics Workshop', org: 'VNRVJIET · Convergence 2K23', date: 'Dec 2023' },
];

export const activities = [
  { year: '2025', title: 'Smart India Hackathon', desc: 'Solution design, prototyping & documentation' },
  { year: '2025', title: '24-hour Hackathon · Convergence', desc: 'VNRVJIET', url: docs.convergenceCert },
  { year: '2025', title: 'National Conclave', desc: 'CBIT', url: docs.conclaveCert },
  { year: '2024', title: '24-hour Hackathon · DEMUX', desc: 'BVRIT', url: docs.demuxCert },
  { year: '2023', title: 'IDEATHON, 2nd Prize', desc: 'VNRVJIET', highlight: true, url: docs.ideathonCert },
];

export const memberships = [
  { title: 'Computer Society of India', desc: 'VNRVJIET chapter: workshops, coding events, competitions' },
  { title: 'Art of Living Cultural Club', desc: 'Event organising & volunteering' },
];

export const languages = ['English', 'Hindi', 'Telugu'];

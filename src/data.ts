// All portfolio content lives here — edit this file to update the site.

export const links = {
  email: 'ananyapenumudi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ananya-penumudi-b539482a0/',
  github: 'https://github.com/ananyapenumudi-ops',
  resume: './Ananya_Penumudi_Resume.pdf',
};

const el = (name: string) => `./projects/elementium/${name}.jpg`;
const art = (name: string) => `./art/${name}.svg`;

export const images = {
  elLab: el('lab-titration'),
  elTutor: el('elio-tutor'),
  elDashboard: el('dashboard'),
  elPh: el('ph-titration'),
  elViva: el('viva-arcade'),
  elNotebook: el('notebook'),
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
  toytrain: art('toytrain'),
  crossing: art('crossing'),
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
  tableauCert: 'https://www.udemy.com/certificate/UC-f3417426-3a7c-4bad-aeaf-892ec4fb1019/',
  wipeRepo: 'https://github.com/VedarthamSaaket/oblvn',
};

// The hover-expand strip: things I want to build next, each with its own mascot.
export const ideas = [
  { src: images.duck, alt: 'Duck mascot', code: '# 01 · idea', title: 'Desk Duck', caption: 'A rubber-duck debugger that asks good questions and quacks when you find the bug' },
  { src: images.cat, alt: 'Cat with chai mascot', code: '# 02 · idea', title: 'Chai-o-meter', caption: 'A smart coaster that knows when your chai is getting cold' },
  { src: images.plant, alt: 'Grumpy plant mascot', code: '# 03 · idea', title: 'Moody Monstera', caption: 'A plant Tamagotchi that sulks on e-ink when it is thirsty' },
  { src: images.printer, alt: 'Printer mascot', code: '# 04 · idea', title: 'Daily Poster Printer', caption: 'A thermal printer that prints a tiny illustrated poster every morning' },
  { src: images.toytrain, alt: 'Toy train mascot', code: '# 05 · idea', title: 'KAVACH Jr.', caption: 'A tabletop train that brakes itself at red signals, to teach train protection' },
  { src: images.frog, alt: 'Frog holding an ESP32', code: '# 06 · idea', title: 'Elementium for circuits', caption: 'A virtual embedded lab where Elio catches wiring mistakes before you flash' },
  { src: images.crossing, alt: 'Level crossing mascot', code: '# 07 · idea', title: 'KAVACH-Lite', caption: 'LoRa trackside nodes that warn rail crossings of approaching trains' },
  { src: images.badge, alt: 'E-ink badge mascot', code: '# 08 · idea', title: 'Status Badge', caption: 'An NFC e-ink hackathon badge that shows your mood and swaps contacts' },
  { src: images.pencil, alt: 'Pencil mascot', code: '# 09 · idea', title: 'Doodle-to-Circuit', caption: 'Sketch a circuit on paper, computer vision turns it into a simulation' },
  { src: images.flower, alt: 'Flower mascot', code: '# 10 · idea', title: 'Room Mood Mural', caption: 'Room sensors paint a slowly changing poster in this palette' },
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
    date: 'Apr – Jul 2025',
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
  gallery?: { src: string; caption: string }[];
  status?: string;
  theme: 'red' | 'pink' | 'sage' | 'mustard';
};

export const projects: Project[] = [
  {
    slug: 'elementium',
    title: 'Elementium AI',
    kicker: 'Virtual chemistry lab · 3D + AI',
    date: '2026',
    art: images.flask,
    theme: 'pink',
    body: 'An intelligent virtual chemistry lab. Explore a 360° 3D lab, drag apparatus onto the bench and run a real-time titration with colour-change chemistry, guided by Elio, a Gemini-powered tutor who catches your mistakes.',
    more: 'A rule-based engine enforces safe experimental order, an observation notebook records every reading, and results such as water hardness are calculated automatically at the endpoint. Built for a whole class at once.',
    tags: ['React Three Fiber', 'Three.js', 'FastAPI', 'MongoDB Atlas', 'Gemini AI'],
    links: [{ label: 'GitHub', url: 'https://github.com/Ananyapenumudi/elementium' }],
    gallery: [
      { src: images.elLab, caption: '3D titration bench' },
      { src: images.elTutor, caption: 'Elio, the AI tutor' },
      { src: images.elDashboard, caption: 'Student dashboard' },
      { src: images.elPh, caption: 'pH titration curve' },
      { src: images.elViva, caption: 'Viva arcade' },
      { src: images.elNotebook, caption: 'Lab notebook' },
    ],
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
    slug: 'wipe',
    title: 'AI-Enhanced Secure Data Wiping',
    kicker: 'AI + cybersecurity',
    date: 'Nov 2025',
    art: images.lock,
    theme: 'sage',
    body: 'A data-sanitisation platform: upload any number of files and folders and they are binary-overwritten so they cannot be recovered. Every wipe comes with cryptographic proof, and AI-based anomaly detection flags anything that looks off.',
    tags: ['Cryptographic verification', 'Anomaly detection', 'Binary overwrite', 'Team project'],
    links: [{ label: 'GitHub (team)', url: docs.wipeRepo }],
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
  { year: '2025', title: '24-hour Hackathon · Convergence', desc: 'VNRVJIET' },
  { year: '2025', title: 'National Conclave', desc: 'CBIT' },
  { year: '2024', title: '24-hour Hackathon · DEMUX', desc: 'BVRIT' },
  { year: '2023', title: 'IDEATHON, 2nd Prize', desc: 'VNRVJIET', highlight: true, url: docs.ideathonCert },
];

export const memberships = [
  { title: 'Computer Society of India', desc: 'VNRVJIET chapter: workshops, coding events, competitions' },
  { title: 'Art of Living Cultural Club', desc: 'Event organising & volunteering' },
];

export const languages = ['English', 'Hindi', 'Telugu'];

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
};

// The hover-expand scrapbook strip.
export const scrapbook = [
  { src: images.train, alt: 'Illustrated train with a safety shield', code: '# 01 · KAVACH', title: 'KAVACH thesis', caption: 'Train protection, explained as a system' },
  { src: images.elLab, alt: 'Elementium 3D titration bench', code: '# 02 · Elementium', title: 'The 3D lab bench', caption: 'Drag, pour, swirl, titrate' },
  { src: images.flask, alt: 'Illustrated smiling flask', code: '# 03 · Elementium', title: 'Chemistry, but cute', caption: 'Wine red → purple → blue' },
  { src: images.elTutor, alt: 'Elio the AI tutor chatting in Elementium', code: '# 04 · Elementium', title: 'Meet Elio', caption: 'A Gemini-powered tutor that catches mistakes' },
  { src: images.lock, alt: 'Illustrated padlock wearing sunglasses', code: '# 05 · Secure Wipe', title: 'Secure data wiping', caption: 'Wipes you can actually prove' },
  { src: images.frog, alt: 'Illustrated frog holding an ESP32 board', code: '# 06 · Bench buddy', title: 'Embedded at heart', caption: 'ESP32s, sensors and solder smoke' },
  { src: images.elDashboard, alt: 'Elementium student dashboard', code: '# 07 · Elementium', title: 'Student bench', caption: 'Leaderboard, Viva arcade & free lab' },
  { src: images.cat, alt: 'Illustrated black cat holding a mug', code: '# 08 · Fuel', title: 'Powered by chai', caption: 'and very long debugging sessions' },
  { src: images.daisy, alt: 'Illustrated smiling daisy climbing stairs', code: '# 09 · Always', title: 'One step at a time', caption: 'Ship, document, repeat' },
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
    points: [
      'Industrial training at the BHEL Solar Business Division: manufacturing, production workflows and large-scale engineering systems.',
      'Studied railway safety, signalling infrastructure and KAVACH through technical discussions and documentation.',
    ],
  },
  {
    role: 'Software Engineering Intern · Position Tracker',
    org: 'Alfago',
    date: 'Jan 2026',
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
    body: 'A data-sanitisation platform where every wipe comes with cryptographic proof, and AI-based anomaly detection flags anything that looks off.',
    tags: ['Cryptographic verification', 'Anomaly detection', 'Security'],
    links: [],
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
  { title: 'Tableau Certified Data Analyst Training', org: 'Udemy · 59 hours', date: 'Jun 2024' },
  { title: 'RoboJAM Robotics Workshop', org: 'VNRVJIET · Convergence 2K23', date: 'Dec 2023' },
];

export const activities = [
  { year: '2025', title: 'Smart India Hackathon', desc: 'Solution design, prototyping & documentation' },
  { year: '2025', title: '24-hour Hackathon · Convergence', desc: 'VNRVJIET' },
  { year: '2025', title: 'National Conclave', desc: 'CBIT' },
  { year: '2024', title: '24-hour Hackathon · DEMUX', desc: 'BVRIT' },
  { year: '2023', title: 'IDEATHON, 2nd Prize', desc: 'VNRVJIET', highlight: true },
];

export const memberships = [
  { title: 'Computer Society of India', desc: 'VNRVJIET chapter: workshops, coding events, competitions' },
  { title: 'Art of Living Cultural Club', desc: 'Event organising & volunteering' },
];

export const languages = ['English', 'Hindi', 'Telugu'];

// All portfolio content lives here — edit this file to update the site.

export const links = {
  email: 'ananyapenumudi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ananya-penumudi-b539482a0/',
  github: 'https://github.com/ananyapenumudi-ops',
  resume: './Ananya_Penumudi_Resume.pdf',
};

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?w=1400&q=75&auto=format&fit=crop`;
const el = (name: string) => `./projects/elementium/${name}.jpg`;

export const images = {
  wheelchair: unsplash('1555255707-c07966088b7b'),
  auralyn: unsplash('1434494878577-86c23bcb06b9'),
  kavach: unsplash('1474487548417-781cb71495f3'),
  syncope: unsplash('1530497610245-94d3c16cda28'),
  wipe: unsplash('1515879218367-8466d910aaa4'),
  focusflow: unsplash('1484480974693-6ca0a78fb36b'),
  ideavoid: unsplash('1519389950473-47ba0277781c'),
  bhel: unsplash('1581091226825-a6a2a5aee158'),
  elLab: el('lab-titration'),
  elTutor: el('elio-tutor'),
  elDashboard: el('dashboard'),
  elPh: el('ph-titration'),
  elViva: el('viva-arcade'),
  elNotebook: el('notebook'),
  elLogo: './projects/elementium/logo.png',
};

// Feeds the zoom slider in the Work section.
export const sliderItems = [
  { number: '01', src: images.elLab, title: 'ELEMENTIUM · LAB', desc: '360° 3D titration bench, built in React Three Fiber' },
  { number: '02', src: images.wheelchair, title: 'SMART WHEELCHAIR', desc: 'Vision-based braking & GPS geofencing' },
  { number: '03', src: images.elTutor, title: 'ELEMENTIUM · ELIO', desc: 'Gemini-powered tutor that catches mistakes live' },
  { number: '04', src: images.auralyn, title: 'AURALYN', desc: 'ESP32-S3 wearable reading emotion from biometrics' },
  { number: '05', src: images.kavach, title: 'KAVACH', desc: 'Systems-engineering thesis on India’s train protection' },
  { number: '06', src: images.elDashboard, title: 'ELEMENTIUM · BENCH', desc: 'Student dashboard, leaderboard & Viva arcade' },
  { number: '07', src: images.syncope, title: 'SYNCOPE', desc: 'Wearable fall detection with caregiver alerts' },
  { number: '08', src: images.wipe, title: 'SECURE WIPE', desc: 'Cryptographically verified data sanitisation' },
  { number: '09', src: images.focusflow, title: 'FOCUSFLOW', desc: 'ADHD-friendly productivity with mood tracking' },
  { number: '10', src: images.ideavoid, title: 'IDEAVOID', desc: 'Startup idea validation & peer feedback' },
];

export const roles = [
  'Embedded Systems Engineer',
  'IoT Builder',
  'Edge AI Tinkerer',
  'Safety-Critical Systems Thinker',
];

export const stats = [
  { value: 8.92, decimals: 2, label: 'CGPA · B.Tech CSE–IoT' },
  { value: 9, suffix: '+', label: 'Projects shipped' },
  { value: 3, label: 'Industry stints' },
  { value: 5, suffix: '+', label: 'Hackathons & conclaves' },
];

export const traits = [
  {
    title: 'Systems-first',
    body: 'I start with the architecture: requirements, failure modes, safety margins. Then I write code. KAVACH taught me that the boring parts are what keep people safe.',
  },
  {
    title: 'Hardware that thinks',
    body: 'My favourite place is where sensors meet models: an ESP32 reading biometrics, a camera spotting obstacles, a wearable that knows when you fall.',
  },
  {
    title: 'Build it, then explain it',
    body: 'I prototype fast and document properly. I care about the thesis, the README and the demo as much as I care about the circuit.',
  },
];

export const experience = [
  {
    role: 'Industrial Trainee',
    org: 'Bharat Heavy Electricals Limited (BHEL), Bengaluru',
    date: 'Jun 2026 – Jul 2026',
    tag: 'Industry',
    points: [
      'Industrial training at the BHEL Solar Business Division: manufacturing processes, production workflows and large-scale engineering systems.',
      'Studied railway safety technology, signalling infrastructure and KAVACH through technical discussions and documentation.',
      'Observed quality assurance, system integration, project lifecycle management and safety-critical engineering operations.',
    ],
  },
  {
    role: 'Software Engineering Intern · Position Tracker',
    org: 'Alfago',
    date: 'Jan 2026',
    tag: 'Software',
    points: [
      'Contributed to a Position Tracker that monitors transaction-level and portfolio-level profit & loss.',
      'Implemented tax-lot based PnL calculations for accurate financial reporting.',
      'Collaborated on backend business logic for transaction processing and performance tracking.',
    ],
  },
  {
    role: 'Operations Intern',
    org: 'Kartgen Infotech LLP',
    date: 'Apr 2025 – Jul 2025',
    tag: 'Operations',
    points: [
      'Supported business development and operations during a three-month remote internship.',
      'Handled process coordination, stakeholder communication and workflow management.',
    ],
  },
];

export const education = [
  { school: 'VNR Vignana Jyothi Institute of Engineering & Technology', degree: 'B.Tech, CSE (IoT)', date: '2023 – Present', score: 'CGPA 8.92 / 10' },
  { school: 'Sri Chaitanya Junior College', degree: 'Intermediate, Telangana State Board', date: '2021 – 2023', score: '97.4%' },
  { school: 'Bharatiya Vidya Bhavan’s Public School', degree: 'High School, CBSE', date: '2021', score: 'GPA 9.38 / 10' },
];

// cat: used by the project filter. icon: key into ICONS in main.js.
export const projects = [
  {
    title: 'Smart AI Wheelchair',
    kicker: 'IoT + Edge AI',
    date: 'Jan 2026',
    cat: ['iot', 'ai'],
    icon: 'wheel',
    image: images.wheelchair,
    featured: true,
    body: 'A wheelchair that sees. Vision-based obstacle detection triggers automatic braking, while GPS geofencing and caregiver alerts keep the rider safe beyond line of sight.',
    tags: ['Computer Vision', 'Sensor Fusion', 'IMU', 'GPS Geofencing', 'Edge Inference'],
    links: [],
  },
  {
    title: 'Auralyn',
    kicker: 'IoT + AI + Healthcare',
    date: '2025 – Ongoing',
    cat: ['iot', 'ai'],
    icon: 'pulse',
    image: images.auralyn,
    featured: true,
    body: 'A wearable emotional-wellness ecosystem. Biometric sensing on an ESP32-S3 streams over BLE into AI mood analysis, with separate views for patients, therapists and family.',
    tags: ['ESP32-S3', 'BLE', 'Biometrics', 'Mood AI', 'TypeScript'],
    links: [{ label: 'GitHub', url: 'https://github.com/Ananyapenumudi/auralyn' }],
  },
  {
    title: 'Elementium AI',
    kicker: '3D Web + AI · EdTech',
    date: '2026',
    cat: ['ai', 'web'],
    icon: 'atom',
    image: images.elLab,
    gallery: [images.elLab, images.elTutor, images.elDashboard, images.elPh, images.elViva, images.elNotebook],
    featured: true,
    body: 'An intelligent virtual chemistry lab. Explore a 360° 3D lab, drag apparatus onto the bench and run a real-time titration with colour-change chemistry, guided by a Gemini-powered AI tutor that catches your mistakes.',
    tags: ['React Three Fiber', 'Three.js', 'FastAPI', 'MongoDB Atlas', 'Gemini AI'],
    links: [{ label: 'GitHub', url: 'https://github.com/Ananyapenumudi/elementium' }],
  },
  {
    title: 'KAVACH: Beyond Collision Prevention',
    kicker: 'Research Thesis · Systems Engineering',
    date: 'Jun 2026',
    cat: ['systems'],
    icon: 'rail',
    image: images.kavach,
    featured: true,
    body: 'A systems-engineering analysis of India’s indigenous Automatic Train Protection system: architecture, operational modes, communication framework and functional safety, written under industry guidance from BHEL. Comes with an interactive mode simulator and a digital twin.',
    tags: ['Functional Safety', 'System Architecture', 'V&V', 'Requirements Traceability'],
    links: [
      { label: 'Mode Simulator', url: 'https://github.com/Ananyapenumudi/kavach-mode-simulator' },
      { label: 'Digital Twin', url: 'https://github.com/Ananyapenumudi/KAVACH-Digital-Twin' },
    ],
  },
  {
    title: 'Syncope',
    kicker: 'Wearable IoT',
    date: 'Aug 2025',
    cat: ['iot'],
    icon: 'fall',
    image: images.syncope,
    body: 'A wearable fall-detection system. Motion sensors classify falls in real time and automatically alert caregivers.',
    tags: ['Accelerometer', 'Arduino', 'GSM Alerts'],
    links: [],
  },
  {
    title: 'AI-Enhanced Secure Data Wiping',
    kicker: 'AI + Cybersecurity',
    date: 'Nov 2025',
    cat: ['ai', 'systems'],
    icon: 'shield',
    image: images.wipe,
    body: 'A secure data-sanitisation platform with cryptographic verification of every wipe and AI-based anomaly detection.',
    tags: ['Cryptography', 'Anomaly Detection', 'Security'],
    links: [],
  },
  {
    title: 'FocusFlow',
    kicker: 'AI + Web',
    date: 'Apr 2025',
    cat: ['ai', 'web'],
    icon: 'focus',
    image: images.focusflow,
    body: 'An ADHD-friendly productivity platform with mood tracking, journaling, facial-expression analysis and gamified focus tools.',
    tags: ['React', 'Express', 'Facial Expression AI'],
    links: [],
  },
  {
    title: 'Ideavoid',
    kicker: 'Web Platform',
    date: 'Nov 2024',
    cat: ['web'],
    icon: 'bulb',
    image: images.ideavoid,
    body: 'A startup-idea validation platform for peer feedback and market-viability assessment.',
    tags: ['Full-stack', 'Product'],
    links: [],
  },
];

export const skillGroups = [
  { name: 'IoT & Embedded', items: ['Arduino', 'ESP32', 'SPI', 'I2C', 'PWM', 'GPS', 'GSM', 'Accelerometer', 'BLE', 'Sensor Fusion'] },
  { name: 'AI & Vision', items: ['Computer Vision', 'Edge Inference', 'Mood Detection', 'Anomaly Detection'] },
  { name: 'Systems Engineering', items: ['Requirements Analysis', 'Functional Safety', 'Verification & Validation', 'System Architecture', 'Traceability', 'Safety-Critical Systems'] },
  { name: 'Languages', items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'R', 'HTML', 'CSS', 'DSA'] },
  { name: 'Data & Cloud', items: ['SQL', 'MySQL', 'MongoDB', 'AWS', 'Tableau', 'Data Visualization'] },
  { name: 'Design & Tools', items: ['Figma', 'AutoCAD', 'StarUML', 'MS Excel', 'DevOps / CI'] },
];

export const certifications = [
  { title: 'DevOps with Real-Time Practical Exposure', org: 'Brainovision · AICTE approved · VNRVJIET', date: 'Jul – Nov 2025' },
  { title: 'Tableau Certified Data Analyst Training', org: 'Udemy · 59 hours', date: 'Jun 2024' },
  { title: 'RoboJAM Robotics Workshop', org: 'VNRVJIET · Convergence 2K23', date: 'Dec 2023' },
];

export const activities = [
  { year: '2025', title: 'Smart India Hackathon', desc: 'Solution design, prototyping & technical documentation' },
  { year: '2025', title: '24-hour Hackathon · Convergence', desc: 'VNRVJIET' },
  { year: '2025', title: 'National Conclave', desc: 'CBIT' },
  { year: '2024', title: '24-hour Hackathon · DEMUX', desc: 'BVRIT' },
  { year: '2023', title: 'IDEATHON 2023, 2nd Prize', desc: 'VNRVJIET', highlight: true },
];

export const memberships = [
  { title: 'Computer Society of India (CSI)', desc: 'VNRVJIET chapter: organising workshops, coding events & inter-college competitions' },
  { title: 'Art of Living Cultural Club', desc: 'Organising college events and volunteering' },
];

export const languages = ['English', 'Hindi', 'Telugu'];

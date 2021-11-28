const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'PN',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Praveen Naik',
  role: 'Full stack developer',
  description:
    'Motivated Programmer with exceptional background spent in Competitive Programming and Web development. Quickly mastering new software technologies. Logical and professional with excellent problem-solving skills and good communication skills.',
  resume: 'https://drive.google.com/file/d/1A922TOhknkUyxILr2RU7QWuhRdXnkFB7/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/praveen-naik-b51102173',
    github: 'https://github.com/Praveennaik8',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Smart Crawl',
    description:
      'Built a domain-specific crawler that learns the web with time by storing the context of the pages visited. Reduced the average crawling time by more than 20 times. The system could retrieve web pages related to user queries in the given domain.',
    stack: ['Python', 'BeautifulSoup', 'NLP'],
    // sourceCode: 'https://github.com/smartCrawlProject',
    livePreview: 'https://drive.google.com/file/d/1x4SNWdpFVRUQT2vD4ifmibGhYxkOvP1K/view?usp=sharing',
  },
  {
    name: 'DreamTeam Fantasy website',
    description:
      'Led a team of four for building a fantasy game website using MEAN stack. This web application lets users create dream team of different kind of sports with secure login and attractive user interface.',
    stack: ['MongoDB', 'Express', 'Angular','Node.js'],
    sourceCode: 'https://github.com/Praveennaik8/Dream-Team-clone',
    livePreview: 'https://praveennaik8.github.io/Frontend/',
  },
  {
    name: 'Maze Runner Game',
    description:
      'Developed a desktop maze game which has multiple levels in increasing order of difficulty using Java. Built a countdown timer to maintain difficulty for each level. Automated the fastest route finding using Dijkstra’s Algorithm.',
    stack: ['Java', 'Java-swing', 'Dijkstras algorithm'],
    sourceCode: 'https://github.com/Praveennaik8/Maze-game-Java-with-path-finding',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Django',
  'Angular',
  'MongoDb',
  'Rdbms',
  "Python", 
  'C/C++', 
  'Java', 
  'Javascript',
  'AWS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'praveennaik8887@gmail.com',
}

export { header, about, projects, skills, contact }

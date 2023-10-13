export const headerData = [
  {
    color: '#E7E2CA',
    route: '/',
    text: 'Home',
    anchor: false,
    id: 0,
  },
  {
    color: '#CADEE7',
    route: '/about',
    text: 'About',
    anchor: false,
    id: 1,
  },
  {
    color: '#CAE7D4',
    route: '/resume',
    text: 'Resume',
    anchor: false,
    id: 2,
  },
  {
    color: '#E7D4CA',
    route: 'https://mikebarberry.medium.com/',
    text: 'Blog',
    anchor: true,
    id: 3,
  },
  {
    color: '#E7CADE',
    route: '/contact',
    text: 'Contact',
    anchor: false,
    id: 4,
  },
];

export const cardData = [
  {
    color: 'pink.500',
    tech: 'Python, NLP, Scikit-learn, HTML/JS, AWS',
    proj: 'Impact Analysis Scatter Plots',
    pic: '/scatterplots.png',
    desc: 'Used Python and NLP to create scatter plots from NIH grant data to gain insight into how the grants relate to one another. (Output from one combination of algorithms is shown.) Built a website and put it on the Internet to share results with the team.',
  },
  {
    color: 'teal.500',
    tech: 'Node.js, Puppeteer',
    proj: 'ANDI Automation Tool',
    pic: '/andi.png',
    desc: 'Built a custom software program to automate gathering accessibility alerts from website pages to ultimately improve access for people with disabilities. Outputs a pretty PDF report, highlighted screenshots and a developer log.',
  },
  {
    color: 'red.500',
    tech: 'Node.js, React.js, HiPlot, AWS S3',
    proj: 'Impact Analysis Parallel Coordinates',
    desc: 'Built a parallel coordinates chart from NIH data to demonstrate how grant funding affects research output. Performed pre-processing on multiple data files to sanitize and combine. Put it on the Internet to share with stakeholders.',
    pic: '/parall-coords.png',
  },
  {
    color: 'yellow.500',
    tech: 'React.js, JavaScript, HTML/CSS',
    proj: 'CEIRR Data Search',
    desc: 'Recreated an implementation of a data search webpage after identifying old code could not be moved and extended as originally thought. Built the entire front end (what you see when you visit the page) and some data fetching logic. It is hidden because it is a private portal for researchers.',
    pic: '/ceirr.png',
  },
  {
    color: 'blue.500',
    tech: 'Next.js, Node.js, AWS CloudFormation / ECS, Docker',
    pic: '/fluhub.png',
    desc: 'Built an entire new website for the NIH and set up making it available on the Internet. It will be accessible to the public at https://wwww.fluhub.org',
    proj: 'Flu Hub',
  },
  {
    color: 'purple.500',
    tech: 'React.js, Node.js, Express.js, MySQL',
    pic: '/peerrx.png',
    desc: 'Helped build a business to business software product that allows emergency room care providers to request and provide counseling professionals to patients in real time during a crisis.',
    proj: 'PeerRX',
  },
  {
    color: 'green.500',
    tech: 'React.js, Node.js, Express.js, MongoDB',
    pic: '/connexrx.png',
    desc: 'Helped build a business to business software product for an organization that manages behavioral health agencies to centralize patient information and coordinate transitions as patients access various resources.',
    proj: 'ConnexRX',
  },
  {
    color: 'orange.500',
    tech: 'Vue.js, PHP 7, Laravel, MySQL',
    pic: '/net.png',
    desc: 'Helped build a business to business software product for a hospital in New York state to support a program that allows various community health organizations to view and update patient activity over time.',
    proj: 'Network Engagement Tracker',
  },
];

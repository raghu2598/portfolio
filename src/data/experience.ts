export interface ExperienceEntry {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  location: string;
  technologies: string[];
  responsibilities: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: 'ltm-limited',
    title: 'Specialist Software Engineer',
    company: 'LTM Limited',
    dateRange: '03/2026 – Present',
    location: 'Bengaluru, India',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Playwright'],
    responsibilities: [
      'Develop enterprise Digital Experience applications using React.js, TypeScript, Node.js, Express.js, and MongoDB.',
      'Build reusable React.js components and contribute to microfrontend architecture for modular web applications.',
      'Design and integrate REST APIs and backend services supporting frontend and business workflows.',
      'Develop Playwright end-to-end test cases for critical user journeys, regression testing, and release validation.',
      'Improve application performance, accessibility, SEO, responsive behavior, and reliability.',
      'Collaborate with backend, QA, DevOps, and product teams on CI/CD, deployments, troubleshooting, and production improvements.',
      'Use AI-assisted development tools for debugging, refactoring, documentation, and code optimization.',
    ],
  },
  {
    id: 'comviva-technologies',
    title: 'Technical Lead',
    company: 'Comviva Technologies',
    dateRange: '09/2021 – 02/2026',
    location: 'Tunis, Tunisia',
    technologies: [
      'Node.js',
      'Express.js',
      'React Native',
      'MongoDB',
      'MySQL',
      'PWA',
      'Docker',
      'OpenShift',
      'AWS',
    ],
    responsibilities: [
      'Led backend and full-stack delivery for telecom self-care platforms supporting millions of users across Ooredoo Tunisia and MTN South Africa.',
      'Developed Node.js and Express.js services for recharge, gaming, loyalty, bundles, payments, and self-care capabilities.',
      'Built and optimized REST APIs using Node.js, React Native, MongoDB, MySQL, and Progressive Web Application technologies.',
      'Improved application performance through database tuning, API optimization, caching, and frontend performance enhancements.',
      'Managed Docker-based CI/CD workflows, OpenShift deployments, release activities, and AWS services including EC2, S3, IAM, and RDS.',
      'Reduced platform downtime by 30% through deployment improvements, monitoring, and production reliability practices.',
      'Implemented authentication, encryption, input validation, logging, and monitoring to strengthen application security and reliability.',
      'Collaborated with frontend, QA, DevOps, and product teams in Agile delivery cycles and supported production releases.',
    ],
  },
  {
    id: 'aryaan-solutions',
    title: 'Automation Developer',
    company: 'Aryaan Solutions',
    dateRange: '07/2019 – 05/2020',
    location: 'Bengaluru, India',
    technologies: ['ABBYY FlexiCapture', 'Automation Frameworks'],
    responsibilities: [
      'Developed ABBYY FlexiCapture automation workflows that reduced manual data-entry effort by 60%.',
      'Standardized automation frameworks and created reusable components across GBP, NAM, and EMEA regions.',
      'Supported developer onboarding and knowledge sharing to improve team productivity.',
    ],
  },
];

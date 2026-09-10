export interface ProjectEntry {
  id: string;
  name: string;
  tagline: string;
  description: string[];
  technologies: string[];
  highlight?: string;
  linkLabel: string;
}

export const projects: ProjectEntry[] = [
  {
    id: 'dotcom-next',
    name: 'Dotcom Next',
    tagline: 'Digital Experience Platform',
    description: [
      'Develop and enhance enterprise Digital Experience capabilities using React.js, TypeScript, Node.js, Express.js, and MongoDB.',
      'Build reusable UI components and contribute to microfrontend architecture for modular web applications.',
      'Develop and integrate REST APIs supporting frontend and business workflows.',
      'Write Playwright end-to-end test cases for critical user journeys, regression testing, and release validation.',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Playwright',
      'Microfrontend Architecture',
    ],
    linkLabel: 'Enterprise Project',
  },
  {
    id: 'ooredoo-tunisia',
    name: 'Ooredoo Tunisia',
    tagline: 'Telecom Self-Care Platform',
    description: [
      'Contributed to a high-availability mobile application supporting 2M+ users across telecom self-care services.',
      'Developed Node.js APIs for recharge, gaming, loyalty, bundles, customer self-care, and related digital services.',
      'Supported production reliability through API optimization, database tuning, caching, CI/CD, OpenShift deployments, monitoring, and release management.',
    ],
    technologies: [
      'Node.js',
      'REST APIs',
      'MongoDB',
      'React Native',
      'PWA',
      'OpenShift',
      'CI/CD',
      'Caching',
    ],
    highlight: '2M+ Users',
    linkLabel: 'Enterprise Project',
  },
  {
    id: 'mtn-south-africa',
    name: 'MTN South Africa',
    tagline: 'Telecom Self-Care Platform',
    description: [
      'Contributed to backend and mobile capabilities for a large-scale telecom self-care application serving millions of users.',
      'Worked with Node.js, React Native, REST APIs, databases, deployment workflows, and application performance optimization.',
    ],
    technologies: ['Node.js', 'React Native', 'REST APIs', 'Databases', 'Deployment', 'Performance Optimization'],
    highlight: 'Large-Scale Telecom Platform',
    linkLabel: 'Enterprise Project',
  },
];

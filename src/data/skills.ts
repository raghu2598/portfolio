export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      'React.js',
      'React Native',
      'Progressive Web Applications',
      'Microfrontend Architecture',
      'HTML5',
      'CSS3',
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Microservices', 'Authentication & Authorization'],
  },
  {
    id: 'testing',
    title: 'Testing',
    skills: ['Playwright', 'End-to-End Testing', 'Test Automation'],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'Redis'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'OpenShift', 'CI/CD'],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Jira', 'VS Code'],
  },
];

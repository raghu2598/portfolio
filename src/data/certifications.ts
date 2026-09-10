export interface Certification {
  id: string;
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { id: 'mern', name: 'Full Stack Developer (MERN)', issuer: 'Comviva Technologies' },
  { id: 'react-native-guide', name: 'React Native Practical Guide', issuer: 'Udemy' },
  { id: 'react-masterclass', name: 'React JS MasterClass', issuer: 'Udemy' },
  { id: 'web-app-dev', name: 'Web Application Development', issuer: 'Mitra Software, Shivamogga' },
];

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  dateRange: string;
}

export const education: EducationEntry[] = [
  {
    id: 'mvj',
    degree: 'Bachelor of Engineering (B.E.) in Computer Science',
    institution: 'MVJ College of Engineering, Bengaluru',
    dateRange: '2016 – 2019',
  },
];

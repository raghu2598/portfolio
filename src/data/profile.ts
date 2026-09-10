export interface Profile {
  name: string;
  headline: string;
  location: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  yearsOfExperience: string;
  summary: string;
  resumeUrl: string;
  profileImageUrl: string;
}

export const profile: Profile = {
  name: 'Raghavendra D C',
  headline: 'Full-Stack Software Engineer | React.js | TypeScript | Node.js | Playwright',
  location: 'Bengaluru, India',
  email: 'raghavendradcdc@gmail.com',
  linkedin: 'linkedin.com/in/raghavendra-dc-761414181',
  linkedinUrl: 'https://linkedin.com/in/raghavendra-dc-761414181',
  github: 'github.com/raghu2598',
  githubUrl: 'https://github.com/raghu2598',
  yearsOfExperience: '5.5+',
  summary:
    'Full-Stack Software Engineer with 5.5+ years of experience building scalable enterprise web, mobile, and telecom applications. Strong hands-on experience with React.js, TypeScript, Node.js, Express.js, MongoDB, REST APIs, React Native, Playwright, AWS, Docker, OpenShift, and CI/CD. Experienced in production delivery, performance optimization, and microfrontend architecture.',
  resumeUrl: '/resume/Raghavendra_DC_Resume.pdf',
  profileImageUrl: '/images/profile.jpg',
};

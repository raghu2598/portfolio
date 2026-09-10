import { Boxes, Code2, Gauge, Server } from 'lucide-react';
import { profile } from '../data/profile';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'React.js, TypeScript, and Node.js/Express.js across the entire application stack.',
  },
  {
    icon: Server,
    title: 'Enterprise Applications',
    description: 'REST APIs and MongoDB-backed services for enterprise Digital Experience platforms.',
  },
  {
    icon: Boxes,
    title: 'Microfrontend Architecture',
    description: 'Reusable, modular React components built for scalable microfrontend systems.',
  },
  {
    icon: Gauge,
    title: 'Quality & Performance',
    description: 'Playwright end-to-end testing, cloud/DevOps delivery, and production performance tuning.',
  },
];

function About() {
  return (
    <section id="about" className="section">
      <p className="section-eyebrow">About Me</p>
      <h2 className="section-heading mt-2">
        {profile.yearsOfExperience} years of building production software
      </h2>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600">{profile.summary}</p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(({ icon: Icon, title, description }) => (
          <div key={title} className="card p-6">
            <Icon className="h-8 w-8 text-brand-600" aria-hidden="true" />
            <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;

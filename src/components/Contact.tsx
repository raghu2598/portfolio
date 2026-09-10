import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/profile';

function Contact() {
  return (
    <section id="contact" className="section">
      <p className="section-eyebrow">Contact</p>
      <h2 className="section-heading mt-2">Let&apos;s work together</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
        I&apos;m open to new opportunities and conversations. Feel free to reach out by email,
        connect with me on LinkedIn, or browse my work on GitHub.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <a
          href={`mailto:${profile.email}`}
          className="card flex flex-col items-start gap-3 p-6 hover:border-brand-300"
        >
          <Mail className="h-6 w-6 text-brand-600" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-slate-900">Email</p>
            <p className="mt-1 text-sm text-slate-600">{profile.email}</p>
          </div>
        </a>

        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="card flex flex-col items-start gap-3 p-6 hover:border-brand-300"
        >
          <Linkedin className="h-6 w-6 text-brand-600" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-slate-900">LinkedIn</p>
            <p className="mt-1 text-sm text-slate-600">{profile.linkedin}</p>
          </div>
        </a>

        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="card flex flex-col items-start gap-3 p-6 hover:border-brand-300"
        >
          <Github className="h-6 w-6 text-brand-600" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-slate-900">GitHub</p>
            <p className="mt-1 text-sm text-slate-600">{profile.github}</p>
          </div>
        </a>

        <div className="card flex flex-col items-start gap-3 p-6">
          <MapPin className="h-6 w-6 text-brand-600" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-slate-900">Location</p>
            <p className="mt-1 text-sm text-slate-600">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

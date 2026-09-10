import { useState } from 'react';
import { Download, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

function Hero() {
  const [imageError, setImageError] = useState(false);
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('');

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white"
    >
      <div className="section flex flex-col-reverse items-center gap-12 py-24 md:flex-row md:py-32">
        <div className="animate-fadeInUp text-center md:w-3/5 md:text-left">
          <p className="section-eyebrow">Full-Stack Software Engineer</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">{profile.name}</h1>
          <p className="mt-4 text-lg font-medium text-slate-600 sm:text-xl">{profile.headline}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:mx-0">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="btn-secondary"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 md:justify-start">
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-600"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-600"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              {profile.email}
            </a>
          </div>
        </div>

        <div className="animate-fadeInUp md:w-2/5">
          <div className="mx-auto h-56 w-56 overflow-hidden rounded-full border-4 border-white bg-brand-100 shadow-xl sm:h-72 sm:w-72">
            {imageError ? (
              <div
                role="img"
                aria-label={`${profile.name} profile placeholder`}
                className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700 text-5xl font-bold text-white"
              >
                {initials}
              </div>
            ) : (
              <img
                src={profile.profileImageUrl}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full object-cover"
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

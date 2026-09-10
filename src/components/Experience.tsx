import { MapPin } from 'lucide-react';
import { experience } from '../data/experience';

function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-eyebrow">Experience</p>
      <h2 className="section-heading mt-2">Professional Experience</h2>

      <ol className="mt-12 space-y-10 border-l-2 border-slate-200 pl-8">
        {experience.map((entry) => (
          <li key={entry.id} className="relative">
            <span
              className="absolute -left-[2.35rem] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-brand-600 shadow"
              aria-hidden="true"
            />
            <div className="card p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <h3 className="text-lg font-semibold text-slate-900">{entry.title}</h3>
                <span className="text-sm font-medium text-brand-600">{entry.dateRange}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-slate-600">{entry.company}</p>
              <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {entry.location}
              </p>

              <ul className="mt-4 space-y-2">
                {entry.responsibilities.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2">
                {entry.technologies.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;

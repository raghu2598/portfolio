import { GraduationCap } from 'lucide-react';
import { education } from '../data/certifications';

function Education() {
  return (
    <section id="education" className="section">
      <p className="section-eyebrow">Education</p>
      <h2 className="section-heading mt-2">Academic Background</h2>

      <div className="mt-10 space-y-6">
        {education.map((entry) => (
          <div key={entry.id} className="card flex flex-col gap-3 p-6 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50">
              <GraduationCap className="h-6 w-6 text-brand-600" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">{entry.degree}</h3>
              <p className="mt-1 text-sm text-slate-600">{entry.institution}</p>
              <p className="mt-1 text-sm font-medium text-brand-600">{entry.dateRange}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

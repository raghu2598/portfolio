import { Award } from 'lucide-react';
import { certifications } from '../data/certifications';

function Certifications() {
  return (
    <section id="certifications" className="section bg-slate-50/60">
      <p className="section-eyebrow">Certifications</p>
      <h2 className="section-heading mt-2">Continued Learning</h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div key={cert.id} className="card flex items-start gap-4 p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50">
              <Award className="h-5 w-5 text-brand-600" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">{cert.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;

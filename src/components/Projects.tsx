import { Briefcase } from 'lucide-react';
import { projects } from '../data/projects';

function Projects() {
  return (
    <section id="projects" className="section bg-slate-50/60">
      <p className="section-eyebrow">Key Projects</p>
      <h2 className="section-heading mt-2">Selected Work</h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className="card flex h-full flex-col p-6">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
              {project.highlight && (
                <span className="tag whitespace-nowrap">{project.highlight}</span>
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-brand-600">{project.tagline}</p>

            <ul className="mt-4 space-y-2">
              {project.description.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-slate-600">
                  {item}
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-slate-500">
              <Briefcase className="h-4 w-4" aria-hidden="true" />
              {project.linkLabel}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

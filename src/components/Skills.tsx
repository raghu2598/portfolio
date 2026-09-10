import { skillCategories } from '../data/skills';

function Skills() {
  return (
    <section id="skills" className="section bg-slate-50/60">
      <p className="section-eyebrow">Skills</p>
      <h2 className="section-heading mt-2">Technologies I work with</h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.id} className="card p-6">
            <h3 className="text-base font-semibold text-slate-900">{category.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill} className="tag">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

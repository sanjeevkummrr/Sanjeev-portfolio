const skillGroups = [
  {
    number: "01",
    title: "Infrastructure",
    skills: [
      "Infrastructure Operations",
      "Production Support",
      "Infrastructure Monitoring",
      "Troubleshooting",
      "Performance Monitoring",
      "Windows Server Basics",
    ],
  },
  {
    number: "02",
    title: "IT Operations",
    skills: [
      "Incident Management",
      "Critical Incident Management",
      "Change Management",
      "SLA Management",
      "Escalation Management",
      "Stakeholder Communication",
    ],
  },
  {
    number: "03",
    title: "Tools",
    skills: [
      "ServiceNow",
      "Moogsoft",
      "GitHub",
      "GitHub Actions",
      "GitHub Pages",
    ],
  },
  {
    number: "04",
    title: "Development",
    skills: ["Next.js", "React", "TypeScript", "CSS", "Git"],
  },
];

export default function SkillsPage() {
  return (
    <main className="inner-page skills-page">
      <section className="page-header">
        <span className="page-eyebrow">04 / SKILLS</span>

        <h1>
          Technical
          <br />
          <span>Skills.</span>
        </h1>

        <p>
          Technologies, tools and professional capabilities I use across
          infrastructure and development.
        </p>
      </section>

      <section className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.number}>
            <div className="skill-card-top">
              <span>{group.number}</span>
              <span>SKILLS</span>
            </div>

            <h2>{group.title}</h2>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill}>
                  <span>{skill}</span>
                  <span>↗</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

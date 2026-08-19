const projects = [
  {
    number: "01",
    title: "Personal Portfolio",
    description:
      "Interactive personal portfolio showcasing infrastructure support experience, technical skills and professional journey.",
    tech: ["Next.js", "React", "TypeScript"],
    github: "https://github.com/sanjeevkummrr/Sanjeev-portfolio",
    live: "https://sanjeevkummrr.github.io/Sanjeev-portfolio/",
  },
  {
    number: "02",
    title: "Canteen Management System",
    description:
      "Academic application covering menu management, order processing, billing and report generation.",
    tech: ["Web Application", "Database", "Management System"],
    github: "#",
    live: "#",
  },
  {
    number: "03",
    title: "Birthday Celebration Website",
    description:
      "Creative responsive birthday website featuring personalized messages, animations, background music and custom visuals.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sanjeevkummrr/happiebirthdayy",
    live: "https://sanjeevkummrr.github.io/happiebirthdayy/",
  },
];

export default function ProjectsPage() {
  return (
    <main className="inner-page projects-page">

      {/* PROJECTS HEADER */}

      <section className="page-header">
        <span className="page-eyebrow">03 / PROJECTS</span>

        <h1>
          Selected
          <br />
          <span>Work.</span>
        </h1>

        <p>
          A collection of professional work, experiments and technical
          projects.
        </p>
      </section>


      {/* PROJECT CARDS */}

      <section className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>

            <div className="project-top">
              <span>{project.number}</span>
              <span>PROJECT</span>
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="project-bottom">

              {project.github !== "#" ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB ↗
                </a>
              ) : (
                <span>ACADEMIC PROJECT</span>
              )}

              {project.live !== "#" ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  LIVE ↗
                </a>
              ) : null}

            </div>

          </article>
        ))}
      </section>


      {/* FUTURE PROJECTS */}

      <section className="future-projects">

        <div className="future-heading">
          <span className="page-eyebrow">
            04 / WHAT&apos;S NEXT
          </span>

          <h2>
            Future <span>Projects.</span>
          </h2>
        </div>


        <div className="future-grid">

          <article className="future-card">
            <span>01</span>

            <div>
              <h3>Linux Infrastructure Lab</h3>

              <p>
                Practical Linux server administration,
                monitoring and troubleshooting project.
              </p>
            </div>

            <small>PLANNED / LINUX</small>
          </article>


          <article className="future-card">
            <span>02</span>

            <div>
              <h3>AWS Monitoring Dashboard</h3>

              <p>
                Cloud infrastructure monitoring and
                alerting dashboard using AWS.
              </p>
            </div>

            <small>PLANNED / AWS</small>
          </article>


          <article className="future-card">
            <span>03</span>

            <div>
              <h3>Incident Management Dashboard</h3>

              <p>
                Dashboard for incident tracking,
                SLA monitoring and escalation status.
              </p>
            </div>

            <small>PLANNED / ITSM</small>
          </article>

        </div>

      </section>

    </main>
  );
}

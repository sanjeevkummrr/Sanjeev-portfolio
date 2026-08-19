export default function ExperiencePage() {
  return (
    <main className="inner-page experience-page">
      <section className="page-header">
        <span className="page-eyebrow">02 / EXPERIENCE</span>

        <h1>
          Work
          <br />
          <span>Experience.</span>
        </h1>

        <p>
          My professional journey in infrastructure, production support and
          critical incident management.
        </p>
      </section>

      <section className="timeline">
        <div className="timeline-line" />

        <article className="timeline-item">
          <div className="timeline-dot" />

          <div className="timeline-date">
            SEP 2023 — PRESENT
          </div>

          <div className="experience-card">
            <div className="experience-top">
              <span>01</span>
              <span>HCL TECHNOLOGIES</span>
            </div>

            <h2>Infrastructure Support Engineer</h2>

            <p className="experience-intro">
              Infrastructure and Production Support
            </p>

            <div className="responsibilities">
              <div>
                <strong>01</strong>
                <p>24x7 production infrastructure monitoring</p>
              </div>

              <div>
                <strong>02</strong>
                <p>Critical Incident Management for P1/P2 incidents</p>
              </div>

              <div>
                <strong>03</strong>
                <p>Moogsoft event correlation and alert monitoring</p>
              </div>

              <div>
                <strong>04</strong>
                <p>ServiceNow incident management</p>
              </div>

              <div>
                <strong>05</strong>
                <p>Change and escalation management</p>
              </div>

              <div>
                <strong>06</strong>
                <p>Infrastructure health and performance monitoring</p>
              </div>

              <div>
                <strong>07</strong>
                <p>SLA-driven incident response</p>
              </div>

              <div>
                <strong>08</strong>
                <p>Backup and Disaster Recovery support</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

import GlassHero from "@/components/glass-hero";

export default function Home() {
  return (
    <main>
      {/* HOME */}
      <section id="home">
        <GlassHero />
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-section">
        <div className="section-container">
          <span className="page-eyebrow">01 / ABOUT</span>

          <h2>
            About
            <br />
            <span>Me.</span>
          </h2>

          <p>
            I&apos;m Sanjeev Kumar, an Infrastructure Support Engineer from
            Varanasi, Uttar Pradesh, working in infrastructure and production
            support.
          </p>

          <p>
            My experience includes 24x7 monitoring, Incident Management,
            Critical Incident Management, Change Management, Moogsoft and
            ServiceNow.
          </p>

          <div className="about-meta">
            <div>
              <small>ORIGIN</small>
              <strong>VARANASI, INDIA</strong>
            </div>

            <div>
              <small>CURRENT FOCUS</small>
              <strong>INFRASTRUCTURE / CLOUD / AUTOMATION</strong>
            </div>

            <div>
              <small>EDUCATION</small>
              <strong>MCA — IGNOU</strong>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="scroll-section">
        <div className="section-container">
          <span className="page-eyebrow">02 / EXPERIENCE</span>

          <h2>
            Work
            <br />
            <span>Experience.</span>
          </h2>

          <div className="scroll-experience-card">
            <div>
              <small>SEP 2023 — PRESENT</small>
              <h3>HCL Technologies</h3>
              <p>Infrastructure Support / Production Support</p>
            </div>

            <ul>
              <li>24x7 production infrastructure monitoring</li>
              <li>P1/P2 Critical Incident Management</li>
              <li>Moogsoft event correlation</li>
              <li>ServiceNow incident management</li>
              <li>Change and escalation management</li>
              <li>Infrastructure health and performance monitoring</li>
              <li>Backup and Disaster Recovery support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-section">
        <div className="section-container">
          <span className="page-eyebrow">03 / PROJECTS</span>

          <h2>
            Selected
            <br />
            <span>Work.</span>
          </h2>

          <div className="scroll-projects">
            <article className="scroll-project-card">
              <span>01 / PORTFOLIO</span>
              <h3>Personal Portfolio</h3>
              <p>Next.js / React / TypeScript</p>
            </article>

            <article className="scroll-project-card">
              <span>02 / ACADEMIC</span>
              <h3>Canteen Management System</h3>
              <p>Web Application / Database</p>
            </article>

            <article className="scroll-project-card">
              <span>03 / CREATIVE</span>
              <h3>Birthday Celebration Website</h3>
              <p>HTML / CSS / JavaScript</p>
            </article>
          </div>

          <div className="future-scroll-block">
            <span className="page-eyebrow">04 / WHAT&apos;S NEXT</span>

            <h3>Future Projects.</h3>

            <div className="future-scroll-grid">
              <div className="future-scroll-card">
                <span>01</span>
                <strong>Linux Infrastructure Lab</strong>
                <small>PLANNED / LINUX</small>
              </div>

              <div className="future-scroll-card">
                <span>02</span>
                <strong>AWS Monitoring Dashboard</strong>
                <small>PLANNED / AWS</small>
              </div>

              <div className="future-scroll-card">
                <span>03</span>
                <strong>Incident Management Dashboard</strong>
                <small>PLANNED / ITSM</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-section">
        <div className="section-container">
          <span className="page-eyebrow">05 / SKILLS</span>

          <h2>
            Technical
            <br />
            <span>Skills.</span>
          </h2>

          <div className="scroll-skills">
            <span>Infrastructure Operations</span>
            <span>Production Support</span>
            <span>Incident Management</span>
            <span>Critical Incident Management</span>
            <span>Change Management</span>
            <span>SLA Management</span>
            <span>ServiceNow</span>
            <span>Moogsoft</span>
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>GitHub</span>
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="scroll-section">
        <div className="section-container">
          <span className="page-eyebrow">06 / RESUME</span>

          <h2>
            My
            <br />
            <span>Resume.</span>
          </h2>

          <p>
            View my complete professional resume including experience,
            achievements, education and certifications.
          </p>

          <a
            href="/Sanjeev-portfolio/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="section-button"
          >
            OPEN RESUME ↗
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-section contact-scroll-section">
        <div className="section-container">
          <span className="page-eyebrow">07 / CONTACT</span>

          <h2>
            Let&apos;s
            <br />
            <span>Connect.</span>
          </h2>

          <p>
            Open to opportunities, collaborations and interesting technical
            projects.
          </p>

          <div className="scroll-contact-links">
            <a href="mailto:snkumar3122000@gmail.com">EMAIL ↗</a>

            <a
              href="https://www.linkedin.com/in/sanjeevkummrr"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>

            <a
              href="https://github.com/sanjeevkummrr"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

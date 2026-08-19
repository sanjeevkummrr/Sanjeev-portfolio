export default function ResumePage() {
  return (
    <main className="inner-page resume-page">
      <section className="page-header resume-header">
        <span className="page-eyebrow">05 / RESUME</span>

        <h1>
          My
          <br />
          <span>Resume.</span>
        </h1>

        <a
          className="resume-download"
          href="/Sanjeev-portfolio/resume.pdf"
          download
        >
          DOWNLOAD RESUME ↓
        </a>
      </section>

      <section className="resume-sheet">
        <div className="resume-heading">
          <div>
            <h2>Sanjeev Kumar</h2>
            <p>Infrastructure Support Engineer</p>
          </div>

          <span>2026</span>
        </div>

        <div className="resume-section">
          <span className="resume-label">PROFILE</span>

          <p>
            Infrastructure and Production Support professional with nearly
            3 years of experience supporting physical and virtual
            infrastructure in production environments.
          </p>
        </div>

        <div className="resume-section">
          <span className="resume-label">EXPERIENCE</span>

          <div className="resume-entry">
            <div>
              <strong>HCL Technologies</strong>
              <small>Infrastructure / Production Support</small>
            </div>

            <span>SEP 2023 — PRESENT</span>
          </div>

          <ul>
            <li>24x7 production infrastructure monitoring</li>
            <li>Critical Incident Management for P1/P2 incidents</li>
            <li>Moogsoft event correlation and alert monitoring</li>
            <li>ServiceNow incident management</li>
            <li>Change and escalation management</li>
            <li>SLA-driven incident response</li>
          </ul>
        </div>

        <div className="resume-section">
          <span className="resume-label">EDUCATION</span>

          <div className="resume-entry">
            <div>
              <strong>Master of Computer Applications</strong>
              <small>IGNOU</small>
            </div>

            <span>2024 — 2026</span>
          </div>

          <div className="resume-entry">
            <div>
              <strong>Bachelor of Computer Applications</strong>
              <small>Rajarshi School of Management and Technology</small>
            </div>

            <span>2019 — 2022</span>
          </div>
        </div>
      </section>
    </main>
  );
}

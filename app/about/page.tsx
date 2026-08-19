export default function AboutPage() {
  return (
    <main className="inner-page about-page">
      <section className="page-header">
        <span className="page-eyebrow">01 / ABOUT</span>

        <h1>
          About
          <br />
          <span>Me.</span>
        </h1>

        <p>
          Infrastructure and Production Support professional focused on
          maintaining reliable, stable and high-performing IT environments.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-card about-main">
          <span className="card-number">01</span>

          <h2>Who I Am</h2>

          <p>
            I&apos;m Sanjeev Kumar, an Infrastructure Support Engineer at HCL
            Technologies with nearly 3 years of experience in infrastructure
            and production support.
          </p>

          <p>
            My work involves 24x7 infrastructure monitoring, Incident
            Management, Critical Incident Management, Change Management and
            SLA-driven operations.
          </p>
        </div>

        <div className="about-card">
          <span className="card-number">02</span>

          <h2>What I Do</h2>

          <ul>
            <li>Production Infrastructure Monitoring</li>
            <li>Critical Incident Management</li>
            <li>ServiceNow Incident Management</li>
            <li>Moogsoft Monitoring</li>
            <li>Change & Escalation Management</li>
            <li>Infrastructure Troubleshooting</li>
          </ul>
        </div>

        <div className="about-card">
          <span className="card-number">03</span>

          <h2>Currently</h2>

          <p>
            Working at <strong>HCL Technologies</strong> as an Infrastructure /
            Production Support professional.
          </p>

          <p>
            Also pursuing my <strong>MCA from IGNOU</strong>.
          </p>
        </div>

        <div className="about-card about-highlight">
          <span className="card-number">04</span>

          <h2>My Approach</h2>

          <p>
            Monitor. Troubleshoot. Communicate. Resolve.
          </p>

          <span className="highlight-line" />
        </div>
      </section>
    </main>
  );
}

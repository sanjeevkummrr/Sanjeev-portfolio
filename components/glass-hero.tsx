"use client";

import { useState } from "react";

export default function GlassHero() {
  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
    active: false,
  });

  return (
    <main
      className="hero"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setMouse({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
          active: true,
        });
      }}
      onMouseLeave={() => {
        setMouse((prev) => ({
          ...prev,
          active: false,
        }));
      }}
    >
      {/* Base portrait */}
      <div className="portrait portrait-base" />

      {/* Smooth liquid-glass reveal */}
      <div
        className={`portrait portrait-reveal ${
          mouse.active ? "reveal-active" : ""
        }`}
        style={
          {
            "--mouse-x": `${mouse.x}%`,
            "--mouse-y": `${mouse.y}%`,
          } as React.CSSProperties
        }
      />

      <div className="technical-circle" />

      {/* Top left */}
      <div className="top-meta">
        <span className="dot" />
        <span>SK</span>
        <span>/</span>
        <span>2026</span>
      </div>

      {/* LinkedIn */}
      <a
        className="top-link"
        href="https://www.linkedin.com/in/sanjeevkummrr"
        target="_blank"
        rel="noreferrer"
      >
        LINKEDIN <span>↗</span>
      </a>

      {/* Main content */}
      <section className="hero-content">
        <div className="eyebrow">
          <span />
          INFRASTRUCTURE / PRODUCTION SUPPORT
        </div>

        <h1>
          Sanjeev
          <br />
          Kumar<span>.</span>
        </h1>

        <h2>Infrastructure Support Engineer</h2>

        <p>
          Infrastructure and Production Support professional with nearly 3
          years of experience supporting physical and virtual infrastructure
          in production environments.
        </p>

        <div className="bottom-info">
          <a href="mailto:sanjeevkumar@example.com" className="connect-button">
            LET&apos;S CONNECT <span>→</span>
          </a>

          <div className="experience">
            <div className="briefcase">▣</div>

            <div>
              <strong>HCL TECHNOLOGIES</strong>
              <small>SEP 2023 — PRESENT</small>
            </div>
          </div>
        </div>
      </section>

      {/* Social links */}
<aside className="social-links">

  {/* Instagram */}
  <a
    href="https://www.instagram.com/sanjeevkummrr"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <strong className="social-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" className="fill-dot" />
      </svg>
    </strong>
    <span>INSTAGRAM</span>
  </a>

  <i />

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/sanjeevkummrr"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <strong className="social-icon linkedin-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 10v7" />
        <path d="M7 7.5v.01" />
        <path d="M11 17v-4c0-2 1-3 2.5-3s2.5 1 2.5 3v4" />
        <path d="M11 13c0-2 1-3 2.5-3" />
      </svg>
    </strong>
    <span>LINKEDIN</span>
  </a>

  <i />

  {/* GitHub */}
  <a
    href="https://github.com/sanjeevkummrr"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <strong className="social-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z"
        />
      </svg>
    </strong>
    <span>GITHUB</span>
  </a>

  <i />

  {/* X / Twitter */}
  <a
    href="https://x.com/sanjeevkummrr"
    target="_blank"
    rel="noreferrer"
    aria-label="X / Twitter"
  >
    <strong className="social-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4l14 16" />
        <path d="M19 4L5 20" />
      </svg>
    </strong>
    <span>X / TWITTER</span>
  </a>

</aside>

      <div className="reveal-hint">◉ MOVE TO REVEAL</div>
    </main>
  );
}

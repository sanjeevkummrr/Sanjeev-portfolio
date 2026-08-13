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
        <a
          href="https://www.instagram.com/sanjeevkummrr"
          target="_blank"
          rel="noreferrer"
        >
          <strong>◎</strong>
          <span>INSTAGRAM</span>
        </a>

        <i />

        <a
          href="https://www.linkedin.com/in/sanjeevkummrr"
          target="_blank"
          rel="noreferrer"
        >
          <strong>in</strong>
          <span>LINKEDIN</span>
        </a>

        <i />

        <a
          href="https://github.com/sanjeevkummrr"
          target="_blank"
          rel="noreferrer"
        >
          <strong>◉</strong>
          <span>GITHUB</span>
        </a>

        <i />

        <a
          href="https://x.com/sanjeevkummrr"
          target="_blank"
          rel="noreferrer"
        >
          <strong>𝕏</strong>
          <span>X / TWITTER</span>
        </a>
      </aside>

      <div className="reveal-hint">◉ MOVE TO REVEAL</div>
    </main>
  );
}

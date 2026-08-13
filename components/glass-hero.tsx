"use client";

import { useEffect, useState } from "react";

export default function GlassHero() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <main className="hero">
      {/* Base image */}
      <div className="portrait portrait-base" />

      {/* Liquid glass reveal */}
      <div
        className="portrait portrait-reveal"
        style={{
          clipPath: `circle(150px at ${position.x}% ${position.y}%)`,
        }}
      />

      {/* Technical circle */}
      <div className="technical-circle" />

      {/* Top left */}
      <div className="top-meta">
        <span className="dot" />
        <span>SK</span>
        <span>/</span>
        <span>2026</span>
      </div>

      {/* Top right */}
      <a
        className="top-link"
        href="https://www.linkedin.com/"
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
          <a
            href="mailto:sanjeevkumar@example.com"
            className="connect-button"
          >
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
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <strong>◎</strong>
          <span>INSTAGRAM</span>
        </a>

        <i />

        <a
          href="https://www.linkedin.com/"
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
          href="https://x.com/"
          target="_blank"
          rel="noreferrer"
        >
          <strong>𝕏</strong>
          <span>X / TWITTER</span>
        </a>
      </aside>

      {/* Bottom hint */}
      <div className="reveal-hint">◉ MOVE TO REVEAL</div>
    </main>
  );
}

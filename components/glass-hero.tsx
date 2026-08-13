"use client";

import { useEffect, useRef, useState } from "react";

export default function GlassHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const target = useRef({ x: 50, y: 50 });
  const current = useRef({ x: 50, y: 50 });
  const frame = useRef<number | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.14;
      current.current.y += (target.current.y - current.current.y) * 0.14;

      hero.style.setProperty("--mouse-x", `${current.current.x}%`);
      hero.style.setProperty("--mouse-y", `${current.current.y}%`);

      frame.current = requestAnimationFrame(animate);
    };

    frame.current = requestAnimationFrame(animate);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const updatePosition = (clientX: number, clientY: number) => {
    const hero = heroRef.current;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();

    target.current.x = Math.max(
      0,
      Math.min(100, ((clientX - rect.left) / rect.width) * 100)
    );
    target.current.y = Math.max(
      0,
      Math.min(100, ((clientY - rect.top) / rect.height) * 100)
    );
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    updatePosition(e.clientX, e.clientY);
    setActive(true);
  };

  return (
    <main
      ref={heroRef}
      className={`glass-hero ${active ? "is-active" : ""}`}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerMove}
      onPointerLeave={() => setActive(false)}
    >
      <div className="portrait portrait-base" aria-hidden="true" />
      <div className="portrait portrait-reveal" aria-hidden="true" />

      <div className="technical-grid" aria-hidden="true">
        <div className="grid-circle" />
        <div className="grid-line grid-line-h" />
        <div className="grid-line grid-line-v" />
      </div>

      <nav className="hero-nav">
        <div className="nav-mark">
          <span className="nav-dot" />
          SK / 2026
        </div>
        <a
          className="nav-link"
          href="https://www.linkedin.com/in/sanjeevkummrr/"
          target="_blank"
          rel="noreferrer"
        >
          LINKEDIN ↗
        </a>
      </nav>

      <section className="hero-copy">
        <p className="eyebrow">INFRASTRUCTURE / PRODUCTION SUPPORT</p>

        <h1>
          Sanjeev
          <br />
          <span>Kumar.</span>
        </h1>

        <div className="intro">
          <strong>Infrastructure Support Engineer</strong>
          <p>
            Infrastructure and Production Support professional with nearly
            3 years of experience supporting physical and virtual
            infrastructure in production environments.
          </p>
        </div>

        <div className="hero-actions">
          <a className="cta" href="mailto:snkumar3122000@gmail.com">
            <span>LET&apos;S CONNECT</span>
            <span>↗</span>
          </a>

          <div className="meta">
            <span>HCL TECHNOLOGIES</span>
            <span>SEP 2023 — PRESENT</span>
          </div>
        </div>
      </section>

      <div className="skills">
        <span>MOOGSOFT</span>
        <span>SERVICENOW</span>
        <span>CIM / P1 / P2</span>
        <span>SLA MANAGEMENT</span>
      </div>

      <div className="location">VARANASI, INDIA</div>

      <div className="reveal-hint">
        <span />
        MOVE TO REVEAL
      </div>
    </main>
  );
}

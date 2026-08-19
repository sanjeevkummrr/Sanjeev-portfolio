"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio Contact — ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:snkumar3122000@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
  };

  return (
    <main className="inner-page contact-page">
      <section className="page-header">
        <span className="page-eyebrow">06 / CONTACT</span>

        <h1>
          Let&apos;s
          <br />
          <span>Connect.</span>
        </h1>

        <p>
          Have a question, opportunity or project in mind? Send me a message.
        </p>
      </section>

      <section className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            NAME
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </label>

          <label>
            EMAIL
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </label>

          <label>
            MESSAGE
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={7}
              required
            />
          </label>

          <button type="submit">
            SEND MESSAGE <span>→</span>
          </button>

          {sent && (
            <p className="contact-status">
              Your email client should open shortly.
            </p>
          )}
        </form>

        <aside className="contact-card">
          <span className="card-number">06</span>

          <h2>Find Me</h2>

          <div className="contact-links">
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

            <a
              href="https://www.instagram.com/sanjeevkummrr"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM ↗
            </a>

            <a
              href="https://x.com/sanjeevkummrr"
              target="_blank"
              rel="noreferrer"
            >
              X / TWITTER ↗
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2600);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div>
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h1>Let&apos;s talk about your project</h1>
          <p className="lede muted">
            Free 15-minute consultation, no obligations. Tell me what you&apos;re
            building and I&apos;ll reply within 24 hours.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap contact-layout">
          <form className="reveal" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input type="text" id="name" name="name" placeholder="Jane Cooper" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="jane@company.com" required />
            </div>
            <div className="field">
              <label htmlFor="service">What do you need?</label>
              <select id="service" name="service" defaultValue="Web development">
                <option>Web development</option>
                <option>AI chatbot</option>
                <option>Agentic AI / automation</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="budget">Approximate budget</label>
              <select id="budget" name="budget" defaultValue="Not sure yet">
                <option>Under ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000 – ₹3,00,000</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Tell me about the project</label>
              <textarea
                id="message"
                name="message"
                placeholder="What problem are you trying to solve?"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              {submitted ? "Done — check your inbox" : "Send message"}
            </button>
          </form>

          <div className="reveal">
            <div className="contact-info-item">
              <div className="ci-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 6l10 7 10-7" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>Email</div>
                <a href="mailto:hello@webswiftpro.in" className="muted" style={{ fontSize: 14.5 }}>
                  hello@webswiftpro.in
                </a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="ci-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .7a2 2 0 0 1 1.6 2z" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>Phone</div>
                <a href="tel:+919876543210" className="muted" style={{ fontSize: 14.5 }}>
                  +91 98765 43210
                </a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="ci-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>Location</div>
                <div className="muted" style={{ fontSize: 14.5 }}>
                  Mumbai, India — working with clients worldwide
                </div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="ci-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>Response time</div>
                <div className="muted" style={{ fontSize: 14.5 }}>
                  Within 24 hours, every day
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
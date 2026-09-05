"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const services = [
  {
    title: "Web development",
    description: "Marketing sites and web apps",
    price: "₹35,000",
    tag: "",
    highlight: false,
    features: [
      "Up to 6 pages, custom design",
      "Next.js / React / TypeScript build",
      "CMS setup for self-editing content",
      "SEO basics and analytics wired in",
      "2–4 week delivery",
    ],
  },
  {
    title: "AI chatbot",
    description: "Trained on your own data",
    price: "₹60,000",
    tag: "Most requested",
    highlight: true,
    features: [
      "GPT-4 powered, trained on your docs",
      "Website widget + admin dashboard",
      "Handoff-to-human escalation flow",
      "Analytics on resolved vs. escalated",
      "3–5 week delivery",
    ],
  },
  {
    title: "Automation & agentic AI",
    description: "Multi-step autonomous workflows",
    price: "₹80,000",
    tag: "",
    highlight: false,
    features: [
      "Workflow mapping and design",
      "Integrations with your existing tools",
      "Autonomous decision-making agents",
      "Monitoring and error handling",
      "4–6 week delivery",
    ],
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most websites take 2–4 weeks from kickoff to launch. Chatbots and automation projects run 3–6 weeks depending on how many systems they need to connect to. You'll get a specific timeline after the discovery call, not a generic estimate.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes. Most calls happen over video regardless of timezone, and project updates happen asynchronously through a shared channel so distance doesn't slow things down.",
  },
  {
    q: "What if I only need part of a service, not the whole package?",
    a: "That's normal. Pricing above is a starting point for a full build — smaller engagements like a single integration, a redesign, or a chatbot retrain are scoped and quoted separately.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Every project includes a post-launch support window. After that, monthly retainers are available for updates, monitoring, and new features as your needs change.",
  },
  {
    q: "How do payments work?",
    a: "Typically a 50% deposit to begin, with the balance due at launch. Larger projects can be split into milestone payments — this gets confirmed in the proposal before any work starts.",
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  useEffect(() => {
    document.querySelectorAll(".faq-a").forEach((a) => ((a as HTMLElement).style.maxHeight = ""));
  }, [openFaq]);

  return (
    <div>
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Services</div>
          <h1>What it costs to work together</h1>
          <p className="lede muted">
            Every project is scoped individually, but these ranges cover most of what comes
            through the door. Final pricing depends on scope, integrations, and timeline.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="price-grid">
            {services.map((s, i) => (
              <div
                key={i}
                className={`price-card reveal ${s.highlight ? "highlight" : ""}`}
                style={{ paddingTop: s.tag ? 38 : 32 }}
              >
                {s.tag && <span className="tag">{s.tag}</span>}
                <h3>{s.title}</h3>
                <p className="muted" style={{ fontSize: 14, marginTop: 8 }}>{s.description}</p>
                <div className="amount">{s.price}<span> starting</span></div>
                <ul>
                  {s.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn ${s.highlight ? "btn-primary" : "btn-ghost"}`}>
                  Get a quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Common questions</div>
            <h2>Before you reach out</h2>
          </div>
          <div style={{ maxWidth: 760 }}>
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`faq-item reveal ${openFaq === i ? "open" : ""}`}
              >
                <button
                  className="faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="plus">+</span>
                </button>
                <div
                  className="faq-a"
                  style={{ maxHeight: openFaq === i ? "200px" : 0 }}
                >
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Not sure which service fits?</h2>
            <p>Send a quick note about what you're trying to solve — I'll tell you honestly which service (if any) makes sense.</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Get free consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
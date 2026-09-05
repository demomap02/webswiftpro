"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const timeline = [
  {
    title: "Discovery",
    description: "A 15-minute call to understand the problem you're solving, who it's for, and what 'done' looks like. No sales pitch — just scoping.",
  },
  {
    title: "Design",
    description: "Wireframes and a visual direction tailored to your brand, reviewed together before a single line of production code is written.",
  },
  {
    title: "Build",
    description: "Development in focused sprints with visible progress — staging links you can click through, not status reports you have to trust.",
  },
  {
    title: "Launch",
    description: "Deployment, QA across devices, and a walkthrough so your team knows how everything works before it goes live.",
  },
  {
    title: "Support",
    description: "Post-launch monitoring and a support window to fix anything that comes up, plus optional retainers for ongoing work.",
  },
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Three.js"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL", "REST APIs"] },
  { category: "AI/ML", items: ["GPT-4 / Claude", "LangChain", "Vector DBs", "Agentic AI", "Fine-tuning", "RAG Systems"] },
  { category: "DevOps", items: ["AWS", "Vercel", "Docker", "GitHub Actions", "CI/CD", "Monitoring"] },
];

export default function About() {
  const [activeSkill, setActiveSkill] = useState("Frontend");

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

  return (
    <div>
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow">About</div>
          <h1>One developer, agency-grade output</h1>
          <p className="lede muted">
            WebSwiftPro is built around a simple bet: most businesses don't need a
            twelve-person agency — they need one person who's good enough to act like one.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap founder-block reveal">
          <div className="founder-photo"></div>
          <div>
            <div className="eyebrow">Founder story</div>
            <h2 style={{ fontSize: "clamp(26px,3vw,34px)", marginTop: 14 }}>
              Why I started WebSwiftPro
            </h2>
            <p className="muted" style={{ marginTop: 18, fontSize: 16, lineHeight: 1.7 }}>
              I spent years building web products inside agencies, watching good projects
              get slowed down by layers of approvals, handoffs, and account managers who'd
              never opened a code editor. Clients paid agency prices for junior-level attention.
            </p>
            <p className="muted" style={{ marginTop: 14, fontSize: 16, lineHeight: 1.7 }}>
              WebSwiftPro strips that out. You work directly with the person writing the
              code and training the models — from the first call to the final deploy. That's
              the whole model: fewer people, faster decisions, and a lot more care per
              project because there are only ever a handful running at once.
            </p>
            <p className="muted" style={{ marginTop: 14, fontSize: 16, lineHeight: 1.7 }}>
              Today that means shipping everything from marketing sites to production
              chatbots and agentic automations for startups and small businesses across
              India and beyond — usually in 2–4 weeks, always with a direct line to me.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Our process</div>
            <h2>How a project actually runs</h2>
            <p>Five stages, no surprises. You'll always know what stage you're in and what happens next.</p>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className="tl-item reveal">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Tech stack</div>
            <h2>Tools of the trade</h2>
          </div>
          <div className="filter-row" style={{ marginBottom: 32 }}>
            {skills.map((s) => (
              <button
                key={s.category}
                onClick={() => setActiveSkill(s.category)}
                className={`filter-chip ${activeSkill === s.category ? "active" : ""}`}
              >
                {s.category}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, maxWidth: 680 }}>
            {skills.find((s) => s.category === activeSkill)?.items.map((item) => (
              <span key={item} className="tag-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Want to work together?</h2>
            <p>Tell me about your project and I'll reply within 24 hours with next steps.</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Get free consultation
              </Link>
              <Link href="/portfolio" className="btn btn-ghost">
                See past work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
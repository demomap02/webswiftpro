"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const caseStudies = [
  {
    tag: "TechStart · AI Chatbot",
    title: "Cutting support tickets by 80% with a trained chatbot",
    metrics: [
      { num: "80%", label: "Queries auto-resolved" },
      { num: "3.5x", label: "Faster first response" },
      { num: "4 wks", label: "Time to launch" },
    ],
    problem:
      "TechStart's two-person support team was drowning in repetitive setup and billing questions, with response times stretching past 12 hours during peak periods.",
    solution:
      "We trained a GPT-4 chatbot on their help center and past ticket history, embedded it as a website widget, and built an escalation path that hands unresolved queries to a human with full conversation context.",
    result:
      "The bot now resolves 80% of incoming queries without human input, and first response time for the remaining 20% dropped to under 20 minutes.",
  },
  {
    tag: "Northline Retail · Web Development",
    title: "A Next.js storefront that loads in under a second",
    metrics: [
      { num: "0.9s", label: "Largest contentful paint" },
      { num: "+34%", label: "Mobile conversion" },
      { num: "3 wks", label: "Time to launch" },
    ],
    problem:
      "Northline's old WordPress site took over 6 seconds to load on mobile, and the checkout flow lost a third of shoppers before payment.",
    solution:
      "Rebuilt the storefront in Next.js with server-side rendering and image optimization, plus a redesigned three-step checkout with saved payment details.",
    result:
      "Mobile load time dropped from 6.2s to under a second, and mobile conversion rate rose 34% within the first month post-launch.",
  },
  {
    tag: "Havenly Logistics · Agentic Automation",
    title: "An agent that reconciles freight invoices overnight",
    metrics: [
      { num: "70%", label: "Manual hours saved" },
      { num: "99.2%", label: "Match accuracy" },
      { num: "5 wks", label: "Time to launch" },
    ],
    problem:
      "Havenly's ops team spent roughly 15 hours a week manually matching carrier invoices against shipment records, with errors slipping through during busy weeks.",
    solution:
      "Built an autonomous agent that pulls invoices from email, cross-references them against the shipment database, flags mismatches, and files matched invoices automatically overnight.",
    result:
      "The team now reviews only flagged exceptions — cutting manual reconciliation time by 70% with matching accuracy above 99%.",
  },
];

export default function Portfolio() {
  const [activeCase, setActiveCase] = useState<number | null>(null);

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
          <div className="eyebrow">Portfolio</div>
          <h1>Work that moved a number</h1>
          <p className="lede muted">
            A few projects in detail — what the client needed, what we built,
            and what changed after launch.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          {caseStudies.map((cs, i) => (
            <div key={i} className="case-study reveal">
              <div className="cs-media"></div>
              <div>
                <div className="case-tag">{cs.tag}</div>
                <h3>{cs.title}</h3>
                <div className="case-metrics">
                  {cs.metrics.map((m, j) => (
                    <div key={j}>
                      <div className="m-num">{m.num}</div>
                      <div className="m-label">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="case-block" style={{ marginTop: 26 }}>
                  <h4>Problem</h4>
                  <p>{cs.problem}</p>
                </div>
                <div className="case-block">
                  <h4>Solution</h4>
                  <p>{cs.solution}</p>
                </div>
                <div className="case-block">
                  <h4>Result</h4>
                  <p>{cs.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Ready to transform your business?</h2>
            <p>Let&apos;s discuss your project. Free 15-minute consultation, no obligations.</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Get free consultation
              </Link>
              <Link href="/services" className="btn btn-ghost">
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

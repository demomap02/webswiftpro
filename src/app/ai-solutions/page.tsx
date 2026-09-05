"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Aisolutions() {
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
          <div className="eyebrow">AI Solutions</div>
          <h1>Chatbots that answer. Agents that act.</h1>
          <p className="lede muted">
            Two different tools for two different jobs — a chatbot that talks to
            your customers, and an agent that does the work behind the scenes.
            Most businesses eventually use both.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="ai-split reveal">
            <div>
              <div className="eyebrow">Conversational</div>
              <h2 style={{ fontSize: "clamp(26px,3vw,34px)", marginTop: 14 }}>
                AI chatbots
              </h2>
              <p className="muted" style={{ marginTop: 16, fontSize: 15.5 }}>
                Trained on your documentation, product catalog, and past support
                tickets, so answers sound like your business — not a generic
                script.
              </p>
              <div className="flow-steps">
                <div className="flow-step">
                  <div className="fs-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16v12H8l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <p>Customer asks a question through your website or WhatsApp widget.</p>
                </div>
                <div className="flow-step">
                  <div className="fs-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <p>The model checks your knowledge base and answers, or flags low confidence.</p>
                </div>
                <div className="flow-step">
                  <div className="fs-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 8l4 4-4 4M3 12h18" />
                    </svg>
                  </div>
                  <p>Anything it can't resolve confidently is handed to a human, with full context attached.</p>
                </div>
              </div>
            </div>
            <div className="ai-visual">
              <canvas id="hero-canvas"></canvas>
            </div>
          </div>

          <div className="ai-split reveal">
            <div
              className="ai-visual"
              style={{
                background:
                  "radial-gradient(circle at 65% 30%, rgba(108,107,255,.18), transparent 55%), var(--ink-raised)",
              }}
            >
              <svg viewBox="0 0 300 300" width="100%" height="100%">
                <g fill="none" stroke="#FF7A30" strokeWidth="1.4" opacity="0.7">
                  <circle cx="150" cy="150" r="46" />
                  <circle cx="70" cy="90" r="26" />
                  <circle cx="230" cy="80" r="20" />
                  <circle cx="240" cy="210" r="30" />
                  <circle cx="65" cy="215" r="22" />
                  <line x1="150" y1="150" x2="70" y2="90" />
                  <line x1="150" y1="150" x2="230" y2="80" />
                  <line x1="150" y1="150" x2="240" y2="210" />
                  <line x1="150" y1="150" x2="65" y2="215" />
                </g>
                <g fill="#FFA163">
                  <circle cx="150" cy="150" r="4" />
                  <circle cx="70" cy="90" r="3" />
                  <circle cx="230" cy="80" r="3" />
                  <circle cx="240" cy="210" r="3" />
                  <circle cx="65" cy="215" r="3" />
                </g>
              </svg>
            </div>
            <div>
              <div className="eyebrow">Autonomous</div>
              <h2 style={{ fontSize: "clamp(26px,3vw,34px)", marginTop: 14 }}>
                Agentic AI
              </h2>
              <p className="muted" style={{ marginTop: 16, fontSize: 15.5 }}>
                An agent doesn't just answer — it plans a sequence of steps,
                calls the tools it needs (your CRM, inbox, spreadsheets, APIs),
                and reports back what it did.
              </p>
              <div className="flow-steps">
                <div className="flow-step">
                  <div className="fs-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                    </svg>
                  </div>
                  <p>You define the goal — e.g. "qualify inbound leads and update the CRM."</p>
                </div>
                <div className="flow-step">
                  <div className="fs-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 17l6-6-6-6M12 19h8" />
                    </svg>
                  </div>
                  <p>The agent breaks it into steps and executes them against your real tools.</p>
                </div>
                <div className="flow-step">
                  <div className="fs-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <p>Every action is logged, so you can audit exactly what it did and why.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Where this fits</div>
            <h2>Common use cases we build</h2>
          </div>
          <div className="bento">
            <div className="svc-card reveal">
              <div className="svc-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Support deflection</h3>
              <p>Resolve routine tickets instantly and route the rest with full context attached.</p>
            </div>
            <div className="svc-card reveal">
              <div className="svc-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                </svg>
              </div>
              <h3>Lead qualification</h3>
              <p>Score and route inbound leads before a human ever picks up the phone.</p>
            </div>
            <div className="svc-card reveal">
              <div className="svc-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3>Internal knowledge search</h3>
              <p>An assistant your team can ask instead of digging through shared drives.</p>
            </div>
            <div className="svc-card reveal">
              <div className="svc-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
              </div>
              <h3>Back-office automation</h3>
              <p>Invoice matching, report generation, and data entry handled without a spreadsheet marathon.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Have a workflow in mind?</h2>
            <p>Describe what you're doing manually today — I'll tell you honestly whether AI can take it off your plate.</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary" style={{ textDecoration: "none" }}>
                Get free consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
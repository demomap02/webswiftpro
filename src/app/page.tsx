"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);

    const N = 26;
    const nodes = Array.from({ length: N }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
    }));

    let animId: number;
    const frame = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;
      });
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = (a.x - b.x) * w;
          const dy = (a.y - b.y) * h;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const max = w * 0.22;
          if (dist < max) {
            ctx.strokeStyle = `rgba(255,122,48,${0.18 * (1 - dist / max)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x * w, a.y * h);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.fillStyle = "rgba(255,161,99,0.9)";
        ctx.beginPath();
        ctx.arc(n.x * w, n.y * h, 2.4 * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      });
      animId = requestAnimationFrame(frame);
    };
    frame();

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

    const nums = document.querySelectorAll("[data-count]");
    const counterIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.dataset.count || "0");
          const suffix = el.dataset.suffix || "";
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = (target * eased).toFixed(target % 1 !== 0 ? 1 : 0) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          counterIo.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach((el) => counterIo.observe(el));

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      io.disconnect();
      counterIo.disconnect();
    };
  }, []);

  return (
    <div>
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Available for new projects</div>
            <h1>Build smarter with AI &amp; automation</h1>
            <p className="lede">
              From intelligent chatbots to autonomous workflows — we design and ship digital
              systems that change how your business runs, not just how it looks.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Start your project
              </Link>
              <Link href="/portfolio" className="btn btn-ghost">
                View our work
              </Link>
            </div>
            <div className="badge-row">
              <span className="badge">
                <span className="led"></span>
                Available for new projects
              </span>
              <span className="badge">Response within 24 hours</span>
              <span className="badge">40% more affordable than agencies</span>
            </div>
          </div>
          <div className="hero-visual">
            <canvas ref={canvasRef}></canvas>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">What we build</div>
            <h2>Four ways we help you scale</h2>
            <p>Every engagement starts from one of these — most projects end up combining two or three.</p>
          </div>
          <div className="bento">
            <div className="svc-card reveal">
              <div className="svc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Web development</h3>
              <p>Modern, responsive websites and web apps built with Next.js, React, and TypeScript — fast by default, easy to extend later.</p>
            </div>
            <div className="svc-card reveal">
              <div className="svc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>AI chatbots</h3>
              <p>Conversational agents powered by GPT-4 and trained on your own data — handling real support and sales conversations.</p>
            </div>
            <div className="svc-card reveal">
              <div className="svc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                </svg>
              </div>
              <h3>Agentic AI</h3>
              <p>Autonomous systems that make decisions and complete multi-step tasks without a human in the loop for every action.</p>
            </div>
            <div className="svc-card reveal">
              <div className="svc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 1l4 4-4 4" />
                  <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                  <path d="M7 23l-4-4 4-4" />
                  <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
              </div>
              <h3>Automation</h3>
              <p>We map your team&apos;s repetitive workflows and wire them into pipelines that save 70% of the time they used to take.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-band">
        <div className="wrap">
          <div className="stats-row">
            <div className="stat reveal">
              <div className="num"><span data-count="100" data-suffix="+">0</span></div>
              <div className="label">Projects delivered</div>
            </div>
            <div className="stat reveal">
              <div className="num"><span data-count="30" data-suffix="+">0</span></div>
              <div className="label">Happy clients</div>
            </div>
            <div className="stat reveal">
              <div className="num"><span data-count="5" data-suffix="+">0</span></div>
              <div className="label">Years experience</div>
            </div>
            <div className="stat reveal">
              <div className="num"><span data-count="4.9" data-suffix="★">0</span></div>
              <div className="label">Average rating</div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Why choose us</div>
            <h2>Hire a freelancer, get agency quality</h2>
            <p>Direct communication, faster delivery, and significantly more affordable than agencies — without cutting corners on the work itself.</p>
          </div>
          <div className="why-grid">
            <div className="why-card reveal">
              <div className="num">Cost</div>
              <h3>40% more affordable</h3>
              <p>No office rent, no account managers, no middlemen. Every rupee goes into building your product.</p>
            </div>
            <div className="why-card reveal">
              <div className="num">Speed</div>
              <h3>Faster delivery</h3>
              <p>No internal approval chains to wait on. We move fast and ship faster — typical projects take 2–4 weeks.</p>
            </div>
            <div className="why-card reveal">
              <div className="num">Clarity</div>
              <h3>Direct communication</h3>
              <p>Talk directly to the developer building your product. No project managers, no wait times, no miscommunication.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal" style={{ margin: "0 auto 48px", textAlign: "center", maxWidth: 520 }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Client love</div>
            <h2>What our clients say</h2>
          </div>
          <div className="quote-card reveal">
            <div className="quote-mark">&quot;</div>
            <p className="quote-text">
              WebSwiftPro built our AI chatbot that handles 80% of customer queries. Game-changer for our support team.
            </p>
            <div className="quote-attrib">
              <div className="avatar-ring"><span>RK</span></div>
              <div>
                <div style={{ fontWeight: 600 }}>Rajesh Kumar</div>
                <div className="muted" style={{ fontSize: 13.5 }}>Founder, TechStart</div>
              </div>
            </div>
          </div>
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
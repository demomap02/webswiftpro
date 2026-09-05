"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: { name: string; initials: string };
}

const posts: BlogPost[] = [
  { slug: "how-ai-chatbots-cut-support-costs-80-percent", title: "How AI Chatbots Are Cutting Customer Support Costs by 80%", excerpt: 'Why "just add a chatbot" fails for most teams, and the specific setup that actually moves the resolution-rate needle — training data, escalation rules, and honest limits.', category: "AI chatbots", readTime: "6 min read", date: "Aug 2026", author: { name: "Aditya Kulkarni", initials: "AK" } },
  { slug: "nextjs-vs-wordpress-2026", title: "Next.js vs. Traditional WordPress: Which Is Right for Your Business in 2026?", excerpt: "A practical comparison for non-developers — load speed, editing workflow, hosting cost, and which one actually makes sense for a small business site.", category: "Web development", readTime: "7 min read", date: "Jul 2026", author: { name: "Aditya Kulkarni", initials: "AK" } },
  { slug: "what-is-agentic-ai-practical-guide", title: "What Is Agentic AI? A Practical Guide for Business Owners", excerpt: 'Cutting through the buzzword: what makes an "agent" different from a chatbot, what it can safely be trusted to do alone, and where a human should stay in the loop.', category: "Automation", readTime: "8 min read", date: "Jul 2026", author: { name: "Aditya Kulkarni", initials: "AK" } },
  { slug: "5-signs-your-business-needs-workflow-automation", title: "5 Signs Your Business Needs Workflow Automation", excerpt: 'From "we do this in a spreadsheet every Monday" to "only one person knows how this works" — the tells that a manual process is quietly costing you more than it should.', category: "Automation", readTime: "5 min read", date: "Jun 2026", author: { name: "Aditya Kulkarni", initials: "AK" } },
  { slug: "case-study-gpt4-chatbot-80-percent-support", title: "How We Built a GPT-4 Chatbot That Handles 80% of Support Tickets", excerpt: "Inside the build: how TechStart went from a two-person support team drowning in tickets to an 80% auto-resolution rate — the training data, the escalation logic, and what we'd do differently.", category: "Case study", readTime: "9 min read", date: "Aug 2026", author: { name: "Aditya Kulkarni", initials: "AK" } },
  { slug: "freelancer-vs-agency-cost-2026", title: "The True Cost of Hiring a Freelancer vs. an Agency in 2026", excerpt: "A line-by-line breakdown of where agency budgets actually go, and when paying for that overhead is genuinely worth it — and when it isn't.", category: "Web development", readTime: "6 min read", date: "Jun 2026", author: { name: "Aditya Kulkarni", initials: "AK" } },
  { slug: "ai-automation-tools-we-use", title: "AI Automation Tools We Actually Use (And Recommend) in Our Projects", excerpt: "No affiliate-link listicle — the specific tools in our stack for orchestration, monitoring, and integrations, and why we picked each one.", category: "Automation", readTime: "7 min read", date: "May 2026", author: { name: "Aditya Kulkarni", initials: "AK" } },
  { slug: "2-4-week-web-dev-process", title: "From Idea to Launch: Our 2-4 Week Web Development Process Explained", excerpt: "What actually happens in each week of a build — discovery, design, development, and launch — so you know what to expect before you sign anything.", category: "Web development", readTime: "6 min read", date: "May 2026", author: { name: "Aditya Kulkarni", initials: "AK" } },
];

const tocSections = [
  { label: "The problem", id: "the-problem" },
  { label: "Our approach", id: "our-approach" },
  { label: "Training the model", id: "training-the-model" },
  { label: "Escalation logic", id: "escalation-logic" },
  { label: "Results", id: "results" },
  { label: "What we'd do differently", id: "what-wed-do-differently" },
];

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = posts.find((p) => p.slug === slug);
  const [activeSection, setActiveSection] = useState(0);

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

    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      let current = 0;
      tocSections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && scrollY >= el.offsetTop) current = i;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!post) {
    return (
      <div style={{ padding: "120px 0", textAlign: "center" }}>
        <div className="wrap">
          <h1 style={{ marginBottom: 16 }}>Post not found</h1>
          <Link href="/blog" className="btn btn-ghost" style={{ marginTop: 16, display: "inline-flex" }}>
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div>
      <header className="page-hero" style={{ paddingBottom: 32 }}>
        <div className="wrap">
          <span className="tag-pill">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="post-meta" style={{ marginTop: 20 }}>
            <div className="avatar-ring" style={{ width: 34, height: 34 }}>
              <span style={{ fontSize: 11 }}>{post.author.initials}</span>
            </div>
            <span>{post.author.name}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
        </div>
      </header>

      <div className="wrap">
        <div
          className="fp-media"
          style={{
            borderRadius: "var(--radius-lg)",
            height: 340,
            border: "1px solid var(--ink-line)",
            minHeight: 340,
          }}
        ></div>
      </div>

      <section>
        <div className="wrap post-layout">
          <aside className="toc">
            <h4>On this page</h4>
            {tocSections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={activeSection === i ? "active" : ""}
              >
                {s.label}
              </a>
            ))}
          </aside>

          <article className="post-body">
            <p>
              When TechStart came to us, their two-person support team was answering
              the same handful of questions dozens of times a day — password resets,
              billing cycles, plan differences — while genuinely hard tickets sat in
              the queue for hours. This is the story of how we built a chatbot that
              took over the repetitive 80% without making the remaining 20% worse.
            </p>

            <h2 id="the-problem">The problem</h2>
            <p>
              TechStart&apos;s response time had crept past 12 hours during peak
              periods. Not because their team was slow, but because roughly four out
              of five incoming tickets were variations on the same dozen questions.
              Every minute spent answering &quot;how do I reset my password&quot; was a
              minute not spent on the customer with an actual account issue.
            </p>
            <p>
              The founder&apos;s instinct — add a chatbot — was right, but the
              failure mode we see most often is a bot that answers confidently and
              wrong, which erodes trust faster than a slow human ever would. So the
              brief wasn&apos;t &quot;add AI.&quot; It was &quot;resolve the easy
              stuff correctly, and know when to get out of the way.&quot;
            </p>

            <h2 id="our-approach">Our approach</h2>
            <p>
              We started with a week of read-only access to their help center and
              the last six months of support tickets, categorizing every incoming
              question by type and by how confidently a documented answer already
              existed. That categorization became the actual product spec — it told
              us exactly which 80% was safe to automate.
            </p>

            <div className="pull-quote">
              The categorization exercise was the real work. The chatbot itself
              took less time to build than deciding what it should be allowed to
              answer.
            </div>

            <h2 id="training-the-model">Training the model</h2>
            <p>
              We built the assistant on GPT-4, grounded in TechStart&apos;s help
              center content, product documentation, and a curated set of past
              resolved tickets — not the raw ticket history, which included plenty
              of dead ends and outdated answers. Feeding a model your worst
              historical answers teaches it to repeat them.
            </p>
            <pre>{`// simplified retrieval step
const context = await searchKnowledgeBase(userQuestion, { minConfidence: 0.78 });
if (context.length === 0) return escalateToHuman(userQuestion);
const answer = await generateAnswer(userQuestion, context);`}</pre>
            <p>
              Every answer is grounded in retrieved source material rather than the
              model&apos;s general knowledge, and we log a confidence score
              alongside every response so we can audit drift over time.
            </p>

            <h2 id="escalation-logic">Escalation logic</h2>
            <p>
              The most important part of the build wasn&apos;t the answers — it
              was the exits. Any question below the confidence threshold, anything
              touching billing disputes or account security, and anything a customer
              explicitly asked to escalate goes straight to a human, along with the
              full conversation so far. No one repeats themselves.
            </p>

            <h2 id="results">Results</h2>
            <p>
              Within the first month, the bot was resolving 80% of incoming queries
              without a human touching them. First response time for the remaining
              20% — the genuinely hard tickets — dropped to under 20 minutes,
              because the support team was no longer buried under repetitive
              questions.
            </p>
            <p>
              Customer satisfaction on bot-resolved tickets actually came in
              slightly higher than the historical human-resolved average, largely
              because the bot never made customers wait.
            </p>

            <h2 id="what-wed-do-differently">What we&apos;d do differently</h2>
            <p>
              We under-scoped the analytics dashboard in the first version, and
              TechStart&apos;s team wanted visibility into which questions were
              getting escalated most often — that data is genuinely useful for
              deciding what to document better. We now build that dashboard in
              from day one on every chatbot project.
            </p>

            <div className="share-row">
              <a href="#" aria-label="Share on X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h3l-7.5 8.6L22 22h-6.9l-5.4-6.9L3.5 22H.5l8-9.2L2 2h7l4.9 6.3z" />
                </svg>
              </a>
              <a href="#" aria-label="Share on LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.76-2 4 0 4.74 2.6 4.74 6v6.3h-4v-5.6c0-1.35-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.7H9z" />
                </svg>
              </a>
              <a href="#" aria-label="Copy link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.5 1.5" />
                  <path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.5-1.5" />
                </svg>
              </a>
            </div>

            <div className="author-card">
              <div className="avatar-ring" style={{ width: 52, height: 52 }}>
                <span>{post.author.initials}</span>
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>{post.author.name}</div>
                <div className="muted" style={{ fontSize: 13.5, marginTop: 4 }}>
                  Founder, WebSwiftPro — builds web, AI, and automation products for
                  growing businesses.
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal" style={{ marginBottom: 0 }}>
            <div className="eyebrow">Related reading</div>
            <h2>More from the build log</h2>
          </div>
          <div className="post-grid" style={{ marginTop: 24 }}>
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="post-card reveal">
                <div className="pc-media"></div>
                <div className="pc-body">
                  <span className="tag-pill">{r.category}</span>
                  <h3>{r.title}</h3>
                  <div className="post-meta">
                    <span>{r.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="newsletter-card reveal">
            <div>
              <h3 style={{ fontSize: 22 }}>
                Get AI &amp; automation insights in your inbox
              </h3>
              <p className="muted" style={{ marginTop: 8, fontSize: 14.5 }}>
                One email a month. No sales pitches, just what we&apos;re
                learning.
              </p>
            </div>
            <form>
              <input
                type="email"
                placeholder="you@company.com"
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

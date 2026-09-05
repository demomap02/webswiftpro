"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: { name: string; initials: string };
  tags: string[];
}

const posts: BlogPost[] = [
  {
    slug: "how-ai-chatbots-cut-support-costs-80-percent",
    title: "How AI Chatbots Are Cutting Customer Support Costs by 80%",
    excerpt:
      "Why \"just add a chatbot\" fails for most teams, and the specific setup that actually moves the resolution-rate needle — training data, escalation rules, and honest limits.",
    content: "",
    category: "chatbots",
    readTime: "6 min read",
    date: "Aug 2026",
    author: { name: "Aditya Kulkarni", initials: "AK" },
    tags: ["AI", "Support", "Automation"],
  },
  {
    slug: "nextjs-vs-wordpress-2026",
    title: "Next.js vs. Traditional WordPress: Which Is Right for Your Business in 2026?",
    excerpt:
      "A practical comparison for non-developers — load speed, editing workflow, hosting cost, and which one actually makes sense for a small business site.",
    content: "",
    category: "web-dev",
    readTime: "7 min read",
    date: "Jul 2026",
    author: { name: "Aditya Kulkarni", initials: "AK" },
    tags: ["Next.js", "WordPress", "Web Development"],
  },
  {
    slug: "what-is-agentic-ai-practical-guide",
    title: "What Is Agentic AI? A Practical Guide for Business Owners",
    excerpt:
      "Cutting through the buzzword: what makes an \"agent\" different from a chatbot, what it can safely be trusted to do alone, and where a human should stay in the loop.",
    content: "",
    category: "automation",
    readTime: "8 min read",
    date: "Jul 2026",
    author: { name: "Aditya Kulkarni", initials: "AK" },
    tags: ["Agentic AI", "Automation", "Business"],
  },
  {
    slug: "5-signs-your-business-needs-workflow-automation",
    title: "5 Signs Your Business Needs Workflow Automation",
    excerpt:
      "From \"we do this in a spreadsheet every Monday\" to \"only one person knows how this works\" — the tells that a manual process is quietly costing you more than it should.",
    content: "",
    category: "automation",
    readTime: "5 min read",
    date: "Jun 2026",
    author: { name: "Aditya Kulkarni", initials: "AK" },
    tags: ["Automation", "Workflow", "Business"],
  },
  {
    slug: "case-study-gpt4-chatbot-80-percent-support",
    title: "Case Study: How We Built a GPT-4 Chatbot That Handles 80% of Support Tickets",
    excerpt:
      "The full build breakdown for TechStart's support bot — data sources, escalation thresholds, and the metric that mattered more than accuracy.",
    content: "",
    category: "case-studies",
    readTime: "9 min read",
    date: "Aug 2026",
    author: { name: "Aditya Kulkarni", initials: "AK" },
    tags: ["Case Study", "Chatbots", "GPT-4"],
  },
  {
    slug: "freelancer-vs-agency-cost-2026",
    title: "The True Cost of Hiring a Freelancer vs. an Agency in 2026",
    excerpt:
      "A line-by-line breakdown of where agency budgets actually go, and when paying for that overhead is genuinely worth it — and when it isn't.",
    content: "",
    category: "web-dev",
    readTime: "6 min read",
    date: "Jun 2026",
    author: { name: "Aditya Kulkarni", initials: "AK" },
    tags: ["Freelancer", "Agency", "Cost"],
  },
  {
    slug: "ai-automation-tools-we-use",
    title: "AI Automation Tools We Actually Use (And Recommend) in Our Projects",
    excerpt:
      "No affiliate-link listicle — the specific tools in our stack for orchestration, monitoring, and integrations, and why we picked each one.",
    content: "",
    category: "automation",
    readTime: "7 min read",
    date: "May 2026",
    author: { name: "Aditya Kulkarni", initials: "AK" },
    tags: ["Tools", "Automation", "Stack"],
  },
  {
    slug: "2-4-week-web-dev-process",
    title: "From Idea to Launch: Our 2-4 Week Web Development Process Explained",
    excerpt:
      "What actually happens in each week of a build — discovery, design, development, and launch — so you know what to expect before you sign anything.",
    content: "",
    category: "web-dev",
    readTime: "6 min read",
    date: "May 2026",
    author: { name: "Aditya Kulkarni", initials: "AK" },
    tags: ["Process", "Web Development", "Next.js"],
  },
];

const categories = [
  { slug: "all", label: "All posts" },
  { slug: "web-dev", label: "Web development" },
  { slug: "chatbots", label: "AI chatbots" },
  { slug: "automation", label: "Automation" },
  { slug: "case-studies", label: "Case studies" },
];

const featuredPost = posts[4]; // Case study

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredPosts = posts.filter((p) => {
    const matchesCat = activeCategory === "all" || p.category === activeCategory;
    const matchesTerm =
      !searchTerm ||
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesTerm;
  });

  return (
    <div>
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow">The build log</div>
          <h1>Notes on AI, automation, and shipping fast</h1>
          <p className="lede muted">
            What we&apos;re learning from real client projects — written for business
            owners, not other engineers.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="featured-post reveal"
          >
            <div className="fp-media"></div>
            <div className="fp-body">
              <span className="tag-pill">Case study</span>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <div className="post-meta">
                <div className="avatar-ring" style={{ width: 32, height: 32 }}>
                  <span style={{ fontSize: 11 }}>{featuredPost.author.initials}</span>
                </div>
                <span>{featuredPost.author.name}</span>
                <span>·</span>
                <span>{featuredPost.readTime}</span>
                <span>·</span>
                <span>{featuredPost.date}</span>
              </div>
            </div>
          </Link>

          <div className="filter-row reveal">
            {categories.map((c) => (
              <button
                key={c.slug}
                className={`filter-chip ${activeCategory === c.slug ? "active" : ""}`}
                onClick={() => setActiveCategory(c.slug)}
              >
                {c.label}
              </button>
            ))}
            <div className="search-row">
              <input
                type="text"
                placeholder="Search articles…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="post-grid">
            {filteredPosts
              .filter((p) => p.slug !== featuredPost.slug)
              .map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="post-card reveal"
                  data-cat={post.category}
                  data-title={post.title}
                >
                  <div className="pc-media"></div>
                  <div className="pc-body">
                    <span className="tag-pill">{categories.find((c) => c.slug === post.category)?.label}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="post-meta">
                      <span>{post.readTime}</span>
                      <span>·</span>
                      <span>{post.date}</span>
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
              <h3 style={{ fontSize: 22 }}>Get AI & automation insights in your inbox</h3>
              <p className="muted" style={{ marginTop: 8, fontSize: 14.5 }}>
                One email a month. No sales pitches, just what we&apos;re learning.
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
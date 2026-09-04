"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Users, ArrowRight, Coffee } from "lucide-react";

const timeline = [
  {
    year: "2019",
    title: "The Beginning",
    description: "Started coding at 16. Built my first website for a local business. Fell in love with turning ideas into digital products.",
  },
  {
    year: "2020",
    title: "First Clients",
    description: "Left college to freelance full-time. Built 20+ websites for clients across India. Learned what clients actually need.",
  },
  {
    year: "2022",
    title: "AI Era Begins",
    description: "Discovered GPT-3. Built my first AI chatbot. Realized AI would change everything about how businesses operate.",
  },
  {
    year: "2024",
    title: "WebSwiftPro",
    description: "Formalized as WebSwiftPro. Focused on AI solutions, automation, and modern web development. 100+ projects delivered.",
  },
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Three.js"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL", "REST APIs"] },
  { category: "AI/ML", items: ["GPT-4 / Claude", "LangChain", "Vector DBs", "Agentic AI", "Fine-tuning", "RAG Systems"] },
  { category: "DevOps", items: ["AWS", "Vercel", "Docker", "GitHub Actions", "CI/CD", "Monitoring"] },
];

const values = [
  {
    icon: Users,
    title: "Client-First",
    description: "Your success is my success. I take ownership of outcomes, not just deliverables.",
  },
  {
    icon: Zap,
    title: "Speed Matters",
    description: "Fast doesn't mean sloppy. I build quickly without cutting corners on quality.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Code that's maintainable, scalable, and doesn't require a PhD to understand.",
  },
  {
    icon: Palette,
    title: "Honest Pricing",
    description: "No hidden fees, no scope creep surprises. Clear pricing from the start.",
  },
];

export default function About() {
  const [activeSkill, setActiveSkill] = useState("Frontend");

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-teal-50/30 to-transparent dark:from-emerald-950/50 dark:via-teal-950/30 dark:to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">
              <Coffee className="w-4 h-4" />
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Built by a Developer,
              <span className="block bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                For Developers' Clients
              </span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              I'm not an agency pretending to be a team. I'm one developer who's been there, built that, and knows what works.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl" />
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                  alt="Developer at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-medium">5+ years building for the web</p>
                  <p className="text-white/80">100+ projects, 30+ happy clients</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Why "WebSwiftPro" Exists
              </h2>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
                <p>
                  I've worked with agencies before—as a developer inside them. I saw how clients paid 3x more than my salary just to fund offices, managers, and profits.
                </p>
                <p>
                  So I left. Started WebSwiftPro to offer the same quality work at honest prices. You get:
                </p>
                <ul className="space-y-2">
                  {[
                    "Direct access to the developer doing the work",
                    "No project managers eating into your budget",
                    "Faster communication, faster delivery",
                    "The same (or better) quality as agencies",
                    "40% savings on average",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L12 3" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">The Journey</h2>
            <p className="text-zinc-600 dark:text-zinc-400">From curious kid to full-stack developer</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 to-teal-500 -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 inline-block">
                      <span className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-zinc-900 relative z-10 flex-shrink-0" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Tech Stack</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Tools of the trade</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {skills.map((skill) => (
              <button
                key={skill.category}
                onClick={() => setActiveSkill(skill.category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeSkill === skill.category
                    ? "bg-emerald-500 text-white"
                    : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                }`}
              >
                {skill.category}
              </button>
            ))}
          </div>

          <motion.div
            key={activeSkill}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
          >
            {skills.find((s) => s.category === activeSkill)?.items.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">How I Work</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Values that guide every project</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's build something great. Free consultation, no obligations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-emerald-600 font-semibold text-lg hover:bg-white/90 transition-all"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

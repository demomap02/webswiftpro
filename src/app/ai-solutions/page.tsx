"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Brain, Workflow, Puzzle, ArrowRight, Check, ChevronRight, Sparkles } from "lucide-react";

const tabs = [
  {
    id: "chatbots",
    icon: Bot,
    title: "AI Chatbots",
    subtitle: "Intelligent Conversational Agents",
    description: "Deploy GPT-4 powered chatbots that understand your business, handle customer queries 24/7, and never take a vacation.",
    features: [
      { name: "Natural Language Understanding", desc: "Understands context, intent, and sentiment" },
      { name: "Multi-platform Integration", desc: "Works on your website, WhatsApp, Slack, and more" },
      { name: "CRM & Calendar Sync", desc: "Automatically updates leads and schedules meetings" },
      { name: "Analytics Dashboard", desc: "Track conversations, sentiment, and ROI" },
    ],
    useCases: ["Customer Support", "Lead Qualification", "Appointment Scheduling", "FAQ Automation"],
    color: "from-blue-500 to-purple-500",
  },
  {
    id: "agentic",
    icon: Brain,
    title: "Agentic AI",
    subtitle: "Autonomous Decision-Making AI",
    description: "Go beyond chatbots. Agentic AI makes decisions, completes multi-step workflows, and gets smarter over time—all without human intervention.",
    features: [
      { name: "Autonomous Task Completion", desc: "Completes complex tasks end-to-end" },
      { name: "Multi-system Orchestration", desc: "Works across your CRM, email, calendar, and tools" },
      { name: "Self-improving", desc: "Learns from interactions and improves over time" },
      { name: "Enterprise Security", desc: "SOC2 compliant, your data stays yours" },
    ],
    useCases: ["Lead Scoring", "Report Generation", "Data Entry", "Process Automation"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Business Automation",
    subtitle: "Workflow & Process Automation",
    description: "Automate repetitive tasks that drain your team's time. From email sequences to data processing—set it once, save hours every week.",
    features: [
      { name: "No-code Automation Builder", desc: "Visual workflow builder, no coding needed" },
      { name: "100+ Integrations", desc: "Connect your favorite tools seamlessly" },
      { name: "Trigger-based Actions", desc: "Automations fire when specific events happen" },
      { name: "Real-time Monitoring", desc: "Track every automation's performance" },
    ],
    useCases: ["Email Automation", "Data Processing", "Report Generation", "Task Assignment"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "integration",
    icon: Puzzle,
    title: "AI Integration",
    subtitle: "Add AI to Your Existing Tools",
    description: "Don't rip and replace your systems. We add AI capabilities to your existing CRM, website, app, or internal tools—minimal disruption, maximum impact.",
    features: [
      { name: "API-first Approach", desc: "Works with any system via robust APIs" },
      { name: "Custom Training", desc: "AI trained specifically on your data" },
      { name: "Gradual Rollout", desc: "Start with one team, expand as you see results" },
      { name: "Full Support", desc: "Training, documentation, and ongoing help" },
    ],
    useCases: ["CRM Enhancement", "Website Chat", "Internal Tools", "Mobile Apps"],
    color: "from-pink-500 to-rose-500",
  },
];

const faqs = [
  {
    q: "How long does it take to build an AI chatbot?",
    a: "A basic chatbot can be live in 1-2 weeks. Complex bots with custom training and integrations typically take 4-8 weeks.",
  },
  {
    q: "Will the AI understand my business context?",
    a: "Yes. We train the AI on your website, documents, FAQs, and past conversations so it speaks your language—literally.",
  },
  {
    q: "What if the AI gives wrong answers?",
    a: "We implement guardrails, fallback responses, and human handoff protocols. You can also review and approve responses before going live.",
  },
  {
    q: "How much does it cost?",
    a: "AI solutions start at ₹50,000 for basic chatbots. Agentic AI and custom automation typically range from ₹1-5 lakhs depending on complexity.",
  },
  {
    q: "Can I try it before committing?",
    a: "Yes! We offer a free pilot—deploy a basic chatbot on your site for 7 days so you can see the value before full commitment.",
  },
];

export default function AISolutions() {
  const [activeTab, setActiveTab] = useState("chatbots");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];
  const Icon = currentTab.icon;

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 via-purple-50/30 to-transparent dark:from-violet-950/50 dark:via-purple-950/30 dark:to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              AI Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Intelligence That
              <span className="block bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
                Works For You
              </span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              From intelligent chatbots to autonomous workflows—AI solutions designed to save time, reduce costs, and scale your business.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg"
                      : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <TabIcon className="w-4 h-4" />
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentTab.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{currentTab.title}</h2>
                  <p className="text-violet-600 dark:text-violet-400 font-medium mb-4">{currentTab.subtitle}</p>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                    {currentTab.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {currentTab.useCases.map((uc) => (
                      <span
                        key={uc}
                        className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm text-zinc-700 dark:text-zinc-300"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {currentTab.features.map((feature, i) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${currentTab.color} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{feature.name}</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Everything you need to know about our AI solutions.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform ${
                      openFaq === i ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-violet-500 to-purple-600">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Ready to Add AI to Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start with a free 7-day pilot. No commitment, no credit card.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-violet-600 font-semibold text-lg hover:bg-white/90 transition-all"
            >
              Start Free Pilot
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

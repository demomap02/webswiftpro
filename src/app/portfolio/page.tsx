"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce AI Chatbot",
    category: "ai",
    description: "GPT-4 powered chatbot handling 10,000+ daily conversations for a fashion e-commerce brand. Reduced support tickets by 85%.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    tags: ["AI", "Chatbot", "GPT-4", "E-commerce"],
    results: ["85% fewer support tickets", "24/7 customer service", "₹2L savings/month"],
    client: "Fashion Brand, Mumbai",
    timeline: "4 weeks",
  },
  {
    id: 2,
    title: "Fintech Analytics Dashboard",
    category: "web",
    description: "Real-time analytics dashboard with data visualization for a fintech startup. Custom charts, live data, and predictive insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "Next.js", "D3.js", "WebSocket"],
    results: ["40% increase in engagement", "Real-time data updates", "99.9% uptime"],
    client: "Fintech Startup, Bangalore",
    timeline: "6 weeks",
  },
  {
    id: 3,
    title: "D2C E-commerce Platform",
    category: "web",
    description: "Full-featured online store with AI recommendations, inventory management, and multi-currency support. ₹50L+ revenue in Q1.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "AI Recommendations"],
    results: ["₹50L+ Q1 revenue", "30% conversion rate", "Multi-currency"],
    client: "D2C Brand, Delhi",
    timeline: "8 weeks",
  },
  {
    id: 4,
    title: "Lead Qualification Agent",
    category: "ai",
    description: "Agentic AI that qualifies leads, scores them, and schedules demos automatically. Integrates with CRM and calendar.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    tags: ["Agentic AI", "CRM", "Automation"],
    results: ["3x more qualified leads", "50% faster follow-up", "Auto-scheduling"],
    client: "SaaS Company, Pune",
    timeline: "5 weeks",
  },
  {
    id: 5,
    title: "Neo-banking Mobile App",
    category: "mobile",
    description: "React Native banking app with biometric auth, UPI payments, and real-time notifications. 4.8★ rating on app stores.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["React Native", "Biometrics", "UPI", "Fintech"],
    results: ["4.8★ App Store rating", "50K+ downloads", "99.99% uptime"],
    client: "Neo-bank, Mumbai",
    timeline: "12 weeks",
  },
  {
    id: 6,
    title: "Content Automation System",
    category: "ai",
    description: "AI-powered system generating blog posts, social content, and email campaigns. 200+ pieces of content monthly.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    tags: ["AI", "GPT-4", "Automation", "Content"],
    results: ["200+ content pieces/month", "80% time saved", "Consistent posting"],
    client: "Media Agency, Chennai",
    timeline: "3 weeks",
  },
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Dev" },
  { id: "ai", label: "AI Solutions" },
  { id: "mobile", label: "Mobile Apps" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 via-orange-50/30 to-transparent dark:from-amber-950/50 dark:via-orange-950/30 dark:to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Projects That
              <span className="block bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Deliver Results
              </span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Real projects, real results. Every project below delivered measurable business impact.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-zinc-900 text-sm font-medium">
                          View Case Study
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">{selectedProject.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-medium text-zinc-500 mb-1">Client</h4>
                    <p className="font-medium">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-500 mb-1">Timeline</h4>
                    <p className="font-medium">{selectedProject.timeline}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-zinc-500 mb-3">Results</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.results.map((result) => (
                      <span
                        key={result}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L12 3" />
                        </svg>
                        {result}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <Link
                    href="/contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium hover:shadow-lg transition-all"
                  >
                    Start Similar Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can deliver similar results for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-amber-600 font-semibold text-lg hover:bg-white/90 transition-all"
            >
              Let's Talk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Bot, Brain, Smartphone, ShoppingCart, Cloud, ArrowRight, Check } from "lucide-react";

const services: {
  id: number;
  icon: any;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  color: string;
  href: string;
}[] = [
  {
    id: 1,
    icon: Code,
    title: "Custom Web Development",
    tagline: "Build to scale",
    description: "From landing pages to complex SaaS platforms, we build modern web applications that load fast, rank well, and convert visitors into customers.",
    features: [
      "Next.js & React with TypeScript",
      "Responsive & mobile-first design",
      "SEO optimized with structured data",
      "Performance-first architecture",
      "Secure & scalable infrastructure",
    ],
    color: "from-blue-500 to-cyan-500",
    href: "/contact",
  },
  {
    id: 2,
    icon: Bot,
    title: "AI Chatbot Development",
    tagline: "24/7 intelligent support",
    description: "Deploy intelligent chatbots trained on your business data. Handle customer queries, qualify leads, and schedule appointments automatically.",
    features: [
      "GPT-4 powered conversations",
      "Trained on your business data",
      "CRM & calendar integrations",
      "Multi-language support",
      "Analytics dashboard",
    ],
    color: "from-purple-500 to-pink-500",
    href: "/ai-solutions",
  },
  {
    id: 3,
    icon: Brain,
    title: "Agentic AI Automation",
    tagline: "Autonomous workflows",
    description: "Go beyond chatbots. Agentic AI makes decisions, completes multi-step tasks, and optimizes processes without human intervention.",
    features: [
      "Autonomous decision-making",
      "Multi-system orchestration",
      "Self-improving models",
      "Enterprise-grade security",
      "Custom training on your data",
    ],
    color: "from-orange-500 to-red-500",
    href: "/ai-solutions",
  },
  {
    id: 4,
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Native & cross-platform",
    description: "Beautiful, performant mobile apps for iOS and Android. One codebase, two platforms, faster time to market.",
    features: [
      "React Native & Flutter",
      "Native performance",
      "App Store & Play Store ready",
      "Push notifications",
      "Offline-first architecture",
    ],
    color: "from-green-500 to-emerald-500",
    href: "/portfolio",
  },
  {
    id: 5,
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    tagline: "Sell more, smarter",
    description: "High-converting online stores with AI-powered recommendations, automated inventory, and seamless payment experiences.",
    features: [
      "Shopify & custom development",
      "AI product recommendations",
      "Multi-currency & payments",
      "Inventory automation",
      "Analytics & reporting",
    ],
    color: "from-yellow-500 to-orange-500",
    href: "/contact",
  },
  {
    id: 6,
    icon: Cloud,
    title: "DevOps & Cloud",
    tagline: "Scale without limits",
    description: "Infrastructure that grows with you. CI/CD pipelines, monitoring, auto-scaling, and 99.9% uptime guaranteed.",
    features: [
      "AWS, GCP, Vercel, Railway",
      "CI/CD automation",
      "24/7 monitoring",
      "Auto-scaling infrastructure",
      "Cost optimization",
    ],
    color: "from-indigo-500 to-purple-500",
    href: "/contact",
  },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-transparent dark:from-blue-950/50 dark:via-purple-950/30 dark:to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Everything You Need to
              <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Scale Digitally
              </span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              From a simple website to complex AI automation—we build solutions that drive real business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isHovered = hoveredId === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative"
                >
                  <div
                    className={`relative bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 transition-all duration-500 ${
                      isHovered ? "shadow-2xl -translate-y-1" : "shadow-lg"
                    }`}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex items-start gap-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">{service.tagline}</span>
                        <h2 className="text-2xl font-bold mt-1 mb-3">{service.title}</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, j) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: isHovered ? 1 : 0.7, x: 0 }}
                          transition={{ duration: 0.3, delay: j * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-zinc-600 dark:text-zinc-400">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Link
                      href={service.href}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${service.color} text-white font-medium group-hover:shadow-lg transition-all`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Not Sure What You Need?
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
              Let's talk about your project. Free 15-minute consultation to help you find the right solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg hover:shadow-xl transition-all"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

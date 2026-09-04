"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sparkles, ArrowRight, Bot, Zap, Brain, Code, Rocket, Users } from "lucide-react";

const ThreeHero = dynamic(() => import("@/components/three-hero"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full animate-pulse" />
    </div>
  ),
});

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive websites built with Next.js, React, and TypeScript.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent conversational agents powered by GPT-4 and your data.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "Agentic AI",
    description: "Autonomous AI systems that make decisions and complete tasks.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamline workflows and save 70% of your team's time.",
    color: "from-green-500 to-emerald-500",
  },
];

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "4.9★", label: "Average Rating" },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Founder, TechStart",
    content: "WebSwiftPro built our AI chatbot that handles 80% of customer queries. Game-changer for our support team.",
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    role: "CEO, DigitalEdge",
    content: "We hired agencies before that charged 3x more for less. The freelancer approach is genuinely better.",
    avatar: "PS",
  },
  {
    name: "Amit Patel",
    role: "CTO, ShopEase",
    content: "The agentic AI automation saved us 40 hours per week. ROI was visible within the first month.",
    avatar: "AP",
  },
];

export default function Home() {
  const { theme } = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ThreeHero />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white dark:from-black/40 dark:via-black/20 dark:to-black z-[1]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/40 backdrop-blur-sm border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Solutions for Modern Business</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
          >
            <span className="block">Build Smarter with</span>
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI & Automation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto mb-10"
          >
            From intelligent chatbots to autonomous workflows—we build digital solutions that
            transform how businesses operate and grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-semibold text-lg hover:bg-white dark:hover:bg-zinc-900 transition-all"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Available for new projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>40% more affordable than agencies</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-zinc-400 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-zinc-400" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              What We Build
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Four core service areas that cover everything you need to scale your business digitally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-600 dark:text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900/50 dark:to-black">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Hire a Freelancer, Get Agency Quality
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Direct communication, faster delivery, and significantly more affordable than agencies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "40% More Affordable",
                description:
                  "No office rent, no account managers, no middlemen. Every rupee goes into building your product.",
                icon: "💰",
              },
              {
                title: "Faster Delivery",
                description:
                  "No internal approval processes. We move fast and ship faster—typical projects in 2-4 weeks.",
                icon: "⚡",
              },
              {
                title: "Direct Communication",
                description:
                  "Talk directly to the developer. No project managers, no wait times, no miscommunication.",
                icon: "🎯",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              <span>Client Love</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              What Our Clients Say
            </h2>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-12 border border-zinc-200 dark:border-zinc-800 shadow-xl"
            >
              <div className="text-6xl text-blue-500/30 mb-4">"</div>
              <p className="text-2xl text-zinc-700 dark:text-zinc-300 mb-8 leading-relaxed">
                {testimonials[currentTestimonial].content}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <div className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-zinc-500">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentTestimonial
                    ? "bg-blue-500 w-8"
                    : "bg-zinc-300 dark:bg-zinc-700"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
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
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project. Free 15-minute consultation, no obligations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-white text-blue-600 font-semibold text-lg hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-lg hover:bg-white/20 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

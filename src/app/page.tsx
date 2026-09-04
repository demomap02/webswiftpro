"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Bot, Zap, Brain, Code, Smartphone, ShoppingCart, Cloud, Users, TrendingUp, Clock, Star, ChevronRight, Play } from "lucide-react";
import { SectionHeader, BentoCard, BentoGrid, GlassCard, GradientButton, GlowBadge } from "@/components/ui-bits";
import { ParticleField } from "@/components/particle-field";
import ThreeChip from "@/components/three-chip";

const services = [
  { icon: Code, title: "Web Development", desc: "Next.js, React, TypeScript. Fast, SEO-friendly, scalable.", color: "from-blue-500 to-cyan-500", href: "/services" },
  { icon: Bot, title: "AI Chatbots", desc: "GPT-4 powered. Handle 80% of queries automatically.", color: "from-violet-500 to-purple-500", href: "/ai-solutions" },
  { icon: Brain, title: "Agentic AI", desc: "Autonomous workflows that make decisions.", color: "from-orange-500 to-red-500", href: "/ai-solutions" },
  { icon: Smartphone, title: "Mobile Apps", desc: "React Native & Flutter. iOS + Android.", color: "from-green-500 to-emerald-500", href: "/services" },
];

const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 4.9, suffix: "★", label: "Average Rating" },
];

const testimonials = [
  { name: "Rajesh K.", role: "Founder, TechStart", content: "WebSwiftPro built our AI chatbot that handles 80% of customer queries. Game-changer.", avatar: "RK" },
  { name: "Priya S.", role: "CEO, DigitalEdge", content: "We hired agencies before that charged 3x more for less. The freelancer approach is better.", avatar: "PS" },
  { name: "Amit P.", role: "CTO, ShopEase", content: "The agentic AI automation saved us 40 hours per week. ROI within first month.", avatar: "AP" },
];

const logos = ["TechCrunch", "Forbes", "Inc", "Wired", "FastCompany", "Vogue Business"];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticleField />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/60 via-white/40 to-white dark:from-black/60 dark:via-black/40 dark:to-black" />

        <div className="relative z-20 mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <GlowBadge className="inline-flex items-center gap-2 mb-8 border-blue-500/20 bg-blue-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Available for new projects
            </GlowBadge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
          >
            <span className="block">Build Smarter with</span>
            <span className="block bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              AI & Automation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-10"
          >
            From intelligent chatbots to autonomous workflows—we build digital solutions that transform how businesses operate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <GradientButton href="/contact">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </GradientButton>
            <Link
              href="/portfolio"
              className="px-8 py-3.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md text-zinc-900 dark:text-white font-semibold hover:bg-white dark:hover:bg-zinc-800 transition-all flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500"
          >
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-green-500" /> Response within 24h</span>
            <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-blue-500" /> 40% cheaper than agencies</span>
            <span className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> 5+ years experience</span>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-6 h-10 rounded-full border-2 border-zinc-300 dark:border-zinc-600 flex items-start justify-center p-2">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="What We Build"
            title="Everything You Need to Scale"
            description="Four core service areas. Endless possibilities."
          />

          <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={service.href}>
                    <BentoCard className="h-full text-center group cursor-pointer">
                      <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                      <p className="text-sm text-zinc-500">{service.desc}</p>
                    </BentoCard>
                  </Link>
                </motion.div>
              );
            })}
          </BentoGrid>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-zinc-50/50 to-white dark:from-zinc-950/50 dark:to-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm mb-6">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Hire a Freelancer,<br />
                <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                  Get Agency Quality
                </span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                No office rent, no account managers, no middlemen. Just direct access to a developer who's built 100+ projects.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "💰", title: "40% More Affordable", desc: "Direct pricing, no agency overhead" },
                  { icon: "⚡", title: "Faster Delivery", desc: "No internal processes slowing you down" },
                  { icon: "🎯", title: "Direct Communication", desc: "Talk to the developer, not a project manager" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/50">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <ThreeChip />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-zinc-50/50 to-transparent dark:from-zinc-950/50 dark:to-transparent">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader
            badge="Client Love"
            title="What Our Clients Say"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key="testimonial"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative"
            >
              <GlassCard className="p-10 text-center">
                <div className="text-7xl text-blue-500/20 mb-4">"</div>
                <p className="text-2xl text-zinc-700 dark:text-zinc-300 mb-8 leading-relaxed">
                  {testimonials[0].content}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold">
                    {testimonials[0].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{testimonials[0].name}</div>
                    <div className="text-sm text-zinc-500">{testimonials[0].role}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all ${i === 0 ? "w-8 bg-blue-500" : "w-2 bg-zinc-300 dark:bg-zinc-700"}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-sm text-zinc-500 uppercase tracking-wider">Trusted by</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50">
            {logos.map((logo) => (
              <span key={logo} className="text-xl md:text-2xl font-bold text-zinc-400">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 p-12 md:p-16 text-center text-white"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project. Free 15-minute consultation, no obligations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton href="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </GradientButton>
                <Link
                  href="/services"
                  className="px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  View Services
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

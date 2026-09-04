"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useTheme } from "next-themes";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Custom Web Development",
      description: "Tailored websites and web applications built with modern technologies.",
      features: ["Responsive Design", "Performance Optimized", "SEO Friendly", "Secure"],
      cta: "Learn More",
    },
    {
      id: 2,
      title: "AI Chatbot Development",
      description: "Intelligent conversational agents that understand and respond to your customers.",
      features: ["Natural Language Processing", "24/7 Support", "Multi-language", "Analytics"],
      cta: "Explore AI",
    },
    {
      id: 3,
      title: "Agentic AI Automation",
      description: "Autonomous AI systems that handle complex business workflows.",
      features: ["Task Automation", "Decision Making", "Self-learning", "Scalable"],
      cta: "See Automation",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Native Performance", "App Store Ready", "Push Notifications", "Offline Support"],
      cta: "View Portfolio",
    },
    {
      id: 5,
      title: "E-commerce Solutions",
      description: "High-converting online stores with seamless payment integrations.",
      features: ["Secure Payments", "Inventory Management", "Analytics", "Multi-currency"],
      cta: "Build Store",
    },
    {
      id: 6,
      title: "DevOps & Cloud Services",
      description: "Infrastructure automation, CI/CD pipelines, and cloud optimization.",
      features: ["Scalable Infrastructure", "Zero Downtime", "Monitoring", "Cost Optimization"],
      cta: "Optimize Now",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="py-16 text-center bg-gradient-to-b from-blue-50 to-indigo-100/20 dark:from-blue-900 dark:to-indigo-900/30"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your digital presence and drive business growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-7xl px-6 py-12"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: service.id * 0.1, ease: "easeOut" }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3a2 2 0 012-2h6.38m-1.88 9.2a1 1 0 001.12 1.12L21.12 17H7l-8 4V10a2 2 0 012-2z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-center">{service.title}</h2>
                    <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-center">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {service.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button
                    className="w-full mt-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 transition-colors hover:from-blue-600 hover:to-purple-700"
                  >
                    {service.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
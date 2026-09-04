"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const [heroContent, setHeroContent] = useState({
    title: "Transform Your Business with Intelligent Automation",
    subtitle: "WebSwiftPro delivers cutting-edge AI-powered solutions that transform how businesses operate and grow.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    cta: "Get Started",
  });

  useEffect(() => {
    const delay = 2000;
    const timer = setTimeout(() => {
      setHeroContent({
        title: "WebSwiftPro – AI-Powered Solutions for Modern Business",
        subtitle: "From smart chatbots to automated workflows – we build the future of digital experiences.",
        image: "https://images.unsplash.com/photo-1677442136105555555?w=800&h=600&fit=crop",
        cta: "Explore Our Services",
      });
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative mx-auto max-w-7xl py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative h-[80vh] lg:h-[70vh] overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 p-8 md:p-12 lg:p-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            {heroContent.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-zinc-900 mb-6"
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.button
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            onClick={() => (window.location.href = "/services")}
            className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
          >
            {heroContent.cta}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-2xl font-bold mb-4"
            >
              Latest AI Chatbot Solution
            </motion.h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              We built an intelligent chatbot that handles customer inquiries, schedules appointments, and provides personalized recommendations—all powered by GPT-4 and fine-tuned on your business data.
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">AI</span>
              <span>Real-time interaction</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-2xl font-bold mb-4"
            >
              Agentic AI Automation
            </motion.h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Our agentic AI automates repetitive tasks—from lead scoring to report generation—so your team can focus on strategic growth.
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">🤖</span>
              <span>Full autonomy</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 110 4m0-4a2 2 0 010 2m-2 0a2 2 0 110 4m0-4a2 2 0 010 2m-5 0a2 2 0 110 4" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Visitors</h3>
                <p className="text-2xl font-bold text-zinc-900">12.4K</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Leads</h3>
                <p className="text-2xl font-bold text-zinc-900">340</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-6h-2v2h-2v-2h-2v2h-2v-2h2v2h2v-2zm-6 0V9a2 2 0 012-2h2a2 2 0 012 2v2M6 21h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Projects</h3>
                <p className="text-2xl font-bold text-zinc-900">18</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3a2 2 0 012-2h6.38m-1.88 9.2a1 1 0 001.12 1.12L21.12 17H7l-8 4V10a2 2 0 012-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Ratings</h3>
                <p className="text-2xl font-bold text-zinc-900">4.9</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
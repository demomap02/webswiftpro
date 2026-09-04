"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useTheme } from "next-themes";

export default function Admin() {
  const { theme } = useTheme();

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)] bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center py-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Admin Dashboard
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Manage your WebSwiftPro website content, services, portfolio, and blog.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-10 h-10 rounded-md bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="text-xl font-medium mb-3">Services</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Manage service categories and individual services.
              </p>
              <div className="mt-4">
                <a
                  href="/admin/services"
                  className="w-full text-center px-4 py-2 rounded bg-blue-500 text-white font-medium hover:bg-blue-600"
                >
                  Manage Services
                </a>
              </div>
            </motion.div>

            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-10 h-10 rounded-md bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.5 0-3 .5-4 1.5-2.5 1-2.5 2.65-1 4.25v7.33l2-.666m13.794-6.364L3.146 6.263a8.989 8.989 0 00-4.796 0L.225 11.63a8.989 8.989 0 000 4.796l12.89 5.756a8.989 8.989 0 004.796 0l6.887-3.043" />
                </svg>
              </div>

              <h3 className="text-xl font-medium mb-3">Portfolio</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Add and manage your portfolio projects.
              </p>
              <div className="mt-4">
                <a
                  href="/admin/portfolio"
                  className="w-full text-center px-4 py-2 rounded bg-green-500 text-white font-medium hover:bg-green-600"
                >
                  Manage Portfolio
                </a>
              </div>
            </motion.div>

            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-10 h-10 rounded-md bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.5a5 5 0 015 5v2.75" />
                </svg>
              </div>

              <h3 className="text-xl font-medium mb-3">Blog</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                View and manage AI-generated and manual blog posts.
              </p>
              <div className="mt-4">
                <a
                  href="/admin/blog"
                  className="w-full text-center px-4 py-2 rounded bg-purple-500 text-white font-medium hover:bg-purple-600"
                >
                  Manage Blog
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
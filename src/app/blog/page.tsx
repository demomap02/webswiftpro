"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Clock, Sparkles, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Why Your Business Needs an AI Chatbot in 2025",
    excerpt: "AI chatbots aren't just fancy tools anymore—they're essential. Here's what they can do for your business and how to get started without breaking the bank.",
    category: "AI",
    date: "Dec 15, 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "I Stopped Hiring Agencies. Here's What I Learned.",
    excerpt: "After 5 years of working with agencies as both employee and client, I realized the freelancer model isn't just cheaper—it's actually better in most cases.",
    category: "Business",
    date: "Dec 12, 2024",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Agentic AI: The Next Wave of Business Automation",
    excerpt: "Chatbots answer questions. Agentic AI makes decisions. Here's why the next wave of automation will be autonomous, and what that means for your business.",
    category: "AI",
    date: "Dec 10, 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1677442136105555555?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Real Cost of Building a SaaS MVP in India (2024)",
    excerpt: "Most founders overspend on their first product. Here's a realistic breakdown of MVP costs and where to actually invest your money for max ROI.",
    category: "Development",
    date: "Dec 8, 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
  },
  {
    id: 5,
    title: "SEO for the AI Era: How to Get Found by ChatGPT",
    excerpt: "Traditional SEO is changing. AI search engines like ChatGPT and Perplexity are the new frontier. Learn how to optimize for AI-powered discovery.",
    category: "Marketing",
    date: "Dec 5, 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Automating My Freelance Business: What Actually Worked",
    excerpt: "I automated lead gen, invoicing, and client communication. Here's my honest review of what saved time and what was a complete waste of money.",
    category: "Business",
    date: "Dec 2, 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  },
];

const categories = ["All", "AI", "Business", "Development", "Marketing"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featured = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const others = filteredPosts.filter((p) => p.id !== featured.id);

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/50 via-blue-50/30 to-transparent dark:from-cyan-950/50 dark:via-blue-950/30 dark:to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              New post every morning at 6 AM
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Insights on AI &
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Modern Business
              </span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Daily articles on AI, web development, and building digital products that scale.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group cursor-pointer mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-all">
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500 text-white">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-blue-500 font-medium group-hover:gap-3 transition-all">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.article>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group cursor-pointer bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-3xl p-10 md:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Daily insights in your inbox
              </h2>
              <p className="text-white/90 mb-8 max-w-md mx-auto">
                Join 500+ founders and developers who get our daily 6 AM digest.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail("");
                  alert("Thanks for subscribing!");
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-full bg-white text-blue-600 font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

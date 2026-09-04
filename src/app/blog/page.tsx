"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { blogPosts, categories } from "@/lib/blog-data";
import { SectionHeader, BentoCard } from "@/components/ui-bits";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;
    if (activeCategory !== "All") {
      posts = posts.filter((p) => p.category === activeCategory);
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.excerpt.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      );
    }
    return posts;
  }, [activeCategory, searchQuery]);

  const featured = blogPosts[0];

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-violet-50/30 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />
        <div className="absolute top-1/4 left-1/4 h-72 w-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeader
            badge={
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                <span>New post every morning at 6 AM</span>
              </>
            }
            title="The WebSwiftPro Blog"
            description="Insights on AI, web development, and building digital products that actually scale."
          />

          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/60 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-800 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-zinc-200/50 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-800/50"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          {activeCategory === "All" && !searchQuery && (
            <Link href={`/blog/${featured.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group mb-16"
              >
                <BentoCard span={4} className="grid md:grid-cols-2 gap-0 p-0 overflow-hidden">
                  <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={featured.coverImage}
                      alt={featured.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-violet-500 text-white">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-sm text-zinc-500 mb-4">
                      <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium">
                        {featured.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featured.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featured.readTime} min
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-violet-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {featured.title}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-6">{featured.excerpt}</p>
                    <div className="flex items-center gap-2 text-blue-500 font-medium group-hover:gap-3 transition-all">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </BentoCard>
              </motion.article>
            </Link>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts
              .filter((p) => !(activeCategory === "All" && !searchQuery && p.slug === featured.slug))
              .map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <BentoCard className="h-full p-0 overflow-hidden">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime} min
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-blue-500 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">
                            {post.author.avatar}
                          </div>
                          <span className="text-xs text-zinc-500">{post.author.name}</span>
                        </div>
                      </div>
                    </BentoCard>
                  </Link>
                </motion.article>
              ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-zinc-500">No articles found. Try a different search.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 p-10 md:p-12 backdrop-blur-xl"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-violet-500/20" />
            <div className="relative z-10 text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Get AI & automation insights in your inbox
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
                Join 500+ founders and developers. One fresh article every morning.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks for subscribing!");
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 rounded-full border border-white/20 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <p className="text-xs text-zinc-500 mt-4">No spam. Unsubscribe anytime.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

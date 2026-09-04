"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowLeft, ArrowRight, Linkedin, Twitter, Link as LinkIcon, Check } from "lucide-react";
import { useState } from "react";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-data";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-blue-500 hover:underline">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(params.slug, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sections = post.content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace("## ", ""));

  return (
    <article className="min-h-screen">
      <header className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-violet-50/20 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950" />
        <div className="absolute top-0 left-1/4 h-72 w-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-1/4 h-80 w-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="relative mx-auto max-w-4xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-blue-500 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 text-sm mb-6">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-600 dark:text-blue-400 font-medium border border-blue-500/20">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-zinc-500">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1 text-zinc-500">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">{post.excerpt}</p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold">
                  {post.author.avatar}
                </div>
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-zinc-500">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-zinc-500 mr-2">Share:</span>
                <button
                  onClick={handleCopyLink}
                  className="h-9 w-9 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
                </button>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://webswiftpro.in/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <div className="relative mx-auto max-w-7xl px-6 mb-12">
        <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-zinc-600 dark:prose-p:text-zinc-300 prose-p:leading-relaxed prose-h2:bg-gradient-to-r prose-h2:from-blue-500 prose-h2:to-violet-500 prose-h2:bg-clip-text prose-h2:text-transparent prose-table:my-6 prose-th:bg-zinc-100 dark:prose-th:bg-zinc-800 prose-th:p-3 prose-td:p-3"
          >
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} id={block.replace("## ", "").toLowerCase().replace(/\s+/g, "-")}>
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("|")) {
                const rows = block.split("\n").filter((r) => r.startsWith("|"));
                if (rows.length >= 2) {
                  const headers = rows[0].split("|").filter(Boolean).map((h) => h.trim());
                  const dataRows = rows.slice(2);
                  return (
                    <div key={i} className="my-8 overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr>
                            {headers.map((h) => (
                              <th key={h} className="bg-zinc-100 dark:bg-zinc-800 p-3 text-left font-semibold">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {dataRows.map((row, ri) => (
                            <tr key={ri} className="border-t border-zinc-200 dark:border-zinc-800">
                              {row.split("|").filter(Boolean).map((cell, ci) => (
                                <td key={ci} className="p-3">
                                  {cell.trim()}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                return null;
              }
              if (block.match(/^[-*]\s/m)) {
                const items = block.split("\n").filter((l) => l.match(/^[-*]\s/));
                return (
                  <ul key={i} className="my-6 space-y-2 list-none pl-0">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{
                          __html: item.replace(/^[-*]\s/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.match(/^\d+\.\s/m)) {
                const items = block.split("\n").filter((l) => l.match(/^\d+\.\s/));
                return (
                  <ol key={i} className="my-6 space-y-2 list-none pl-0 counter-reset-item">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-0.5 h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {j + 1}
                        </span>
                        <span dangerouslySetInnerHTML={{
                          __html: item.replace(/^\d+\.\s/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        }} />
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p
                  key={i}
                  className="my-4 text-zinc-600 dark:text-zinc-300 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  }}
                />
              );
            })}

            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-md not-prose">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold">
                  W
                </div>
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-zinc-500">{post.author.role}</p>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Solo founder, full-stack developer, and AI enthusiast. Building WebSwiftPro to deliver
                agency-quality work without the agency overhead.
              </p>
            </div>
          </motion.div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
                On this page
              </h4>
              <ul className="space-y-2 border-l border-zinc-200 dark:border-zinc-800">
                {sections.map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block -ml-px pl-4 border-l-2 border-transparent hover:border-blue-500 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors"
                    >
                      {section}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-white/10 backdrop-blur-md">
                <p className="text-sm font-semibold mb-2">Want updates like this?</p>
                <p className="text-xs text-zinc-500 mb-4">Daily insights on AI & dev in your inbox.</p>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <button className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group"
                >
                  <article className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={related.coverImage}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        {related.category}
                      </span>
                      <h3 className="font-bold mt-2 mb-2 line-clamp-2 group-hover:text-blue-500 transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-zinc-500 line-clamp-2">{related.excerpt}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 p-10 md:p-12 backdrop-blur-xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Need AI for your business?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
              Let's build a custom AI solution for your business. Free 15-min consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

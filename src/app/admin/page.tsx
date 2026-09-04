"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, FolderOpen, FileText, Mail, TrendingUp, Users, Eye, MessageSquare, Bot, Sparkles, ArrowUpRight } from "lucide-react";

const stats = [
  { label: "Total Visitors", value: "12,458", change: "+12.5%", icon: Eye, color: "from-blue-500 to-cyan-500" },
  { label: "Active Leads", value: "47", change: "+8.2%", icon: Users, color: "from-purple-500 to-pink-500" },
  { label: "Blog Posts", value: "23", change: "+2 today", icon: FileText, color: "from-orange-500 to-red-500" },
  { label: "Conversions", value: "8.4%", change: "+1.2%", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
];

const quickActions = [
  { title: "Services", description: "Manage service categories", icon: Briefcase, color: "blue", href: "/services" },
  { title: "Portfolio", description: "Update projects", icon: FolderOpen, color: "green", href: "/portfolio" },
  { title: "Blog Posts", description: "AI-generated & manual", icon: FileText, color: "purple", href: "/blog" },
  { title: "Messages", description: "View contact forms", icon: Mail, color: "orange", href: "/admin/messages" },
];

const recentSubmissions = [
  { name: "Rajesh Kumar", service: "AI Chatbot", time: "2 hours ago", status: "new" },
  { name: "Priya Sharma", service: "Web Development", time: "5 hours ago", status: "replied" },
  { name: "Amit Patel", service: "Agentic AI", time: "1 day ago", status: "new" },
];

export default function Admin() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold">Admin Dashboard</h1>
                <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                  Welcome back! Here's what's happening with your site.
                </p>
              </div>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg transition-all flex items-center gap-2">
                <Bot className="w-4 h-4" />
                Generate Blog Post
              </button>
            </div>
          </motion.div>

          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {["overview", "services", "portfolio", "blog", "messages"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === "overview" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full">
                          {stat.change}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-500 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Recent Submissions</h2>
                    <a href="/admin/messages" className="text-sm text-blue-500 hover:underline">View all</a>
                  </div>
                  <div className="space-y-3">
                    {recentSubmissions.map((sub) => (
                      <div
                        key={sub.name}
                        className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                            {sub.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <p className="font-medium">{sub.name}</p>
                            <p className="text-sm text-zinc-500">{sub.service} • {sub.time}</p>
                          </div>
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          sub.status === "new"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        }`}>
                          {sub.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white"
                >
                  <Sparkles className="w-8 h-8 mb-4 text-yellow-300" />
                  <h3 className="text-xl font-bold mb-2">AI Blog Generator</h3>
                  <p className="text-white/90 text-sm mb-6">
                    Auto-generates a fresh blog post every morning at 6 AM. Configure topics and tone.
                  </p>
                  <div className="bg-white/20 rounded-xl p-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span>Status</span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Active
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span>Next post in</span>
                      <span className="font-semibold">14h 23m</span>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2.5 rounded-xl bg-white text-blue-600 font-medium text-sm hover:bg-white/90 transition-colors">
                    Configure Settings
                  </button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-6"
              >
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickActions.map((action) => {
                    const Icon = action.icon;
                    return (
                      <a
                        key={action.title}
                        href={action.href}
                        className="group bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg hover:-translate-y-1 transition-all"
                      >
                        <div className={`w-10 h-10 rounded-xl bg-${action.color}-100 dark:bg-${action.color}-900/30 flex items-center justify-center mb-3`}>
                          <Icon className={`w-5 h-5 text-${action.color}-600`} />
                        </div>
                        <h3 className="font-semibold mb-1 flex items-center gap-1">
                          {action.title}
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-zinc-500">{action.description}</p>
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}

          {activeTab !== "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-12 border border-zinc-200 dark:border-zinc-800 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Manager
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md mx-auto">
                This section allows you to manage your {activeTab}. Full CRUD interface coming soon.
              </p>
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium">
                Coming Soon
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

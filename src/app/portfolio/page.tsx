import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useTheme } from "next-themes";
import { useState } from "react";

export const metadata = {
  title: "Portfolio - WebSwiftPro",
  description: "Explore our work. From AI chatbots to full-stack web applications.",
};

export default function Portfolio() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI Customer Support Bot",
      category: "ai",
      description: "A GPT-4 powered chatbot handling 10,000+ daily conversations for an e-commerce brand.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      tags: ["AI", "Chatbot", "GPT-4"],
      results: "85% reduction in support tickets",
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      category: "web",
      description: "Analytics dashboard with real-time data visualization for a fintech startup.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      tags: ["React", "Next.js", "D3.js"],
      results: "40% increase in user engagement",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      category: "web",
      description: "Full-featured online store with AI-powered recommendations and inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tags: ["Shopify", "Custom Theme", "AI"],
      results: "₹50L+ revenue in first quarter",
    },
    {
      id: 4,
      title: "Lead Qualification Agent",
      category: "ai",
      description: "Agentic AI that automatically qualifies leads and schedules demos 24/7.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop",
      tags: ["Agentic AI", "Automation", "CRM"],
      results: "3x increase in qualified leads",
    },
    {
      id: 5,
      title: "Mobile Banking App",
      category: "mobile",
      description: "React Native app for a neo-banking startup with biometric authentication.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
      tags: ["React Native", "Biometrics", "Fintech"],
      results: "4.8★ rating on app stores",
    },
    {
      id: 6,
      title: "Content Automation System",
      category: "ai",
      description: "AI-powered system that auto-generates blog posts, social media content, and email campaigns.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop",
      tags: ["AI", "Content", "Automation"],
      results: "200+ pieces of content monthly",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "ai", label: "AI Solutions" },
    { id: "mobile", label: "Mobile Apps" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="py-16 text-center bg-gradient-to-b from-amber-50 to-orange-100/20 dark:from-amber-900 dark:to-orange-900/30"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Work</h1>
          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            A showcase of projects that delivered real business results.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-7xl px-6 py-8"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                    : "bg-white dark:bg-gray-900 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:shadow-md"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mx-auto max-w-7xl px-6 py-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">View Project →</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                      ✨ {project.results}
                    </p>
                  </div>
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
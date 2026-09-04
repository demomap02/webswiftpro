import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useTheme } from "next-themes";

export const metadata = {
  title: "Blog - WebSwiftPro",
  description:
    "Insights on AI, web development, automation, and building successful digital products.",
};

export default function Blog() {
  const { theme } = useTheme();

  const blogPosts = [
    {
      id: 1,
      title: "How AI Chatbots Are Replacing Customer Support Teams",
      excerpt:
        "The future of customer support isn't human-free, but AI is handling 80% of queries. Here's how businesses are adapting.",
      category: "AI",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      author: "WebSwiftPro",
    },
    {
      id: 2,
      title: "Why I Stopped Using Agencies and Started Building Myself",
      excerpt:
        "After 5 years of working with agencies, I realized the real ROI comes from direct developer relationships.",
      category: "Business",
      date: "Dec 12, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
      author: "WebSwiftPro",
    },
    {
      id: 3,
      title: "Agentic AI: Beyond Chatbots to Autonomous Workflows",
      excerpt:
        "Chatbots answer questions. Agentic AI makes decisions. Here's why the next wave of automation will be autonomous.",
      category: "AI",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-167744213610in-078969dfc5f?w=400&h=250&fit=crop",
      author: "WebSwiftPro",
    },
    {
      id: 4,
      title: "The Real Cost of Building a MVP in 2024",
      excerpt:
        "Most founders overspend on their first product. Here's a realistic breakdown of MVP costs and where to invest.",
      category: "Development",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      author: "WebSwiftPro",
    },
    {
      id: 5,
      title: "SEO for AI Era: How to Get Found by ChatGPT",
      excerpt:
        "Traditional SEO is changing. Learn how to optimize your business for AI-powered search and discovery.",
      category: "Marketing",
      date: "Dec 5, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=250&fit=crop",
      author: "WebSwiftPro",
    },
    {
      id: 6,
      title: "Automating My Freelance Business: What Worked and What Didn't",
      excerpt:
        "I automated lead gen, invoicing, and client communication. Here's my honest review of what actually saves time.",
      category: "Business",
      date: "Dec 2, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      author: "WebSwiftPro",
    },
  ];

  const categories = ["All", "AI", "Business", "Development", "Marketing"];

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="py-16 text-center bg-gradient-to-b from-cyan-50 to-blue-100/20 dark:from-cyan-900 dark:to-blue-900/30"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Auto-generated daily
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            The Blog
          </h1>
          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Fresh insights on AI, web development, and building digital products that scale.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-7xl px-6 py-8"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full text-sm font-medium bg-white dark:bg-gray-900 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mx-auto max-w-7xl px-6 py-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-black/90 text-zinc-700 dark:text-zinc-300">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <span className="text-sm text-zinc-500">By {post.author}</span>
                    <button className="text-sm font-medium text-blue-500 hover:text-blue-600">
                      Read more →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mx-auto max-w-3xl px-6 py-12"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get fresh insights in your inbox
            </h2>
            <p className="text-white/80 mb-6">
              Join 500+ founders and developers who get our weekly digest on AI and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-8 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
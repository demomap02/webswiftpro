import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useTheme } from "next-themes";

export const metadata = {
  title: "About - WebSwiftPro",
  description:
    "The story behind WebSwiftPro. Learn how a passionate developer is changing the game for businesses of all sizes.",
};

export default function About() {
  const { theme } = useTheme();

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "∞", label: "Innovation Mindset" },
  ];

  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Python",
    "Three.js", "Framer Motion", "AI/ML", "Cloud", "Mobile",
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)]">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="py-16 text-center bg-gradient-to-b from-emerald-50 to-teal-100/20 dark:from-emerald-900 dark:to-teal-900/30"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About WebSwiftPro
          </h1>
          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
            A solo developer on a mission to deliver agency-quality work without the agency overhead.
          </p>
        </motion.div>

        {/* Founder Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-5xl px-6 py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop"
                alt="Founder"
                className="rounded-3xl relative z-10 w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Why a Freelancer? <br />Why Not an Agency?
              </h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
                When you hire an agency, you pay for office rent, account managers, project coordinators, and a senior partner's profit margin. With WebSwiftPro, every rupee goes into building the product.
              </p>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
                You talk directly to the developer building your project—no middlemen, no communication delays, no re-explaining your vision to multiple people.
              </p>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
                I've been developing for over 5 years, worked with 100+ clients, and delivered projects ranging from simple websites to complex AI-powered applications. You get all that experience at a fraction of agency costs.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L12 3l4 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Direct Communication</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Talk directly to the developer. No project managers, no wait times.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3a2 2 0 012-2h6.38m-1.88 9.2a1 1 0 001.12 1.12L21.12 17H7l-8 4V10a2 2 0 012-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Faster Turnaround</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      No internal processes. We move fast and ship faster.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L12 3l4 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Affordable Without Compromise</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Save up to 40% compared to agencies, with the same or better quality.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mx-auto max-w-7xl px-6 py-12"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Numbers That Speak
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 text-center mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-5xl px-6 py-12"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
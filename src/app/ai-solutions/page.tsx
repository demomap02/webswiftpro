"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useRouter } from "next/navigation";

export default function AISolutions() {
  const router = useRouter();

  const aiFeatures = [
    {
      title: "Custom AI Chatbots",
      description:
        "We build intelligent chatbots trained on your business data, capable of handling customer support, lead qualification, and appointment scheduling 24/7.",
      benefits: [
        "Instant response times",
        "Multi-language support",
        "CRM integration",
        "Analytics dashboard",
      ],
    },
    {
      title: "Agentic AI Automation",
      description:
        "Our agentic AI systems autonomously make decisions, complete tasks, and optimize workflows across your entire business stack without human intervention.",
      benefits: [
        "Full task autonomy",
        "Decision-making capabilities",
        "Workflow orchestration",
        "Self-improving models",
      ],
    },
    {
      title: "Business Process Automation",
      description:
        "From lead generation to report generation, we automate repetitive tasks so your team can focus on strategic growth and creative work.",
      benefits: [
        "Time savings of up to 70%",
        "Error reduction",
        "Cost efficiency",
        "Scalable workflows",
      ],
    },
    {
      title: "AI Integration & Customization",
      description:
        "We integrate AI capabilities into your existing systems, from CRMs and ERPs to custom internal tools, ensuring seamless operation and maximum ROI.",
      benefits: [
        "Seamless integration",
        "Custom model training",
        "Data security",
        "Scalable architecture",
      ],
    },
  ];

  const useCases = [
    {
      title: "E-commerce",
      description:
        "AI-powered product recommendations, automated customer support, and cart recovery that increases conversion rates.",
    },
    {
      title: "SaaS",
      description:
        "User onboarding automation, usage analytics, and personalized feature recommendations for SaaS platforms.",
    },
    {
      title: "Real Estate",
      description:
        "Lead qualification, property matching, and 24/7 inquiry handling for real estate agencies.",
    },
    {
      title: "Healthcare",
      description:
        "Appointment scheduling, patient queries, and medication reminders with HIPAA-compliant AI solutions.",
    },
    {
      title: "Education",
      description:
        "Student support, course recommendations, and automated grading assistance for educational institutions.",
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
          className="py-16 text-center bg-gradient-to-b from-violet-50 to-purple-100/20 dark:from-violet-900 dark:to-purple-900/30"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            AI & Automation Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Intelligent solutions designed to transform how you do business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-7xl px-6 py-12"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our AI Capabilities
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-3"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L12 3l4 4" />
                      </svg>
                      <span className="text-zinc-600 dark:text-zinc-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mx-auto max-w-7xl px-6 py-12 bg-gradient-to-b from-indigo-50 to-violet-50 dark:from-indigo-900 dark:to-violet-900"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Industry Use Cases
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-10 h-10 rounded-md bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6v6m4-6v6H4" />
                  </svg>
                </div>

                <h3 className="text-xl font-medium mb-3">{useCase.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
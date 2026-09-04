"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { toast } from "sonner";
import { organizationJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";


export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent! I'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)]">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="py-16 text-center bg-gradient-to-b from-pink-50 to-rose-100/20 dark:from-pink-900 dark:to-rose-900/30"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Let's discuss your project. Quick response, honest pricing, no BS.
          </p>
        </motion.div>

        {/* Contact Form & Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-7xl px-6 py-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800"
            >
              <h2 className="text-2xl font-bold mb-6">Send a message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="ai-chatbot">AI Chatbot</option>
                    <option value="agentic-ai">Agentic AI Automation</option>
                    <option value="mobile">Mobile App</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xl font-bold mb-4">Email</h3>
                <p className="text-zinc-600 dark:text-zinc-400">hello@webswiftpro.in</p>
                <p className="text-sm text-zinc-500 mt-2">
                  Response time: Within 24 hours
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xl font-bold mb-4">Phone & WhatsApp</h3>
                <p className="text-zinc-600 dark:text-zinc-400">+91 98765 43210</p>
                <p className="text-sm text-zinc-500 mt-2">Mon-Sat, 10AM - 8PM IST</p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xl font-bold mb-4">Location</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Mumbai, India</p>
                <p className="text-sm text-zinc-500 mt-2">
                  Available for remote work worldwide
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                <p className="text-white/90 mb-4">
                  Need to talk now? Book a 15-minute free consultation call.
                </p>
                <button className="w-full px-6 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-white/90 transition-colors">
                  Book a Call
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
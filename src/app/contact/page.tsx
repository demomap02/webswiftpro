"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight, Check, Send } from "lucide-react";

const services = [
  "Web Development",
  "AI Chatbot",
  "Agentic AI",
  "Mobile App",
  "E-commerce",
  "Consulting",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-12"
        >
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md">
            Thanks for reaching out. I'll get back to you within 24 hours. Keep an eye on your inbox!
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
            }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 via-rose-50/30 to-transparent dark:from-pink-950/50 dark:via-rose-950/30 dark:to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Let's Build
              <span className="block bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
                Something Great
              </span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Free 15-minute consultation. No obligations. Just a conversation about your project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-10 border border-zinc-200 dark:border-zinc-800">
                <h2 className="text-2xl font-bold mb-6">Send a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="<50k">Less than ₹50,000</option>
                      <option value="50k-1l">₹50,000 - ₹1 Lakh</option>
                      <option value="1l-5l">₹1 Lakh - ₹5 Lakhs</option>
                      <option value=">5l">More than ₹5 Lakhs</option>
                      <option value="flexible">Flexible / Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold text-lg hover:shadow-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">hello@webswiftpro.in</p>
                    <p className="text-sm text-zinc-500 mt-1">Replies within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone & WhatsApp</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">+91 98765 43210</p>
                    <p className="text-sm text-zinc-500 mt-1">Mon-Sat, 10 AM - 8 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Mumbai, India</p>
                    <p className="text-sm text-zinc-500 mt-1">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Usually within 2-4 hours</p>
                    <p className="text-sm text-zinc-500 mt-1">Weekends included</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Quick Response</h3>
                <p className="text-white/90 text-sm mb-4">
                  Need to talk now? Book a free 15-minute call.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-pink-600 font-medium text-sm hover:bg-white/90 transition-colors"
                >
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

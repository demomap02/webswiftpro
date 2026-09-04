import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebSwiftPro - Web Development, AI Chatbots & Automation",
  description:
    "Modern web development, AI chatbot solutions, and intelligent automation services. From startups to enterprises, we build solutions that scale.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "WebSwiftPro - Web Development, AI Chatbots & Automation",
    description:
      "Modern web development, AI chatbot solutions, and intelligent automation services. From startups to enterprises, we build solutions that scale.",
    url: "https://webswiftpro.in",
    siteName: "WebSwiftPro",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebSwiftPro - Web Development, AI Chatbots & Automation",
    description:
      "Modern web development, AI chatbot solutions, and intelligent automation services. From startups to enterprises, we build solutions that scale.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
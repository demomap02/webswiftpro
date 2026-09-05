import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebSwiftPro — Web Development, AI Chatbots & Automation",
  description: "Modern web development, AI chatbot solutions, and intelligent automation services. From startups to enterprises, we build solutions that scale.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "WebSwiftPro — Web Development, AI Chatbots & Automation",
    description: "Modern web development, AI chatbot solutions, and intelligent automation services. From startups to enterprises, we build solutions that scale.",
    url: "https://webswiftpro.in",
    siteName: "WebSwiftPro",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
"use client";

import { useEffect, useState } from "react";

export function ParticleField() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      {/* Floating dots */}
      {Array.from({ length: 20 }).map((_, i) => {
        const size = Math.random() * 4 + 2;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/40 animate-float-dot"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl animate-float-slow-delay" />
      <div className="absolute top-1/2 right-1/3 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl animate-float-slow" />

      <style jsx>{`
        @keyframes float-dot {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(20px, -30px); opacity: 0.8; }
          50% { transform: translate(-10px, 20px); opacity: 0.5; }
          75% { transform: translate(30px, 10px); opacity: 0.7; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        .animate-float-dot { animation: float-dot 15s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-slow-delay { animation: float-slow 14s ease-in-out infinite; animation-delay: 2s; }
      `}</style>
    </div>
  );
}

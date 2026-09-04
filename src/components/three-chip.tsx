"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ThreeChip() {
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientY / window.innerHeight - 0.5) * 20;
      const y = (e.clientX / window.innerWidth - 0.5) * -20;
      setRotation({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) {
    return (
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="h-64 w-64 rounded-3xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full flex items-center justify-center perspective-1000">
      <motion.div
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{ type: "spring", stiffness: 75, damping: 15 }}
        className="relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Outer frame */}
        <div className="relative h-72 w-72 md:h-80 md:w-80 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 p-1 shadow-2xl shadow-blue-500/30">
          <div className="h-full w-full rounded-3xl bg-gradient-to-br from-zinc-950 to-black p-6 flex items-center justify-center">
            {/* AI Chip */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-500 blur-2xl opacity-50 animate-pulse" />
              <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 p-1 shadow-2xl">
                <div className="h-full w-full rounded-2xl bg-zinc-950 flex items-center justify-center relative overflow-hidden">
                  {/* Chip pattern */}
                  <div className="absolute inset-2 border border-blue-500/30 rounded-xl" />
                  <div className="absolute inset-4 border border-violet-500/30 rounded-lg" />

                  {/* Center "AI" text */}
                  <div className="relative z-10 text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    AI
                  </div>

                  {/* Corner indicators */}
                  {[
                    "top-2 left-2",
                    "top-2 right-2",
                    "bottom-2 left-2",
                    "bottom-2 right-2",
                  ].map((pos) => (
                    <div
                      key={pos}
                      className={`absolute ${pos} h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse`}
                    />
                  ))}

                  {/* Circuit lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <path
                      d="M 20 50 L 40 50 L 45 45 L 50 50 L 55 55 L 60 50 L 80 50"
                      stroke="rgba(99, 102, 241, 0.3)"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M 50 20 L 50 40 L 45 45 L 50 50 L 55 55 L 50 60 L 50 80"
                      stroke="rgba(139, 92, 246, 0.3)"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Pins around the chip */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 360) / 12;
            return (
              <div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-blue-500/60"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${angle}deg) translateY(-150px) translateX(-4px)`,
                  transformOrigin: "center",
                }}
              />
            );
          })}
        </div>

        {/* Floating orbs around */}
        <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 blur-md animate-float-1" />
        <div className="absolute -bottom-6 -left-6 h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 blur-md animate-float-2" />
        <div className="absolute top-1/2 -right-12 h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 blur-md animate-float-3" />
      </motion.div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -20px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 15px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -10px); }
        }
        .animate-float-1 { animation: float-1 4s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 5s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

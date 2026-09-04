import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedGradientBorder({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 p-[1px]",
        containerClassName
      )}
    >
      <div className={cn("absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 opacity-50 blur-xl transition-all duration-500 group-hover:opacity-75", className)} />
      <div className="relative rounded-2xl bg-white dark:bg-zinc-950">
        {children}
      </div>
    </div>
  );
}

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 to-transparent" />
      {children}
    </motion.div>
  );
}

export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-zinc-200/20 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-sm transition-all duration-500 hover:border-zinc-300/40 dark:border-zinc-800/50",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/0 via-violet-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
      <div className="absolute -left-40 -top-40 -z-10 h-80 w-80 rounded-full bg-blue-500/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      {children}
    </div>
  );
}

export function GradientButton({
  children,
  className,
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };
  return (
    <Component
      {...props}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/50",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 -z-20 bg-white/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-50" />
      {children}
    </Component>
  );
}

export function GlowBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-700 backdrop-blur-md dark:text-zinc-300",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  children,
  className,
  span = 1,
  rowSpan = 1,
}: {
  children: React.ReactNode;
  className?: string;
  span?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-zinc-200/50 bg-gradient-to-br from-white to-zinc-50 p-6 transition-all duration-500 hover:border-zinc-300/80 hover:shadow-2xl dark:border-zinc-800/50 dark:from-zinc-900 dark:to-zinc-950 dark:hover:border-zinc-700/80",
        span === 2 && "md:col-span-2",
        span === 3 && "md:col-span-3",
        span === 4 && "md:col-span-4",
        rowSpan === 2 && "md:row-span-2",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/0 via-violet-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-5" />
      {children}
    </motion.div>
  );
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration, type: "spring" }}
      >
        {prefix}
        {value}
        {suffix}
      </motion.span>
    </motion.span>
  );
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        pauseOnHover && "hover:[--animation-play-state:paused]",
        className
      )}
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        maskImage:
          "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className={cn(
          "flex shrink-0 gap-4 py-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 gap-4 py-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
}: {
  badge?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("text-center mb-16", className)}
    >
      {badge && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-700 backdrop-blur-md dark:text-zinc-300">
          {badge}
        </div>
      )}
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}

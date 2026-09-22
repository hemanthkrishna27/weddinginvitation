import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function FloralDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center justify-center gap-4", className)}
      aria-hidden="true"
    >
      <span className="ornament-line w-16 sm:w-24" />
      <LotusMark className="size-5 text-gold" />
      <span className="ornament-line w-16 sm:w-24" />
    </div>
  );
}

export function LotusMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("fill-current", className)}
      aria-hidden="true"
    >
      <path d="M16 28c-1.8-3.4-7-6.4-7-12.2C9 11 12.2 8.6 16 8.6s7 2.4 7 7.2C23 21.6 17.8 24.6 16 28Z" />
      <path d="M16 26.4c-3.2-2.2-8.8-1.6-10.8-6.4-1.4-3.4.4-6.8 3.6-8 2.2 3.2 5 5.6 7.2 14.4Z" opacity="0.7" />
      <path d="M16 26.4c3.2-2.2 8.8-1.6 10.8-6.4 1.4-3.4-.4-6.8-3.6-8-2.2 3.2-5 5.6-7.2 14.4Z" opacity="0.7" />
      <circle cx="16" cy="8" r="1.4" />
    </svg>
  );
}

export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-gold text-xs tracking-[0.38em] uppercase font-medium">
      {children}
    </p>
  );
}

export function FallingPetals() {
  const petals = [
    { left: "8%", delay: "0s", duration: "14s" },
    { left: "22%", delay: "2s", duration: "16s" },
    { left: "38%", delay: "5s", duration: "13s" },
    { left: "55%", delay: "1s", duration: "18s" },
    { left: "71%", delay: "4s", duration: "15s" },
    { left: "86%", delay: "7s", duration: "17s" },
  ];

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <span
          key={petal.left}
          className="petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        />
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";
import { wedding } from "@/lib/wedding";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function remaining(target: number): Parts | null {
  const diff = target - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  };
}

export function Countdown() {
  const target = new Date(wedding.dateStartIso).getTime();
  const [parts, setParts] = useState<Parts | null>(() => remaining(target));

  useEffect(() => {
    const id = window.setInterval(() => setParts(remaining(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  if (!parts) {
    return (
      <section className="bg-burgundy px-6 py-16 text-center text-ivory">
        <p className="font-display text-5xl">The day has arrived</p>
        <p className="mt-3 text-ivory/80">We are celebrating today.</p>
      </section>
    );
  }

  const cells = [
    { label: "Days", value: parts.days },
    { label: "Hours", value: parts.hours },
    { label: "Minutes", value: parts.minutes },
    { label: "Seconds", value: parts.seconds },
  ];

  return (
    <section className="bg-burgundy px-6 py-14 text-ivory">
      <div className="mx-auto grid max-w-2xl grid-cols-4 gap-3 sm:gap-6">
        {cells.map((cell) => (
          <div key={cell.label} className="text-center">
            <p className="font-serif text-3xl tabular-nums sm:text-5xl">
              {String(cell.value).padStart(2, "0")}
            </p>
            <p className="mt-1 text-[0.65rem] tracking-[0.28em] uppercase text-gold-soft sm:text-xs">
              {cell.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

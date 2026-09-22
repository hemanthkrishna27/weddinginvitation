import { ChevronDown } from "lucide-react";
import { wedding } from "@/lib/wedding";
import { FloralDivider, FallingPetals } from "./ornaments";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh items-end overflow-hidden bg-burgundy-deep text-ivory"
    >
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/mandap.jpg"
      >
        <source src="/videos/mandap.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-b from-burgundy-deep/35 via-burgundy-deep/25 to-burgundy-deep/90" />
      <FallingPetals />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 pb-36 pt-32 text-center">
        <p className="enter-rise text-gold-soft text-xs tracking-[0.48em] uppercase">
          Save the date
        </p>
        <h1 className="enter-rise mt-6 font-display leading-none">
          <span className="block text-[4.25rem] sm:text-8xl">{wedding.groomsGiven}</span>
          <span className="mt-3 block text-4xl text-gold-soft">&</span>
          <span className="mt-1 block text-[4.25rem] sm:text-8xl">{wedding.bridesGiven}</span>
        </h1>
        <FloralDivider className="mt-8" />
        <p className="enter-rise mt-6 text-xl tracking-[0.22em] uppercase sm:text-2xl">
          {wedding.dateShort}
        </p>
        <p className="enter-rise mt-2 text-base text-ivory/80">
          {wedding.weekday} · {wedding.venue.name}
        </p>
        <a
          href="#invite"
          className="enter-rise mt-10 flex flex-col items-center gap-1 text-ivory/80"
        >
          <span className="text-xs tracking-[0.28em] uppercase">
            Open the letter
          </span>
          <ChevronDown className="size-5" />
        </a>
      </div>
    </section>
  );
}

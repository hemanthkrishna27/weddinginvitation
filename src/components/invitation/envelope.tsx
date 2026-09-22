import { useState } from "react";
import { wedding } from "@/lib/wedding";

export function EnvelopeGate({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  function open() {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 620);
  }

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-burgundy-deep px-5 py-16 pb-32 text-center">
      <img
        src="/images/silk.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="pointer-events-none absolute inset-0 bg-burgundy-deep/70" />

      <div
        className={`relative z-10 flex max-w-md flex-col items-center pb-16 ${opening ? "envelope-away" : ""}`}
      >
        <p className="enter-rise text-gold-soft text-xs tracking-[0.42em] uppercase">
          A letter for you
        </p>
        <h1
          className="enter-rise mt-4 font-display text-5xl text-ivory sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          You are invited
        </h1>
        <p
          className="enter-rise mt-3 text-lg text-ivory/80 italic"
          style={{ animationDelay: "140ms" }}
        >
          {wedding.groomsGiven} & {wedding.bridesGiven}
        </p>

        <div
          className="enter-rise relative mt-10"
          style={{ animationDelay: "220ms" }}
        >
          <img
            src="/images/envelope.jpg"
            alt=""
            className="h-56 w-72 rounded-xl object-cover shadow-soft outline outline-1 -outline-offset-1 outline-ivory/15 sm:h-64 sm:w-80"
          />
          <div className="absolute left-1/2 top-[58%] size-24 -translate-x-1/2 -translate-y-1/2 sm:size-28">
            <img
              src="/images/seal.jpg"
              alt=""
              className="seal-pulse size-full rounded-full object-cover shadow-soft ring-2 ring-gold/70"
            />
          </div>
        </div>

        <p
          className="enter-rise mt-8 text-sm tracking-[0.22em] uppercase text-ivory/70"
          style={{ animationDelay: "300ms" }}
        >
          Tap anywhere to open
        </p>

        <span
          className="enter-rise mt-5 inline-flex h-12 items-center justify-center rounded-md bg-gold px-8 text-sm font-medium tracking-wide text-burgundy-deep"
          style={{ animationDelay: "360ms" }}
        >
          Open invitation
        </span>
      </div>

      <button
        type="button"
        onClick={open}
        onPointerUp={open}
        aria-label="Open the invitation"
        className="absolute inset-0 z-30 cursor-pointer"
        style={{ touchAction: "manipulation" }}
      />
    </section>
  );
}

import { wedding } from "@/lib/wedding";
import { LotusMark } from "./ornaments";

export function InvitationFooter() {
  return (
    <footer className="bg-burgundy-deep px-6 py-16 text-center text-ivory">
      <LotusMark className="mx-auto size-7 text-gold" />
      <p className="mt-5 font-display text-4xl">
        {wedding.groomsGiven} & {wedding.bridesGiven}
      </p>
      <p className="mt-3 text-sm tracking-[0.28em] uppercase text-gold-soft">
        {wedding.dateShort} · Payanam
      </p>
      <p className="mt-8 text-ivory/70 italic">{wedding.tamilBlessing}</p>
      <p className="mt-2 text-sm text-ivory/55">
        We cannot wait to celebrate with you.
      </p>
    </footer>
  );
}

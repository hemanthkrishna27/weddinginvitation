import { wedding } from "@/lib/wedding";
import { FloralDivider, SectionKicker } from "./ornaments";

export function InvitationLetter() {
  return (
    <section id="invite" className="relative bg-ivory px-4 py-20 sm:py-28">
      <div className="letter-frame relative mx-auto max-w-2xl overflow-hidden rounded-xl px-6 py-14 text-center sm:px-14 sm:py-20">
        <div className="absolute inset-0 bg-surface/78" />
        <div className="relative">
          <SectionKicker>The Invitation</SectionKicker>
          <FloralDivider className="mt-6" />
          <p className="mt-8 text-lg italic text-muted">
            With the blessings of the divine
            <br />
            and the love of our families
          </p>
          <p className="mt-10 font-display text-5xl text-burgundy sm:text-6xl">
            {wedding.groomsName}
          </p>
          <p className="mt-2 font-display text-3xl text-gold">&</p>
          <p className="font-display text-5xl text-burgundy sm:text-6xl">
            {wedding.bridesName}
          </p>
          <p className="mx-auto mt-10 max-w-md text-lg leading-relaxed text-ink">
            joyfully invite you to honour them with your presence as they
            exchange vows and begin a lifetime of love.
          </p>
          <FloralDivider className="mt-10" />
          <p className="mt-10 text-sm tracking-[0.28em] uppercase text-gold">
            {wedding.weekday}
          </p>
          <p className="mt-2 text-3xl tracking-[0.18em] text-burgundy sm:text-4xl">
            {wedding.dateFormal}
          </p>
          <p className="mt-4 text-base text-muted">
            {wedding.venue.name}
            <br />
            {wedding.venue.locality}
            <br />
            {wedding.venue.region}
          </p>
          <p className="mt-10 text-sm tracking-[0.18em] text-gold">
            {wedding.tamilBlessing}
          </p>
          <p className="mt-3 text-base italic text-muted">
            Your presence is our greatest blessing.
            <br />
            Save the date — come celebrate with us.
          </p>
        </div>
      </div>
    </section>
  );
}

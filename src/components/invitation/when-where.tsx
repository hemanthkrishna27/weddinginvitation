import { CalendarPlus, MapPin, Navigation, Sparkles } from "lucide-react";
import { googleCalendarUrl, icsContent, wedding } from "@/lib/wedding";
import { Button } from "@/components/ui/button";
import { FloralDivider, SectionKicker } from "./ornaments";

function downloadIcs() {
  const blob = new Blob([icsContent()], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "hemanth-mahima-wedding.ics";
  a.click();
  URL.revokeObjectURL(url);
}

export function WhenWhere() {
  return (
    <section id="when" className="bg-parchment px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <SectionKicker>When & Where</SectionKicker>
          <h2 className="mt-4 font-display text-5xl text-burgundy sm:text-6xl">
            Join us
          </h2>
          <FloralDivider className="mt-6" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl bg-surface p-7 shadow-soft">
            <div className="flex size-11 items-center justify-center rounded-md bg-burgundy text-ivory">
              <Sparkles className="size-5" />
            </div>
            <h3 className="mt-5 text-2xl text-burgundy">The Wedding</h3>
            <p className="mt-2 text-lg">{wedding.dateDisplay}</p>
            <p className="mt-3 leading-relaxed text-muted">
              Ceremony and celebrations through the day. We cannot wait to
              welcome you into this new chapter — your blessings, your laughter,
              and your company mean everything.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={downloadIcs}>
                <CalendarPlus className="size-4" />
                Apple / Outlook
              </Button>
              <Button variant="outline" asChild>
                <a href={googleCalendarUrl()} target="_blank" rel="noreferrer">
                  Google Calendar
                </a>
              </Button>
            </div>
          </article>

          <article className="rounded-xl bg-surface p-7 shadow-soft">
            <div className="flex size-11 items-center justify-center rounded-md bg-burgundy text-ivory">
              <MapPin className="size-5" />
            </div>
            <h3 className="mt-5 text-2xl text-burgundy">{wedding.venue.name}</h3>
            <p className="mt-2 text-lg">
              {wedding.venue.locality}
              <br />
              {wedding.venue.region}
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Along the Marthandam–Pechipparai road in Payanam, near Kuzhithurai.
              Park on the grounds and follow the jasmine and marigold to the
              hall.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a
                  href={wedding.venue.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Navigation className="size-4" />
                  Open in Maps
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={wedding.venue.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                </a>
              </Button>
            </div>
          </article>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl shadow-soft">
          <iframe
            title="Map of Sree Chenbagavalli Auditorium"
            src={wedding.venue.embedUrl}
            className="h-72 w-full border-0 grayscale-[0.15] sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

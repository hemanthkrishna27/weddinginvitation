import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { EnvelopeGate } from "@/components/invitation/envelope";
import { SiteNav } from "@/components/invitation/site-nav";
import { Hero } from "@/components/invitation/hero";
import { Countdown } from "@/components/invitation/countdown";
import { InvitationLetter } from "@/components/invitation/letter";
import { CinematicBand } from "@/components/invitation/cinematic";
import { WhenWhere } from "@/components/invitation/when-where";
import { RsvpAndBlessings } from "@/components/invitation/rsvp";
import { InvitationFooter } from "@/components/invitation/footer";

export const Route = createFileRoute("/")({ component: Home });

const OPEN_KEY = "hemanth-mahima-opened";

function Home() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(OPEN_KEY) === "1") setOpened(true);
  }, []);

  function openInvite() {
    sessionStorage.setItem(OPEN_KEY, "1");
    setOpened(true);
  }

  if (!opened) {
    return <EnvelopeGate onOpen={openInvite} />;
  }

  return (
    <main>
      <SiteNav />
      <Hero />
      <Countdown />
      <InvitationLetter />
      <CinematicBand />
      <WhenWhere />
      <RsvpAndBlessings />
      <InvitationFooter />
    </main>
  );
}

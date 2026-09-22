import { useEffect, useState, type FormEvent } from "react";
import { Share2, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { deliverToCouple, type Delivery } from "@/lib/notify";
import { wedding } from "@/lib/wedding";
import { FloralDivider, SectionKicker } from "./ornaments";

const RSVP_KEY = "hemanth-mahima-rsvp";
const BLESS_KEY = "hemanth-mahima-blessings";

type Attendance = "joyfully" | "family" | "unable";

type Rsvp = {
  name: string;
  attendance: Attendance;
  guests: string;
  note: string;
};

type Blessing = { name: string; message: string; at: number };

const attendanceLabels: Record<Attendance, string> = {
  joyfully: "Joyfully attending",
  family: "Attending with family",
  unable: "Sending love, cannot attend",
};

function loadRsvp(): Rsvp | null {
  try {
    const raw = localStorage.getItem(RSVP_KEY);
    return raw ? (JSON.parse(raw) as Rsvp) : null;
  } catch {
    return null;
  }
}

function loadBlessings(): Blessing[] {
  try {
    const raw = localStorage.getItem(BLESS_KEY);
    return raw ? (JSON.parse(raw) as Blessing[]) : [];
  } catch {
    return [];
  }
}

function toastForDelivery(kind: Delivery) {
  if (kind.status === "sent") {
    toast("Sent to Hemanth and Mahima");
    return;
  }
  toast("Tap Send with email so it reaches both of us");
}

export function RsvpAndBlessings() {
  const [rsvp, setRsvp] = useState<Rsvp>({
    name: "",
    attendance: "joyfully",
    guests: "1",
    note: "",
  });
  const [saved, setSaved] = useState<Rsvp | null>(null);
  const [blessings, setBlessings] = useState<Blessing[]>([]);
  const [blessName, setBlessName] = useState("");
  const [blessMsg, setBlessMsg] = useState("");
  const [copied, setCopied] = useState(false);
  const [sendingRsvp, setSendingRsvp] = useState(false);
  const [sendingBless, setSendingBless] = useState(false);
  const [rsvpMail, setRsvpMail] = useState<string | null>(null);
  const [blessMail, setBlessMail] = useState<string | null>(null);

  useEffect(() => {
    setSaved(loadRsvp());
    setBlessings(loadBlessings());
  }, []);

  async function submitRsvp(e: FormEvent) {
    e.preventDefault();
    if (!rsvp.name.trim()) {
      toast("Please add your name");
      return;
    }
    setSendingRsvp(true);
    try {
      const kind = await deliverToCouple({
        subject: `Wedding RSVP from ${rsvp.name.trim()}`,
        fields: {
          Type: "RSVP",
          Name: rsvp.name.trim(),
          Reply: attendanceLabels[rsvp.attendance],
          Guests:
            rsvp.attendance === "unable" ? "—" : rsvp.guests || "1",
          Note: rsvp.note.trim() || "—",
        },
      });
      localStorage.setItem(RSVP_KEY, JSON.stringify(rsvp));
      setSaved(rsvp);
      setRsvpMail(kind.status === "mailto" ? kind.href : null);
      toastForDelivery(kind);
    } catch {
      toast("Could not send the reply. Please try again.");
    } finally {
      setSendingRsvp(false);
    }
  }

  async function submitBlessing(e: FormEvent) {
    e.preventDefault();
    if (!blessName.trim() || !blessMsg.trim()) {
      toast("Add your name and a few words");
      return;
    }
    setSendingBless(true);
    try {
      const kind = await deliverToCouple({
        subject: `Wedding blessing from ${blessName.trim()}`,
        fields: {
          Type: "Blessing",
          Name: blessName.trim(),
          Blessing: blessMsg.trim(),
        },
      });
      const next = [
        { name: blessName.trim(), message: blessMsg.trim(), at: Date.now() },
        ...blessings,
      ].slice(0, 24);
      localStorage.setItem(BLESS_KEY, JSON.stringify(next));
      setBlessings(next);
      setBlessName("");
      setBlessMsg("");
      setBlessMail(kind.status === "mailto" ? kind.href : null);
      toastForDelivery(kind);
    } catch {
      toast("Could not send the blessing. Please try again.");
    } finally {
      setSendingBless(false);
    }
  }

  async function shareInvite() {
    const url = window.location.href;
    const title = `${wedding.groomsGiven} & ${wedding.bridesGiven} are getting married`;
    const text = `Save the date — ${wedding.dateDisplay} at ${wedding.venue.name}.`;
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        /* fall through to copy */
      }
    }
    await navigator.clipboard.writeText(`${title}\n${text}\n${url}`);
    setCopied(true);
    toast("Invitation link copied");
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="rsvp" className="bg-burgundy px-4 py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <SectionKicker>Kindly reply</SectionKicker>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl">RSVP</h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/80">
            Let us know you will be there — or send your love from afar. Your
            reply is emailed to both of us.
          </p>
          <FloralDivider className="mt-6" />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <form
            onSubmit={submitRsvp}
            className="rounded-xl bg-ivory p-6 text-ink shadow-soft sm:p-8"
          >
            {saved ? (
              <div className="mb-6 rounded-md bg-parchment px-4 py-3 text-burgundy">
                Thank you, {saved.name}. {attendanceLabels[saved.attendance]}.
              </div>
            ) : null}

            <div className="space-y-2">
              <Label htmlFor="guest-name">Your name</Label>
              <Input
                id="guest-name"
                value={rsvp.name}
                onChange={(e) => setRsvp({ ...rsvp, name: e.target.value })}
                placeholder="Full name"
                autoComplete="name"
              />
            </div>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium tracking-[0.14em] uppercase text-muted">
                Will you join us?
              </legend>
              <div className="mt-3 grid gap-2">
                {(Object.keys(attendanceLabels) as Attendance[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setRsvp({ ...rsvp, attendance: key })}
                    className={cn(
                      "h-11 rounded-md border px-4 text-left text-sm transition-[background-color,border-color,color] duration-150",
                      rsvp.attendance === key
                        ? "border-burgundy bg-burgundy text-ivory"
                        : "border-border bg-surface text-ink hover:border-gold",
                    )}
                  >
                    {attendanceLabels[key]}
                  </button>
                ))}
              </div>
            </fieldset>

            {rsvp.attendance !== "unable" ? (
              <div className="mt-6 space-y-2">
                <Label htmlFor="guest-count">Number of guests</Label>
                <Input
                  id="guest-count"
                  type="number"
                  min={1}
                  max={12}
                  value={rsvp.guests}
                  onChange={(e) => setRsvp({ ...rsvp, guests: e.target.value })}
                />
              </div>
            ) : null}

            <div className="mt-6 space-y-2">
              <Label htmlFor="guest-note">A note for us</Label>
              <Textarea
                id="guest-note"
                value={rsvp.note}
                onChange={(e) => setRsvp({ ...rsvp, note: e.target.value })}
                placeholder="Travel plans, blessings, favourite song…"
              />
            </div>

            <Button
              type="submit"
              className="mt-6 w-full"
              size="lg"
              disabled={sendingRsvp}
            >
              {sendingRsvp ? "Sending…" : "Send reply"}
            </Button>
            {rsvpMail ? (
              <Button variant="outline" className="mt-3 w-full" asChild>
                <a href={rsvpMail}>Send with email</a>
              </Button>
            ) : null}
          </form>

          <div className="flex flex-col gap-6">
            <form
              onSubmit={submitBlessing}
              className="rounded-xl border border-ivory/15 bg-burgundy-deep/40 p-6 sm:p-8"
            >
              <h3 className="font-display text-3xl">Leave a blessing</h3>
              <p className="mt-2 text-sm text-ivory/75">
                A few words for Hemanth & Mahima — delivered to both of our
                inboxes.
              </p>
              <div className="mt-5 space-y-2">
                <Label htmlFor="bless-name" className="text-gold-soft">
                  Name
                </Label>
                <Input
                  id="bless-name"
                  value={blessName}
                  onChange={(e) => setBlessName(e.target.value)}
                  className="bg-ivory"
                  placeholder="Your name"
                />
              </div>
              <div className="mt-4 space-y-2">
                <Label htmlFor="bless-msg" className="text-gold-soft">
                  Blessing
                </Label>
                <Textarea
                  id="bless-msg"
                  value={blessMsg}
                  onChange={(e) => setBlessMsg(e.target.value)}
                  className="bg-ivory"
                  placeholder="May your home be filled with…"
                />
              </div>
              <Button
                type="submit"
                variant="gold"
                className="mt-5 w-full"
                disabled={sendingBless}
              >
                {sendingBless ? "Sending…" : "Offer blessing"}
              </Button>
              {blessMail ? (
                <Button variant="ivory" className="mt-3 w-full" asChild>
                  <a href={blessMail}>Send with email</a>
                </Button>
              ) : null}
            </form>

            <div className="flex flex-wrap gap-3">
              <Button variant="ivory" onClick={shareInvite}>
                {copied ? <Check className="size-4" /> : <Share2 className="size-4" />}
                Share invitation
              </Button>
              <Button
                variant="ghost"
                className="border border-ivory/20"
                onClick={async () => {
                  await navigator.clipboard.writeText(window.location.href);
                  toast("Link copied");
                }}
              >
                <Copy className="size-4" />
                Copy link
              </Button>
            </div>
          </div>
        </div>

        {blessings.length > 0 ? (
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {blessings.map((item) => (
              <li
                key={item.at}
                className="rounded-lg border border-ivory/12 bg-burgundy-deep/35 p-5"
              >
                <p className="italic text-ivory/90">“{item.message}”</p>
                <p className="mt-3 text-sm tracking-[0.16em] uppercase text-gold-soft">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

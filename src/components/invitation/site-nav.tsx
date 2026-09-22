import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { wedding } from "@/lib/wedding";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#invite", label: "Invitation" },
  { href: "#when", label: "When & Where" },
  { href: "#rsvp", label: "RSVP" },
];

export function SiteNav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-300",
        solid
          ? "bg-ivory/95 text-burgundy shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-transparent text-ivory",
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="font-display text-2xl tracking-wide"
          onClick={() => setOpen(false)}
        >
          {wedding.monogram}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-[0.16em] uppercase opacity-90 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          variant={solid ? "default" : "ivory"}
          size="sm"
          className="hidden md:inline-flex"
          asChild
        >
          <a href="#rsvp">Reply</a>
        </Button>

        <button
          type="button"
          className="relative flex size-11 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-ivory px-4 py-3 text-burgundy md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex h-12 items-center text-base tracking-[0.12em] uppercase"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

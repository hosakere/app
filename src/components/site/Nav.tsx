import { useEffect, useState } from "react";
import { Menu, X, Camera as Instagram } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#bridal", label: "Bridal" },
  { href: "#reels", label: "Reels" },
  { href: "#testimonials", label: "Love Notes" },
  { href: "#book", label: "Book" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 md:px-8 transition-all duration-500 ${
          scrolled
            ? "glass rounded-full shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-14">
          <a href="#top" className="flex flex-col items-start leading-none group">
            <span
              className="text-gradient-gold text-3xl md:text-4xl leading-[0.9] -mb-0.5"
              style={{ fontFamily: '"Allura", "Pinyon Script", cursive' }}
            >
              Vinutha
            </span>
            <span className="font-display italic text-[0.65rem] md:text-xs tracking-[0.35em] uppercase text-foreground/60 pl-1">
              Mehendi Arts
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm tracking-wide text-foreground/70 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[var(--gold)] after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="https://www.instagram.com/tumkurmehendi_artist"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-all shadow-soft"
          >
            <Instagram className="w-4 h-4" /> Follow
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded-full glass"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 pt-2 flex flex-col gap-4 animate-fade-up">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/tumkurmehendi_artist"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-primary"
            >
              <Instagram className="w-4 h-4" /> @tumkurmehendi_artist
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

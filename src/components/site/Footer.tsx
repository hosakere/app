import { Camera as Instagram, MessageCircle, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-script text-3xl text-[var(--gold)]">Vinutha</span>
              <span className="font-display text-sm tracking-[0.3em] uppercase text-primary-foreground/70">
                Mehendi Arts
              </span>
            </div>
            <p className="mt-5 text-primary-foreground/70 leading-relaxed text-sm max-w-sm">
              Hand-drawn bridal & designer mehendi in Tumkur and Bangalore.
              Every line, a quiet love letter.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold-soft)]">
              Explore
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["About", "#about"],
                ["Gallery", "#gallery"],
                ["Bridal Showcase", "#bridal"],
                ["Reels", "#reels"],
                ["Book Now", "#book"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="text-primary-foreground/80 hover:text-[var(--gold)] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold-soft)]">
              Reach the Atelier
            </div>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-[var(--gold)]" /> Tumkur & Bangalore, Karnataka
              </li>
              <li>
                <a href="tel:+918861380403" className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors text-primary-foreground/80">
                  <Phone className="w-4 h-4 text-[var(--gold)]" /> +91 8861380403
                </a>
              </li>
              <li>
                <a href="https://wa.me/918861380403" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors text-primary-foreground/80">
                  <MessageCircle className="w-4 h-4 text-[var(--gold)]" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/tumkurmehendi_artist" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors text-primary-foreground/80">
                  <Instagram className="w-4 h-4 text-[var(--gold)]" /> @tumkurmehendi_artist
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-primary-foreground/55">
          <div>© {new Date().getFullYear()} Vinutha Mehendi Arts. All rights reserved.</div>
          <div className="font-script text-base text-[var(--gold)]">Crafted with love · ۞</div>
        </div>
      </div>
    </footer>
  );
}

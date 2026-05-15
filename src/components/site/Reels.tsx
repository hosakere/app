import { motion } from "framer-motion";
import { Play, Heart, MessageCircle } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g8 from "@/assets/gallery-8.jpg";

const reels = [
  { thumb: g3, title: "Bridal hands reveal", views: "82K", likes: "6.2K" },
  { thumb: g1, title: "Floral bridal close-up", views: "54K", likes: "4.1K" },
  { thumb: g5, title: "Engagement ring + peacock", views: "31K", likes: "2.8K" },
  { thumb: g8, title: "Heritage peacock timelapse", views: "47K", likes: "3.9K" },
];

export function Reels() {
  return (
    <section id="reels" className="relative py-28 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">From Instagram</p>
            <h2 className="mt-4 text-4xl md:text-5xl max-w-xl leading-tight">
              Watch the henna
              <br />
              <span className="font-script text-gradient-gold text-5xl md:text-6xl">come alive</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/tumkurmehendi_artist"
            target="_blank"
            rel="noreferrer"
            className="text-sm uppercase tracking-[0.2em] text-foreground/70 hover:text-primary border-b border-[var(--gold)]/50 pb-1 self-start"
          >
            @tumkurmehendi_artist →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {reels.map((r, i) => (
            <motion.a
              key={r.title}
              href="https://www.instagram.com/tumkurmehendi_artist"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative aspect-[9/14] rounded-2xl overflow-hidden shadow-soft block"
            >
              <img
                src={r.thumb}
                alt={r.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center shadow-luxe transition-transform group-hover:scale-110">
                  <Play className="w-5 h-5 text-primary fill-primary translate-x-0.5" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                <div className="font-display text-base leading-tight">{r.title}</div>
                <div className="mt-2 flex items-center gap-4 text-xs text-[var(--gold-soft)]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" /> {r.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" /> {r.views} views
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

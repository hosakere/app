import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";

type Item = { src: string; cat: string; caption: string };

const items: Item[] = [
  { src: g1, cat: "Bridal", caption: "Traditional bridal florals" },
  { src: g2, cat: "Arabic", caption: "Bold Arabic vine work" },
  { src: g3, cat: "Bridal", caption: "Bride & groom portraits" },
  { src: g4, cat: "Floral", caption: "Delicate rose vine" },
  { src: g5, cat: "Engagement", caption: "Peacock with the ring" },
  { src: g6, cat: "Festival", caption: "Karva Chauth mandala" },
  { src: g7, cat: "Simple", caption: "Minimal sunflower" },
  { src: g8, cat: "Floral", caption: "Heritage peacock" },
];

const categories = ["All", "Bridal", "Arabic", "Engagement", "Floral", "Festival", "Simple"];

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<Item | null>(null);

  const visible = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <section id="gallery" className="relative py-28 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">The Portfolio</p>
          <h2 className="mt-4 text-4xl md:text-5xl">
            A gallery of{" "}
            <span className="font-script text-gradient-gold text-5xl md:text-6xl">
              hand-drawn
            </span>{" "}
            stories
          </h2>
          <div className="divider-ornament my-7">
            <span className="font-script text-[var(--gold)]">۞</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.18em] transition-all border ${
                filter === c
                  ? "bg-primary text-primary-foreground border-primary shadow-soft"
                  : "border-border text-foreground/70 hover:text-primary hover:border-[var(--gold)]/60"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {visible.map((it, i) => (
              <motion.button
                key={it.src}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
                onClick={() => setOpen(it)}
                className="group mb-4 md:mb-5 block w-full break-inside-avoid relative overflow-hidden rounded-xl shadow-soft text-left"
              >
                <img
                  src={it.src}
                  alt={it.caption}
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold-soft)]">
                    {it.cat}
                  </div>
                  <div className="font-display text-lg mt-1">{it.caption}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] bg-foreground/85 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button
              aria-label="Close"
              className="absolute top-6 right-6 p-2 rounded-full glass text-foreground"
              onClick={() => setOpen(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={open.src}
                alt={open.caption}
                className="rounded-2xl max-h-[85vh] w-auto object-contain shadow-luxe"
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center text-background">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold-soft)]">
                  {open.cat}
                </div>
                <div className="font-display text-xl mt-1">{open.caption}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

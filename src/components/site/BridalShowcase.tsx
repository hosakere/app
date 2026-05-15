import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import showcase from "@/assets/showcase-1.jpg";

export function BridalShowcase() {
  return (
    <section id="bridal" className="relative py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="md:col-span-5 order-2 md:order-1"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Signature Bridal</p>
          <h2 className="mt-4 text-4xl md:text-5xl leading-tight">
            For the bride who
            <br />
            <span className="font-script text-gradient-gold text-5xl md:text-6xl">
              wants forever
            </span>{" "}
            in her hands.
          </h2>
          <p className="mt-7 text-foreground/75 leading-relaxed">
            Our signature bridal package is a slow ritual — six to eight hours
            of intricate work covering both hands, forearms and feet, finished
            with a deep maroon stain that lasts your entire wedding week.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Full hands, forearms & feet coverage",
              "Personalised motifs (initials, deities, story)",
              "Premium organic henna for a deep red stain",
              "On-location service in Tumkur & Bangalore",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-foreground/80">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="#book"
            className="mt-10 inline-flex items-center gap-2 text-primary text-sm uppercase tracking-[0.2em] border-b border-[var(--gold)] pb-1 hover:gap-3 transition-all"
          >
            Reserve your date <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="md:col-span-7 order-1 md:order-2 relative"
        >
          <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-2xl overflow-hidden shadow-luxe">
            <img
              src={showcase}
              alt="South Indian bride in red silk with full bridal mehendi"
              loading="lazy"
              width={1280}
              height={1600}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -top-4 -left-4 hidden md:flex glass rounded-full px-5 py-2 text-xs uppercase tracking-[0.25em] text-primary shadow-soft">
            ✦ Signature Package
          </div>
        </motion.div>
      </div>
    </section>
  );
}

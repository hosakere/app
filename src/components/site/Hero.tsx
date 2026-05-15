import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-bridal.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Bride's hands adorned with intricate bridal mehendi"
          width={1920}
          height={1080}
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 pt-40 md:pt-48 pb-24 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 self-start glass rounded-full px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-primary"
        >
          <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
          Bridal Henna Atelier · Tumkur & Bangalore
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-8 max-w-4xl text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance"
        >
          Where every line
          <br />
          tells a <span className="font-script text-gradient-gold text-6xl md:text-8xl lg:text-9xl">love</span> story.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed"
        >
          Hand-drawn bridal, Arabic and contemporary mehendi for the most
          beautiful days of your life — crafted with patience, deep stain and
          a quiet sense of ceremony.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#book"
            className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm tracking-wider uppercase shadow-luxe hover:shadow-soft transition-all"
          >
            Book your mehendi
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 px-7 py-4 text-sm tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors border-b border-[var(--gold)]/40"
          >
            View the gallery
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.25em] text-foreground/50"
        >
          <span>500+ Brides</span>
          <span className="text-[var(--gold)]">•</span>
          <span>8 Years of Craft</span>
          <span className="text-[var(--gold)]">•</span>
          <span>Tumkur & Bangalore</span>
        </motion.div>
      </div>
    </section>
  );
}

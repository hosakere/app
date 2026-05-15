import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Ananya R.",
    role: "Bride · Bengaluru",
    text: "I've never seen such patience and detail. Six hours felt like meditation, and the colour deepened to a stunning maroon by my muhurtam. Worth every moment.",
  },
  {
    name: "Pooja S.",
    role: "Bride · Tumkur",
    text: "She drew our initials and a tiny temple from my hometown into the design. It made my bridal mehendi feel like a love letter, not just art.",
  },
  {
    name: "Divya K.",
    role: "Engagement · Tumkur",
    text: "The peacock she did on my hand was breathtaking. Every cousin in the family booked her for their own functions after seeing it.",
  },
  {
    name: "Sahana M.",
    role: "Bride · Bengaluru",
    text: "Travelled to my destination wedding without complaint, set up beautifully, and finished both my hands and feet in one calm sitting. A true professional.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Love Notes</p>
          <h2 className="mt-4 text-4xl md:text-5xl leading-tight">
            From brides who
            <br />
            <span className="font-script text-gradient-gold text-5xl md:text-6xl">
              still remember
            </span>{" "}
            the day.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="relative rounded-2xl bg-card border border-border/60 p-8 md:p-10 shadow-soft hover:shadow-luxe transition-shadow"
            >
              <Quote className="w-8 h-8 text-[var(--gold)] mb-5" />
              <blockquote className="font-display text-xl md:text-[1.4rem] leading-relaxed text-foreground/85 italic">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--gold)]" />
                <span className="text-sm text-primary font-medium">{r.name}</span>
                <span className="text-xs text-foreground/50 uppercase tracking-[0.18em]">
                  {r.role}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

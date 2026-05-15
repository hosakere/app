import { motion } from "framer-motion";
import about from "@/assets/about-artist.jpg";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-luxe">
            <img
              src={about}
              alt="Mehendi artist applying intricate henna design"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block glass rounded-2xl px-6 py-5 shadow-soft">
            <div className="font-script text-3xl text-gradient-gold leading-none">8+</div>
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/60 mt-1">
              Years of artistry
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">The Artist</p>
          <h2 className="mt-4 text-4xl md:text-5xl leading-tight">
            A quiet craft,
            <br />
            <span className="font-script text-gradient-gold text-5xl md:text-6xl">passed down</span>{" "}
            through generations.
          </h2>
          <div className="divider-ornament my-8 justify-start before:hidden">
            <span className="font-script text-[var(--gold)]">۞</span>
          </div>
          <div className="space-y-5 text-foreground/75 leading-relaxed text-[1.05rem]">
            <p>
              From my studios in Tumkur and Bangalore, I create mehendi that
              feels personal — each design drawn freehand, each motif chosen
              for the bride who wears it. No stencils, no shortcuts. Only
              patience, fresh organic henna, and the kind of care your wedding
              day deserves.
            </p>
            <p>
              Specialising in full bridal hands and feet, intricate Arabic work,
              engagement designs and festival mehendi — I serve clients across
              Tumkur and Bangalore, with on-location service for weddings.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: "2000+", v: "Bridal Hands" },
              { k: "Pure", v: "Organic Henna" },
              { k: "Deep", v: "Stain Promise" },
            ].map((s) => (
              <div key={s.v} className="border-l border-[var(--gold)]/40 pl-4">
                <div className="font-display text-2xl text-primary">{s.k}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-foreground/60 mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

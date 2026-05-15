import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Camera as Instagram, Send, MapPin } from "lucide-react";

const PHONE = "+919999999999";
const WA = "919999999999";
const IG = "tumkurmehendi_artist";

export function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", occasion: "Bridal", note: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi! I'd love to book mehendi.\n\nName: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\nOccasion: ${form.occasion}\n\n${form.note}`,
    );
    window.open(`https://wa.me/${WA}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section id="book" className="relative py-28 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-14 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Reserve Your Date</p>
          <h2 className="mt-4 text-4xl md:text-5xl leading-tight">
            Let's create
            <br />
            <span className="font-script text-gradient-gold text-5xl md:text-6xl">
              something magical
            </span>{" "}
            together.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
            Bridal dates fill up quickly during wedding season. Reach out 4–6
            weeks ahead and tell me about your day — I'll respond within hours.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-[var(--gold)] transition-all shadow-soft group"
            >
              <span className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">WhatsApp</div>
                <div className="font-display text-lg text-primary">Chat instantly</div>
              </div>
            </a>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-[var(--gold)] transition-all shadow-soft group"
            >
              <span className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">Call</div>
                <div className="font-display text-lg text-primary">{PHONE}</div>
              </div>
            </a>
            <a
              href={`https://www.instagram.com/${IG}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-[var(--gold)] transition-all shadow-soft group"
            >
              <span className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">Instagram DM</div>
                <div className="font-display text-lg text-primary">@{IG}</div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-card/60 border border-border">
              <span className="w-11 h-11 rounded-full bg-[var(--gold)]/20 text-primary flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">Studio</div>
                <div className="font-display text-lg text-primary">Tumkur & Bangalore</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-card rounded-3xl p-8 md:p-10 shadow-luxe border border-border/60 self-start"
        >
          <h3 className="font-display text-2xl text-primary">Inquiry form</h3>
          <p className="text-sm text-foreground/60 mt-1">
            Sends straight to WhatsApp — no waiting.
          </p>

          <div className="mt-7 space-y-5">
            <Field
              label="Your name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              required
            />
            <Field
              label="Phone or WhatsApp"
              type="tel"
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
              required
            />
            <Field
              label="Function date"
              type="date"
              value={form.date}
              onChange={(v) => setForm({ ...form, date: v })}
            />
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-foreground/60 mb-2">
                Occasion
              </label>
              <select
                value={form.occasion}
                onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:border-[var(--gold)] focus:outline-none transition-colors"
              >
                <option>Bridal</option>
                <option>Engagement</option>
                <option>Arabic / Party</option>
                <option>Festival</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-foreground/60 mb-2">
                Tell me about your day
              </label>
              <textarea
                rows={4}
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:border-[var(--gold)] focus:outline-none transition-colors resize-none"
                placeholder="Venue, number of hands, design ideas…"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground py-4 text-sm tracking-[0.2em] uppercase shadow-luxe hover:bg-primary/90 transition-all"
            >
              {sent ? "Opened in WhatsApp ✓" : "Send inquiry"}
              {!sent && <Send className="w-4 h-4" />}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, type = "text", required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-foreground/60 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:border-[var(--gold)] focus:outline-none transition-colors"
      />
    </div>
  );
}

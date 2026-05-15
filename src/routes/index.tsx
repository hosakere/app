import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { BridalShowcase } from "@/components/site/BridalShowcase";
import { Reels } from "@/components/site/Reels";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <BridalShowcase />
      <Reels />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}

import { useCallback, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import { Amenities, CTABand, Dining, Footer, Intro, Marquee, Testimonials } from "./components/Sections";

export default function App() {
  const [roomId, setRoomId] = useState("deluxe");

  const pickRoom = useCallback((id: string) => {
    setRoomId(id);
    requestAnimationFrame(() => {
      const el = document.getElementById("pesan");
      if (el) {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-shell text-ink font-body">
      <div className="noise-overlay" aria-hidden="true" />
      <Nav />
      <main>
        <Hero roomId={roomId} onRoomChange={setRoomId} />
        <Marquee />
        <Intro />
        <Rooms onPick={pickRoom} />
        <Amenities />
        <Dining />
        <Gallery />
        <Location />
        <Testimonials />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}

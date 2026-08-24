import { useEffect, useState } from "react";
import { CONTACT } from "../data";
import { IconPhone, IconWave } from "./icons";

const LINKS = [
  { href: "#kamar", label: "Kamar" },
  { href: "#fasilitas", label: "Fasilitas" },
  { href: "#kuliner", label: "Kuliner" },
  { href: "#galeri", label: "Galeri" },
  { href: "#lokasi", label: "Lokasi" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-abyss/92 backdrop-blur-md border-b border-foam/15 py-2.5 shadow-lg shadow-abyss/30"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between gap-4">
          <a href="#beranda" className="flex items-center gap-2.5 group" aria-label="Hotel Kaliki — beranda">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-amber text-abyss transition-transform duration-500 group-hover:rotate-12">
              <IconWave className="w-6 h-6" strokeWidth={2} />
            </span>
            <span className="leading-none">
              <span className="block font-display italic font-semibold text-shell text-xl tracking-tight">Kaliki</span>
              <span className="block text-[10px] tracking-[0.32em] text-foam/80 font-semibold mt-1">HOTEL · NIAS</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigasi utama">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-shell/85 hover:text-amber transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-amber after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold text-foam hover:text-amber transition-colors"
            >
              <IconPhone className="w-4 h-4" />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href="#pesan"
              className="px-5 py-2.5 rounded-full bg-amber text-abyss text-sm font-bold tracking-wide hover:bg-coral hover:text-shell transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-amber/20"
            >
              Pesan Sekarang
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-11 h-11 grid place-items-center text-shell"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            <span
              className={`absolute h-[2px] w-6 bg-current transition-all duration-300 ${open ? "rotate-45" : "-translate-y-2"}`}
            />
            <span className={`absolute h-[2px] w-6 bg-current transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span
              className={`absolute h-[2px] w-6 bg-current transition-all duration-300 ${open ? "-rotate-45" : "translate-y-2"}`}
            />
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-abyss/97" onClick={() => setOpen(false)} />
        <nav
          className={`relative h-full flex flex-col justify-center px-10 gap-2 transition-transform duration-500 ${
            open ? "translate-y-0" : "translate-y-6"
          }`}
          aria-label="Menu seluler"
        >
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-shell hover:text-amber hover:translate-x-2 transition-all duration-300 py-2 border-b border-foam/10"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pesan"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex w-max px-8 py-4 rounded-full bg-amber text-abyss font-bold"
          >
            Pesan Sekarang
          </a>
          <a href={CONTACT.phoneHref} className="mt-4 text-foam flex items-center gap-2 font-medium">
            <IconPhone className="w-4 h-4" /> {CONTACT.phoneDisplay}
          </a>
        </nav>
      </div>
    </>
  );
}

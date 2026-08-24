import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";
import { GALLERY } from "../data";
import { IconArrow } from "./icons";

const spanClass = (span: string) =>
  span === "wide" ? "col-span-2" : span === "tall" ? "row-span-2" : "";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((a) => (a === null ? a : (a + dir + GALLERY.length) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  return (
    <section id="galeri" className="relative bg-shell py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.34em] text-coral">
              <span className="inline-block w-10 h-px bg-coral" />
              GALERI
            </p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl xl:text-6xl leading-[1.02] text-ink">
              <span className="line-mask"><span>Sepotong surga</span></span>
              <span className="line-mask"><span className="italic text-tide">di barat Sumatera.</span></span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-sm text-ink/65 leading-relaxed">
              Klik foto untuk memperbesar. Semua yang Anda lihat di sini berjarak beberapa langkah dari kamar Anda.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 grid-flow-dense auto-rows-[150px] sm:auto-rows-[190px] gap-3 sm:gap-4">
          {GALLERY.map((g, i) => (
            <Reveal key={g.title + i} delay={(i % 3) * 90} className={spanClass(g.span)}>
              <figure
                onClick={() => setActive(i)}
                className="group relative h-full w-full overflow-hidden rounded-xl cursor-zoom-in"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActive(i)}
                aria-label={`Perbesar foto: ${g.title}`}
              >
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 pt-14 bg-gradient-to-t from-abyss/85 via-abyss/35 to-transparent text-shell translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-display italic text-lg leading-tight">{g.title}</p>
                  <p className="text-[12px] text-shell/70 mt-0.5">{g.cap}</p>
                </figcaption>
                <span className="absolute top-3 right-3 w-8 h-8 grid place-items-center rounded-full bg-shell/15 backdrop-blur-sm border border-shell/30 text-shell opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <IconArrow className="w-3.5 h-3.5 -rotate-45" />
                </span>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {/* lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[90] bg-abyss/96 backdrop-blur-sm flex flex-col items-center justify-center p-5"
          role="dialog"
          aria-modal="true"
          aria-label={GALLERY[active].title}
          onClick={close}
        >
          <button
            className="absolute top-5 right-5 w-12 h-12 grid place-items-center rounded-full border border-foam/30 text-shell hover:bg-foam/10 hover:rotate-90 transition-all duration-300 text-2xl leading-none"
            aria-label="Tutup galeri"
          >
            ×
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 grid place-items-center rounded-full border border-foam/30 text-shell hover:bg-foam/10 hover:-translate-x-0.5 hover:top-1/2 transition-all duration-300"
            aria-label="Foto sebelumnya"
          >
            <IconArrow className="w-5 h-5 rotate-180" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 grid place-items-center rounded-full border border-foam/30 text-shell hover:bg-foam/10 hover:translate-x-0.5 transition-all duration-300"
            aria-label="Foto berikutnya"
          >
            <IconArrow className="w-5 h-5" />
          </button>
          <img
            src={GALLERY[active].src}
            alt={GALLERY[active].title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[76vh] max-w-full rounded-xl shadow-2xl shadow-abyss object-contain"
          />
          <p className="mt-5 text-center text-shell" onClick={(e) => e.stopPropagation()}>
            <span className="font-display italic text-xl">{GALLERY[active].title}</span>
            <span className="block text-[13px] text-shell/60 mt-1">{GALLERY[active].cap}</span>
            <span className="block text-[11px] tracking-[0.3em] text-amber font-bold mt-2">
              {active + 1} / {GALLERY.length}
            </span>
          </p>
        </div>
      )}
    </section>
  );
}

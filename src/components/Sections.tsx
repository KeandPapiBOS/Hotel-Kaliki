import { useEffect, useRef, useState } from "react";
import Reveal, { Counter } from "./Reveal";
import { AMENITIES, CONTACT, IMG, MARQUEE_ITEMS, MENU, TESTIMONIALS, formatIDR } from "../data";
import { AMENITY_ICONS, IconArrow, IconPhone, IconQuote, IconStar, IconWave } from "./icons";

/* ================= MARQUEE ================= */
export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative bg-shell pt-36 pb-8 overflow-hidden">
      <div className="bg-amber -rotate-1 scale-[1.03] py-4 border-y-2 border-abyss/15 shadow-lg shadow-abyss/10">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span className="px-5 font-display italic text-abyss text-lg sm:text-xl font-semibold whitespace-nowrap">
                {item}
              </span>
              <IconWave className="w-6 h-6 text-coral shrink-0" strokeWidth={2.2} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= INTRO ================= */
export function Intro() {
  return (
    <section className="relative bg-shell py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.34em] text-coral">
              <span className="inline-block w-10 h-px bg-coral" />
              SELAMAT DATANG
            </p>
            <h2 className="mt-5 font-display text-ink text-4xl sm:text-5xl xl:text-6xl leading-[1.04]">
              <span className="line-mask"><span>Rumah santai</span></span>
              <span className="line-mask">
                <span>di <em className="squiggle-underline not-italic font-semibold text-tide">bibir laut</em> Nias.</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 text-ink/70 leading-relaxed max-w-xl">
              Terletak di ujung Jalan Yos Sudarso, Ombolata Ulu, Hotel Kaliki menyatukan kenyamanan modern dengan
              suasana pesisir yang tenang. Berenang saat pagi, makan siang dengan angin laut, lalu menutup hari di
              pantai pribadi kami — semuanya tanpa perlu ke mana-mana.
            </p>
            <p className="mt-4 text-ink/70 leading-relaxed max-w-xl">
              Hanya <strong className="text-ink">± 19 km dari Bandara Binaka</strong>, kami mudah dijangkau namun tetap
              jauh dari hiruk pikuk — tempat yang pas untuk liburan keluarga, perjalanan dinas, maupun bulan madu.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-10 grid grid-cols-3 max-w-lg">
              {[
                { n: 19, suffix: " km", label: "dari Bandara Binaka" },
                { n: 24, suffix: " jam", label: "layanan resepsionis" },
                { n: 100, suffix: "%", label: "tepi pantai pribadi" },
              ].map((s, i) => (
                <div key={s.label} className={`px-5 ${i > 0 ? "border-l border-ink/15" : ""}`}>
                  <p className="font-display text-4xl sm:text-5xl font-semibold text-ink tabular-nums">
                    <Counter to={s.n} suffix={s.suffix} />
                  </p>
                  <p className="mt-1.5 text-[12px] sm:text-[13px] text-ink/55 font-medium leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <Reveal delay={120}>
            <div className="relative">
              <img
                src={IMG.beach}
                alt="Pantai pribadi Hotel Kaliki"
                loading="lazy"
                className="rounded-2xl w-full object-cover aspect-[4/3.4] shadow-2xl shadow-ink/25"
              />
              <img
                src={IMG.poolTerrace}
                alt="Teras kolam renang menghadap laut"
                loading="lazy"
                className="floaty absolute -bottom-10 -left-6 sm:-left-12 w-[46%] rounded-xl border-4 border-shell shadow-xl shadow-ink/30 object-cover aspect-[4/3] hidden sm:block"
              />
              <div className="absolute -top-6 -right-4 sm:-right-8 bg-ink text-shell rounded-full px-6 py-5 text-center shadow-xl shadow-ink/30 rotate-6">
                <p className="font-display italic text-2xl leading-none text-amber">Langsung</p>
                <p className="font-display italic text-2xl leading-tight">menghadap laut</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================= AMENITIES ================= */
export function Amenities() {
  return (
    <section id="fasilitas" className="relative bg-ink text-shell py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-32 right-0 w-[30rem] h-[30rem] rounded-full bg-amber/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.34em] text-amber">
              <span className="inline-block w-10 h-px bg-amber" />
              FASILITAS UTAMA
            </p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl xl:text-6xl leading-[1.02]">
              <span className="line-mask"><span>Semua yang Anda butuhkan,</span></span>
              <span className="line-mask"><span className="italic text-foam">sudah kami siapkan.</span></span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-sm text-shell/65 leading-relaxed">
              Dari kolam renang sampai layanan kamar — dirancang supaya Anda tak punya alasan meninggalkan pantai.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AMENITIES.map((a, i) => {
            const Icon = AMENITY_ICONS[a.icon];
            return (
              <Reveal key={a.title} delay={(i % 3) * 110}>
                <div className="group relative h-full rounded-xl border border-foam/15 bg-deep/60 p-7 hover:bg-deep hover:border-amber/50 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden">
                  <span className="absolute -top-3 -right-1 font-display text-[5.2rem] leading-none text-foam/8 group-hover:text-amber/15 transition-colors duration-500 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative inline-block text-amber transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="w-10 h-10" />
                  </span>
                  <h3 className="relative mt-5 font-display italic text-xl sm:text-[1.35rem] font-semibold">{a.title}</h3>
                  <p className="relative mt-2.5 text-sm text-shell/65 leading-relaxed">{a.desc}</p>
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-amber to-coral group-hover:w-full transition-all duration-500" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= DINING ================= */
export function Dining() {
  return (
    <section id="kuliner" className="relative bg-sand py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl border-2 border-coral/60 rotate-2 translate-x-3 translate-y-3 pointer-events-none" />
            <img
              src={IMG.dining}
              alt="Hidangan laut di restoran tepi pantai Hotel Kaliki"
              loading="lazy"
              className="relative rounded-2xl w-full object-cover aspect-[4/3.2] shadow-2xl shadow-ink/30"
            />
            <div className="absolute -bottom-7 right-6 bg-abyss text-shell rounded-full px-6 py-4 shadow-xl -rotate-3">
              <p className="text-[10px] font-bold tracking-[0.26em] text-foam/80">BUKA SETIAP HARI</p>
              <p className="font-display italic text-lg text-amber">07.00 – 22.00 WIB</p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.34em] text-coral">
              <span className="inline-block w-10 h-px bg-coral" />
              RESTORAN KALIKI
            </p>
            <h2 className="mt-5 font-display text-ink text-4xl sm:text-5xl xl:text-6xl leading-[1.04]">
              <span className="line-mask"><span>Rasa laut,</span></span>
              <span className="line-mask"><span className="italic text-coral">dimasak hangat.</span></span>
            </h2>
            <p className="mt-6 text-ink/70 leading-relaxed max-w-xl">
              Dapur kami mengolah hasil tangkapan nelayan Gunungsitoli setiap pagi. Nikmati di teras tepi laut, atau
              pesan lewat layanan kamar — makanan tiba selagi hangat.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <ul className="mt-9 max-w-xl">
              {MENU.map((m) => (
                <li key={m.dish} className="group flex items-baseline gap-3 py-3.5 border-b border-ink/12 hover:border-coral/60 transition-colors">
                  <div className="shrink-0">
                    <p className="font-display text-lg sm:text-xl font-semibold text-ink group-hover:text-coral transition-colors">
                      {m.dish}
                    </p>
                    <p className="text-[12px] text-ink/50 italic">{m.note}</p>
                  </div>
                  <span className="flex-1 border-b-2 border-dotted border-ink/25 translate-y-[-4px]" />
                  <span className="shrink-0 font-bold text-tide tabular-nums">{formatIDR(m.price)}</span>
                </li>
              ))}
            </ul>
            <a
              href={CONTACT.phoneHref}
              className="group mt-9 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-ink text-shell text-sm font-bold hover:bg-coral transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-ink/20"
            >
              <IconPhone className="w-4 h-4" />
              Reservasi Meja
              <IconArrow className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================= TESTIMONIALS ================= */
export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduced.current) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const t = TESTIMONIALS[idx];

  return (
    <section
      className="relative bg-shell py-24 lg:py-32 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute top-10 left-8 text-ink/5 select-none pointer-events-none">
        <IconWave className="w-64 h-64" strokeWidth={1} />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-[11px] font-bold tracking-[0.34em] text-coral">
            <span className="inline-block w-10 h-px bg-coral" />
            KATA TAMU KAMI
            <span className="inline-block w-10 h-px bg-coral" />
          </p>
        </Reveal>

        <div className="mt-8 text-center min-h-[16rem] sm:min-h-[14rem]" aria-live="polite">
          <IconQuote key={`q-${idx}`} className="quote-fade w-12 h-9 mx-auto text-coral" />
          <blockquote key={idx} className="quote-fade">
            <p className="mt-6 font-display italic text-ink text-xl sm:text-2xl lg:text-[1.7rem] leading-relaxed">
              “{t.quote}”
            </p>
            <div className="mt-6 flex items-center justify-center gap-1 text-amber">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} className="w-4 h-4" />
              ))}
            </div>
            <p className="mt-3 font-bold text-ink">{t.name}</p>
            <p className="text-sm text-ink/55">
              {t.from} · menginap di <span className="text-coral font-semibold">{t.stay}</span>
            </p>
          </blockquote>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Testimoni ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === idx ? "w-10 bg-coral" : "w-4 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CTA BAND ================= */
export function CTABand() {
  return (
    <section className="relative bg-coral text-shell py-18 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <IconWave className="absolute -left-10 top-6 w-72 h-72" strokeWidth={1.2} />
        <IconWave className="absolute right-0 bottom-4 w-80 h-80" strokeWidth={1.2} />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-14">
        <Reveal className="flex-1">
          <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl leading-[1.03]">
            <span className="line-mask"><span>Siap mendengar</span></span>
            <span className="line-mask"><span className="italic text-amber">ombak pagi ini?</span></span>
          </h2>
          <p className="mt-4 text-shell/85 max-w-xl leading-relaxed">
            Kirim permintaan booking sekarang — tanpa pembayaran di muka. Tim kami akan mengonfirmasi lewat WhatsApp
            dalam hitungan menit.
          </p>
        </Reveal>
        <Reveal delay={180} className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
          <a
            href="#pesan"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-full bg-abyss text-shell font-bold hover:bg-ink transition-all duration-300 hover:-translate-y-0.5 shadow-xl shadow-abyss/30"
          >
            Pesan Kamar
            <IconArrow className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-full border-2 border-shell/70 text-shell font-bold hover:bg-shell hover:text-coral transition-all duration-300"
          >
            <IconPhone className="w-4.5 h-4.5" />
            {CONTACT.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
export function Footer() {
  return (
    <footer className="bg-abyss text-shell pt-18 lg:pt-24 pb-8 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#beranda" className="flex items-center gap-2.5">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-amber text-abyss">
                <IconWave className="w-6 h-6" strokeWidth={2} />
              </span>
              <span className="leading-none">
                <span className="block font-display italic font-semibold text-2xl">Kaliki</span>
                <span className="block text-[10px] tracking-[0.32em] text-foam/80 font-semibold mt-1">HOTEL · NIAS</span>
              </span>
            </a>
            <p className="mt-5 text-sm text-shell/60 leading-relaxed max-w-xs">
              Akomodasi tepi pantai di Ombolata Ulu, Gunungsitoli — kolam renang, restoran, dan pantai pribadi untuk
              liburan yang tak buru-buru.
            </p>
            <p className="mt-5 text-[11px] tracking-[0.22em] text-foam/50 font-semibold">{CONTACT.coords}</p>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.28em] text-amber">KONTAK</p>
            <ul className="mt-4 space-y-3 text-sm text-shell/70">
              <li className="leading-relaxed">{CONTACT.address}</li>
              <li>
                <a href={CONTACT.phoneHref} className="font-semibold text-foam hover:text-amber transition-colors">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="text-foam/70">Resepsionis 24 jam</li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.28em] text-amber">NAVIGASI</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["#kamar", "Kamar & Tarif"],
                ["#fasilitas", "Fasilitas"],
                ["#kuliner", "Restoran"],
                ["#galeri", "Galeri"],
                ["#lokasi", "Lokasi"],
                ["#pesan", "Booking"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-shell/70 hover:text-amber hover:pl-1.5 transition-all duration-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.28em] text-amber">FASILITAS</p>
            <ul className="mt-4 space-y-2.5 text-sm text-shell/70">
              {["Kolam renang luar ruang", "Restoran & layanan kamar", "Wi-Fi seluruh area", "Parkir luas", "Pantai pribadi & teras"].map(
                (f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <IconWave className="w-4 h-4 text-tide shrink-0" /> {f}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-foam/12 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-shell/45">
          <p>© 2026 Hotel Kaliki · Ombolata Ulu, Gunungsitoli, Pulau Nias</p>
          <p className="flex items-center gap-2">
            Dibuat dengan bangga di tepi Samudra Hindia
            <IconWave className="w-4 h-4 text-amber" />
          </p>
        </div>
      </div>
    </footer>
  );
}

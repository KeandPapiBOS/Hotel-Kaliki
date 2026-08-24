import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import BookingBar from "./BookingBar";
import { IMG } from "../data";
import { IconArrow, IconSun } from "./icons";

function useWibClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const time = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Jakarta",
  }).format(now);
  const date = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Asia/Jakarta",
  }).format(now);
  return { time, date };
}

interface Props {
  roomId: string;
  onRoomChange: (id: string) => void;
}

export default function Hero({ roomId, onRoomChange }: Props) {
  const { time, date } = useWibClock();

  return (
    <section id="beranda" className="relative flex flex-col min-h-svh overflow-hidden bg-abyss">
      {/* backdrop */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={IMG.hero}
          alt="Kolam renang Hotel Kaliki menghadap laut saat matahari terbenam"
          className="kenburns w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss/90 via-abyss/45 to-abyss/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-abyss/60" />
      </div>

      {/* content */}
      <div className="relative z-10 flex-1 flex items-end lg:items-center">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8 pt-32 lg:pt-36 pb-10">
          <div className="max-w-3xl">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] sm:text-xs font-bold tracking-[0.34em] text-amber">
                <span className="inline-block w-10 h-px bg-amber" />
                OMBOLOTA ULU · GUNUNGSITOLI · PULAU NIAS
              </p>
            </Reveal>

            <h1 className="mt-6 font-display text-shell leading-[0.95]">
              <Reveal delay={80}>
                <span className="line-mask">
                  <span className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight">Menginap di</span>
                </span>
              </Reveal>
              <Reveal delay={180}>
                <span className="line-mask">
                  <span className="text-6xl sm:text-8xl lg:text-[9rem] italic font-semibold text-amber">
                    tepian ombak<span className="text-coral">.</span>
                  </span>
                </span>
              </Reveal>
            </h1>

            <Reveal delay={300}>
              <p className="mt-7 max-w-xl text-shell/85 text-base sm:text-lg leading-relaxed font-light">
                <strong className="font-display italic font-semibold text-shell text-xl">Hotel Kaliki</strong> — akomodasi
                tepi pantai dengan kolam renang, restoran, dan pantai pribadi. Kamar-kamar kami luas, dan laut Nias
                selalu ada di depan jendela Anda.
              </p>
            </Reveal>

            <Reveal delay={420}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#kamar"
                  className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-shell text-abyss font-bold text-sm tracking-wide hover:bg-amber transition-all duration-300 hover:-translate-y-0.5 shadow-xl shadow-abyss/40"
                >
                  Lihat Kamar &amp; Tarif
                  <IconArrow className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
                <a
                  href="#fasilitas"
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full border border-shell/40 text-shell text-sm font-semibold hover:border-amber hover:text-amber transition-colors duration-300"
                >
                  Jelajahi Fasilitas
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* live clock chip */}
      <div className="absolute top-24 right-5 lg:right-8 z-10 hidden sm:block">
        <Reveal delay={500}>
          <div className="flex items-center gap-3 rounded-full bg-abyss/60 backdrop-blur-md border border-foam/25 px-4 py-2.5 text-shell">
            <IconSun className="w-5 h-5 text-amber" />
            <div className="leading-tight">
              <p className="text-sm font-bold tabular-nums tracking-wider">{time} WIB</p>
              <p className="text-[10px] text-shell/60">{date} · Gunungsitoli</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* rotating badge */}
      <div className="absolute bottom-[30rem] lg:bottom-64 right-8 xl:right-16 z-10 hidden md:block w-32 h-32">
        <svg viewBox="0 0 120 120" className="spin-slow w-full h-full text-shell/90">
          <defs>
            <path id="circ" d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0" fill="none" />
          </defs>
          <text fontSize="10.5" fontWeight="700" letterSpacing="2.6" fill="currentColor" fontFamily="Plus Jakarta Sans, sans-serif">
            <textPath href="#circ">TEPI PANTAI · PULAU NIAS · HOTEL KALIKI ·</textPath>
          </text>
        </svg>
        <span className="absolute inset-0 grid place-items-center">
          <IconSun className="w-8 h-8 text-amber" />
        </span>
      </div>

      {/* scroll cue */}
      <div className="absolute left-5 lg:left-8 bottom-[26rem] lg:bottom-60 z-10 hidden lg:flex flex-col items-center gap-2 text-shell/70">
        <span className="text-[10px] tracking-[0.3em] font-bold [writing-mode:vertical-rl]">GULIR</span>
        <span className="bob-cue block w-px h-12 bg-gradient-to-b from-shell/70 to-transparent" />
      </div>

      {/* booking dock */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 lg:px-8 pb-10 -mb-24">
        <Reveal delay={520}>
          <BookingBar roomId={roomId} onRoomChange={onRoomChange} />
        </Reveal>
      </div>
    </section>
  );
}

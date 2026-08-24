import Reveal from "./Reveal";
import { ROOMS, formatIDR } from "../data";
import { IconBed, IconCheck, IconGuest, IconPin, IconRuler } from "./icons";

interface Props {
  onPick: (id: string) => void;
}

export default function Rooms({ onPick }: Props) {
  return (
    <section id="kamar" className="relative bg-ink text-shell pt-40 lg:pt-44 pb-24 lg:pb-32 overflow-hidden">
      {/* ambient */}
      <div className="absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-tide/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-coral/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-14 lg:gap-20 items-start">
        {/* sticky intro */}
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.34em] text-amber">
              <span className="inline-block w-10 h-px bg-amber" />
              KAMAR &amp; TARIF
            </p>
            <h2 className="mt-5 font-display leading-[1.02] text-4xl sm:text-5xl xl:text-6xl">
              <span className="line-mask"><span>Tidur nyenyak,</span></span>
              <span className="line-mask"><span className="italic text-foam">bangun menghadap laut.</span></span>
            </h2>
            <p className="mt-6 text-shell/70 leading-relaxed max-w-md">
              Setiap kamar dirancang lapang dengan jendela besar, material kayu hangat, dan sentuhan anyaman lokal —
              supaya Anda betah, entah datang berdua, sendiri, atau membawa seluruh keluarga.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-9 rounded-xl border border-foam/20 bg-deep/60 p-5 max-w-md">
              <p className="text-[11px] font-bold tracking-[0.24em] text-foam/80">PERLU DIKETAHUI</p>
              <ul className="mt-3 space-y-2.5 text-sm text-shell/80">
                {["Check-in 14.00 · Check-out 12.00 WIB", "Tarif sudah termasuk pajak", "Tersedia tempat tidur tambahan", "Resepsionis siap membantu 24 jam"].map(
                  (t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <IconCheck className="w-4 h-4 mt-0.5 shrink-0 text-amber" strokeWidth={2.2} />
                      {t}
                    </li>
                  )
                )}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* room cards */}
        <div className="space-y-8">
          {ROOMS.map((room, i) => (
            <Reveal key={room.id} delay={i * 90} as="article">
              <div className="group grid md:grid-cols-2 rounded-2xl overflow-hidden border border-foam/15 bg-deep/70 hover:border-amber/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-abyss/60">
                <div className="relative h-60 md:h-auto min-h-56 overflow-hidden">
                  <img
                    src={room.img}
                    alt={`Kamar ${room.name}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss/50 to-transparent" />
                  {room.popular && (
                    <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-coral text-shell text-[11px] font-bold tracking-wider shadow-lg">
                      ★ PALING DIMINATI
                    </span>
                  )}
                  <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-abyss/70 backdrop-blur-sm text-foam text-xs font-semibold border border-foam/25">
                    {room.view}
                  </span>
                </div>

                <div className="p-6 sm:p-8 flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl sm:text-[1.7rem] italic font-semibold text-shell">
                      {room.name}
                    </h3>
                    <span className="shrink-0 text-foam/70 font-display text-4xl leading-none">0{i + 1}</span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-shell/65 font-medium">
                    <span className="flex items-center gap-1.5"><IconRuler className="w-4 h-4 text-amber" /> {room.size}</span>
                    <span className="flex items-center gap-1.5"><IconGuest className="w-4 h-4 text-amber" /> {room.guests} Tamu</span>
                    <span className="flex items-center gap-1.5"><IconBed className="w-4 h-4 text-amber" /> {room.bed}</span>
                    <span className="flex items-center gap-1.5"><IconPin className="w-4 h-4 text-amber" /> {room.view}</span>
                  </div>

                  <p className="mt-4 text-sm text-shell/70 leading-relaxed">{room.desc}</p>

                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                    {room.perks.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-[13px] text-shell/75">
                        <IconCheck className="w-3.5 h-3.5 shrink-0 text-foam" strokeWidth={2.4} />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 flex items-end justify-between gap-4 border-t border-foam/15 mt-6">
                    <div>
                      <p className="font-display text-[1.65rem] leading-none text-amber font-semibold">
                        {formatIDR(room.price)}
                      </p>
                      <p className="text-[11px] text-shell/55 mt-1.5 tracking-wide">per malam · sudah termasuk pajak</p>
                    </div>
                    <button
                      onClick={() => onPick(room.id)}
                      className="px-5 py-3 rounded-full bg-amber text-abyss text-sm font-bold hover:bg-shell transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-abyss/40"
                    >
                      Pilih Kamar
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { CONTACT } from "../data";
import { IconConcierge, IconPhone, IconPin, IconPlane } from "./icons";

function NiasMap() {
  return (
    <svg viewBox="0 0 640 430" className="w-full h-auto block" role="img" aria-label="Peta ilustrasi rute dari Bandara Binaka ke Hotel Kaliki">
      <defs>
        <pattern id="seagrid" width="34" height="34" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill="#9ed8cb" opacity="0.12" />
        </pattern>
      </defs>

      <rect width="640" height="430" rx="18" fill="#0e3341" />
      <rect width="640" height="430" rx="18" fill="url(#seagrid)" />

      {/* drifting waves */}
      <g className="wave-drift" stroke="#9ed8cb" strokeWidth="2" fill="none" opacity="0.16" strokeLinecap="round">
        <path d="M20 380 q18 -10 36 0 t36 0 t36 0 t36 0 t36 0 t36 0" />
        <path d="M330 60 q18 -10 36 0 t36 0 t36 0 t36 0" />
        <path d="M60 90 q18 -10 36 0 t36 0 t36 0" />
        <path d="M420 380 q18 -10 36 0 t36 0 t36 0 t36 0" />
      </g>

      {/* island */}
      <g>
        <path
          d="M200 120 C 260 60, 400 55, 480 105 C 560 155, 585 250, 530 315 C 470 385, 330 395, 255 345 C 180 295, 140 180, 200 120 Z"
          fill="#e9dfc7"
          opacity="0.94"
        />
        <path
          d="M235 145 C 285 100, 395 95, 458 135 C 520 175, 545 250, 500 300 C 450 355, 340 362, 282 322 C 224 282, 185 190, 235 145 Z"
          fill="#d9cba8"
          opacity="0.55"
        />
        {/* palms */}
        <g stroke="#155a6b" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.7">
          <path d="M300 210 v-16 M300 194 q-10 -8 -16 -6 M300 194 q10 -8 16 -6 M300 194 q-2 -12 2 -16" />
          <path d="M360 260 v-16 M360 244 q-10 -8 -16 -6 M360 244 q10 -8 16 -6 M360 244 q-2 -12 2 -16" />
          <path d="M430 190 v-16 M430 174 q-10 -8 -16 -6 M430 174 q10 -8 16 -6 M430 174 q-2 -12 2 -16" />
        </g>
        <text x="345" y="238" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="19" fill="#155a6b" opacity="0.75" textAnchor="middle">
          Pulau Nias
        </text>
      </g>

      {/* route */}
      <path
        d="M150 95 C 240 150, 300 230, 462 308"
        fill="none"
        stroke="#e4643f"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeDasharray="1 12"
        className="route-dash"
      />
      <text x="272" y="212" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12.5" fontWeight="700" fill="#9ed8cb" transform="rotate(33 272 212)">
        ± 19 km · ~35 menit
      </text>

      {/* airport pin */}
      <g>
        <circle cx="150" cy="95" r="26" fill="#071b23" stroke="#9ed8cb" strokeWidth="1.6" />
        <path d="M140 100 L160 92 L151 104 L149 99 Z M140 100 L149 99 L160 92" fill="#9ed8cb" transform="rotate(-8 150 97)" />
        <rect x="96" y="24" width="118" height="30" rx="15" fill="#071b23" stroke="#9ed8cb" strokeOpacity="0.4" />
        <text x="155" y="43" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#f4efe3" textAnchor="middle">
          Bandara Binaka
        </text>
      </g>

      {/* hotel pin */}
      <g>
        <circle cx="462" cy="308" r="15" fill="#e4643f" opacity="0.5" className="pulse-ring" />
        <circle cx="462" cy="308" r="13" fill="#e8a34c" stroke="#071b23" strokeWidth="2.5" />
        <path d="M456 308 c3 -3.4 9 -3.4 12 0 M456 312 c3 -3.4 9 -3.4 12 0" stroke="#071b23" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="480" y="290" width="126" height="32" rx="16" fill="#e8a34c" />
        <text x="543" y="310.5" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="800" fill="#071b23" textAnchor="middle">
          Hotel Kaliki
        </text>
      </g>

      {/* compass */}
      <g transform="translate(586 60)" stroke="#9ed8cb" fill="none" opacity="0.8">
        <circle r="24" strokeWidth="1.4" />
        <path d="M0 -24 v6 M0 24 v-6 M-24 0 h6 M24 0 h-6" strokeWidth="1.4" />
        <path d="M0 -13 L4.5 5 L0 1 L-4.5 5 Z" fill="#e8a34c" stroke="none" />
        <text y="-31" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="800" fill="#9ed8cb" textAnchor="middle" stroke="none">U</text>
      </g>

      <text x="36" y="404" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="700" letterSpacing="5" fill="#9ed8cb" opacity="0.55">
        SAMUDRA HINDIA
      </text>
    </svg>
  );
}

export default function Location() {
  return (
    <section id="lokasi" className="relative bg-ink text-shell py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-tide/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-14 lg:gap-16 items-center">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.34em] text-amber">
              <span className="inline-block w-10 h-px bg-amber" />
              LOKASI &amp; KONTAK
            </p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl xl:text-6xl leading-[1.02]">
              <span className="line-mask"><span>Mudah dijangkau,</span></span>
              <span className="line-mask"><span className="italic text-foam">susah dilupakan.</span></span>
            </h2>
          </Reveal>

          <div className="mt-9 space-y-5">
            {[
              {
                icon: IconPin,
                label: "ALAMAT",
                text: CONTACT.address,
              },
              {
                icon: IconPlane,
                label: "DARI BANDARA",
                text: `± ${CONTACT.airportKm} km dari Bandara Binaka, Gunungsitoli — sekitar 35 menit berkendara.`,
              },
              {
                icon: IconPhone,
                label: "TELEPON / WHATSAPP",
                text: CONTACT.phoneDisplay,
                href: CONTACT.phoneHref,
              },
              {
                icon: IconConcierge,
                label: "LAYANAN",
                text: "Resepsionis & check-in 24 jam — datang jam berapa pun, kami tunggu.",
              },
            ].map((row, i) => (
              <Reveal key={row.label} delay={i * 100}>
                <div className="group flex gap-4 rounded-xl border border-foam/15 bg-deep/50 p-4.5 hover:border-amber/50 hover:bg-deep transition-all duration-300">
                  <span className="shrink-0 grid place-items-center w-12 h-12 rounded-full bg-foam/10 text-amber border border-foam/20 group-hover:bg-amber group-hover:text-abyss transition-colors duration-300">
                    <row.icon className="w-5.5 h-5.5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.26em] text-foam/70">{row.label}</p>
                    {row.href ? (
                      <a href={row.href} className="mt-1 block font-semibold text-shell hover:text-amber transition-colors">
                        {row.text}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-shell/85 leading-relaxed">{row.text}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={420}>
              <p className="pl-1 text-xs tracking-[0.22em] text-foam/50 font-semibold">{CONTACT.coords} · PULAU NIAS, SUMATERA UTARA</p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={200}>
          <div className="relative rounded-2xl overflow-hidden border border-foam/20 shadow-2xl shadow-abyss/60">
            <NiasMap />
          </div>
          <p className="mt-3 text-right text-[11px] text-foam/50 tracking-wide">* ilustrasi rute — bukan skala sebenarnya</p>
        </Reveal>
      </div>
    </section>
  );
}

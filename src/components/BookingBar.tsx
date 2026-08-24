import { useEffect, useMemo, useState } from "react";
import { addDays, differenceInCalendarDays, format, parseISO } from "date-fns";
import { ROOMS, formatIDR, CONTACT } from "../data";
import { IconArrow, IconCheck, IconGuest } from "./icons";

const toISO = (d: Date) => format(d, "yyyy-MM-dd");

interface Props {
  roomId: string;
  onRoomChange: (id: string) => void;
}

export default function BookingBar({ roomId, onRoomChange }: Props) {
  const today = new Date();
  const [checkIn, setCheckIn] = useState(toISO(addDays(today, 2)));
  const [checkOut, setCheckOut] = useState(toISO(addDays(today, 4)));
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState<null | { ref: string }>(null);

  const room = useMemo(() => ROOMS.find((r) => r.id === roomId) ?? ROOMS[0], [roomId]);

  const nights = useMemo(() => {
    try {
      return differenceInCalendarDays(parseISO(checkOut), parseISO(checkIn));
    } catch {
      return 0;
    }
  }, [checkIn, checkOut]);

  const total = nights > 0 ? nights * room.price : 0;
  const valid = nights > 0 && name.trim().length >= 2 && phone.trim().length >= 8;

  useEffect(() => {
    if (nights <= 0) setError("Tanggal check-out harus setelah tanggal check-in.");
    else setError("");
  }, [nights]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nights <= 0) {
      setError("Tanggal check-out harus setelah tanggal check-in.");
      return;
    }
    if (name.trim().length < 2) {
      setError("Mohon isi nama lengkap Anda.");
      return;
    }
    if (phone.trim().length < 8) {
      setError("Mohon isi nomor WhatsApp yang valid.");
      return;
    }
    setError("");
    setConfirmed({ ref: "KLK-" + Math.random().toString(36).slice(2, 7).toUpperCase() });
  };

  const reset = () => {
    setConfirmed(null);
    setName("");
    setPhone("");
  };

  if (confirmed) {
    return (
      <div id="pesan" className="scroll-mt-28">
        <div className="relative rounded-2xl bg-abyss/85 backdrop-blur-md border border-foam/25 p-6 sm:p-8 text-shell overflow-hidden">
          <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-amber/15 blur-2xl pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <span className="shrink-0 grid place-items-center w-16 h-16 rounded-full bg-foam/15 text-foam border border-foam/30">
              <IconCheck className="w-8 h-8" strokeWidth={2.2} />
            </span>
            <div className="flex-1">
              <p className="text-[11px] font-bold tracking-[0.28em] text-amber">PERMINTAAN DITERIMA</p>
              <h3 className="font-display text-2xl sm:text-3xl italic mt-1.5">
                Terima kasih, {name.split(" ")[0]}! Kode booking Anda{" "}
                <span className="text-amber not-italic font-semibold">{confirmed.ref}</span>
              </h3>
              <p className="mt-2 text-sm text-shell/70 leading-relaxed max-w-2xl">
                {room.name} · {guests} tamu · {nights} malam ({format(parseISO(checkIn), "d MMM")} –{" "}
                {format(parseISO(checkOut), "d MMM yyyy")}) · Estimasi {formatIDR(total)}. Tim resepsionis kami akan
                menghubungi Anda di <span className="text-foam font-semibold">{phone}</span> untuk konfirmasi
                ketersediaan &amp; pembayaran.
              </p>
            </div>
            <button
              onClick={reset}
              className="shrink-0 px-6 py-3 rounded-full border border-foam/40 text-foam text-sm font-semibold hover:bg-foam/10 transition-colors"
            >
              Buat permintaan baru
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="pesan" className="scroll-mt-28">
      <form
        onSubmit={submit}
        className="relative rounded-2xl bg-abyss/85 backdrop-blur-md border border-foam/25 shadow-2xl shadow-abyss/50 overflow-hidden"
        noValidate
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber via-coral to-amber" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1fr_0.8fr_1.2fr] gap-px bg-foam/15">
          <label className="block p-4 sm:p-5 bg-abyss/60 hover:bg-abyss/30 transition-colors col-span-2 md:col-span-1">
            <span className="block text-[10px] font-bold tracking-[0.24em] text-foam/80 mb-2">TIPE KAMAR</span>
            <select
              value={roomId}
              onChange={(e) => onRoomChange(e.target.value)}
              className="w-full bg-transparent text-shell font-semibold text-sm sm:text-base outline-none cursor-pointer [&>option]:text-ink"
            >
              {ROOMS.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name} — {formatIDR(r.price)}/malam
                </option>
              ))}
            </select>
          </label>

          <label className="block p-4 sm:p-5 bg-abyss/60 hover:bg-abyss/30 transition-colors">
            <span className="block text-[10px] font-bold tracking-[0.24em] text-foam/80 mb-2">CHECK-IN</span>
            <input
              type="date"
              value={checkIn}
              min={toISO(today)}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent text-shell font-semibold text-sm sm:text-base outline-none"
            />
          </label>

          <label className="block p-4 sm:p-5 bg-abyss/60 hover:bg-abyss/30 transition-colors">
            <span className="block text-[10px] font-bold tracking-[0.24em] text-foam/80 mb-2">CHECK-OUT</span>
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent text-shell font-semibold text-sm sm:text-base outline-none"
            />
          </label>

          <label className="block p-4 sm:p-5 bg-abyss/60 hover:bg-abyss/30 transition-colors col-span-2 md:col-span-1">
            <span className="block text-[10px] font-bold tracking-[0.24em] text-foam/80 mb-2">TAMU</span>
            <span className="flex items-center gap-2.5 text-shell font-semibold text-sm sm:text-base">
              <IconGuest className="w-4 h-4 text-foam" />
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-transparent outline-none cursor-pointer [&>option]:text-ink"
                aria-label="Jumlah tamu"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} tamu
                  </option>
                ))}
              </select>
            </span>
          </label>

          <button
            type="submit"
            className="group col-span-2 lg:col-span-1 m-2 lg:m-2 rounded-xl bg-amber text-abyss font-bold text-sm sm:text-base tracking-wide hover:bg-coral hover:text-shell transition-all duration-300 flex items-center justify-center gap-2.5 px-6 py-4"
          >
            Cek Ketersediaan
            <IconArrow className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-foam/15 border-t border-foam/15">
          <label className="block p-4 sm:px-5 sm:py-3.5 bg-abyss/60">
            <span className="block text-[10px] font-bold tracking-[0.24em] text-foam/80 mb-1.5">NAMA LENGKAP</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="cth. Ama Niha Telaumbanua"
              className="w-full bg-transparent text-shell text-sm font-semibold outline-none placeholder:text-shell/35 placeholder:font-normal"
            />
          </label>
          <label className="block p-4 sm:px-5 sm:py-3.5 bg-abyss/60">
            <span className="block text-[10px] font-bold tracking-[0.24em] text-foam/80 mb-1.5">NO. WHATSAPP</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="cth. 0812 3456 7890"
              className="w-full bg-transparent text-shell text-sm font-semibold outline-none placeholder:text-shell/35 placeholder:font-normal"
            />
          </label>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-5 py-4 bg-abyss/75 border-t border-foam/15 text-sm">
          <p className="text-foam/90 font-medium">
            {nights > 0 ? (
              <>
                <span className="text-amber font-bold">{nights} malam</span> · {room.name} · {room.size} · estimasi{" "}
                <span className="text-amber font-bold">{formatIDR(total)}</span>
              </>
            ) : (
              "Pilih tanggal menginap untuk melihat estimasi tarif."
            )}
          </p>
          {error && <p className="text-coral font-semibold sm:ml-auto text-[13px]">⚠ {error}</p>}
          {!error && (
            <p className="text-shell/45 text-xs sm:ml-auto">
              Tanpa pembayaran di muka — konfirmasi via {CONTACT.phoneDisplay}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

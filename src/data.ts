export const IMG = {
  hero: "https://image.qwenlm.ai/generated-images/9eba5d03-486d-4ce0-a523-fb30970257ee/_result.png",
  roomSeaview: "https://image.qwenlm.ai/generated-images/08fd79c0-4d1f-4b28-9318-a809c2360ff4/_result.png",
  roomGarden: "https://image.qwenlm.ai/generated-images/8c7887b7-1091-4b60-afad-3fd3cb670d9c/_result.png",
  roomSuite: "https://image.qwenlm.ai/generated-images/923ba605-ef92-4771-bd33-6df09641dcfd/_result.png",
  poolTerrace: "https://image.qwenlm.ai/generated-images/ea1a99ca-0a9d-4b7d-b6e0-9107c9928c74/_result.png",
  beach: "https://image.qwenlm.ai/generated-images/5525d6b6-7466-4f6f-89fe-336f7b652b8c/_result.png",
  dining: "https://image.qwenlm.ai/generated-images/32b2c6bc-fc8d-4dc8-b72c-9cdfd6467429/_result.png",
};

export const CONTACT = {
  name: "Hotel Kaliki",
  address: "Jl. Yos Sudarso Ujung No. 43, Ombolata Ulu, Kec. Gunungsitoli, Kota Gunungsitoli, Sumatera Utara 22811",
  phoneDisplay: "+62 852-9020-2020",
  phoneHref: "tel:+6285290202020",
  airportKm: 19,
  coords: "1°17′ LU · 97°34′ BT",
};

export interface Room {
  id: string;
  name: string;
  size: string;
  guests: number;
  view: string;
  bed: string;
  price: number;
  popular?: boolean;
  img: string;
  perks: string[];
  desc: string;
}

export const ROOMS: Room[] = [
  {
    id: "superior",
    name: "Superior Garden",
    size: "24 m²",
    guests: 2,
    view: "Taman Tropis",
    bed: "1 Queen Bed",
    price: 425000,
    img: IMG.roomGarden,
    perks: ["AC dingin", "Wi-Fi cepat", "Teras taman", "Air panas"],
    desc: "Kamar hangat bernuansa kayu dengan jendela lebar menghadap taman tropis — tenang, sejuk, dan pas untuk berdua.",
  },
  {
    id: "deluxe",
    name: "Deluxe Sea View",
    size: "28 m²",
    guests: 2,
    view: "Laut Lepas",
    bed: "1 King Bed",
    price: 550000,
    popular: true,
    img: IMG.roomSeaview,
    perks: ["Balkon laut", "AC dingin", "Wi-Fi cepat", "Rain shower"],
    desc: "Favorit tamu kami. Buka tirai dan laut Nias langsung menyapa — balkon privatnya tempat terbaik menikmati senja.",
  },
  {
    id: "suite",
    name: "Family Ocean Suite",
    size: "45 m²",
    guests: 4,
    view: "Panorama Laut",
    bed: "2 Kamar Tidur",
    price: 875000,
    img: IMG.roomSuite,
    perks: ["Ruang keluarga", "Balkon panorama", "Bathtub", "Sarapan 4 pax"],
    desc: "Suite luas dengan ruang keluarga dan panorama laut 180° — lega untuk keluarga yang ingin lama-lama di Nias.",
  },
];

export interface Amenity {
  title: string;
  desc: string;
  icon: "pool" | "resto" | "wifi" | "parking" | "concierge" | "beach";
}

export const AMENITIES: Amenity[] = [
  {
    title: "Kolam Renang Luar Ruang",
    desc: "Berendam sambil memandang garis pantai — dari pagi yang jernih sampai langit jingga sore hari.",
    icon: "pool",
  },
  {
    title: "Restoran & Layanan Kamar",
    desc: "Hidangan laut segar dan masakan Nusantara, diantar hangat sampai ke depan pintu kamar Anda.",
    icon: "resto",
  },
  {
    title: "Wi-Fi di Seluruh Area",
    desc: "Koneksi internet stabil di kamar, restoran, hingga tepi kolam — tetap terhubung walau jauh.",
    icon: "wifi",
  },
  {
    title: "Area Parkir Luas",
    desc: "Lahan parkir lega dan aman untuk mobil pribadi maupun rombongan wisata Anda.",
    icon: "parking",
  },
  {
    title: "Resepsionis 24 Jam",
    desc: "Check-in larut malam atau butuh bantuan subuh? Tim kami selalu siaga kapan pun.",
    icon: "concierge",
  },
  {
    title: "Pantai Pribadi & Teras",
    desc: "Beberapa langkah dari lobi langsung pasir pantai — lengkap dengan teras santai dan kursi berjemur.",
    icon: "beach",
  },
];

export const GALLERY = [
  { src: IMG.hero, title: "Senja di Kaliki", cap: "Kolam & pantai saat golden hour", span: "wide" },
  { src: IMG.roomSeaview, title: "Deluxe Sea View", cap: "Bangun bersama panorama laut", span: "tall" },
  { src: IMG.beach, title: "Pantai Pribadi", cap: "Pasir, ombak, dan kursi santai", span: "std" },
  { src: IMG.dining, title: "Meja Tepi Laut", cap: "Hidangan laut segar setiap hari", span: "std" },
  { src: IMG.poolTerrace, title: "Teras Kolam", cap: "Berenang menghadap cakrawala", span: "tall" },
  { src: IMG.roomSuite, title: "Ocean Suite", cap: "Suite keluarga berpemandangan luas", span: "wide" },
];

export const MENU = [
  { dish: "Ikan Bakar Sambal Andaliman", note: "tangkapan nelayan pagi", price: 65000 },
  { dish: "Gulai Kepala Ikan", note: "kuah santan gurih pedas", price: 55000 },
  { dish: "Udang Bakar Madu", note: "dengan lalapan segar", price: 75000 },
  { dish: "Kelapa Muda Segar", note: "langsung dari pohonnya", price: 20000 },
  { dish: "Kopi Nias", note: "sangrai lokal, seduh tubruk", price: 18000 },
];

export const TESTIMONIALS = [
  {
    quote:
      "Bangun pagi langsung dengar suara ombak dari balkon. Kolam renangnya bersih, dan ikan bakarnya juara. Kami sampai memperpanjang menginap dua malam!",
    name: "Rina & Andre Siregar",
    from: "Medan",
    stay: "Deluxe Sea View",
  },
  {
    quote:
      "Lokasinya tenang tapi dekat ke pusat Gunungsitoli. Resepsionisnya ramah sekali, tengah malam pun dibantu dengan cepat. Parkir luas untuk rombongan kantor kami.",
    name: "Markus Halawa",
    from: "Jakarta",
    stay: "Superior Garden",
  },
  {
    quote:
      "Anak-anak betah seharian di pantai pribadi dan kolam renang. Suite-nya lega, sarapannya enak, dan stafnya perhatian. Liburan keluarga paling berkesan tahun ini.",
    name: "Keluarga Zebua",
    from: "Gunungsitoli",
    stay: "Family Ocean Suite",
  },
  {
    quote:
      "The sunset from the pool terrace is unreal. Quiet beach, big rooms, fast Wi-Fi, and the friendliest staff on the island. I will absolutely come back.",
    name: "Sarah Lim",
    from: "Sydney, Australia",
    stay: "Deluxe Sea View",
  },
];

export const MARQUEE_ITEMS = [
  "Pantai Pribadi",
  "Kolam Renang Luar Ruang",
  "Restoran & Layanan Kamar",
  "Wi-Fi Seluruh Area",
  "Resepsionis 24 Jam",
  "19 km dari Bandara Binaka",
  "Ombolata Ulu · Gunungsitoli",
];

export const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

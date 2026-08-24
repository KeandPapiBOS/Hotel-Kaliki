import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  ...props,
});

export const IconPool = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 17.5c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0" />
    <path d="M3 21c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0" opacity={0.55} />
    <path d="M8.5 14V5.8a1.8 1.8 0 0 1 3.6 0M15.5 14V5.8a1.8 1.8 0 0 0-3.6 0" />
    <path d="M8.5 8h7M8.5 11.5h7" />
  </svg>
);

export const IconResto = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 14h16a8 8 0 0 0-16 0Z" />
    <path d="M12 6V4.5M2.5 17.5h19" />
    <circle cx="12" cy="3.6" r="0.4" fill="currentColor" />
    <path d="M6.5 14V9.5M9.5 14v-3" opacity={0.55} />
    <path d="M4 20.5h16" opacity={0.55} />
  </svg>
);

export const IconWifi = (p: P) => (
  <svg {...base(p)}>
    <path d="M2.5 8.8a14.5 14.5 0 0 1 19 0" />
    <path d="M5.6 12.3a10 10 0 0 1 12.8 0" />
    <path d="M8.8 15.7a5.4 5.4 0 0 1 6.4 0" />
    <circle cx="12" cy="19" r="1.15" fill="currentColor" stroke="none" />
  </svg>
);

export const IconParking = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
    <path d="M9.5 17V7.5h3.4a3.1 3.1 0 0 1 0 6.2H9.5" />
  </svg>
);

export const IconConcierge = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5.2l3.4 2" />
    <path d="M12 2.2v1.6M21.8 12h-1.6M12 21.8v-1.6M2.2 12h1.6" opacity={0.55} />
  </svg>
);

export const IconBeach = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3.5A9 9 0 0 1 20.5 14H3.5A9 9 0 0 1 12 3.5Z" />
    <path d="M12 3.5V14M6.2 6.6l3 5.2M17.8 6.6l-3 5.2" opacity={0.55} />
    <path d="M12 14l2.2 6.5" />
    <path d="M2.5 21c1.6-1.2 3.2-1.2 4.8 0s3.2 1.2 4.7 0 3.2-1.2 4.8 0 3.1 1.2 4.7 0" opacity={0.7} />
  </svg>
);

export const IconWave = (p: P) => (
  <svg {...base(p)}>
    <path d="M2 9c1.7-1.4 3.3-1.4 5 0s3.3 1.4 5 0 3.3-1.4 5 0 3.3 1.4 5 0" />
    <path d="M2 15c1.7-1.4 3.3-1.4 5 0s3.3 1.4 5 0 3.3-1.4 5 0 3.3 1.4 5 0" opacity={0.5} />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21.5s-7-6.1-7-11.3A7 7 0 0 1 19 10.2c0 5.2-7 11.3-7 11.3Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconPlane = (p: P) => (
  <svg {...base(p)}>
    <path d="M10.5 13.5 3 11l1.8-1.8 6 .8 4.5-4.5a1.6 1.6 0 0 1 2.3 2.3L13 12.3l.8 6L12 20l-2.5-7.5" transform="rotate(8 12 12)" />
    <path d="M4 20h6" opacity={0.55} />
  </svg>
);

export const IconPhone = (p: P) => (
  <svg {...base(p)}>
    <path d="M5.5 3.5h3l1.7 4.3-2.1 1.6a12.5 12.5 0 0 0 6.5 6.5l1.6-2.1 4.3 1.7v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2Z" />
  </svg>
);

export const IconSun = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.8v2M12 19.2v2M2.8 12h2M19.2 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M18.5 5.5l-1.4 1.4M6.9 17.1l-1.4 1.4" />
  </svg>
);

export const IconGuest = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
  </svg>
);

export const IconRuler = (p: P) => (
  <svg {...base(p)}>
    <rect x="2.5" y="9" width="19" height="6" rx="1.5" />
    <path d="M6.5 9v2.6M10.2 9v3.8M13.8 9v2.6M17.5 9v3.8" />
  </svg>
);

export const IconBed = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 18.5V6.5M3 14h18v4.5M3 11h18v3" />
    <path d="M5.5 11V9.2A1.2 1.2 0 0 1 6.7 8h3.6A1.2 1.2 0 0 1 11.5 9.2V11" opacity={0.7} />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="M4.5 12.5 10 18 19.5 6.5" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export const IconCompass = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2.2 5-5 2.2 2.2-5 5-2.2Z" />
  </svg>
);

export const IconQuote = (p: P) => (
  <svg viewBox="0 0 48 36" fill="currentColor" {...p}>
    <path d="M0 36V22.6C0 9.8 6.8 2.4 18.6 0l2.6 5.6C13.8 8 10 12.4 10 18h10v18H0Zm27.4 0V22.6C27.4 9.8 34.2 2.4 46 0l2 5.6C40.6 8 37.4 12.4 37.4 18h10.6v18H27.4Z" transform="scale(0.96)" />
  </svg>
);

export const IconStar = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2.8l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.6l-5.8 3.1 1.1-6.5L2.6 9.6l6.5-.9L12 2.8Z" />
  </svg>
);

export const AMENITY_ICONS = {
  pool: IconPool,
  resto: IconResto,
  wifi: IconWifi,
  parking: IconParking,
  concierge: IconConcierge,
  beach: IconBeach,
} as const;

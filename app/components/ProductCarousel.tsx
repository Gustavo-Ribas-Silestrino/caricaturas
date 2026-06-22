"use client";
import { useState, useRef } from "react";
import Image from "next/image";

// These images already have the label text baked in at the top
const products = [
  { src: "/fotos/CANECA.png",      alt: "Caneca personalizada" },
  { src: "/fotos/CARDENETA.png",   alt: "Cardeneta personalizada" },
  { src: "/fotos/SQUEEZE 1.png",   alt: "Squeeze personalizado" },
  { src: "/fotos/DIGITAL.png",     alt: "Papel digital" },
  { src: "/fotos/PAPEL.png",       alt: "Papel tradicional" },
];

const n = products.length;

export default function ProductCarousel() {
  const [idx, setIdx] = useState(0);
  const touchX = useRef<number | null>(null);

  const prev = () => setIdx((i) => (i - 1 + n) % n);
  const next = () => setIdx((i) => (i + 1) % n);

  // Show 3 items at a time (like Wix)
  const visible = [0, 1, 2].map((o) => products[(idx + o) % n]);

  return (
    <div className="relative bg-[#f0ede8]">
      <button onClick={prev} aria-label="Anterior"
        className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center text-[#1B2A4A]">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>

      <div
        className="grid grid-cols-3"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const d = touchX.current - e.changedTouches[0].clientX;
          if (d > 40) next(); else if (d < -40) prev();
          touchX.current = null;
        }}
      >
        {visible.map((p, i) => (
          <div key={i} className="relative aspect-[3/4] bg-[#f0ede8]">
            <Image src={p.src} alt={p.alt} fill sizes="33vw" className="object-contain" loading="lazy" />
          </div>
        ))}
      </div>

      <button onClick={next} aria-label="Próximo"
        className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center text-[#1B2A4A]">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  );
}

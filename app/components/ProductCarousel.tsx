"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const products = [
  { label: "CANECA", src: "/fotos/canecva ia 1 copiar.png" },
  { label: "CARDENETA", src: "/fotos/CARDENETA.png" },
  { label: "SQUEEZE", src: "/fotos/SQUEEZE 1.png" },
  { label: "PAPEL DIGITAL", src: "/fotos/DIGITAL_crop.png" },
  { label: "PAPEL TRADICIONAL", src: "/fotos/kaka.png" },
];

export default function ProductCarousel() {
  const [idx, setIdx] = useState(0);
  const touchX = useRef<number | null>(null);
  const n = products.length;

  const prev = () => setIdx((i) => (i - 1 + n) % n);
  const next = () => setIdx((i) => (i + 1) % n);

  const visible = [0, 1, 2].map((offset) => products[(idx + offset) % n]);

  return (
    <div className="relative">
      <button onClick={prev} aria-label="Anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center text-[#1B2A4A]">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>

      <div
        className="grid grid-cols-3 gap-0 overflow-hidden"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const diff = touchX.current - e.changedTouches[0].clientX;
          if (diff > 40) next(); else if (diff < -40) prev();
          touchX.current = null;
        }}
      >
        {visible.map((p, i) => (
          <div key={i} className="flex flex-col items-center">
            <p className="wix-title text-[#1B2A4A] text-base md:text-xl py-3 text-center">{p.label}</p>
            <div className="relative w-full aspect-[3/4]">
              <Image src={p.src} alt={p.label} fill sizes="33vw" className="object-cover object-top" loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      <button onClick={next} aria-label="Próximo"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center text-[#1B2A4A]">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  );
}

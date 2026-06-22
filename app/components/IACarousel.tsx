"use client";
import { useState } from "react";
import Image from "next/image";

export default function IACarousel({ images }: { images: { src: string; alt: string }[] }) {
  const [idx, setIdx] = useState(0);
  const n = images.length;
  return (
    <div className="relative">
      <div className="relative aspect-square rounded-lg overflow-hidden">
        <Image src={images[idx].src} alt={images[idx].alt} fill sizes="40vw" className="object-cover" loading="lazy" />
      </div>
      <div className="flex justify-center gap-1 mt-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === idx ? "bg-[#F5A623] w-4" : "bg-white/40"}`} />
        ))}
      </div>
      <button onClick={() => setIdx((idx - 1 + n) % n)} aria-label="Anterior"
        className="absolute left-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button onClick={() => setIdx((idx + 1) % n)} aria-label="Próximo"
        className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  );
}

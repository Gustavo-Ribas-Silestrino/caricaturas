"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const slides = [
  { src: "/fotos/kaka.png", alt: "Kaká - caricatura tradicional" },
  { src: "/fotos/caneca ia 2.png", alt: "Caneca personalizada" },
  { src: "/fotos/papel png 2.png", alt: "Papel tradicional" },
  { src: "/fotos/canecva ia 1 copiar.png", alt: "Caneca com IA" },
  { src: "/fotos/caderno a5 I.A Carlos - Copia.jpg", alt: "Aquarela com IA" },
  { src: "/fotos/WhatsApp Image 2026-01-07 at 16.15.38.jpeg", alt: "Trabalho ao vivo" },
  { src: "/fotos/WhatsApp Image 2026-01-07 at 16.15.38 (1).jpeg", alt: "Caricatura evento" },
  { src: "/fotos/WhatsApp Image 2026-01-07 at 16.15.38 (2).jpeg", alt: "Arte caricatura" },
  { src: "/fotos/WhatsApp Image 2026-01-07 at 16.15.38 (4).jpeg", alt: "Caricatura ao vivo" },
  { src: "/fotos/WhatsApp Image 2026-03-02 at 10.41.28 (1).jpeg", alt: "Resultado final" },
  { src: "/fotos/WhatsApp Image 2026-05-25 at 16.24.51.jpeg", alt: "Caricatura digital" },
];

const n = slides.length;

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [next, setNext] = useState(0);
  const touchStartX = useRef<number | null>(null);

  function goTo(idx: number) {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 120);
    setNext(idx);
  }

  const prev = () => goTo((current - 1 + n) % n);
  const nextSlide = () => goTo((current + 1) % n);

  const indices = [
    (current - 1 + n) % n,
    current,
    (current + 1) % n,
  ];

  return (
    <div className="relative w-full select-none">
      <div className="flex items-center justify-center gap-4">
        {/* Seta esquerda */}
        <button
          onClick={prev}
          aria-label="Foto anterior"
          className="flex-shrink-0 w-11 h-11 rounded-full bg-[#1B2A4A] hover:bg-[#F5A623] text-white hover:text-[#0F1C30] flex items-center justify-center transition-all duration-200 shadow-lg"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Slides */}
        <div
          className="flex gap-4 w-full max-w-3xl items-center transition-opacity duration-100"
          style={{ opacity: fading ? 0 : 1 }}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (diff > 50) nextSlide();
            else if (diff < -50) prev();
            touchStartX.current = null;
          }}
        >
          {indices.map((idx, pos) => {
            const isCenter = pos === 1;
            return (
              <div
                key={idx}
                onClick={() => { if (pos === 0) prev(); if (pos === 2) nextSlide(); }}
                className={[
                  "relative rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer",
                  isCenter
                    ? "w-1/2 aspect-[4/5] shadow-2xl"
                    : "w-1/4 aspect-[4/5] opacity-40 hidden sm:block",
                ].join(" ")}
              >
                <Image
                  src={slides[idx].src}
                  alt={slides[idx].alt}
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {/* Seta direita */}
        <button
          onClick={nextSlide}
          aria-label="Próxima foto"
          className="flex-shrink-0 w-11 h-11 rounded-full bg-[#1B2A4A] hover:bg-[#F5A623] text-white hover:text-[#0F1C30] flex items-center justify-center transition-all duration-200 shadow-lg"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para foto ${i + 1}`}
            className={`rounded-full transition-all duration-200 ${
              i === current
                ? "w-6 h-2 bg-[#F5A623]"
                : "w-2 h-2 bg-[#1B2A4A]/30 hover:bg-[#1B2A4A]/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

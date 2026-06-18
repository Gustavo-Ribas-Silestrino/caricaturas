"use client";
import { useState, useRef, useEffect } from "react";

const videos = [
  "/videos/edited/reacao1.mp4",
  "/videos/edited/reacao2.mp4",
  "/videos/edited/reacao3.mp4",
  "/videos/edited/reacao4.mp4",
  "/videos/edited/reacao5.mp4",
];

const n = videos.length;

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAutoplayed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoplayed.current) {
          hasAutoplayed.current = true;
          videoRef.current?.play();
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  function goTo(idx: number) {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
      setTimeout(() => videoRef.current?.play(), 50);
    }, 150);
  }

  const prev = () => goTo((current - 1 + n) % n);
  const next = () => goTo((current + 1) % n);

  return (
    <div ref={sectionRef} className="flex flex-col items-center gap-6">
      {/* Player */}
      <div className="relative w-full max-w-sm mx-auto">
        {/* Seta esquerda */}
        <button
          onClick={prev}
          aria-label="Vídeo anterior"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-11 h-11 rounded-full bg-[#1B2A4A] hover:bg-[#F5A623] text-white hover:text-[#0F1C30] flex items-center justify-center transition-all duration-200 shadow-lg z-10 hidden sm:flex"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Vídeo */}
        <div
          className="rounded-2xl overflow-hidden bg-[#0F1C30] shadow-2xl aspect-[9/16] transition-opacity duration-150"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <video
            key={current}
            ref={videoRef}
            src={videos[current]}
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Seta direita */}
        <button
          onClick={next}
          aria-label="Próximo vídeo"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-11 h-11 rounded-full bg-[#1B2A4A] hover:bg-[#F5A623] text-white hover:text-[#0F1C30] flex items-center justify-center transition-all duration-200 shadow-lg z-10 hidden sm:flex"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Setas mobile */}
      <div className="flex sm:hidden gap-4">
        <button onClick={prev} aria-label="Vídeo anterior"
          className="w-11 h-11 rounded-full bg-[#1B2A4A] hover:bg-[#F5A623] text-white flex items-center justify-center transition-all duration-200 shadow-lg">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button onClick={next} aria-label="Próximo vídeo"
          className="w-11 h-11 rounded-full bg-[#1B2A4A] hover:bg-[#F5A623] text-white flex items-center justify-center transition-all duration-200 shadow-lg">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Vídeo ${i + 1}`}
            className={`rounded-full transition-all duration-200 ${
              i === current ? "w-6 h-2 bg-[#F5A623]" : "w-2 h-2 bg-[#1B2A4A]/30 hover:bg-[#1B2A4A]/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

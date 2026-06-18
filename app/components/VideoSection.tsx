"use client";

const videos = [
  "/videos/WhatsApp Video 2026-06-16 at 11.05.06.mp4",
  "/videos/WhatsApp Video 2026-06-16 at 11.05.07.mp4",
  "/videos/WhatsApp Video 2026-06-16 at 11.05.07 (1).mp4",
  "/videos/WhatsApp Video 2026-06-16 at 11.05.07 (2).mp4",
  "/videos/WhatsApp Video 2026-06-16 at 11.08.23.mp4",
];

export default function VideoSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {videos.map((src, i) => (
        <div key={i} className="rounded-2xl overflow-hidden bg-[#1B2A4A] shadow-lg aspect-[9/16]">
          <video
            src={src}
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

"use client";
import { useEffect, useRef, ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
  from = "bottom",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  from?: "bottom" | "left" | "right";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const dirClass = from === "left" ? "from-left" : from === "right" ? "from-right" : "";

  return (
    <div ref={ref} className={`reveal ${dirClass} ${className}`}>
      {children}
    </div>
  );
}

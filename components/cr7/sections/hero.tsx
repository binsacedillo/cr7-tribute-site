"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Award, Globe, Trophy } from "lucide-react";

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center px-5 pt-28 pb-16 md:pb-24 overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[position:32%_center] md:bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(9,9,9,0.96),rgba(9,9,9,0.44),rgba(9,9,9,0.92)), url('/images/hero/cristiano.jpg')",
        }}
      />

      {/* Ambient Lighting Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_35%,rgba(212,175,55,0.18),transparent_28%),linear-gradient(180deg,transparent,rgba(9,9,9,1))]" />

      {/* Interactive Cursor Spotlight Aura */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-60 hidden md:block"
        style={{
          background: `radial-gradient(circle 380px at ${mousePos.x}px ${mousePos.y}px, rgba(212,175,55,0.14), transparent 80%)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col justify-between min-h-[70vh] md:min-h-0">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-museum-gold sm:text-sm">
            The Last Dance
          </p>
          <h1 className="max-w-5xl font-display text-6xl uppercase leading-[0.88] text-museum-white sm:text-8xl md:text-[10rem] md:leading-[0.82] tracking-tight">
            Cristiano
            <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(212,175,55,0.5)] md:[-webkit-text-stroke:3px_rgba(212,175,55,0.5)]">
              Ronaldo
            </span>
          </h1>
          <div className="mt-8 max-w-xl text-base leading-7 text-museum-gray sm:text-lg sm:leading-8">
            <p className="text-museum-white font-semibold">1985 - Present</p>
            <p className="mt-1">A legacy that changed football forever.</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-10 w-full">
          <a
            href="#madeira"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-museum-gold transition hover:text-museum-white"
          >
            Begin the journey
            <ChevronDown size={16} className="animate-bounce text-museum-gold group-hover:text-museum-white" />
          </a>

          {/* Quick Metrics Exhibit Grid */}
          <div className="grid grid-cols-3 gap-6 border-t border-white/10 md:border-t-0 md:border-l md:border-white/10 pt-6 md:pt-0 md:pl-10 max-w-lg">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-museum-gray/60 flex items-center gap-1.5">
                <Globe size={11} className="text-museum-gold" /> goals
              </span>
              <span className="font-display text-4xl text-museum-white">900+</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-museum-gray/60 flex items-center gap-1.5">
                <Award size={11} className="text-museum-gold" /> Ballon d&apos;Or
              </span>
              <span className="font-display text-4xl text-museum-white">5x</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-museum-gray/60 flex items-center gap-1.5">
                <Trophy size={11} className="text-museum-gold" /> UCL
              </span>
              <span className="font-display text-4xl text-museum-white">5x</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

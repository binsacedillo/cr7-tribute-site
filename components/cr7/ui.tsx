"use client";

import { useEffect, useState } from "react";

export function SectionTitle({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-museum-gold">{kicker}</p>
      <h2 className="mt-4 font-display text-4xl uppercase leading-none text-museum-white sm:text-5xl md:text-6xl lg:text-8xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-museum-gray md:text-lg">{text}</p>
    </div>
  );
}

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(value);

  useEffect(() => {
    setCount(0);
    let frame = 0;
    const total = 50;

    const animate = () => {
      frame += 1;
      setCount(Math.round((value * frame) / total));
      if (frame < total) {
        requestAnimationFrame(animate);
      }
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

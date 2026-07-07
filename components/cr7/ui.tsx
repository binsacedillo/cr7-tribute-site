"use client";

import { useEffect, useState, type HTMLAttributes } from "react";

type MotionOnly = {
  initial?: unknown;
  animate?: unknown;
  whileInView?: unknown;
  viewport?: unknown;
  transition?: unknown;
};

function discardMotionProps({ initial, animate, whileInView, viewport, transition }: MotionOnly) {
  void initial;
  void animate;
  void whileInView;
  void viewport;
  void transition;
}

function MotionDiv({ initial, animate, whileInView, viewport, transition, ...props }: HTMLAttributes<HTMLDivElement> & MotionOnly) {
  discardMotionProps({ initial, animate, whileInView, viewport, transition });
  return <div {...props} />;
}

function MotionP({ initial, animate, whileInView, viewport, transition, ...props }: HTMLAttributes<HTMLParagraphElement> & MotionOnly) {
  discardMotionProps({ initial, animate, whileInView, viewport, transition });
  return <p {...props} />;
}

function MotionH1({ initial, animate, whileInView, viewport, transition, ...props }: HTMLAttributes<HTMLHeadingElement> & MotionOnly) {
  discardMotionProps({ initial, animate, whileInView, viewport, transition });
  return <h1 {...props} />;
}

function MotionArticle({ initial, animate, whileInView, viewport, transition, ...props }: HTMLAttributes<HTMLElement> & MotionOnly) {
  discardMotionProps({ initial, animate, whileInView, viewport, transition });
  return <article {...props} />;
}

export const motion = {
  div: MotionDiv,
  p: MotionP,
  h1: MotionH1,
  article: MotionArticle,
};

export function SectionTitle({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-sm uppercase tracking-[0.35em] text-museum-gold">{kicker}</p>
      <h2 className="mt-4 font-display text-6xl uppercase leading-none text-museum-white md:text-8xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-museum-gray md:text-lg">{text}</p>
    </motion.div>
  );
}

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const total = 70;

    const animate = () => {
      frame += 1;
      setCount(Math.round((value * frame) / total));
      if (frame < total) requestAnimationFrame(animate);
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

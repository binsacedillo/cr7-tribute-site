"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import type { ModalState } from "./types";

const SIUU_STORAGE_KEY = "siuu-count";

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let raf = 0;

    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const targetEl = document.querySelector(href) as HTMLElement;
          if (targetEl) {
            lenis.scrollTo(targetEl);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);
}

export function useScrollHeader(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

export function useEscapeToClose(modal: ModalState, close: () => void) {
  useEffect(() => {
    if (!modal) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close, modal]);
}

export function useSiuuCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(Number(localStorage.getItem(SIUU_STORAGE_KEY) ?? 0));
  }, []);

  const increment = () => {
    const next = count + 1;
    setCount(next);
    localStorage.setItem(SIUU_STORAGE_KEY, String(next));

    const audio = new Audio("/audio/siuu.mp3");
    audio.currentTime = 2.0;
    audio.volume = 0.45;
    audio.play().catch(() => undefined);
  };

  return { count, increment };
}

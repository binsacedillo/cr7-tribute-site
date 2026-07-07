"use client";

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent, type PointerEvent as ReactPointerEvent } from "react";
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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setCount(Number(localStorage.getItem(SIUU_STORAGE_KEY) ?? 0));
    audioRef.current = new Audio("/audio/siuu.mp3");
    audioRef.current.volume = 0.45;
  }, []);

  const increment = () => {
    const next = count + 1;
    setCount(next);
    localStorage.setItem(SIUU_STORAGE_KEY, String(next));

    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 2.0;
    audio.play().catch(() => undefined);
  };

  return { count, increment };
}

export function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const didDrag = useRef(false);
  const activePointerId = useRef<number | null>(null);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    setIsDown(true);
    didDrag.current = false;
    activePointerId.current = e.pointerId;
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const endDrag = (pointerId?: number) => {
    const captureId = pointerId ?? activePointerId.current;
    if (ref.current && captureId !== null && ref.current.hasPointerCapture?.(captureId)) {
      ref.current.releasePointerCapture?.(captureId);
    }
    activePointerId.current = null;
    setIsDown(false);
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    endDrag(e.pointerId);
    if (didDrag.current) {
      requestAnimationFrame(() => {
        didDrag.current = false;
      });
    }
  };

  const onPointerCancel = (e: ReactPointerEvent<HTMLDivElement>) => {
    endDrag(e.pointerId);
    didDrag.current = false;
  };

  const onPointerLeave = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") {
      endDrag(e.pointerId);
    }
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDown || !ref.current) return;
    if (e.pointerType === "mouse" || e.pointerType === "touch") {
      e.preventDefault();
    }
    const x = e.pageX - ref.current.offsetLeft;
    const delta = x - startX;
    if (Math.abs(delta) > 15) {
      if (!didDrag.current && activePointerId.current !== null) {
        ref.current.setPointerCapture?.(activePointerId.current);
      }
      didDrag.current = true;
    }
    const walk = delta * 1.5; // Scroll speed multiplier
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const onClickCapture = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!didDrag.current) return;
    e.preventDefault();
    e.stopPropagation();
  };

  const scroll = (direction: "left" | "right") => {
    if (ref.current) {
      const amount = 360;
      ref.current.scrollTo({
        left: ref.current.scrollLeft + (direction === "left" ? -amount : amount),
        behavior: "smooth",
      });
    }
  };

  return {
    ref,
    scroll,
    props: {
      onPointerDown,
      onPointerLeave,
      onPointerUp,
      onPointerCancel,
      onPointerMove,
      onClickCapture,
      className: "cursor-grab active:cursor-grabbing select-none scroll-smooth"
    }
  };
}

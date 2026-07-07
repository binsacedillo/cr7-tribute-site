"use client";

import { useCallback, useState } from "react";
import { quotes } from "@/data/site";
import { useEscapeToClose, useScrollHeader, useSiuuCounter, useSmoothScroll } from "./cr7/hooks";
import { Footer, Header } from "./cr7/layout";
import { DetailModal } from "./cr7/modal";
import {
  CareerSection,
  HeroSection,
  LegacySection,
  MadeiraSection,
  MomentsSection,
  RecordsSection,
  TrophiesSection,
  WorldCupsSection,
} from "./cr7/sections";
import type { ModalState, OpenModal } from "./cr7/types";

export function CR7Experience() {
  const [modal, setModal] = useState<ModalState>(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const scrolled = useScrollHeader();
  const siuu = useSiuuCounter();

  useSmoothScroll();

  const closeModal = useCallback(() => setModal(null), []);
  const openModal: OpenModal = useCallback((nextModal) => setModal(nextModal), []);
  const showNextQuote = () => setQuoteIndex((current) => (current + 1) % quotes.length);

  useEscapeToClose(modal, closeModal);

  return (
    <main className="min-h-screen overflow-hidden bg-museum-black text-museum-white">
      <Header scrolled={scrolled} />
      <HeroSection />
      <MadeiraSection />
      <CareerSection openModal={openModal} />
      <RecordsSection />
      <TrophiesSection />
      <MomentsSection openModal={openModal} />
      <WorldCupsSection />
      <LegacySection quoteIndex={quoteIndex} siuuCount={siuu.count} onNextQuote={showNextQuote} onSiuu={siuu.increment} />
      <Footer />
      <DetailModal modal={modal} onClose={closeModal} />
      {/* Floating Watermark */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none select-none font-mono text-[9px] uppercase tracking-[0.35em] text-museum-gold/25">
        Vince Aced 2026
      </div>
    </main>
  );
}

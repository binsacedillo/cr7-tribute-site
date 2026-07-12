"use client";

import { useCallback, useState } from "react";
import { quotes } from "@/data/site";
import { useEscapeToClose, useScrollHeader, useSiuuCounter, useSmoothScroll } from "./cr7/hooks";
import { BackToTop, Footer, Header } from "./cr7/layout";
import { DetailModal } from "./cr7/modal";
import { CareerSection } from "./cr7/sections/career";
import { HeroSection } from "./cr7/sections/hero";
import { LegacySection } from "./cr7/sections/legacy";
import { MadeiraSection } from "./cr7/sections/madeira";
import { MomentsSection } from "./cr7/sections/moments";
import { RecordsSection } from "./cr7/sections/records";
import { TrophiesSection } from "./cr7/sections/trophies";
import { WorldCupsSection } from "./cr7/sections/worldcups";
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
    <main className="min-h-screen overflow-x-hidden bg-museum-black text-museum-white">
      <Header scrolled={scrolled} />
      <HeroSection />
      <MadeiraSection openModal={openModal} />
      <CareerSection openModal={openModal} />
      <RecordsSection />
      <TrophiesSection />
      <MomentsSection openModal={openModal} />
      <WorldCupsSection />
      <LegacySection quoteIndex={quoteIndex} siuuCount={siuu.count} onNextQuote={showNextQuote} onSiuu={siuu.increment} />
      <Footer />
      <DetailModal modal={modal} onClose={closeModal} />
      <BackToTop visible={scrolled} />
    </main>
  );
}

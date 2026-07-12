"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { worldCups } from "@/data/site";
import { useDragScroll } from "../hooks";
import { SectionTitle } from "../ui";
import { WorldCupFlags } from "./icons";

export function WorldCupsSection() {
  const { ref, scroll, props } = useDragScroll();

  return (
    <section id="world-cups" className="relative flex min-h-screen items-center bg-[#0d0c0a] px-5 pt-28 pb-12 overflow-hidden">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle kicker="Chapter Six" title="World Cup Journey" text="Six tournaments, one evolving story." />
          <div className="flex gap-3 mb-2">
            <button type="button" onClick={() => scroll("left")} className="rounded-full border border-white/10 p-3 text-museum-gray transition hover:border-museum-gold hover:text-museum-gold active:scale-95" aria-label="Slide left">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={() => scroll("right")} className="rounded-full border border-white/10 p-3 text-museum-gray transition hover:border-museum-gold hover:text-museum-gold active:scale-95" aria-label="Slide right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div ref={ref} {...props} className={`mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pt-8 pb-6 pr-10 -my-6 scrollbar-thin w-full sm:gap-6 md:pr-0 ${props.className}`}>
          {worldCups.map((cup) => (
            <article
              key={cup.year}
              className="group relative w-[min(78vw,18rem)] snap-start lg:w-[19rem] shrink-0 overflow-hidden border border-white/10 bg-black/45 pointer-events-auto"
            >
              <div className="relative min-h-[350px] md:min-h-[380px]">
                {cup.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={cup.image}
                    alt={`${cup.year} World Cup`}
                    className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 ${cup.imageAlign || "object-center"}`}
                  />
                ) : (
                  <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(212,175,55,0.14),rgba(0,0,0,0.7))]" />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,0.92)_100%)]" />

                <div className="relative z-10 flex min-h-[350px] md:min-h-[380px] flex-col justify-between p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-5xl text-museum-gold leading-none">{cup.year}</p>
                      <p className="mt-3 text-xs uppercase tracking-[0.28em] text-museum-gray/80">{cup.portugalFinish}</p>
                    </div>
                    <div className="rounded-full border border-white/15 bg-black/35 px-3 py-2">
                      <WorldCupFlags year={cup.year} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-museum-white">{cup.host}</h3>
                    <p className="mt-2 text-xs leading-5 text-museum-white font-medium">{cup.ronaldoStats}</p>
                    <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-5 text-museum-gray italic">{cup.definingMoment}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

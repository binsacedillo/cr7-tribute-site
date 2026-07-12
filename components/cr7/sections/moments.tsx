"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { moments } from "@/data/site";
import { useDragScroll } from "../hooks";
import type { OpenModal } from "../types";
import { SectionTitle } from "../ui";

export function MomentsSection({ openModal }: { openModal: OpenModal }) {
  const { ref, scroll, props } = useDragScroll();

  return (
    <section id="moments" className="relative flex min-h-screen items-center px-5 pt-28 pb-12 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle kicker="Chapter Five" title="Iconic Moments" text="The images football remembers, rebuilt as cinematic cards with room for context." />
          <div className="flex gap-3 mb-2">
            <button onClick={() => scroll("left")} className="rounded-full border border-white/10 p-3 text-museum-gray transition hover:border-museum-gold hover:text-museum-gold active:scale-95" aria-label="Slide left">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll("right")} className="rounded-full border border-white/10 p-3 text-museum-gray transition hover:border-museum-gold hover:text-museum-gold active:scale-95" aria-label="Slide right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div ref={ref} {...props} className={`mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pt-6 pb-6 pr-10 -my-6 scrollbar-thin w-full sm:gap-6 md:pr-0 ${props.className}`}>
          {moments.map((moment) => (
            <button
              type="button"
              key={moment.id}
              onClick={() => openModal({ kind: "moment", item: moment })}
              className="group relative w-[min(78vw,18rem)] snap-start lg:w-[19.5rem] min-h-[330px] md:min-h-[350px] shrink-0 overflow-hidden border border-white/10 bg-black/45 text-left transition hover:-translate-y-1 hover:border-museum-gold focus:outline-none focus:ring-2 focus:ring-museum-gold pointer-events-auto cursor-pointer"
            >
              {moment.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={moment.image}
                  alt={moment.title}
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 ${moment.imageAlign || "object-center"}`}
                />
              ) : (
                <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(212,175,55,0.16),rgba(142,27,27,0.12),rgba(0,0,0,0.75))]" />
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,0.9)_100%)]" />
              <div className="relative z-10 flex min-h-[330px] md:min-h-[350px] flex-col justify-between p-5 md:p-6 w-full h-full">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm uppercase tracking-[0.32em] text-museum-gold">{moment.year}</p>
                </div>
                <div>
                  <h3 className="font-display text-4xl uppercase leading-none text-museum-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] md:text-[2.75rem]">{moment.title}</h3>
                  <p className="mt-4 max-w-[24ch] leading-7 text-museum-gray">{moment.context}</p>
                  <p className="mt-5 text-xs uppercase tracking-[0.28em] text-museum-gold/85">{moment.stat}</p>
                </div>
                <div
                  className="mt-6 inline-flex w-fit items-center border border-white/15 bg-black/35 px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-museum-white transition group-hover:border-museum-gold group-hover:text-museum-gold"
                >
                  Open story
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

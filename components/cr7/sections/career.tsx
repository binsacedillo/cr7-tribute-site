"use client";

import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { clubs } from "@/data/site";
import { useDragScroll } from "../hooks";
import type { OpenModal } from "../types";
import { SectionTitle } from "../ui";
import { ClubCrest } from "./icons";

export function CareerSection({ openModal }: { openModal: OpenModal }) {
  const { ref, scroll, props } = useDragScroll();

  return (
    <section id="career" className="relative flex min-h-screen items-center bg-[#0d0c0a] px-5 pt-28 pb-12 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle kicker="Chapter Two" title="Rise to Stardom" text="A career told through clubs, countries, reinventions, and the number seven." />
          <div className="flex gap-3 mb-2">
            <button type="button" onClick={() => scroll("left")} className="rounded-full border border-white/10 p-3 text-museum-gray transition hover:border-museum-gold hover:text-museum-gold active:scale-95" aria-label="Slide left">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={() => scroll("right")} className="rounded-full border border-white/10 p-3 text-museum-gray transition hover:border-museum-gold hover:text-museum-gold active:scale-95" aria-label="Slide right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div ref={ref} {...props} className={`mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pt-6 pb-6 pr-10 -my-6 scrollbar-thin w-full md:pr-0 ${props.className}`}>
          {clubs.map((club) => (
            <button
              type="button"
              key={club.id}
              onClick={() => openModal({ kind: "club", item: club })}
              className="group relative w-[min(78vw,18rem)] snap-start lg:w-[19.5rem] min-h-[300px] md:min-h-[320px] flex flex-col justify-between border border-white/10 bg-black/35 p-5 md:p-6 text-left transition hover:-translate-y-1 hover:border-museum-gold/60 hover:bg-museum-panel focus:outline-none focus:ring-2 focus:ring-museum-gold overflow-hidden shrink-0 pointer-events-auto"
            >
              {club.image && (
                <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-10 group-hover:opacity-25 transition duration-500 ease-out">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={club.image}
                    alt=""
                    className={`h-full w-full object-cover ${club.imageAlign || "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#090909]/85 to-[#090909]/60" />
                </div>
              )}
              <div className="relative z-10 flex justify-between items-start">
                <p className="text-sm uppercase tracking-[0.3em] text-museum-gold">{club.years}</p>
                <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 p-1 group-hover:border-museum-gold/40 transition">
                  <ClubCrest id={club.id} className="h-full w-full object-contain" />
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="mt-5 font-display text-4xl uppercase leading-none md:text-[2.75rem]">{club.name}</h3>
                <p className="mt-4 flex items-center gap-2 text-museum-gray">
                  <MapPin size={16} /> {club.country}
                </p>
                <p className="mt-8 text-2xl font-semibold text-museum-white md:text-3xl">{club.goals} goals</p>
                <p className="mt-2 text-sm text-museum-gray">Open chapter</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

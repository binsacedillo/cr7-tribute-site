"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { trophies } from "@/data/site";
import { useDragScroll } from "../hooks";
import { SectionTitle } from "../ui";
import { getTrophyIcon } from "./icons";

export function TrophiesSection() {
  const { ref, scroll, props } = useDragScroll();

  return (
    <section id="trophies" className="relative flex min-h-screen items-center bg-[#0d0c0a] px-5 pt-28 pb-12 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle kicker="Chapter Four" title="Trophy Room" text="The silverware appears like a private exhibit: sparse, lit, and deliberate." />
          <div className="flex gap-3 mb-2">
            <button type="button" onClick={() => scroll("left")} className="rounded-full border border-white/10 p-3 text-museum-gray transition hover:border-museum-gold hover:text-museum-gold active:scale-95" aria-label="Slide left">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={() => scroll("right")} className="rounded-full border border-white/10 p-3 text-museum-gray transition hover:border-museum-gold hover:text-museum-gold active:scale-95" aria-label="Slide right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div ref={ref} {...props} className={`mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pt-6 pb-6 pr-10 -my-6 scrollbar-thin w-full sm:gap-6 md:pr-0 ${props.className}`}>
          {trophies.map((item) => (
            <article
              key={item.id}
              className="group relative min-w-[270px] snap-start md:min-w-[340px] min-h-[400px] md:min-h-[430px] flex flex-col justify-between shrink-0 overflow-hidden border border-museum-gold/10 bg-black/45 p-6 md:p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-museum-gold hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] pointer-events-auto"
            >
              {/* Spotlight Light Beam Overlay */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-44 w-32 bg-gradient-to-b from-museum-gold/10 to-transparent blur-xl opacity-80 group-hover:from-museum-gold/20 transition duration-500 pointer-events-none z-10" />

              {/* Glass Exhibit Case outline highlight */}
              <div className="absolute inset-x-4 top-4 bottom-4 border border-white/5 group-hover:border-museum-gold/15 transition pointer-events-none z-10" />

              {/* Floating Trophy Icon/Image Showcase */}
              <div className="relative z-20 flex justify-center mb-4 transform transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-105">
                <div className="relative h-28 w-28 flex items-center justify-center rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(212,175,55,0.05)] group-hover:border-museum-gold/30 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition duration-500">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-16 object-contain filter drop-shadow-[0_4px_10px_rgba(212,175,55,0.25)]"
                    />
                  ) : (
                    getTrophyIcon(item.id, "w-[56px] h-[56px] text-museum-gold")
                  )}
                </div>
              </div>

              {/* Trophy Details */}
              <div className="relative z-20">
                <span className="text-[10px] uppercase font-mono tracking-widest text-museum-gray/40 group-hover:text-museum-gold/60 transition">
                  EXHIBIT PEDESTAL
                </span>
                <p className="mt-2 font-display text-6xl text-museum-white group-hover:text-museum-gold transition duration-300 md:text-7xl">
                  {item.count}
                </p>
                <h3 className="text-2xl font-semibold text-museum-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-museum-gray max-w-xs mx-auto">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

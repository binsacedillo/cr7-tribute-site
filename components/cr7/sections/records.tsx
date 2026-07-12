"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { records } from "@/data/site";
import { useDragScroll } from "../hooks";
import { CountUp, SectionTitle } from "../ui";
import { getRecordIcon } from "./icons";

export function RecordsSection() {
  const { ref, scroll, props } = useDragScroll();

  return (
    <section id="records" className="relative flex min-h-screen items-center px-5 pt-28 pb-12 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle kicker="Chapter Three" title="The Records" text="Numbers that became monuments, animated as exhibits rather than listed as trivia." />
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
          {records.map((record) => (
            <article
              key={record.id}
              className="group relative w-[min(78vw,18rem)] snap-start lg:w-[19.5rem] min-h-[290px] md:min-h-[310px] flex flex-col justify-between shrink-0 overflow-hidden border border-white/10 bg-museum-panel p-5 md:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-museum-gold/40 hover:shadow-gold pointer-events-auto"
            >
              {/* Gold Radial Glow Highlight in background */}
              <div className="absolute -left-12 -top-12 h-28 w-28 rounded-full bg-museum-gold/5 blur-2xl group-hover:bg-museum-gold/10 transition duration-500" />
              
              <div className="flex items-center justify-between">
                {/* Illustrative Icon */}
                <div className="rounded-full bg-white/5 p-3 text-museum-gold/70 group-hover:text-museum-gold transition">
                  {getRecordIcon(record.icon, "h-6 w-6")}
                </div>
                {/* Decorative border highlight */}
                <span className="text-[10px] uppercase font-mono tracking-widest text-museum-gray/30 group-hover:text-museum-gold/50 transition">
                  EXHIBIT {record.id.slice(0, 4)}
                </span>
              </div>

              <div>
                <p className="mt-4 font-display text-5xl text-museum-white group-hover:text-museum-gold transition duration-300 md:text-[3.5rem]">
                  <CountUp value={record.value} suffix={record.suffix} />
                </p>
                <h3 className="mt-2 text-lg font-semibold text-museum-white">{record.label}</h3>
                <p className="mt-3 text-sm leading-6 text-museum-gray">{record.context}</p>
              </div>

              {/* Metric progress bar indicator */}
              {record.progress && (
                <div className="mt-6 w-full bg-white/5 h-[3px] overflow-hidden rounded-full">
                  <div
                    className="bg-museum-gold h-full rounded-full transition-all duration-1000 ease-out origin-left scale-x-0 group-hover:scale-x-100"
                    style={{ width: `${record.progress}%` }}
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

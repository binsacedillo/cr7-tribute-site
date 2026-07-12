"use client";

import { Quote, Volume2, Sparkles, Shield, Timer, ArrowUpRight } from "lucide-react";
import { legacyPoints, quotes } from "@/data/site";
import { SectionTitle } from "../ui";

export function LegacySection({
  quoteIndex,
  siuuCount,
  onNextQuote,
  onSiuu,
}: {
  quoteIndex: number;
  siuuCount: number;
  onNextQuote: () => void;
  onSiuu: () => void;
}) {
  return (
    <section id="legacy" className="relative flex min-h-screen items-center px-5 pt-28 pb-12 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle kicker="Chapter Seven" title="Legacy" text="The final chapter is not what he won, but what he made the world believe was possible." />
        <div className="mt-8 grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4">
            <div className="border border-museum-gold/20 bg-[linear-gradient(140deg,rgba(212,175,55,0.12),rgba(0,0,0,0.75))] p-6 md:p-7">
              <div className="flex items-center gap-3 text-museum-gold">
                <Sparkles size={18} />
                <span className="text-[10px] uppercase tracking-[0.35em]">Final Exhibit</span>
              </div>
              <h3 className="mt-5 font-display text-5xl uppercase leading-none text-museum-white md:text-6xl">
                A career that changed the scale of ambition
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-museum-gray">
                The trophies matter, but the lasting effect is broader: discipline normalized, longevity recalibrated, and excellence made repeatable.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="border border-white/10 bg-museum-panel p-5">
                <Shield className="text-museum-gold" size={20} />
                <h3 className="mt-4 font-display text-4xl uppercase leading-none">{legacyPoints[0]}</h3>
                <p className="mt-3 text-sm leading-6 text-museum-gray">The non-negotiable base of the entire career.</p>
              </div>
              <div className="border border-white/10 bg-museum-panel p-5">
                <Timer className="text-museum-gold" size={20} />
                <h3 className="mt-4 font-display text-4xl uppercase leading-none">{legacyPoints[1]}</h3>
                <p className="mt-3 text-sm leading-6 text-museum-gray">Production across generations, leagues, and roles.</p>
              </div>
              <div className="border border-white/10 bg-museum-panel p-5">
                <ArrowUpRight className="text-museum-gold" size={20} />
                <h3 className="mt-4 font-display text-4xl uppercase leading-none">{legacyPoints[4]}</h3>
                <p className="mt-3 text-sm leading-6 text-museum-gray">An influence that outlived the matches themselves.</p>
              </div>
            </div>
          </div>

          <div className="border border-museum-gold/30 bg-black/45 p-6 md:p-7 flex flex-col justify-between">
            <div>
              <Quote className="text-museum-gold" size={28} />
              <p className="mt-4 text-lg leading-8 text-museum-white italic">&quot;{quotes[quoteIndex]}&quot;</p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-museum-gray">Legacy is remembered by those it shapes.</p>
            </div>
            <div className="mt-4 space-y-3">
              <button onClick={onNextQuote} className="w-full border border-museum-gold px-4 py-2.5 text-xs uppercase tracking-[0.25em] text-museum-gold transition hover:bg-museum-gold hover:text-black">
                New quote
              </button>
              <button onClick={onSiuu} className="flex w-full items-center justify-between border border-white/10 px-4 py-3 text-left text-museum-white transition hover:border-museum-gold">
                <span className="flex items-center gap-2 text-xs uppercase tracking-wider">
                  <Volume2 size={16} /> SIUU counter
                </span>
                <span className="font-display text-3xl text-museum-gold leading-none">{siuuCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ChevronDown, MapPin, Medal, Quote, Trophy, Volume2 } from "lucide-react";
import { clubs, legacyPoints, moments, quotes, records, trophies, worldCups } from "@/data/site";
import { careerCountries, originMilestones } from "./constants";
import type { OpenModal } from "./types";
import { CountUp, SectionTitle } from "./ui";

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-end px-5 pb-16 pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,9,0.96),rgba(9,9,9,0.44),rgba(9,9,9,0.92)),url('/images/hero/cristiano.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_35%,rgba(212,175,55,0.24),transparent_28%),linear-gradient(180deg,transparent,rgba(9,9,9,1))]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.45em] text-museum-gold">
          The Last Dance
        </p>
        <h1 className="max-w-5xl font-display text-7xl uppercase leading-[0.86] text-museum-white md:text-[10rem]">
          Cristiano
          <br />
          Ronaldo
        </h1>
        <div className="mt-7 max-w-xl text-lg leading-8 text-museum-gray">
          <p className="text-museum-white">1985 -</p>
          <p>A legacy that changed football forever.</p>
        </div>
        <a href="#madeira" className="mt-12 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-museum-gold">
          Begin the journey <ChevronDown size={18} />
        </a>
      </div>
    </section>
  );
}

export function MadeiraSection() {
  return (
    <section id="madeira" className="px-5 py-28">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <SectionTitle
          kicker="Chapter One"
          title="The Boy from Madeira"
          text="Before the records and stadium lights, there was a boy from Funchal carrying a family's hope and an impossible appetite for work."
        />
        <div className="border border-museum-gold/25 bg-museum-panel p-6 shadow-gold">
          {originMilestones.map((item, index) => (
            <div key={item} className="flex gap-5 border-b border-white/10 py-6 last:border-0">
              <span className="font-display text-5xl text-museum-gold">0{index + 1}</span>
              <p className="pt-2 text-xl text-museum-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareerSection({ openModal }: { openModal: OpenModal }) {
  return (
    <section id="career" className="bg-[#0d0c0a] px-5 py-28">
      <SectionTitle kicker="Chapter Two" title="Rise to Stardom" text="A career told through clubs, countries, reinventions, and the number seven." />
      <div className="mx-auto mt-16 grid max-w-7xl gap-4 md:grid-cols-3">
        {clubs.map((club) => (
          <button
            key={club.id}
            onClick={() => openModal({ kind: "club", item: club })}
            className="group min-h-64 border border-white/10 bg-black/35 p-6 text-left transition hover:-translate-y-1 hover:border-museum-gold/60 hover:bg-museum-panel focus:outline-none focus:ring-2 focus:ring-museum-gold"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-museum-gold">{club.years}</p>
            <h3 className="mt-5 font-display text-5xl uppercase leading-none">{club.name}</h3>
            <p className="mt-4 flex items-center gap-2 text-museum-gray">
              <MapPin size={16} /> {club.country}
            </p>
            <p className="mt-8 text-3xl font-semibold text-museum-white">{club.goals} goals</p>
            <p className="mt-2 text-sm text-museum-gray">Open chapter</p>
          </button>
        ))}
      </div>
    </section>
  );
}

export function RecordsSection() {
  return (
    <section id="records" className="px-5 py-28">
      <SectionTitle kicker="Chapter Three" title="The Records" text="Numbers that became monuments, animated as exhibits rather than listed as trivia." />
      <div className="mx-auto mt-16 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {records.map((record) => (
          <article key={record.id} className="border border-white/10 bg-museum-panel p-7">
            <p className="font-display text-6xl text-museum-gold">
              <CountUp value={record.value} suffix={record.suffix} />
            </p>
            <h3 className="mt-4 text-xl font-semibold">{record.label}</h3>
            <p className="mt-3 leading-7 text-museum-gray">{record.context}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TrophiesSection() {
  return (
    <section id="trophies" className="bg-[#0d0c0a] px-5 py-28">
      <SectionTitle kicker="Chapter Four" title="Trophy Room" text="The silverware appears like a private exhibit: sparse, lit, and deliberate." />
      <div className="mx-auto mt-16 grid max-w-7xl gap-5 md:grid-cols-3">
        {trophies.map((item) => (
          <article key={item.id} className="group border border-museum-gold/20 bg-black/45 p-7 transition hover:-translate-y-1 hover:border-museum-gold">
            <Trophy className="text-museum-gold transition group-hover:rotate-6" size={38} />
            <p className="mt-8 font-display text-7xl text-museum-white">{item.count}</p>
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="mt-4 leading-7 text-museum-gray">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function MomentsSection({ openModal }: { openModal: OpenModal }) {
  return (
    <section className="px-5 py-28">
      <SectionTitle kicker="Chapter Five" title="Iconic Moments" text="The images football remembers, rebuilt as cinematic cards with room for context." />
      <div className="mx-auto mt-16 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {moments.map((moment) => (
          <button
            key={moment.id}
            onClick={() => openModal({ kind: "moment", item: moment })}
            className="min-h-72 border border-white/10 bg-[linear-gradient(140deg,rgba(212,175,55,0.16),rgba(142,27,27,0.12),rgba(0,0,0,0.55))] p-7 text-left transition hover:border-museum-gold focus:outline-none focus:ring-2 focus:ring-museum-gold"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-museum-gold">{moment.year}</p>
            <h3 className="mt-10 font-display text-5xl uppercase leading-none">{moment.title}</h3>
            <p className="mt-6 leading-7 text-museum-gray">{moment.context}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

export function WorldCupsSection() {
  return (
    <section id="world-cups" className="bg-[#0d0c0a] px-5 py-28">
      <SectionTitle kicker="Chapter Six" title="World Cup Journey" text="Every tournament is a scene. 2026 remains the card still waiting to be written." />
      <div className="mx-auto mt-16 max-w-5xl">
        {worldCups.map((cup) => (
          <article key={cup.year} className="grid gap-5 border-l border-museum-gold/40 pb-10 pl-8 md:grid-cols-[160px_1fr]">
            <p className="font-display text-6xl text-museum-gold">{cup.year}</p>
            <div className="border border-white/10 bg-black/35 p-6">
              <h3 className="text-2xl font-semibold">{cup.host}</h3>
              <p className="mt-3 text-museum-gray">{cup.portugalFinish}</p>
              <p className="mt-4 text-museum-white">{cup.ronaldoStats}</p>
              <p className="mt-3 leading-7 text-museum-gray">{cup.definingMoment}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function LegacySection({ quoteIndex, siuuCount, onNextQuote, onSiuu }: { quoteIndex: number; siuuCount: number; onNextQuote: () => void; onSiuu: () => void }) {
  return (
    <section id="legacy" className="px-5 py-28">
      <SectionTitle kicker="Chapter Seven" title="Legacy" text="The final chapter is not only what he won, but what he made millions believe was possible." />
      <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-[1fr_0.8fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {legacyPoints.map((point) => (
            <div key={point} className="border border-white/10 bg-museum-panel p-6">
              <Medal className="text-museum-gold" />
              <h3 className="mt-8 font-display text-5xl uppercase">{point}</h3>
            </div>
          ))}
        </div>
        <div className="border border-museum-gold/30 bg-black/45 p-7">
          <Quote className="text-museum-gold" size={38} />
          <p className="mt-8 text-2xl leading-10 text-museum-white">&quot;{quotes[quoteIndex]}&quot;</p>
          <button onClick={onNextQuote} className="mt-8 border border-museum-gold px-5 py-3 text-sm uppercase tracking-[0.25em] text-museum-gold transition hover:bg-museum-gold hover:text-black">
            New quote
          </button>
          <button onClick={onSiuu} className="mt-4 flex w-full items-center justify-between border border-white/10 px-5 py-4 text-left text-museum-white transition hover:border-museum-gold">
            <span className="flex items-center gap-3">
              <Volume2 size={18} /> SIUU counter
            </span>
            <span className="font-display text-4xl text-museum-gold">{siuuCount}</span>
          </button>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-3 md:grid-cols-5">
        {careerCountries.map((country) => (
          <div key={country} className="border border-white/10 bg-black/35 p-5 text-center text-sm uppercase tracking-[0.22em] text-museum-gray">
            {country}
          </div>
        ))}
      </div>
    </section>
  );
}

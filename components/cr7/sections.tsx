"use client";

import { ChevronDown, MapPin, Medal, Quote, Trophy, Volume2 } from "lucide-react";
import { clubs, legacyPoints, moments, quotes, records, trophies, worldCups } from "@/data/site";
import { careerCountries, originMilestones } from "./constants";
import type { OpenModal } from "./types";
import { CountUp, motion, SectionTitle } from "./ui";

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-end px-5 pb-16 pt-28">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[position:32%_center] md:bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(9,9,9,0.96),rgba(9,9,9,0.44),rgba(9,9,9,0.92)), url('/images/hero/cristiano.jpg')",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_62%_35%,rgba(212,175,55,0.24),transparent_28%),linear-gradient(180deg,transparent,rgba(9,9,9,1))]"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mb-4 text-sm uppercase tracking-[0.45em] text-museum-gold">
          The Last Dance
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9 }} className="max-w-5xl font-display text-7xl uppercase leading-[0.86] text-museum-white md:text-[10rem]">
          Cristiano
          <br />
          Ronaldo
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="mt-7 max-w-xl text-lg leading-8 text-museum-gray">
          <p className="text-museum-white">1985 -</p>
          <p>A legacy that changed football forever.</p>
        </motion.div>
        <a href="#madeira" className="mt-12 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-museum-gold">
          Begin the journey <ChevronDown size={18} />
        </a>
      </div>
    </section>
  );
}

export function MadeiraSection() {
  return (
    <section id="madeira" className="relative flex min-h-screen items-center px-5 py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <SectionTitle
          kicker="Chapter One"
          title="The Boy from Madeira"
          text="Before the records and stadium lights, there was a boy from Funchal carrying a family's hope and an impossible appetite for work."
        />
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border border-museum-gold/25 bg-museum-panel p-6 shadow-gold">
          {originMilestones.map((item, index) => (
            <div key={item} className="flex gap-5 border-b border-white/10 py-6 last:border-0">
              <span className="font-display text-5xl text-museum-gold">0{index + 1}</span>
              <p className="pt-2 text-xl text-museum-white">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function CareerSection({ openModal }: { openModal: OpenModal }) {
  return (
    <section id="career" className="relative flex min-h-screen items-center bg-[#0d0c0a] px-5 py-28">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle kicker="Chapter Two" title="Rise to Stardom" text="A career told through clubs, countries, reinventions, and the number seven." />
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {clubs.map((club) => (
            <button
              key={club.id}
              onClick={() => openModal({ kind: "club", item: club })}
              className="group relative min-h-64 border border-white/10 bg-black/35 p-6 text-left transition hover:-translate-y-1 hover:border-museum-gold/60 hover:bg-museum-panel focus:outline-none focus:ring-2 focus:ring-museum-gold overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <p className="text-sm uppercase tracking-[0.3em] text-museum-gold">{club.years}</p>
                <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 p-1 group-hover:border-museum-gold/40 transition">
                  <ClubCrest id={club.id} className="h-full w-full object-contain" />
                </div>
              </div>
              <h3 className="mt-5 font-display text-5xl uppercase leading-none">{club.name}</h3>
              <p className="mt-4 flex items-center gap-2 text-museum-gray">
                <MapPin size={16} /> {club.country}
              </p>
              <p className="mt-8 text-3xl font-semibold text-museum-white">{club.goals} goals</p>
              <p className="mt-2 text-sm text-museum-gray">Open chapter</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RecordsSection() {
  return (
    <section id="records" className="relative flex min-h-screen items-center px-5 py-28">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle kicker="Chapter Three" title="The Records" text="Numbers that became monuments, animated as exhibits rather than listed as trivia." />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {records.map((record) => (
            <motion.article key={record.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="border border-white/10 bg-museum-panel p-7">
              <p className="font-display text-6xl text-museum-gold">
                <CountUp value={record.value} suffix={record.suffix} />
              </p>
              <h3 className="mt-4 text-xl font-semibold">{record.label}</h3>
              <p className="mt-3 leading-7 text-museum-gray">{record.context}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrophiesSection() {
  return (
    <section id="trophies" className="relative flex min-h-screen items-center bg-[#0d0c0a] px-5 py-28">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle kicker="Chapter Four" title="Trophy Room" text="The silverware appears like a private exhibit: sparse, lit, and deliberate." />
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {trophies.map((item) => (
            <article key={item.id} className="group border border-museum-gold/20 bg-black/45 p-7 transition hover:-translate-y-1 hover:border-museum-gold">
              <div className="mb-4">
                {getTrophyIcon(item.id, "w-[48px] h-[48px] text-museum-gold transition group-hover:rotate-6")}
              </div>
              <p className="mt-4 font-display text-7xl text-museum-white">{item.count}</p>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-museum-gray">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MomentsSection({ openModal }: { openModal: OpenModal }) {
  return (
    <section className="relative flex min-h-screen items-center px-5 py-28">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle kicker="Chapter Five" title="Iconic Moments" text="The images football remembers, rebuilt as cinematic cards with room for context." />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
}

export function WorldCupsSection() {
  return (
    <section id="world-cups" className="relative flex min-h-screen items-center bg-[#0d0c0a] px-5 py-28">
      <div className="mx-auto w-full max-w-5xl">
        <SectionTitle kicker="Chapter Six" title="World Cup Journey" text="Every tournament is a scene. 2026 remains the card still waiting to be written." />
        <div className="mt-16">
          {worldCups.map((cup) => (
            <article key={cup.year} className="grid gap-5 border-l border-museum-gold/40 pb-10 pl-8 md:grid-cols-[160px_1fr]">
              <p className="font-display text-6xl text-museum-gold">{cup.year}</p>
              <div className="border border-white/10 bg-black/35 p-6">
                <h3 className="text-2xl font-semibold flex items-center gap-3 flex-wrap">
                  <WorldCupFlags year={cup.year} />
                  <span>{cup.host}</span>
                </h3>
                <p className="mt-3 text-museum-gray">{cup.portugalFinish}</p>
                <p className="mt-4 text-museum-white">{cup.ronaldoStats}</p>
                <p className="mt-3 leading-7 text-museum-gray">{cup.definingMoment}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LegacySection({ quoteIndex, siuuCount, onNextQuote, onSiuu }: { quoteIndex: number; siuuCount: number; onNextQuote: () => void; onSiuu: () => void }) {
  return (
    <section id="legacy" className="relative flex min-h-screen items-center px-5 py-28">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle kicker="Chapter Seven" title="Legacy" text="The final chapter is not only what he won, but what he made millions believe was possible." />
        <div className="mt-16 grid gap-8 md:grid-cols-[1fr_0.8fr]">
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

        <div className="mt-16 grid gap-3 md:grid-cols-5">
          {careerCountries.map((country) => (
            <div key={country} className="border border-white/10 bg-black/35 p-5 text-center text-sm uppercase tracking-[0.22em] text-museum-gray">
              {country}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorldCupFlags({ year }: { year: number }) {
  const flagsMap: Record<number, { code: string; name: string }[]> = {
    2006: [{ code: "de", name: "Germany" }],
    2010: [{ code: "za", name: "South Africa" }],
    2014: [{ code: "br", name: "Brazil" }],
    2018: [{ code: "ru", name: "Russia" }],
    2022: [{ code: "qa", name: "Qatar" }],
    2026: [
      { code: "ca", name: "Canada" },
      { code: "mx", name: "Mexico" },
      { code: "us", name: "United States" },
    ],
  };

  const flags = flagsMap[year] || [];

  return (
    <div className="flex gap-1.5 items-center">
      {flags.map((f) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={f.code}
          src={`https://flagcdn.com/w40/${f.code}.png`}
          srcSet={`https://flagcdn.com/w80/${f.code}.png 2x`}
          alt={f.name}
          className="h-4 w-6 object-cover rounded-[2px] shadow-sm border border-white/10"
        />
      ))}
    </div>
  );
}

function BallonDorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="11" r="8" className="fill-museum-gold/10 stroke-museum-gold" />
      <path d="M12 3v16M4 11h16M6.5 6.5l11 11M17.5 6.5l-11 11" className="stroke-museum-gold/30" />
      <path d="M12 7.5a3.5 3.5 0 0 1 3.5 3.5M12 14.5a3.5 3.5 0 0 1 -3.5 -3.5" className="stroke-museum-gold" />
      <path d="M8 19h8M12 19v3" className="stroke-museum-gold" strokeWidth="2" />
    </svg>
  );
}

function ChampionsLeagueIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M8 21h8M12 17v4" className="stroke-museum-gold" />
      <path d="M7 6c0 6.5 2 11 5 11s5-4.5 5-11H7z" className="fill-museum-gold/10 stroke-museum-gold" />
      <path d="M7 8C5 8 4 10 4 12c0 3 2.5 3 3 3M17 8c2 0 3 2 3 4 0 3-2.5 3-3 3" className="stroke-museum-gold" />
      <path d="M12 9l.6 1.2 1.4.2-1 1 .2 1.4-1.2-.7-1.2.7.2-1.4-1-1 1.4-.2z" className="fill-museum-gold stroke-none" />
    </svg>
  );
}

function LeagueTitlesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 4L4 8v8l8 4 8-4V8l-8-4z" className="fill-museum-gold/10 stroke-museum-gold" />
      <path d="M12 8l1.5 3.5L17 13l-3.5 1.5L12 18l-1.5-3.5L7 13l3.5-1.5z" className="fill-museum-gold stroke-none" />
      <circle cx="12" cy="13" r="4" className="stroke-museum-gold/40" />
    </svg>
  );
}

function EuroIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M9 21h6M10 18h4" className="stroke-museum-gold" />
      <path d="M12 14v4" className="stroke-museum-gold" />
      <path d="M8.5 5c0 5 1.5 9 3.5 9s3.5-4 3.5-9h-7z" className="fill-museum-gold/10 stroke-museum-gold" />
      <path d="M8.5 7H7.5v3h1M15.5 7h1v3h-1" className="stroke-museum-gold" />
    </svg>
  );
}

function NationsLeagueIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M9 21h6M12 18v3" className="stroke-museum-gold" />
      <path d="M10 6c1-2 3-2 4 0s0 6-2 8-3 1-3 4" className="stroke-museum-gold" />
      <path d="M14 6c-1-2-3-2-4 0s0 6 2 8 3 1 3 4" className="stroke-museum-gold" />
      <path d="M10 10s2-1 4 0" className="stroke-museum-gold" />
    </svg>
  );
}

function ClubWorldCupIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M8 21h8M12 16v5" className="stroke-museum-gold" />
      <circle cx="12" cy="7" r="4" className="fill-museum-gold/15 stroke-museum-gold" />
      <path d="M12 3a4 4 0 0 0 0 8M8 7h8" className="stroke-museum-gold/40" />
      <path d="M9 11l1 5h4l1-5" className="stroke-museum-gold" />
    </svg>
  );
}

function getTrophyIcon(id: string, className?: string) {
  switch (id) {
    case "ballon-dor":
      return <BallonDorIcon className={className} />;
    case "champions-league":
      return <ChampionsLeagueIcon className={className} />;
    case "league-titles":
      return <LeagueTitlesIcon className={className} />;
    case "euro-2016":
      return <EuroIcon className={className} />;
    case "nations-league":
      return <NationsLeagueIcon className={className} />;
    case "club-world-cups":
      return <ClubWorldCupIcon className={className} />;
    default:
      return <Trophy className={className} size={38} />;
  }
}

function SportingCrest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C6.5 2 3 5 3 11c0 6 5 11 9 11s9-5 9-11c0-6-3.5-9-9-9z" fill="#006633" />
      <path d="M12 4v16c3.5 0 7-3.5 7-9 0-5.5-3.5-7-7-7z" fill="#ffffff" opacity="0.15" />
      <path d="M4.5 8h7.5v2H4.5zm0 4h7.5v2H4.5z" fill="#ffffff" />
      <path d="M11 7c.7 0 1.2.5 1.2 1.2 0 .5-.3.8-.7 1h.7c.5 0 .8.3.8.8v1.5c0 .5-.3.8-.8.8h-.5v1.2h1v1h-3v-1h1v-1.2h-.5c-.5 0-.8-.3-.8-.8v-1.5c0-.5.3-.8.8-.8h.7c-.4-.2-.7-.5-.7-1 0-.7.5-1.2 1.2-1.2z" fill="#FFD700" />
    </svg>
  );
}

function ManchesterUnitedCrest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C6.5 2 3 5 3 11c0 6 5 11 9 11s9-5 9-11c0-6-3.5-9-9-9z" fill="#DA291C" />
      <path d="M7 7h10l-1.5 3h-7z" fill="#FBE122" />
      <path d="M12 11.5c-.8 0-1.5.7-1.5 1.5 0 .5.3.9.7 1.2l-.7 2.3 1.5-.8 1.5.8-.7-2.3c.4-.3.7-.7.7-1.2 0-.8-.7-1.5-1.5-1.5z" fill="#FBE122" />
      <path d="M5 9c0 4 1 7 2 8m10-8c0 4-1 7-2 8" stroke="#FBE122" strokeWidth="1" />
    </svg>
  );
}

function RealMadridCrest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="13" r="7" stroke="#FEBE10" strokeWidth="2" fill="#ffffff" fillOpacity="0.1" />
      <path d="M6.5 10l10.5 6M7 9l10.5 6" stroke="#00529F" strokeWidth="2" />
      <path d="M8 6l2 2 2-3 2 3 2-2 1 3H7l1-3z" fill="#FEBE10" />
      <circle cx="12" cy="3.5" r="0.8" fill="#FEBE10" />
    </svg>
  );
}

function JuventusCrest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 3h18v18H3z" fill="#000000" />
      <path d="M8 6h3v7c0 1.7 1.3 3 3 3h1v3h-1c-3.3 0-6-2.7-6-6V6zm6 0h3v4c0 1.7-1.3 3-3 3h-1v3h1c3.3 0 6-2.7 6-6V6h-6z" fill="#ffffff" />
    </svg>
  );
}

function AlNassrCrest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C6.5 2 3 5 3 11c0 6 5 11 9 11s9-5 9-11c0-6-3.5-9-9-9z" fill="#1B365D" />
      <circle cx="12" cy="12" r="4" fill="#F4BA19" />
      <path d="M12 5l1.5 2.5h-3zM9.5 7.5l2.5 1.5V7zM14.5 7.5l-2.5 1.5V7z" fill="#F4BA19" />
    </svg>
  );
}

function ClubCrest({ id, className }: { id: string; className?: string }) {
  switch (id) {
    case "sporting":
      return <SportingCrest className={className} />;
    case "man-united-one":
    case "man-united-two":
      return <ManchesterUnitedCrest className={className} />;
    case "real-madrid":
      return <RealMadridCrest className={className} />;
    case "juventus":
      return <JuventusCrest className={className} />;
    case "al-nassr":
      return <AlNassrCrest className={className} />;
    default:
      return null;
  }
}

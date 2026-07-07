"use client";

import { Award, Flame, Globe, Target, Trophy, Zap } from "lucide-react";

export function WorldCupFlags({ year }: { year: number }) {
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

export function BallonDorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="11" r="8" className="fill-museum-gold/10 stroke-museum-gold" />
      <path d="M12 3v16M4 11h16M6.5 6.5l11 11M17.5 6.5l-11 11" className="stroke-museum-gold/30" />
      <path d="M12 7.5a3.5 3.5 0 0 1 3.5 3.5M12 14.5a3.5 3.5 0 0 1 -3.5 -3.5" className="stroke-museum-gold" />
      <path d="M8 19h8M12 19v3" className="stroke-museum-gold" strokeWidth="2" />
    </svg>
  );
}

export function ChampionsLeagueIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M8 21h8M12 17v4" className="stroke-museum-gold" />
      <path d="M7 6c0 6.5 2 11 5 11s5-4.5 5-11H7z" className="fill-museum-gold/10 stroke-museum-gold" />
      <path d="M7 8C5 8 4 10 4 12c0 3 2.5 3 3 3M17 8c2 0 3 2 3 4 0 3-2.5 3-3 3" className="stroke-museum-gold" />
      <path d="M12 9l.6 1.2 1.4.2-1 1 .2 1.4-1.2-.7-1.2.7.2-1.4-1-1 1.4-.2z" className="fill-museum-gold stroke-none" />
    </svg>
  );
}

export function LeagueTitlesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 4L4 8v8l8 4 8-4V8l-8-4z" className="fill-museum-gold/10 stroke-museum-gold" />
      <path d="M12 8l1.5 3.5L17 13l-3.5 1.5L12 18l-1.5-3.5L7 13l3.5-1.5z" className="fill-museum-gold stroke-none" />
      <circle cx="12" cy="13" r="4" className="stroke-museum-gold/40" />
    </svg>
  );
}

export function EuroIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M9 21h6M10 18h4" className="stroke-museum-gold" />
      <path d="M12 14v4" className="stroke-museum-gold" />
      <path d="M8.5 5c0 5 1.5 9 3.5 9s3.5-4 3.5-9h-7z" className="fill-museum-gold/10 stroke-museum-gold" />
      <path d="M8.5 7H7.5v3h1M15.5 7h1v3h-1" className="stroke-museum-gold" />
    </svg>
  );
}

export function NationsLeagueIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M9 21h6M12 18v3" className="stroke-museum-gold" />
      <path d="M10 6c1-2 3-2 4 0s0 6-2 8-3 1-3 4" className="stroke-museum-gold" />
      <path d="M14 6c-1-2-3-2-4 0s0 6-2 8-3 1-3 4" className="stroke-museum-gold" />
      <path d="M10 10s2-1 4 0" className="stroke-museum-gold" />
    </svg>
  );
}

export function ClubWorldCupIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M8 21h8M12 16v5" className="stroke-museum-gold" />
      <circle cx="12" cy="7" r="4" className="fill-museum-gold/15 stroke-museum-gold" />
      <path d="M12 3a4 4 0 0 0 0 8M8 7h8" className="stroke-museum-gold/40" />
      <path d="M9 11l1 5h4l1-5" className="stroke-museum-gold" />
    </svg>
  );
}

export function getTrophyIcon(id: string, className?: string) {
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

export function SportingCrest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C6.5 2 3 5 3 11c0 6 5 11 9 11s9-5 9-11c0-6-3.5-9-9-9z" fill="#006633" />
      <path d="M12 4v16c3.5 0 7-3.5 7-9 0-5.5-3.5-7-7-7z" fill="#ffffff" opacity="0.15" />
      <path d="M4.5 8h7.5v2H4.5zm0 4h7.5v2H4.5z" fill="#ffffff" />
      <path d="M11 7c.7 0 1.2.5 1.2 1.2 0 .5-.3.8-.7 1h.7c.5 0 .8.3.8.8v1.5c0 .5-.3.8-.8.8h-.5v1.2h1v1h-3v-1h1v-1.2h-.5c-.5 0-.8-.3-.8-.8v-1.5c0-.5.3-.8.8-.8h.7c-.4-.2-.7-.5-.7-1 0-.7.5-1.2 1.2-1.2z" fill="#FFD700" />
    </svg>
  );
}

export function ManchesterUnitedCrest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C6.5 2 3 5 3 11c0 6 5 11 9 11s9-5 9-11c0-6-3.5-9-9-9z" fill="#DA291C" />
      <path d="M7 7h10l-1.5 3h-7z" fill="#FBE122" />
      <path d="M12 11.5c-.8 0-1.5.7-1.5 1.5 0 .5.3.9.7 1.2l-.7 2.3 1.5-.8 1.5.8-.7-2.3c.4-.3.7-.7.7-1.2 0-.8-.7-1.5-1.5-1.5z" fill="#FBE122" />
      <path d="M5 9c0 4 1 7 2 8m10-8c0 4-1 7-2 8" stroke="#FBE122" strokeWidth="1" />
    </svg>
  );
}

export function RealMadridCrest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="13" r="7" stroke="#FEBE10" strokeWidth="2" fill="#ffffff" fillOpacity="0.1" />
      <path d="M6.5 10l10.5 6M7 9l10.5 6" stroke="#00529F" strokeWidth="2" />
      <path d="M8 6l2 2 2-3 2 3 2-2 1 3H7l1-3z" fill="#FEBE10" />
      <circle cx="12" cy="3.5" r="0.8" fill="#FEBE10" />
    </svg>
  );
}

export function JuventusCrest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 3h18v18H3z" fill="#000000" />
      <path d="M8 6h3v7c0 1.7 1.3 3 3 3h1v3h-1c-3.3 0-6-2.7-6-6V6zm6 0h3v4c0 1.7-1.3 3-3 3h-1v3h1c3.3 0 6-2.7 6-6V6h-6z" fill="#ffffff" />
    </svg>
  );
}

export function AlNassrCrest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C6.5 2 3 5 3 11c0 6 5 11 9 11s9-5 9-11c0-6-3.5-9-9-9z" fill="#1B365D" />
      <circle cx="12" cy="12" r="4" fill="#F4BA19" />
      <path d="M12 5l1.5 2.5h-3zM9.5 7.5l2.5 1.5V7zM14.5 7.5l-2.5 1.5V7z" fill="#F4BA19" />
    </svg>
  );
}

export function ClubCrest({ id, className }: { id: string; className?: string }) {
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

export function getRecordIcon(icon?: string, className?: string) {
  switch (icon) {
    case "target":
      return <Target className={className} />;
    case "globe":
      return <Globe className={className} />;
    case "flame":
      return <Flame className={className} />;
    case "zap":
      return <Zap className={className} />;
    case "award":
      return <Award className={className} />;
    case "trophy":
      return <Trophy className={className} />;
    default:
      return null;
  }
}

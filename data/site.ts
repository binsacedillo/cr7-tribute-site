export type Club = {
  id: string;
  name: string;
  country: string;
  years: string;
  goals: number;
  trophies: string[];
  moments: string[];
};

export type RecordItem = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  context: string;
};

export type Trophy = {
  id: string;
  title: string;
  count: string;
  detail: string;
};

export type Moment = {
  id: string;
  title: string;
  year: string;
  context: string;
  stat: string;
};

export type WorldCup = {
  year: number;
  host: string;
  portugalFinish: string;
  ronaldoStats: string;
  definingMoment: string;
};

export const clubs: Club[] = [
  {
    id: "sporting",
    name: "Sporting CP",
    country: "Portugal",
    years: "2002 - 2003",
    goals: 5,
    trophies: ["Portuguese Super Cup"],
    moments: ["First-team breakthrough", "Teenage performance that caught Manchester United's attention"],
  },
  {
    id: "man-united-one",
    name: "Manchester United",
    country: "England",
    years: "2003 - 2009",
    goals: 118,
    trophies: ["3 Premier League titles", "Champions League", "FA Cup", "Club World Cup"],
    moments: ["First Ballon d'Or", "Number 7 becomes global", "2008 Champions League triumph"],
  },
  {
    id: "real-madrid",
    name: "Real Madrid",
    country: "Spain",
    years: "2009 - 2018",
    goals: 450,
    trophies: ["4 Champions League titles", "2 La Liga titles", "4 Ballon d'Or wins"],
    moments: ["Club record scorer", "Three-peat in Europe", "Bicycle kick in Turin"],
  },
  {
    id: "juventus",
    name: "Juventus",
    country: "Italy",
    years: "2018 - 2021",
    goals: 101,
    trophies: ["2 Serie A titles", "Coppa Italia", "2 Supercoppa Italiana"],
    moments: ["100 goals in Italy", "Hat trick against Atletico Madrid", "Proved longevity in a new league"],
  },
  {
    id: "man-united-two",
    name: "Manchester United",
    country: "England",
    years: "2021 - 2022",
    goals: 27,
    trophies: [],
    moments: ["Emotional Old Trafford return", "Premier League Player of the Month awards"],
  },
  {
    id: "al-nassr",
    name: "Al Nassr",
    country: "Saudi Arabia",
    years: "2023 - Present",
    goals: 80,
    trophies: ["Arab Club Champions Cup"],
    moments: ["Saudi football's global turning point", "Continued elite scoring output"],
  },
];

export const records: RecordItem[] = [
  { id: "career-goals", label: "Career Goals", value: 930, suffix: "+", context: "The benchmark keeps moving as his career extends across eras." },
  { id: "international-goals", label: "International Goals", value: 130, suffix: "+", context: "The men's international scoring record." },
  { id: "ucl-goals", label: "Champions League Goals", value: 140, suffix: "+", context: "A defining figure in the competition's modern history." },
  { id: "hat-tricks", label: "Hat Tricks", value: 65, suffix: "+", context: "Repeated dominance across club and country." },
  { id: "ballon-dor", label: "Ballon d'Or", value: 5, context: "Five years recognized as the world's best." },
  { id: "ucl-titles", label: "UCL Titles", value: 5, context: "European nights built his mythology." },
];

export const trophies: Trophy[] = [
  { id: "ballon-dor", title: "Ballon d'Or", count: "5", detail: "A five-time winner across the Manchester United and Real Madrid chapters." },
  { id: "champions-league", title: "Champions League", count: "5", detail: "One with Manchester United, four with Real Madrid." },
  { id: "league-titles", title: "League Titles", count: "7", detail: "England, Spain, and Italy all became part of the collection." },
  { id: "euro-2016", title: "Euro 2016", count: "1", detail: "Portugal's first major international trophy." },
  { id: "nations-league", title: "Nations League", count: "1", detail: "Another landmark trophy with Portugal." },
  { id: "club-world-cups", title: "Club World Cups", count: "4", detail: "Global club trophies across his peak European years." },
];

export const moments: Moment[] = [
  { id: "bicycle", title: "Bicycle Kick vs Juventus", year: "2018", context: "A goal so clean the opposition stadium applauded.", stat: "UCL quarter-final" },
  { id: "siuu", title: "The SIUU", year: "2013 - Present", context: "A celebration that crossed football and became a global signal.", stat: "Worldwide signature" },
  { id: "euro", title: "Portugal Euro Glory", year: "2016", context: "Injury forced him off the pitch, leadership kept him in the story.", stat: "Portugal 1-0 France" },
  { id: "spain", title: "Hat Trick vs Spain", year: "2018", context: "A World Cup opener turned into a personal theatre.", stat: "3 goals" },
  { id: "debut", title: "Manchester Debut", year: "2003", context: "A teenager arrived, and Old Trafford knew it had seen something rare.", stat: "No. 7 begins" },
  { id: "farewell", title: "Madrid Farewell", year: "2018", context: "He left as the club's all-time leading scorer.", stat: "450 goals" },
];

export const worldCups: WorldCup[] = [
  { year: 2006, host: "Germany", portugalFinish: "Fourth place", ronaldoStats: "1 goal", definingMoment: "The young winger's first World Cup stage." },
  { year: 2010, host: "South Africa", portugalFinish: "Round of 16", ronaldoStats: "1 goal", definingMoment: "A difficult tournament that tested Portugal's attack." },
  { year: 2014, host: "Brazil", portugalFinish: "Group stage", ronaldoStats: "1 goal, 1 assist", definingMoment: "Played through fitness concerns." },
  { year: 2018, host: "Russia", portugalFinish: "Round of 16", ronaldoStats: "4 goals", definingMoment: "The Spain hat trick became instant World Cup history." },
  { year: 2022, host: "Qatar", portugalFinish: "Quarter-finals", ronaldoStats: "1 goal", definingMoment: "A complicated ending, still part of a historic run." },
  { year: 2026, host: "Canada, Mexico, United States", portugalFinish: "Round of 16", ronaldoStats: "1 goal (Scored in 6 World Cups)", definingMoment: "A final World Cup appearance concluded by a late 1-0 defeat to Spain, ending a legendary tournament era." },
];

export const quotes = [
  "Your love makes me strong.",
  "Talent without working hard is nothing.",
  "Dreams are not what you see in your sleep. Dreams are things which do not let you sleep.",
  "I don't chase records. Records chase me.",
];

export const legacyPoints = ["Discipline", "Longevity", "Work Ethic", "Inspiration", "Influence"];

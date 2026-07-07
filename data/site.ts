export type Club = {
  id: string;
  name: string;
  country: string;
  years: string;
  goals: number;
  trophies: string[];
  moments: string[];
  image?: string;
  imageAlign?: string;
};

export type Milestone = {
  id: string;
  number: string;
  title: string;
  story: string[];
  quote?: string;
};

export type RecordItem = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  context: string;
  icon?: string;
  progress?: number;
};

export type Trophy = {
  id: string;
  title: string;
  count: string;
  detail: string;
  image?: string;
};

export type Moment = {
  id: string;
  title: string;
  year: string;
  context: string;
  stat: string;
  image?: string;
  imageAlign?: string;
};

export type WorldCup = {
  year: number;
  host: string;
  portugalFinish: string;
  ronaldoStats: string;
  definingMoment: string;
  image?: string;
  imageAlign?: string;
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
    image: "/images/clubs/sporting.jpg",
    imageAlign: "object-[center_20%]",
  },
  {
    id: "man-united-one",
    name: "Manchester United",
    country: "England",
    years: "2003 - 2009",
    goals: 118,
    trophies: ["3 Premier League titles", "Champions League", "FA Cup", "Club World Cup"],
    moments: ["First Ballon d'Or", "Number 7 becomes global", "2008 Champions League triumph"],
    image: "/images/clubs/man-united-one.jpg",
    imageAlign: "object-[center_30%]",
  },
  {
    id: "real-madrid",
    name: "Real Madrid",
    country: "Spain",
    years: "2009 - 2018",
    goals: 450,
    trophies: ["4 Champions League titles", "2 La Liga titles", "4 Ballon d'Or wins"],
    moments: ["Club record scorer", "Three-peat in Europe", "Bicycle kick in Turin"],
    image: "/images/clubs/real-madrid.jpg",
    imageAlign: "object-center",
  },
  {
    id: "juventus",
    name: "Juventus",
    country: "Italy",
    years: "2018 - 2021",
    goals: 101,
    trophies: ["2 Serie A titles", "Coppa Italia", "2 Supercoppa Italiana"],
    moments: ["100 goals in Italy", "Hat trick against Atletico Madrid", "Proved longevity in a new league"],
    image: "/images/clubs/juventus.jpg",
    imageAlign: "object-[center_25%]",
  },
  {
    id: "man-united-two",
    name: "Manchester United",
    country: "England",
    years: "2021 - 2022",
    goals: 27,
    trophies: [],
    moments: ["Emotional Old Trafford return", "Premier League Player of the Month awards"],
    image: "/images/clubs/man-united-two.jpg",
    imageAlign: "object-[center_30%]",
  },
  {
    id: "al-nassr",
    name: "Al Nassr",
    country: "Saudi Arabia",
    years: "2023 - Present",
    goals: 80,
    trophies: ["Arab Club Champions Cup"],
    moments: ["Saudi football's global turning point", "Continued elite scoring output"],
    image: "/images/clubs/al-nassr.jpg",
    imageAlign: "object-center",
  },
];

export const records: RecordItem[] = [
  { id: "career-goals", label: "Career Goals", value: 930, suffix: "+", context: "The benchmark keeps moving as his career extends across eras.", icon: "target", progress: 95 },
  { id: "international-goals", label: "International Goals", value: 130, suffix: "+", context: "The men's international scoring record.", icon: "globe", progress: 85 },
  { id: "ucl-goals", label: "Champions League Goals", value: 140, suffix: "+", context: "A defining figure in the competition's modern history.", icon: "flame", progress: 90 },
  { id: "hat-tricks", label: "Hat Tricks", value: 65, suffix: "+", context: "Repeated dominance across club and country.", icon: "zap", progress: 75 },
  { id: "ballon-dor", label: "Ballon d'Or", value: 5, context: "Five years recognized as the world's best.", icon: "award", progress: 80 },
  { id: "ucl-titles", label: "UCL Titles", value: 5, context: "European nights built his mythology.", icon: "trophy", progress: 70 },
];

export const trophies: Trophy[] = [
  { id: "ballon-dor", title: "Ballon d'Or", count: "5", detail: "A five-time winner across the Manchester United and Real Madrid chapters.", image: "/images/trophies/ballon-dor.jpg" },
  { id: "champions-league", title: "Champions League", count: "5", detail: "One with Manchester United, four with Real Madrid.", image: "/images/trophies/champions-league.jpg" },
  { id: "league-titles", title: "League Titles", count: "7", detail: "England, Spain, and Italy all became part of the collection.", image: "/images/trophies/league-titles.png" },
  { id: "euro-2016", title: "Euro 2016", count: "1", detail: "Portugal's first major international trophy.", image: "/images/trophies/euro-2016.jpg" },
  { id: "nations-league", title: "Nations League", count: "1", detail: "Another landmark trophy with Portugal.", image: "/images/trophies/nations-league.jpg" },
  { id: "club-world-cups", title: "Club World Cups", count: "4", detail: "Global club trophies across his peak European years.", image: "/images/trophies/club-world-cups.jpg" },
];

export const moments: Moment[] = [
  {
    id: "bicycle",
    title: "Bicycle Kick vs Juventus",
    year: "2018",
    context: "A goal so clean the opposition stadium applauded.",
    stat: "UCL quarter-final",
    image: "/images/moments/bicycle-kick.jpg",
    imageAlign: "object-[center_25%]",
  },
  {
    id: "siuu",
    title: "The SIUU",
    year: "2013 - Present",
    context: "A celebration that crossed football and became a global signal.",
    stat: "Worldwide signature",
    image: "/images/moments/siuu.jpg",
    imageAlign: "object-center",
  },
  {
    id: "euro",
    title: "Portugal Euro Glory",
    year: "2016",
    context: "Injury forced him off the pitch, leadership kept him in the story.",
    stat: "Portugal 1-0 France",
    image: "/images/moments/euro-2016.jpg",
    imageAlign: "object-[center_20%]",
  },
  {
    id: "spain",
    title: "Hat Trick vs Spain",
    year: "2018",
    context: "A World Cup opener turned into a personal theatre.",
    stat: "3 goals",
    image: "/images/moments/spain-hat-trick.jpg",
    imageAlign: "object-[center_30%]",
  },
  {
    id: "debut",
    title: "Manchester Debut",
    year: "2003",
    context: "A teenager arrived, and Old Trafford knew it had seen something rare.",
    stat: "No. 7 begins",
    image: "/images/moments/manchester-debut.jpg",
    imageAlign: "object-[center_20%]",
  },
  {
    id: "farewell",
    title: "Madrid Farewell",
    year: "2018",
    context: "He left as the club's all-time leading scorer.",
    stat: "450 goals",
    image: "/images/moments/madrid-farewell.jpg",
    imageAlign: "object-center",
  },
];

export const worldCups: WorldCup[] = [
  {
    year: 2006,
    host: "Germany",
    portugalFinish: "Fourth place",
    ronaldoStats: "1 goal",
    definingMoment: "The young winger's first World Cup stage.",
    image: "/images/worldcups/2006.jpg",
    imageAlign: "object-[center_20%]",
  },
  {
    year: 2010,
    host: "South Africa",
    portugalFinish: "Round of 16",
    ronaldoStats: "1 goal",
    definingMoment: "A difficult tournament that tested Portugal's attack.",
    image: "/images/worldcups/2010.jpg",
    imageAlign: "object-center",
  },
  {
    year: 2014,
    host: "Brazil",
    portugalFinish: "Group stage",
    ronaldoStats: "1 goal, 1 assist",
    definingMoment: "Played through fitness concerns.",
    image: "/images/worldcups/2014.jpg",
    imageAlign: "object-[center_30%]",
  },
  {
    year: 2018,
    host: "Russia",
    portugalFinish: "Round of 16",
    ronaldoStats: "4 goals",
    definingMoment: "The Spain hat trick became instant World Cup history.",
    image: "/images/worldcups/2018.jpg",
    imageAlign: "object-[center_25%]",
  },
  {
    year: 2022,
    host: "Qatar",
    portugalFinish: "Quarter-finals",
    ronaldoStats: "1 goal",
    definingMoment: "A complicated ending, still part of a historic run.",
    image: "/images/worldcups/2022.jpg",
    imageAlign: "object-center",
  },
  {
    year: 2026,
    host: "Canada, Mexico, United States",
    portugalFinish: "Round of 16",
    ronaldoStats: "1 goal (Scored in 6 World Cups)",
    definingMoment: "A final World Cup appearance concluded by a late 1-0 defeat to Spain, ending a legendary tournament era.",
    image: "/images/worldcups/2026.jpg",
    imageAlign: "object-center",
  },
];

export const quotes = [
  "Your love makes me strong.",
  "Talent without working hard is nothing.",
  "Dreams are not what you see in your sleep. Dreams are things which do not let you sleep.",
  "I don't chase records. Records chase me.",
];

export const legacyPoints = ["Discipline", "Longevity", "Work Ethic", "Inspiration", "Influence"];

export const madeiraMilestones: Milestone[] = [
  {
    id: "childhood",
    number: "01",
    title: "Childhood in Funchal",
    story: [
      "Born on February 5, 1985, in Santo António, a working-class neighborhood in Funchal, Madeira, Cristiano Ronaldo dos Santos Aveiro was named after Ronald Reagan, his father's favorite actor.",
      "Growing up in poverty, Ronaldo lived in a cramped house with sheet metal roofing, sharing a single bedroom with his mother, father, and three older siblings. Money was scarce, and his mother Dolores Aveiro worked long hours as a cook and cleaner to support the family.",
      "His first introduction to organized football came through Andorinha, a local amateur club where his kit-man father, José Dinis Aveiro, worked. Ronaldo would play street football for hours, often using rags or plastic bottles when a proper ball wasn't available, displaying an obsession with the game from his earliest years."
    ],
    quote: "We lived in a small house, but it was filled with love and soccer."
  },
  {
    id: "sacrifice",
    number: "02",
    title: "Family Sacrifice",
    story: [
      "At just 12 years old, Ronaldo's raw talent earned him a three-day trial with Sporting CP in Lisbon. Sporting was so impressed by his skills that they signed him for a youth academy transfer fee of £1,500.",
      "This opportunity forced his family to make an agonizing sacrifice: Dolores agreed to let her youngest son move 600 miles away across the ocean to mainland Portugal alone to chase his dream.",
      "Lisbon was a deeply lonely experience for the young teenager. Ronaldo recalled crying every single day, suffering from extreme homesickness, and feeling isolated. To make matters worse, he was relentlessly mocked by his academy peers for his thick, distinct Madeiran accent, but his determination to help his family climb out of poverty kept him from running back home."
    ],
    quote: "It was the hardest decision of my life, leaving my mother and my home at twelve years old."
  },
  {
    id: "sporting-lisbon",
    number: "03",
    title: "Sporting Lisbon",
    story: [
      "Ronaldo progressed rapidly through Sporting CP's youth ranks, becoming the only player in the club's history to play for the under-16, under-17, under-18, B-team, and first team all within a single season.",
      "He made his first-team Primeira Liga debut at age 17 in 2002, scoring two goals in a 3-0 victory against Moreirense, announcing his arrival to the world of professional football.",
      "In August 2003, Sporting played a pre-season friendly against Manchester United to inaugurate the Estádio José Alvalade. Ronaldo's breathtaking speed, stepovers, and dribbling left the United players dizzy and exhausted. On the plane flight back to England, senior players urged Sir Alex Ferguson to sign the teenager immediately, leading to his historic transfer to Old Trafford."
    ],
    quote: "After that match, Sir Alex took me to the dressing room and told me he wanted me now."
  },
  {
    id: "island-dreams",
    number: "04",
    title: "Dreams Bigger Than the Island",
    story: [
      "From his earliest days at the Sporting academy, Ronaldo showed a work ethic that bordered on obsession. When coaches and trainers told him he had world-class talent but was simply too skinny to succeed professionally, he refused to accept it.",
      "Ronaldo began sneaking out of his dormitory room late at night, bypassing security to lift weights in the gym. He would fill plastic bottles with water and strap weights to his ankles, practicing stepovers and sprints in the dark corridors of the academy to build explosive speed.",
      "He made a promise to his teammates and family: 'I will become the best player in the world.' Madeira was no longer a cage; it was the launching pad for a global icon who would redefine athletic discipline."
    ],
    quote: "I knew I had to work twice as hard as everyone else to be the best."
  }
];

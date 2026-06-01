import type {
  AboutInterestCard,
  CurrentObsessionField,
  ObjectToolItem,
  PersonalityItem,
} from "@/types";

export const personalityItems: PersonalityItem[] = [
  { label: "Sketchbooks", description: "Where most ideas start." },
  { label: "MMA", description: "Regular reminders that confidence is temporary." },
  { label: "Gundam", description: "Patience disguised as a hobby." },
  { label: "Films", description: "Stories, framing, and timing." },
  { label: "Motorcycles", description: "Mechanical honesty." },
  { label: "Tattoos", description: "Design decisions that can't be undone." },
  { label: "Books", description: "Usually chasing ideas, not genres." },
];

export const aboutBeyondWork = {
  headline: "Beyond work",
  subheading: "The things that occupy my attention when I'm away from Figma.",
};

export const aboutPortrait = {
  src: "/about/portrait.png",
  alt: "Mradul Jain",
};

export const aboutInterestCards: AboutInterestCard[] = [
  {
    id: "mma-jiu-jitsu",
    title: "MMA & Jiu-Jitsu",
    preview: "Strategy under pressure.",
    expanded: [
      "Training started as a way to stay active and quickly became something much harder to walk away from.",
      "Jiu-jitsu has a way of exposing assumptions. Techniques fail, plans collapse, and every round becomes immediate feedback. It is one of the few activities that completely removes work from my head.",
      "Most sessions involve getting humbled by people considerably smaller than me.",
    ],
    gallery: [
      {
        label: "Weekend sparring",
        src: "/about/mma-jiu-jitsu/kickboxing-sparring.png",
        alt: "Kickboxing sparring in the gym",
      },
      {
        label: "On the mat",
        src: "/about/mma-jiu-jitsu/jiu-jitsu-rolling.png",
        alt: "Jiu-jitsu rolling session",
      },
      {
        label: "Ringside, Immortal FC",
        src: "/about/mma-jiu-jitsu/immortal-fc-event.png",
        alt: "Immortal FC — coach's pro bout night",
      },
    ],
  },
  {
    id: "gundams",
    title: "Gundams",
    preview: "Precision, patience, and tiny pieces of plastic.",
    expanded: [
      "Part nostalgia, part appreciation for well-designed objects.",
      "I enjoy the process more than the finished build. Hundreds of individual pieces gradually become something coherent through small decisions and attention to detail.",
      "The process feels surprisingly similar to product design.",
    ],
    gallery: [
      {
        label: "Build day with the homie",
        src: "/about/gundams/weekend-plans-with-homies.png",
        alt: "Gunpla build session at the workbench",
      },
      {
        label: "Heindree, finished",
        src: "/about/gundams/finished-build.png",
        alt: "Completed Heindree Gunpla",
      },
      {
        label: "Figurines",
        src: "/about/gundams/gunpla-action-figure-collection.png",
        alt: "Shelf of Gundam kits and action figures",
      },
    ],
  },
  {
    id: "motorcycles",
    title: "Motorcycles",
    preview: "Mechanical systems you can feel.",
    expanded: [
      "I've always been drawn to machines that make their complexity visible.",
      "Maintenance, modifications, long rides, and occasionally fixing things I probably shouldn't have touched in the first place.",
      "Motorcycles taught me to appreciate systems beyond software.",
    ],
    gallery: [
      {
        label: "First big bike",
        src: "/about/motorcycles/bullet-electra-first-ride.png",
        alt: "Brother's Royal Enfield Bullet Electra — first big bike I ever rode",
      },
      {
        label: "Building Raphael",
        src: "/about/motorcycles/raphael-build.png",
        alt: "Working on Raphael, a cafe racer mod on a Bajaj Discover 110",
      },
      {
        label: "First bike I bought",
        src: "/about/motorcycles/ronin-fresh-wash.png",
        alt: "TVS Ronin after a fresh wash — first bike bought with my own money",
      },
    ],
  },
  {
    id: "sketchbooks",
    title: "Sketchbooks",
    preview: "Where most ideas actually begin.",
    expanded: [
      "Before Figma, before wireframes, before structure.",
      "Sketchbooks hold unfinished thoughts, diagrams, observations, and drawings that occasionally become useful. Or not.",
    ],
    gallery: [
      {
        label: "Frog-bug(?)",
        src: "/about/sketchbooks/frog-bug.png",
        alt: "Ink sketch of a winged frog creature on a red background",
      },
      {
        label: "Hannya mask in metro",
        src: "/about/sketchbooks/hannya-mask-metro.png",
        alt: "Hannya mask sketch with a morning commute speech bubble",
      },
      {
        label: "Artist? Muse?",
        src: "/about/sketchbooks/artist-muse.png",
        alt: "Ink portrait of a woman holding a paintbrush, sketchbook spread",
      },
    ],
  },
  {
    id: "tattoos",
    title: "Tattooing",
    preview: "Designing for permanence.",
    expanded: [
      "I spent a period of my life designing and tattooing professionally.",
      "Design decisions feel different when someone has to live with them forever.",
      "It taught me restraint, intentionality, and the value of removing everything that doesn't matter.",
    ],
    gallery: [
      {
        label: "Practice skin",
        src: "/about/tattoos/practice-skin-portrait.png",
        alt: "Floral portrait tattoo on practice skin, machine in hand",
      },
      {
        label: "In session",
        src: "/about/tattoos/studio-session.png",
        alt: "Tattoo session in the studio — client smiling, artist at work",
      },
      {
        label: "The studio",
        src: "/about/tattoos/studio-floor.png",
        alt: "Black-and-white view of the tattoo studio floor",
      },
    ],
  },
  {
    id: "films",
    title: "Films",
    preview: "Visual storytelling.",
    expanded: [
      "Films influence how I think about pacing, hierarchy, attention, and emotional timing.",
      "I pay attention to framing, editing, composition, and how information is revealed over time.",
      "Many interaction problems are storytelling problems in disguise.",
    ],
    gallery: [
      {
        title: "Ijaazat",
        label: "The beauty of unfinished conversations.",
        src: "/about/films/ijaazat.png",
        alt: "Ijaazat, Naseeruddin Shah and Rekha in a black-and-white still",
      },
      {
        title: "Her",
        label: "Technology, loneliness, and what remains human.",
        src: "/about/films/her.png",
        alt: "Her, Spike Jonze film poster",
      },
      {
        title: "12 Angry Men",
        label: "Proof that changing minds is a craft.",
        src: "/about/films/12-angry-men.png",
        alt: "12 Angry Men, jury room still",
      },
    ],
  },
  {
    id: "books",
    title: "Books",
    preview: "Systems, creativity, and curiosity.",
    expanded: [
      "I don't read as much as I'd like to. When I do, I usually gravitate toward ideas that change how I see people, systems, or decisions.",
      "Books I've revisited:",
    ],
    gallery: [
      {
        title: "The Almanack of Naval Ravikant",
        label: "Leverage, judgment, and long-term thinking.",
        src: "/about/books/almanack-naval-ravikant.png",
        alt: "The Almanack of Naval Ravikant on a striped surface",
        href: "https://www.amazon.in/Almanack-Naval-Ravikant-Wealth-Happiness/dp/9354893899",
      },
      {
        title: "Assorted comics",
        label: "Where drawing and storytelling become inseparable.",
        src: "/about/books/assorted-comics.png",
        alt: "Stack of Batman, X-Men, and other comic books",
        href: "https://www.amazon.in/Superman-Justice-Lantern-Assorted-Collection/dp/B084MKKS5X",
      },
      {
        title: "Manto",
        label: "Uncomfortable honesty about people and society.",
        src: "/about/books/manto-stories.png",
        alt: "Manto ki Sarvshreshth Kahaniyan, Hindi edition held in hand",
        href: "https://www.amazon.in/Manto-Selected-Stories-Penguin-Pre/dp/0670098175",
      },
    ],
  },
  {
    id: "current-obsessions",
    title: "Current Obsessions",
    preview: "A live dashboard of what I'm into right now.",
    expanded: [],
    variant: "obsessions",
  },
  {
    id: "objects-tools",
    title: "Objects & Tools",
    preview: "Desk essentials, design software, and the AI tools in rotation.",
    expanded: [],
    variant: "objects",
  },
];

export const currentObsessions: CurrentObsessionField[] = [
  { label: "Currently Reading", value: "Whatever rabbit hole the internet has convinced me is important this week." },
  { label: "Currently Watching", value: "Spider-Noir" },
  { label: "Currently Playing", value: "Sifu, Ghost of Tsushima" },
  { label: "Currently Building", value: "1/144 RG Gundam Astray Gold Frame Amatsu Mina" },
  { label: "Currently Exploring", value: "How products compete for attention and how to take it back." },
];

export const objectsAndTools: ObjectToolItem[] = [
  {
    id: "gaming-pc",
    name: "Gaming PC",
    note: "Overbuilt for Figma. No regrets.",
  },
  {
    id: "s24-ultra",
    name: "S24 Ultra",
    note: "Reference camera for everything else.",
  },
  {
    id: "current-gundam",
    name: "Current Gundam",
    note: "Half-built, fully committed.",
  },
  {
    id: "favorite-pen",
    name: "Favorite Pen",
    note: "The one that runs out at the worst time.",
  },
  {
    id: "work-laptop",
    name: "Work Laptop",
    note: "Figma, Slack, and tabs I swear I'll close later.",
  },
  {
    id: "ipad",
    name: "iPad",
    note: "Sketching, reading, and couch-side research.",
  },
];

export const designSoftware: ObjectToolItem[] = [
  {
    id: "figma",
    name: "Figma",
    note: "Primary environment for product design, systems, and handoff.",
    src: "/about/tools/figma.svg",
    logo: true,
  },
  {
    id: "miro",
    name: "Miro",
    note: "Workshops, journey maps, and alignment with cross-functional teams.",
    src: "/about/tools/miro.svg",
    logo: true,
  },
  {
    id: "procreate",
    name: "Procreate",
    note: "Sketching, illustration, and visual exploration on iPad.",
    src: "/about/tools/procreate.svg",
    logo: true,
  },
  {
    id: "illustrator",
    name: "Illustrator",
    note: "Vector work, icons, and precision visual craft.",
    src: "/about/tools/illustrator.svg",
    logo: true,
  },
  {
    id: "photoshop",
    name: "Photoshop",
    note: "Compositing, retouching, and image-heavy deliverables.",
    src: "/about/tools/photoshop.svg",
    logo: true,
  },
];

export const aiTools: ObjectToolItem[] = [
  {
    id: "cursor",
    name: "Cursor",
    note: "Building and iterating on this site and side projects in code.",
    src: "/about/tools/cursor.svg",
    logo: true,
  },
  {
    id: "codex",
    name: "Codex",
    note: "Fast prototyping and technical exploration inside the editor.",
    src: "/about/tools/codex.svg",
    logo: true,
  },
  {
    id: "claude-code",
    name: "Claude Code",
    note: "Agentic workflows for larger refactors and multi-file changes.",
    src: "/about/tools/claude-code.svg",
    logo: true,
  },
  {
    id: "google-stitch",
    name: "Google Stitch",
    note: "UI generation and layout experiments from prompts.",
    src: "/about/tools/google-stitch.svg",
    logo: true,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    note: "Drafting, reasoning, and quick structured thinking.",
    src: "/about/tools/chatgpt.svg",
    logo: true,
  },
  {
    id: "gemini",
    name: "Gemini",
    note: "Research, multimodal review, and alternate perspectives.",
    src: "/about/tools/gemini.svg",
    logo: true,
  },
  {
    id: "google-flow",
    name: "Google Flow",
    note: "Video and motion ideation when a concept needs to move.",
    src: "/about/tools/google-flow.svg",
    logo: true,
  },
  {
    id: "figma-make",
    name: "Figma Make",
    note: "AI-assisted exploration directly inside the design file.",
    src: "/about/tools/figma-make.svg",
    logo: true,
  },
];

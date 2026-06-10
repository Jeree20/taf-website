export type GalleryCategory =
  | "all"
  | "football"
  | "sports"
  | "library"
  | "outreach"
  | "women"
  | "community"
  | "events";

export interface GalleryItem {
  id: string;
  category: Exclude<GalleryCategory, "all">;
  title: string;
  caption: string;
  program: string;
  /** Real image path */
  imageSrc: string;
  /** aspect ratio class — controls card height */
  aspect: "aspect-square" | "aspect-[4/3]" | "aspect-[3/4]" | "aspect-video";
  /** span 1 or 2 columns in the masonry grid */
  colSpan?: "col-span-1" | "col-span-2";
}

export const GALLERY_CATEGORIES: { value: GalleryCategory; label: string }[] = [
  { value: "all",       label: "All Photos"        },
  { value: "football",  label: "Football Academy"  },
  { value: "library",   label: "Library"           },
  { value: "outreach",  label: "Outreach"          },
  { value: "women",     label: "Women's Program"   },
  { value: "community", label: "Community"         },
  { value: "events",    label: "Events"            },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Football Academy
  {
    id: "fa-01",
    category: "football",
    title: "TAF Senior Squad — Match Day",
    caption: "The senior squad in their white and blue Adidas kits — sponsored by Greene King IPA — pose before a competitive fixture on the Kayole Soweto ground.",
    program: "Football Academy",
    imageSrc: "/images/gallery/football-senior-squad.png",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-2",
  },
  {
    id: "fa-02",
    category: "football",
    title: "Pre-Match Lineup",
    caption: "Players line up before kick-off on the Kayole pitch — a moment of focus, teamwork, and community pride.",
    program: "Football Academy",
    imageSrc: "/images/gallery/football-team-lineup.png",
    aspect: "aspect-[3/4]",
    colSpan: "col-span-1",
  },
  {
    id: "fa-03",
    category: "football",
    title: "NGAO Youth Squad",
    caption: "The NGAO Youth Squad in their distinctive light blue kits rest at the touchline — the next generation of Kayole football talent.",
    program: "Football Academy",
    imageSrc: "/images/gallery/football-ngao-squad.png",
    aspect: "aspect-square",
    colSpan: "col-span-1",
  },
  {
    id: "fa-04",
    category: "football",
    title: "Junior Academy Training",
    caption: "Young players at the Junior Academy session — learning football fundamentals alongside the values of discipline, respect, and teamwork.",
    program: "Football Academy",
    imageSrc: "/images/gallery/football-junior-training.png",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-1",
  },
  {
    id: "fa-05",
    category: "football",
    title: "Women's Team — Yellow Kits",
    caption: "The TAF women's football team in their vibrant yellow and white kits — proving that football in Kayole belongs to everyone.",
    program: "Football Academy",
    imageSrc: "/images/gallery/football-womens-team.png",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-1",
  },
  {
    id: "fa-06",
    category: "football",
    title: "TAF Logo Floor — Home of Transformation",
    caption: "The TAF crest permanently embedded in the terrazzo floor of the #HomeOfTransformation — a symbol of community identity and pride.",
    program: "Football Academy",
    imageSrc: "/images/gallery/taf-logo-floor.png",
    aspect: "aspect-square",
    colSpan: "col-span-1",
  },

  // Library
  {
    id: "lib-01",
    category: "library",
    title: "Children's Books Section",
    caption: "Colourful children's books line the white shelves of the TAF community library — 1,500+ volumes donated by Just Be A Child in February 2024.",
    program: "Education & Library",
    imageSrc: "/images/gallery/library-childrens-books.png",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-2",
  },
  {
    id: "lib-02",
    category: "library",
    title: "Full Library Collection",
    caption: "Wall-to-wall bookshelves stocked with academic, fiction, and reference material serving students across 5 Kayole schools.",
    program: "Education & Library",
    imageSrc: "/images/gallery/library-bookshelf.png",
    aspect: "aspect-[3/4]",
    colSpan: "col-span-1",
  },
  {
    id: "lib-03",
    category: "library",
    title: "Library Under Development",
    caption: "The TAF library growing into its Centre of Excellence vision — new shelving units being installed to expand capacity.",
    program: "Education & Library",
    imageSrc: "/images/gallery/library-development.png",
    aspect: "aspect-square",
    colSpan: "col-span-1",
  },
  {
    id: "lib-04",
    category: "library",
    title: "Tutoring Session in Progress",
    caption: "Students bend over their work during a TAF facilitated tutoring session — the room alive with concentration and learning.",
    program: "Education & Library",
    imageSrc: "/images/gallery/education-tutoring-session.png",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-1",
  },

  // Outreach
  {
    id: "out-01",
    category: "outreach",
    title: "Children's Feeding Program",
    caption: "Children seated at tables, meals in hand — the TAF feeding program ensures that 350+ young learners never have to study on an empty stomach.",
    program: "Community Outreach",
    imageSrc: "/images/gallery/outreach-feeding-program.png",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-2",
  },
  {
    id: "out-02",
    category: "outreach",
    title: "Volunteers Serve the Community",
    caption: "TAF volunteers in yellow high-visibility vests serve hot meals to children in Kayole — love made visible and practical.",
    program: "Community Outreach",
    imageSrc: "/images/gallery/outreach-volunteers-serving.png",
    aspect: "aspect-[3/4]",
    colSpan: "col-span-1",
  },
  {
    id: "out-03",
    category: "outreach",
    title: "Food Distribution Drive",
    caption: "Community members receive food boxes and essential supplies during a TAF distribution drive in Kayole Soweto.",
    program: "Community Outreach",
    imageSrc: "/images/gallery/outreach-relief-distribution.png",
    aspect: "aspect-square",
    colSpan: "col-span-1",
  },
  {
    id: "out-04",
    category: "outreach",
    title: "Supply Distribution",
    caption: "Essential supplies reach families in need as TAF volunteers coordinate a community distribution event.",
    program: "Community Outreach",
    imageSrc: "/images/gallery/outreach-supply-distribution.png",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-1",
  },
  {
    id: "out-05",
    category: "outreach",
    title: "Tree Planting — Youth Stewards",
    caption: "Smiling youth hold seedlings during a TAF tree-planting drive — building environmental pride and a greener Kayole for the future.",
    program: "Community Outreach",
    imageSrc: "/images/gallery/outreach-tree-planting.png",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-1",
  },
  {
    id: "out-06",
    category: "outreach",
    title: "Community Clean-up",
    caption: "Volunteers clear blocked drains and littered streets in Kayole — a collective act of community ownership and environmental care.",
    program: "Community Outreach",
    imageSrc: "/images/gallery/outreach-community-cleanup.png",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-1",
  },
  {
    id: "out-07",
    category: "outreach",
    title: "Street Outreach — Children",
    caption: "Children gather on a Kayole street during a TAF community outreach event — the joy on their faces tells the story of transformation.",
    program: "Community Outreach",
    imageSrc: "/images/gallery/outreach-children-street.png",
    aspect: "aspect-square",
    colSpan: "col-span-1",
  },

  // Women
  {
    id: "wm-01",
    category: "women",
    title: "Women's Cooking & Food Prep",
    caption: "Women gather around large pots during a community food preparation session — fellowship, service, and practical empowerment combined.",
    program: "Women's Empowerment",
    imageSrc: "/images/gallery/women-community-kitchen.png",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-2",
  },

  // Community
  {
    id: "cm-01",
    category: "community",
    title: "Community Talk — Hall Session",
    caption: "A community leader addresses residents at a TAF-organised hall session — education, advocacy, and dialogue in action.",
    program: "Community Development",
    imageSrc: "/images/gallery/community-hall-talk.png",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-1",
  },

  // Events
  {
    id: "ev-01",
    category: "events",
    title: "Praise Tuesday",
    caption: "\"One hour of praise\" — TAF's weekly Praise Tuesday at the #HomeOfTransformation, where community members gather for faith and fellowship.",
    program: "Community Events",
    imageSrc: "/images/gallery/events-praise-tuesday.png",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-2",
  },
];

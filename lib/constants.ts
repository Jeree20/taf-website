export const SITE = {
  name: "Tumaini African Foundation",
  shortName: "TAF",
  tagline: "We Empower to Empower",
  venueName: "Home of Transformation",
  bio: "A duly registered Community Based Organisation with the Government of Kenya. Our objective is to positively transform our society.",
  address: "Kayole Soweto, Nairobi, 1242 00100, Kenya",
  phone: "0733 441 983",
  whatsapp: "254733441983",
  email: "info@tumainiafricanfoundation.org",
  facebook: "https://facebook.com/TumainiAfricanFoundation",
  facebookGroup: "https://facebook.com/groups/tafkenya",
  instagram: "#",
  youtube: "#",
  mpesaPaybill: "123456",
  mpesaAccount: "TAF-DONATE",
  gps: { lat: -1.23931, lng: 36.81621 },
  director: "Antony Njoroge",
  libraryManager: "Naomi Maingi",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Football Academy", href: "/programs/football-academy" },
  { label: "Library", href: "/programs/library" },
  { label: "Get Involved", href: "/get-involved" },
] as const;

export const IMPACT_STATS = [
  { id: "youth",    target: 2500, suffix: "+", label: "Youth Served" },
  { id: "programs", target: 10,   suffix: "",  label: "Active Programs" },
  { id: "schools",  target: 5,    suffix: "",  label: "Schools Supported" },
  { id: "books",    target: 1500, suffix: "+", label: "Library Books" },
] as const;

export const HERO_STATS = [
  { id: "h-youth",   target: 2500, suffix: "+", label: "Youth Served" },
  { id: "h-progs",   target: 10,   suffix: "",  label: "Programs" },
  { id: "h-library", target: 120,  suffix: "+", label: "Library Users" },
  { id: "h-partners",target: 6,    suffix: "",  label: "Partner Orgs" },
] as const;

export const PROGRAMS = [
  {
    id: "football-academy",
    featured: true,
    icon: "Trophy",
    tag: "Flagship Program",
    title: "TAF Football Academy",
    description:
      "The pride of Kayole Soweto. The TAF Football Academy develops football talent while instilling discipline, teamwork, and life values that keep youth away from crime and drugs. We run multiple age groups including a women's team.",
    kits: ["White & Blue Adidas Kit", "Yellow Women's Team", "NGAO Youth Squad"],
    href: "/programs/football-academy",
  },
  {
    id: "chess",
    icon: "Brain",
    title: "Chess",
    description:
      "Strategic thinking, patience, and mental discipline — building sharp minds in Kayole.",
    href: "/programs/chess",
  },
  {
    id: "table-tennis",
    icon: "Target",
    title: "Table Tennis",
    description:
      "Fast reflexes, focus, and healthy competition for youth of all ages.",
    href: "/programs/table-tennis",
  },
  {
    id: "darts",
    icon: "Crosshair",
    title: "Darts",
    description:
      "Precision, calm under pressure, and concentration — lessons that go beyond the board.",
    href: "/programs/darts",
  },
  {
    id: "education",
    icon: "BookOpen",
    tag: "Education",
    title: "Education Support & Library",
    description:
      "Our community library serves 120+ students across 5 schools with 1,500+ books donated by Just Be A Child. Tutoring, school fees support, and a Centre of Excellence.",
    href: "/programs/library",
  },
  {
    id: "mentorship",
    icon: "Handshake",
    tag: "Mentorship",
    title: "Mentorship & Leadership",
    description:
      "Connecting youth with experienced mentors — including a dedicated girl mentorship program — for personal, professional, and spiritual growth.",
    href: "/programs/mentorship",
  },
  {
    id: "women",
    icon: "Users",
    tag: "Women",
    title: "Women's Empowerment",
    description:
      "Skills training, entrepreneurship, a women's football team, and a strong network — because empowered women transform entire families and communities.",
    href: "/programs/women-empowerment",
  },
  {
    id: "outreach",
    icon: "Globe",
    tag: "Outreach",
    title: "Community Outreach",
    description:
      "Street clean-ups, tree planting, food distribution, COVID relief drives, and community events — TAF is present wherever Kayole needs us most.",
    href: "/programs/outreach",
  },
] as const;

export const FOOTBALL_BENEFITS = [
  {
    icon: "Shield",
    title: "Away From Crime & Drugs",
    description:
      "Structured training and team culture provide a positive, purposeful alternative for young people in Kayole's challenging environment.",
  },
  {
    icon: "Award",
    title: "Talent Development",
    description:
      "Competitive matches and dedicated coaching create real pathways for gifted players to pursue football at higher levels.",
  },
  {
    icon: "Users2",
    title: "Discipline & Teamwork",
    description:
      "Values learned on the pitch — respect, commitment, resilience — translate directly into character for life beyond football.",
  },
  {
    icon: "Heart",
    title: "Community Pride",
    description:
      "The Academy unites Kayole Soweto, giving the neighbourhood a shared identity, shared joy, and shared reason to celebrate.",
  },
] as const;

export const OUTREACH_CARDS = [
  {
    id: "feeding",
    emoji: "UtensilsCrossed",
    bgFrom: "#FFF3E0",
    bgTo: "#FFE0B2",
    title: "Children's Feeding Program",
    description:
      "Free meals for 350+ children at Tujisaidie Community Centre School, ensuring no child learns on an empty stomach.",
  },
  {
    id: "library",
    emoji: "BookOpen",
    bgFrom: "#E8F6FF",
    bgTo: "#C8E6F0",
    title: "Community Library",
    description:
      "1,500+ books serving 120+ students from 5 schools. Library Manager Naomi Maingi oversees our growing Centre of Excellence.",
  },
  {
    id: "environment",
    emoji: "Sprout",
    bgFrom: "#E8F5E9",
    bgTo: "#C8E6C9",
    title: "Environmental Stewardship",
    description:
      "Youth-led tree planting drives and community clean-ups that build environmental pride and a greener Kayole for future generations.",
  },
  {
    id: "relief",
    emoji: "Smile",
    bgFrom: "#F3E5F5",
    bgTo: "#E1BEE7",
    title: "Relief & Support Drives",
    description:
      "Food boxes, hygiene kits, and essential supply distributions — ensuring no family in Kayole is left behind.",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: "mary",
    quote:
      "The Football Academy gave my son a reason to come home early, train hard, and dream big. He used to be on the streets — now he wears the TAF jersey with pride every week.",
    name: "Mary Njoki",
    role: "Parent, Kayole Soweto",
    initials: "MN",
    avatarColor: "bg-maroon-800",
  },
  {
    id: "louise",
    quote:
      "Children who would not have gone to school have now joined college and are now self-sufficient. The transformation TAF has made in Kayole is tremendous — truly tremendous.",
    name: "Louise Githire",
    role: "UDP Programme Manager",
    initials: "LG",
    avatarColor: "bg-sky-600",
  },
  {
    id: "fatuma",
    quote:
      "The women's empowerment program gave us more than skills — it gave us each other. We now run a savings circle that has helped five families start small businesses.",
    name: "Fatuma Chebet",
    role: "Women's Program Member",
    initials: "FC",
    avatarColor: "bg-green-700",
  },
] as const;

export const PARTNERS = [
  "St Mark's Dundela, Belfast",
  "Just Be A Child",
  "CMS Ireland (CMSI)",
  "Urban Development Programme",
  "All Saints' Cathedral, Nairobi",
  "Greene King IPA",
] as const;

export const FOOTER_PROGRAMS = [
  { label: "Football Academy", href: "/programs/football-academy" },
  { label: "Chess", href: "/programs/chess" },
  { label: "Table Tennis & Darts", href: "/programs/sports" },
  { label: "Education & Library", href: "/programs/library" },
  { label: "Mentorship", href: "/programs/mentorship" },
  { label: "Women's Empowerment", href: "/programs/women-empowerment" },
  { label: "Community Outreach", href: "/programs/outreach" },
] as const;

export const FOOTER_ORG = [
  { label: "About TAF", href: "/about" },
  { label: "Our Team", href: "/about#team" },
  { label: "Impact & Stories", href: "/impact" },
  { label: "Events", href: "/events" },
  { label: "News & Blog", href: "/news" },
  { label: "Partners", href: "/about#partners" },
  { label: "Volunteer", href: "/get-involved" },
] as const;

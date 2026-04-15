export const contact = {
  email: "me@yanalshoubaki.com",
  /** E.164 for tel: links */
  phoneE164: "+962797452261",
  phoneLabel: "+962 7 9745 2261",
} as const;

export type FeaturedHighlight = {
  title: string;
  description: string;
  href: string;
  /** Short label for the card footer */
  domain: string;
  accent: "slate" | "indigo" | "emerald" | "amber" | "rose";
};

export const featuredHighlights: FeaturedHighlight[] = [
  {
    title: "HRSD public portal",
    description:
      "Multilingual government portal with a component-first layout builder, Next.js App Router, and a reusable three-tier starter kit.",
    href: "https://hrsd.gov.sa",
    domain: "hrsd.gov.sa",
    accent: "indigo",
  },
  {
    title: "Saudi Center for Organ Transplantation",
    description:
      "Led the portal revamp with Next.js, coordinated delivery with the service team, and established a process for ongoing product updates.",
    href: "https://scot.gov.sa",
    domain: "scot.gov.sa",
    accent: "emerald",
  },
  {
    title: "King Abdul Aziz Arabian Horse Center",
    description:
      "Front-end delivery for a national equestrian platform, working closely with backend to ship a cohesive experience.",
    href: "https://kaahc.gov.sa",
    domain: "kaahc.gov.sa",
    accent: "amber",
  },
  {
    title: "Diriyah Art Futures",
    description:
      "Ministry of Culture initiative — UI implementation and cross-team support for a polished public-facing experience.",
    href: "https://daf.moc.gov.sa",
    domain: "daf.moc.gov.sa",
    accent: "rose",
  },
  {
    title: "Redwan Book Library",
    description:
      "REST APIs and an admin dashboard for a publishing partner, powering the public web app.",
    href: "https://redwanpublisher.com",
    domain: "redwanpublisher.com",
    accent: "slate",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Sr. Frontend Engineer",
    company: "Almosafer",
    location: "Amman",
    period: "Dec 2024 – Present",
    current: true,
    points: [
      "Dashboards and analytics for the support organization.",
      "Operational tooling so agents can resolve issues quickly.",
      "Technical review of proposed solutions.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Sprintive",
    location: "Amman",
    period: "May 2022 – Nov 2024",
    points: [
      "End-to-end delivery with a focus on scalability and performance.",
      "Collaboration on interfaces and architecture across teams.",
      "Translated requirements into robust technical designs.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Next Stage Software & Marketing",
    location: "Amman",
    period: "Feb 2022 – Apr 2022",
    points: [
      "Feature work aligned with client and operational needs.",
      "Integrated front-end with backend services and maintained databases.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Merwas",
    location: "Amman",
    period: "Sep 2021 – Nov 2021",
    points: [
      "Shipped enhancements and integrations for client applications.",
      "Database and API work to keep responses fast and reliable.",
    ],
  },
];

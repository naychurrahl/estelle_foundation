// Frontend-only content store: localStorage-backed, seeded with today's
// hardcoded homepage copy. Every public component reads through here
// instead of a local const, so admin edits show up live. Icon fields are
// string names (see ./icons.ts), not component references, so this is
// plain JSON all the way down - this is the seam a real backend/API
// replaces later.

export type HeroCta = { label: string; to?: string; href?: string };

export type HeroSlideContent = {
  image: string;
  heading: string;
  body: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
};

export type StatItem = { value: string; label: string };

export type ProgramItem = {
  icon: string;
  title: string;
  description: string;
  image: string;
};

export type FuturePlanItem = {
  icon: string;
  title: string;
  description: string;
  href?: string;
};

export type SponsorshipTier = {
  name: string;
  amount: string;
  icon: string;
  benefits: string[];
};

export type SponsorshipPanelContent = {
  paragraphs: string[];
  tiers: SponsorshipTier[];
  ctaLabel: string;
  ctaLink: string;
};

export type TestimonialItem = {
  name: string;
  role: string;
  content: string;
  image: string;
};

export type PartnerItem = { name: string; logo: string };

export type AboutBriefContent = {
  heading: string;
  paragraphs: string[];
  image: string;
  ctaLabel: string;
  ctaLink: string;
};

export type SocialLink = {
  platform: "instagram" | "tiktok" | "x";
  handle: string;
  href: string;
};

export type FooterContent = {
  tagline: string;
  address: string;
  phones: string[];
  email: string;
  quickLinks: { label: string; href: string }[];
  social: SocialLink[];
  copyrightName: string;
};

export type SiteContent = {
  heroSlides: HeroSlideContent[];
  stats: StatItem[];
  programs: ProgramItem[];
  futurePlans: FuturePlanItem[];
  sponsorshipPanel: SponsorshipPanelContent;
  testimonials: TestimonialItem[];
  partners: PartnerItem[];
  aboutBrief: AboutBriefContent;
  footer: FooterContent;
};

export const defaultSiteContent: SiteContent = {
  heroSlides: [
    {
      image:
        "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3ODAyMjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      heading: "Keep A Child in School: Empowering Futures Through Education.",
      body: "Join us in making a lasting impact through education, empowerment, and sustainable development initiatives.",
      primaryCta: { label: "Get Involved", to: "/contact" },
      secondaryCta: { label: "Learn More", href: "#abt" },
    },
    {
      image:
        "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3ODAyMjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      heading: "Adopt a Future",
      body: "Heart touchin tagline",
      primaryCta: { label: "Get Involved", to: "/adopt-a-future" },
    },
  ],
  stats: [
    { value: "2K+", label: "Students Reached" },
    { value: "50+", label: "Schools Reached" },
    { value: "50+", label: "Volunteers" },
    { value: "3+", label: "Years of Impact" },
  ],
  programs: [
    {
      icon: "GraduationCap",
      title: "Scholarship Program",
      description:
        "An annual scholarship initiative aimed at covering tuition and exam fees for underprivileged children at various educational stages (SSCE, JAMB, tertiary education).",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc4MDM3MjkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: "Heart",
      title: "Special Needs Education Fund",
      description:
        "An annual fund dedicated to supporting children with disabilities and special needs through the provision of special learning resources and adaptive technologies.",
      image:
        "https://images.unsplash.com/photo-1674574124567-79b2ee3d22fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZnVuZHJhaXNpbmclMjBldmVudHxlbnwxfHx8fDE3ODAyMzM4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: "TreePine",
      title: "Advocacy & Awareness Campaigns",
      description:
        "Yearly campaigns aligned with International Days such as International Girl Child Day and Suicide Prevention Day, focused on raising awareness about the importance of education and mental health.",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwY29uc2VydmF0aW9uJTIwbmF0dXJlfGVufDF8fHx8MTc4MDI4MzgzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: "Users",
      title: "Community Educational Outreach",
      description:
        "Annual community engagement events such as book donation drives, seminars for parents on child education, and career mentorship programs for youth.",
      image:
        "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHNwb3J0cyUyMGFjdGl2aXR5fGVufDF8fHx8MTc4MDM4Mzk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  futurePlans: [
    {
      icon: "Target",
      title: "Expansion of Educational Support",
      description:
        "As Estelle Education Foundation continues to grow,the goal is to increase the number of children we sponsor through school, especially in higher education, by providing university scholarships.",
    },
    {
      icon: "Lightbulb",
      title: "Establishing Learning Centers",
      description:
        "Setting up learnin gcenters in underprivileged areas that will offer after-school programs, special needs education, and access to learning materials",
    },
    {
      icon: "Rocket",
      title: "Digital Education",
      description:
        "Providing access to online learning platforms, ensuring that children in rural and urban areas can receive digital literacy training",
    },
    {
      icon: "Users",
      title: "Strategic Partnerships",
      description:
        "Collaborating with local and international organisations to widen our reach and provide more comprehensive support for children’s education and welfare",
    },
    {
      icon: "Target",
      title: "The Girl Rescript Initiative",
      description:
        "Reintegrating girls who dropped out of school due to early marriage or teenage pregnancy back into the economic system by identifying, training, and empowering them through vocational skills and enterprise support",
    },
    {
      icon: "Target",
      title: "Adopt a Future Program",
      description:
        "Connecting less privileged children with sponsors who commit to funding their secondary education, including school fees, books, and essentials, while receiving regular academic reports and progress updates from the Foundation",
      href: "/adopt-a-future",
    },
    {
      icon: "Target",
      title: "Guardian Legacy Initiative",
      description:
        "Establishing a secure trust fund system where parents entrust the Foundation with their children’s educational future, ensuring continuous school support, representation, and care; even in their absence.",
    },
  ],
  sponsorshipPanel: {
    paragraphs: [
      "At Estelle Education Foundation, we believe that real change is driven by collective effort, and through sponsorship, you become a key player in shaping the future of countless children. Your support enables us to continue our mission of providing education to those who need it most. But as a sponsor, you don't just contribute; you gain significant benefits in return.",
      "By partnering with Estelle Education Foundation, your organization aligns itself with a powerful cause, ensuring access to education for underprivileged and special-needs children. This partnership offers a unique opportunity to enhance your brand's image and demonstrate your commitment to making a tangible social impact. Your contribution will be recognized across various platforms, from our official website to social media channels, showcasing your dedication to Corporate Social Responsibility (CSR).",
      "Additionally, sponsorship with Estelle Education Foundation provides a strong networking platform. Our exclusive events, including annual galas, school outreach programs, and community engagements, offer a space for sponsors to connect with other like-minded philanthropists, education leaders, and government officials. By attending these events, you can create new relationships that could benefit your organization in the long term.",
      "Ultimately, becoming a sponsor means that you are directly contributing to transforming lives. Your investment will help break the cycle of poverty, uplift children with special needs, and create a future where education is available to every child, regardless of their circumstances. By joining hands with Estelle Education Foundation, you're not just funding an organization, you're building a legacy of change and hope for generations to come.",
    ],
    tiers: [
      {
        name: "One Child",
        amount: "₦5,000",
        icon: "HandHeart",
        benefits: ["Monthly newsletter"],
      },
      {
        name: "Five Children",
        amount: "₦25,000",
        icon: "Gift",
        benefits: [
          "All Friend benefits",
          "Invitation to annual events",
          "Tax benefits",
          "Sponsor a child's education",
        ],
      },
      {
        name: "Classroom Hero",
        amount: "₦50,000",
        icon: "Gift",
        benefits: [
          "All Friend benefits",
          "Invitation to annual events",
          "Tax benefits",
          "Sponsor a child's education",
        ],
      },
      {
        name: "Legacy Partner",
        amount: "₦100,000+",
        icon: "DollarSign",
        benefits: [
          "All Supporter benefits",
          "Direct project updates",
          "Meeting with team members",
          "Personalized impact story",
        ],
      },
    ],
    ctaLabel: "Start Sponsoring Today",
    ctaLink: "/contact",
  },
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Volunteer Coordinator",
      content:
        "Being part of Estelle Education Foundation has been life-changing. Seeing the direct impact we make in people's lives drives me to do more every day.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Program Beneficiary",
      content:
        "The education program gave me opportunities I never thought possible. Today, I'm pursuing my dream of becoming an engineer, thanks to their support.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      name: "Priya Patel",
      role: "Corporate Sponsor",
      content:
        "Partnering with Estelle Education Foundation aligns perfectly with our values. Their transparency and measurable impact make them an ideal organization to support.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
  ],
  partners: [
    { name: "Global Foundation", logo: "GF" },
    { name: "Education First", logo: "EF" },
    { name: "Health Alliance", logo: "HA" },
    { name: "Green Earth", logo: "GE" },
    { name: "Youth Empowerment", logo: "YE" },
    { name: "Tech for Good", logo: "TG" },
  ],
  aboutBrief: {
    heading: "Growing Minds, Strengthening Communities.",
    paragraphs: [
      "Estelle Education Foundation was founded in September 2022 with a clear vision: to empower children and young people through education, personal development, and inclusive opportunities that unlock their full potential.",
      "Our mission is to bridge the gap between potential and access by providing educational support, life skills, and development programs for children and young people across diverse backgrounds. We are committed to inclusivity; supporting those with limited access to resources while also creating growth opportunities for individuals seeking personal and professional advancement.",
    ],
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzgwMjMzODgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ctaLabel: "Discover Our Story",
    ctaLink: "/about",
  },
  footer: {
    tagline: "Growing Minds, Strengthening Communities.",
    address: "Ilorin, Kwara State.",
    phones: ["+234 817 055 3328", "+234 816 486 9895", "+234 810 035 9717"],
    email: "theestellefoundation@gmail.com",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Adopt-a-Future", href: "/adopt-a-future" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
    social: [
      {
        platform: "instagram",
        handle: "@theestellefoundation",
        href: "https://instagram.com",
      },
      {
        platform: "tiktok",
        handle: "@theestellefoundation",
        href: "https://tiktok.com",
      },
      {
        platform: "x",
        handle: "@_eefoundation",
        href: "https://x.com",
      },
    ],
    copyrightName: "Estelle Education Foundation",
  },
};

const STORAGE_KEY = "estelle-site-content";

function readStoredContent(): Partial<SiteContent> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getSiteContent(): SiteContent {
  return { ...defaultSiteContent, ...readStoredContent() };
}

export function setSiteContent<K extends keyof SiteContent>(
  key: K,
  value: SiteContent[K],
): void {
  const current = getSiteContent();
  const next = { ...current, [key]: value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function resetSiteContentSection<K extends keyof SiteContent>(
  key: K,
): void {
  setSiteContent(key, defaultSiteContent[key]);
}

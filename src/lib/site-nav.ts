export type SiteNavChildItem = {
  id: string;
  href: string;
  label: string;
  section?: SiteNavChildSectionId;
};

export type SiteNavItem = {
  id: string;
  href: string;
  label: string;
  children?: SiteNavChildItem[];
};

export type SiteQuickAction = {
  hotkey: string;
  href: string;
  label: string;
  variant: "ghost" | "light";
  className: string;
};

export type SiteDrawerCtaAction = {
  hotkey: string;
  href: string;
  label: string;
};

export type SiteTintedPaths = {
  exact: string[];
  prefix: string[];
};

export const SITE_NAV_CHILD_SECTIONS = [
  { id: "lost-revenue", label: "Lost revenue" },
  { id: "lack-of-visibility", label: "Lack of visibility" },
  { id: "prospecting", label: "Slow prospecting" },
] as const;

export type SiteNavChildSectionId =
  (typeof SITE_NAV_CHILD_SECTIONS)[number]["id"];

export const SITE_NAV_ITEMS = [
  { id: "about", href: "/about", label: "About us" },
  { id: "careers", href: "/careers", label: "Careers" },
  {
    id: "challenges",
    href: "/challenges",
    label: "Challenges",
    children: [
      {
        id: "proactive",
        href: "/challenges/practive",
        label: "Important accounts aren't managed proactively",
        section: "lost-revenue",
      },
      {
        id: "bundle",
        href: "/challenges/bundle",
        label: "Opportunities to bundle multiple offerings are missed",
        section: "lost-revenue",
      },
      {
        id: "updates",
        href: "/challenges/updates",
        label: "Updates rarely reflect what’s really happening ",
        section: "lack-of-visibility",
      },
      {
        id: "reports",
        href: "/challenges/reports",
        label: "Reporting means running after manual updates",
        section: "lack-of-visibility",
      },
      {
        id: "multiple",
        href: "/challenges/multiple",
        label: "Multiple sellers approach the same client",
        section: "prospecting",
      },
      {
        id: "radar",
        href: "/challenges/radar",
        label: "Many of the best prospects aren’t on your radar at all",
        section: "prospecting",
      },
    ],
  },
] satisfies SiteNavItem[];

export const SITE_QUICK_ACTIONS = [
  {
    hotkey: "l",
    href: "/login",
    label: "Login",
    variant: "ghost",
    className: "rounded-sm text-sm scale-[0.92] text-secondary-foreground",
  },
  {
    hotkey: "j",
    href: "/waitlist",
    label: "Join waitlist",
    variant: "light",
    className: "rounded-sm text-sm scale-[0.92]",
  },
] satisfies SiteQuickAction[];

export const SITE_DRAWER_CTA_ACTION = {
  hotkey: "j",
  href: "/waitlist",
  label: "Join waitlist",
} satisfies SiteDrawerCtaAction;

export const SITE_TINTED_PATHS = {
  exact: ["/", "/legal"],
  prefix: ["/legal/"],
} satisfies SiteTintedPaths;

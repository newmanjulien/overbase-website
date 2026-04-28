import {
  INDUSTRY_NAV_SECTIONS,
  getIndustryNavItems,
  type IndustryNavSectionId,
} from "@/content/industries/definitions";

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

export const SITE_NAV_CHILD_SECTIONS = INDUSTRY_NAV_SECTIONS;

export type SiteNavChildSectionId = IndustryNavSectionId;

const INDUSTRIES_NAV_ITEM = {
  id: "industries",
  href: "/industries",
  label: "Industries",
  children: getIndustryNavItems(),
} satisfies SiteNavItem;

const NAV_ITEM_REGISTRY = {
  about: { id: "about", href: "/about", label: "About us" },
  careers: { id: "careers", href: "/careers", label: "Careers" },
  contact: { id: "contact", href: "/contact", label: "Contact" },
  industries: INDUSTRIES_NAV_ITEM,
} satisfies Record<string, SiteNavItem>;

const HEADER_NAV_ITEM_IDS = [
  "about",
  "careers",
  "contact",
] as const satisfies readonly (keyof typeof NAV_ITEM_REGISTRY)[];

export const SITE_NAV_ITEMS = HEADER_NAV_ITEM_IDS.map(
  (id) => NAV_ITEM_REGISTRY[id],
);

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

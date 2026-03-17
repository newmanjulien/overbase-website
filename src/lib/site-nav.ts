export type SiteNavItem = {
  id: string;
  href: string;
  label: string;
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

export const SITE_NAV_ITEMS = [
  { id: "how-it-works", href: "/how-it-works", label: "How it works" },
  { id: "careers", href: "/careers", label: "Careers" },
  { id: "pricing", href: "/pricing", label: "Pricing" },
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

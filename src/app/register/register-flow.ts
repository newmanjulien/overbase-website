import type { Metadata } from "next";

import type { RegisterFlowLayoutProps } from "@/components/layouts/register-flow-layout";

export const REGISTER_START_STEP = "start" as const;

type RegisterStepContent = Omit<
  RegisterFlowLayoutProps,
  "returnHref" | "returnLabel" | "submitHref"
>;

type RegisterStepDefinition = {
  content: RegisterStepContent;
  metadata: Metadata;
  slug: string;
};

export const REGISTER_STEPS = [
  {
    slug: REGISTER_START_STEP,
    metadata: {
      title: "Register | Overbase",
      description: "Register for Overbase with your work email.",
    },
    content: {
      ariaLabel: "Register",
      fields: [
        {
          autoComplete: "name",
          label: "Full name",
          name: "fullName",
        },
        {
          autoComplete: "email",
          label: "Work email",
          name: "email",
          type: "email",
        },
        {
          autoComplete: "organization-title",
          label: "Industry you work in",
          name: "industry",
        },
      ],
      quote: {
        authorName: "Morgan Reed",
        authorTitle: "VP Revenue, Northstar Labs",
        avatarSrc: "/fred.png",
        text: "Overbase turns partner context into a clear path to the accounts worth moving on.",
      },
      showLegalFooter: true,
      showSubmitHotkey: true,
      submitLabel: "Continue",
      title: "Welcome to Overbase",
    },
  },
  {
    slug: "demo",
    metadata: {
      title: "Request a Demo | Overbase",
      description: "Request a demo of Overbase for your team.",
    },
    content: {
      ariaLabel: "Request a demo",
      fields: [
        {
          autoComplete: "name",
          label: "Full name",
          name: "fullName",
        },
        {
          autoComplete: "email",
          label: "Work email",
          name: "email",
          type: "email",
        },
        {
          autoComplete: "organization",
          label: "Company",
          name: "company",
        },
        {
          label: "Team size",
          name: "teamSize",
        },
      ],
      quote: {
        authorName: "Avery Stone",
        authorTitle: "Head of Partnerships, Meridian Group",
        avatarSrc: "/fred.png",
        text: "The team finally has one place to see which relationships matter and what to do next.",
      },
      submitLabel: "Request demo",
      subtitle:
        "Tell us a bit about your team and we will follow up with the right next step.",
      title: "See Overbase in action",
    },
  },
  {
    slug: "success",
    metadata: {
      title: "Success | Overbase",
      description: "Your Overbase request has been received.",
    },
    content: {
      ariaLabel: "Success",
      fields: [],
      quote: {
        authorName: "Jordan Lee",
        authorTitle: "Chief Revenue Officer, Atlas Works",
        avatarSrc: "/fred.png",
        text: "Overbase made it obvious where our partner network could create real pipeline instead of noise.",
      },
      showReturnLink: false,
      submitLabel: "Return home",
      subtitle:
        "We have what we need for now. The team will follow up with the right next step.",
      title: "You're all set",
    },
  },
] as const satisfies readonly RegisterStepDefinition[];

export type RegisterStepSlug = (typeof REGISTER_STEPS)[number]["slug"];

export type RegisterStep = (typeof REGISTER_STEPS)[number];

export function getRegisterStepSlugs(): RegisterStepSlug[] {
  return REGISTER_STEPS.map((step) => step.slug);
}

export function getRegisterDynamicStepStaticParams() {
  return getRegisterStepSlugs()
    .filter((step) => step !== REGISTER_START_STEP)
    .map((step) => ({ step }));
}

export function getRegisterStep(slug: string): RegisterStep | null {
  return REGISTER_STEPS.find((step) => step.slug === slug) ?? null;
}

export function getRegisterStartStep() {
  const step = getRegisterStep(REGISTER_START_STEP);

  if (!step) {
    throw new Error("Register start step is missing.");
  }

  return step;
}

export function getRegisterStepHref(slug: RegisterStepSlug) {
  return slug === REGISTER_START_STEP ? "/register" : `/register/${slug}`;
}

export function getRegisterStepNavigation(slug: RegisterStepSlug) {
  const slugs = getRegisterStepSlugs();
  const stepIndex = slugs.indexOf(slug);

  if (stepIndex === -1) {
    throw new Error(`Unknown register step "${slug}".`);
  }

  const previousSlug = slugs[stepIndex - 1];
  const nextSlug = slugs[stepIndex + 1];

  return {
    returnHref: previousSlug
      ? getRegisterStepHref(previousSlug)
      : "/",
    submitHref: nextSlug ? getRegisterStepHref(nextSlug) : "/",
  };
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { RegisterPatternLayer } from "./pattern-layer";
import { RegisterQuotePanel } from "./quote-panel";
import { RegisterSubmitButton } from "./submit-button";

export type RegisterFlowField = {
  autoComplete?: string;
  id?: string;
  inputMode?: "email" | "numeric" | "search" | "tel" | "text" | "url";
  label: string;
  name: string;
  placeholder?: string;
  type?: "email" | "number" | "password" | "tel" | "text" | "url";
};

export type RegisterFlowQuote = {
  authorName: string;
  authorTitle: string;
  avatarAlt?: string;
  avatarSrc: string;
  text: string;
};

export type RegisterFlowLayoutProps = {
  ariaLabel: string;
  fields: RegisterFlowField[];
  quote: RegisterFlowQuote;
  returnHref?: string;
  returnLabel?: string;
  showLegalFooter?: boolean;
  showReturnLink?: boolean;
  showSubmitHotkey?: boolean;
  submitHotkey?: string;
  submitHotkeyLabel?: string;
  submitHref: string;
  submitLabel: string;
  subtitle?: string;
  title: string;
};

const pageClass =
  "relative min-h-dvh overflow-auto bg-[#f7f7f7] p-0 text-[#202124] sm:p-2 lg:overflow-hidden";

const shellClass =
  "relative z-[1] block min-h-dvh sm:min-h-[calc(100dvh-16px)] lg:grid lg:grid-cols-[minmax(0,50.2%)_minmax(0,1fr)]";

const cardClass =
  "box-border flex min-h-dvh flex-col bg-white px-6 pt-12 pb-8 sm:min-h-[calc(100dvh-16px)] sm:rounded-[10px] sm:border sm:border-black/[0.04] lg:px-[clamp(40px,8.55vw,248px)] lg:pt-[clamp(56px,8.6vh,138px)] lg:pb-7";

const returnLinkClass =
  "inline-flex w-fit items-center gap-2.5 text-sm font-medium leading-none text-[#666a70] no-underline transition-colors hover:text-[#202124] max-lg:ml-[max(0px,calc((100%-480px)/2))]";

const formClass = "m-auto w-full max-w-[480px]";

const titleClass =
  "m-0 text-center text-[32px] font-medium leading-[1.08] tracking-[-0.02em] text-[#202124] sm:text-[clamp(28px,1.85vw,36px)]";

const subtitleClass =
  "mx-auto mt-3.5 max-w-[400px] text-center text-sm font-medium leading-[1.45] text-[#777b82]";

const fieldStackClass =
  "mt-[clamp(32px,4.8vh,64px)] grid gap-3.5";

const fieldStackWithSubtitleClass = "mt-[clamp(26px,4vh,52px)] grid gap-3.5";

const inputClass =
  "h-[42px] w-full box-border rounded-lg border border-[#e2e3e6] bg-white px-3.5 text-sm leading-none text-[#202124] outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-[#8f9297] focus:border-[#1296f7] focus:shadow-[0_0_0_2px_#1296f7]";

const footerClass =
  "mx-auto mt-0 flex w-full max-w-[480px] items-center justify-between gap-6 border-t border-[#eeeeee] pt-7";

const footerLinksClass =
  "flex flex-wrap items-center gap-x-[18px] gap-y-3 [&_a]:text-sm [&_a]:font-medium [&_a]:leading-none [&_a]:text-[#666a70] [&_a]:no-underline [&_a]:transition-colors [&_a:hover]:text-[#202124]";

export function RegisterFlowLayout({
  ariaLabel,
  fields,
  quote,
  returnHref,
  returnLabel = "Return",
  showLegalFooter = false,
  showReturnLink = true,
  submitHref,
  submitHotkey = "Enter",
  submitHotkeyLabel = "return",
  submitLabel,
  showSubmitHotkey = false,
  subtitle,
  title,
}: RegisterFlowLayoutProps) {
  const router = useRouter();

  return (
    <main className={pageClass}>
      <RegisterPatternLayer />

      <div className={shellClass}>
        <section className={cardClass} aria-label={ariaLabel}>
          {showReturnLink && returnHref ? (
            <Link href={returnHref} className={returnLinkClass}>
              <ArrowLeft aria-hidden="true" className="size-3.5 stroke-[1.8]" />
              <span>{returnLabel}</span>
            </Link>
          ) : null}

          <form
            className={formClass}
            onSubmit={(event) => {
              event.preventDefault();
              router.push(submitHref);
            }}
          >
            <h1 className={titleClass}>{title}</h1>
            {subtitle ? <p className={subtitleClass}>{subtitle}</p> : null}

            <div
              className={
                subtitle ? fieldStackWithSubtitleClass : fieldStackClass
              }
            >
              {fields.map((field) => {
                const id = field.id ?? field.name;

                return (
                  <div key={field.name} className="min-w-0">
                    <label htmlFor={id} className="sr-only">
                      {field.label}
                    </label>
                    <input
                      id={id}
                      name={field.name}
                      type={field.type ?? "text"}
                      placeholder={field.placeholder ?? field.label}
                      autoComplete={field.autoComplete}
                      inputMode={field.inputMode}
                      className={inputClass}
                    />
                  </div>
                );
              })}

              <RegisterSubmitButton
                hotkey={submitHotkey}
                hotkeyLabel={submitHotkeyLabel}
                label={submitLabel}
                showHotkey={showSubmitHotkey}
              />
            </div>
          </form>

          {showLegalFooter ? (
            <footer className={footerClass}>
              <nav
                aria-label={`${ariaLabel} footer`}
                className={footerLinksClass}
              >
                <Link href="/legal/terms-of-service">Terms of Service</Link>
                <Link href="/legal/dpa">Privacy Policy</Link>
                <Link href="/contact">Support</Link>
              </nav>
            </footer>
          ) : null}
        </section>

        <RegisterQuotePanel quote={quote} />
      </div>
    </main>
  );
}

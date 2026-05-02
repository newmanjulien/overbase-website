"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { quoteFont } from "@/app/fonts";

import styles from "./register.module.css";

export default function Register() {
  return (
    <main className={styles.page}>
      <PatternLayer />

      <div className={styles.shell}>
        <section className={styles.card} aria-label="Register">
          <Link href="/" className={styles.returnLink}>
            <ArrowLeft aria-hidden="true" className={styles.returnIcon} />
            <span>Return</span>
          </Link>

          <form
            className={styles.form}
            onSubmit={(event) => event.preventDefault()}
          >
            <h1 className={styles.title}>Welcome to Overbase</h1>

            <div className={styles.fieldStack}>
              <label htmlFor="work-email" className={styles.srOnly}>
                Work email
              </label>
              <input
                id="work-email"
                name="email"
                type="email"
                placeholder="Work email"
                autoComplete="email"
                className={styles.input}
              />

              <button type="submit" className={styles.submitButton}>
                <span>Continue</span>
                <span aria-hidden="true" className={styles.returnBadge}>
                  return
                </span>
              </button>
            </div>
          </form>

          <footer className={styles.footer}>
            <nav aria-label="Register footer" className={styles.footerLinks}>
              <Link href="/legal/terms-of-service">Terms of Service</Link>
              <Link href="/legal/dpa">Privacy Policy</Link>
              <Link href="/contact">Support</Link>
            </nav>

            <FooterMark />
          </footer>
        </section>

        <aside className={styles.quoteArea} aria-label="Customer quote">
          <QuoteLines />

          <div className={styles.quoteWrap}>
            <blockquote className={`${quoteFont.className} ${styles.quote}`}>
              “Overbase turns partner context into a clear path to the accounts
              worth moving on.”
            </blockquote>

            <div className={styles.author}>
              <div className={styles.avatar}>
                <Image
                  src="/fred.png"
                  alt="Morgan Reed"
                  fill
                  sizes="56px"
                  className={styles.avatarImage}
                />
              </div>
              <div>
                <p className={styles.authorName}>Morgan Reed</p>
                <p className={styles.authorTitle}>VP Revenue, Northstar Labs</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function PatternLayer() {
  return (
    <div className={styles.patternLayer} aria-hidden="true">
      <svg
        className={styles.patternSvg}
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="register-light-grid"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <rect width="2" height="2" rx="0.32" fill="#bfbfbf" opacity="0.14" />
          </pattern>

          <pattern
            id="register-mid-grid"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <rect width="2" height="2" rx="0.32" fill="#b2b2b2" opacity="0.48" />
          </pattern>

          <pattern
            id="register-dark-grid"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <rect width="2" height="2" rx="0.32" fill="#a5a5a5" opacity="0.68" />
          </pattern>

          <radialGradient
            id="register-patch-a"
            cx="0.18"
            cy="0.12"
            r="0.38"
          >
            <stop offset="0" stopColor="white" stopOpacity="1" />
            <stop offset="0.52" stopColor="white" stopOpacity="0.48" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <radialGradient
            id="register-patch-b"
            cx="0.66"
            cy="0.23"
            r="0.34"
          >
            <stop offset="0" stopColor="white" stopOpacity="0.92" />
            <stop offset="0.54" stopColor="white" stopOpacity="0.42" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <radialGradient
            id="register-patch-c"
            cx="0.28"
            cy="0.78"
            r="0.38"
          >
            <stop offset="0" stopColor="white" stopOpacity="0.9" />
            <stop offset="0.54" stopColor="white" stopOpacity="0.4" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <radialGradient
            id="register-patch-d"
            cx="0.9"
            cy="0.82"
            r="0.4"
          >
            <stop offset="0" stopColor="white" stopOpacity="0.96" />
            <stop offset="0.52" stopColor="white" stopOpacity="0.44" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <mask id="register-mask-a" maskContentUnits="objectBoundingBox">
            <rect width="1" height="1" fill="url(#register-patch-a)" />
          </mask>
          <mask id="register-mask-b" maskContentUnits="objectBoundingBox">
            <rect width="1" height="1" fill="url(#register-patch-b)" />
          </mask>
          <mask id="register-mask-c" maskContentUnits="objectBoundingBox">
            <rect width="1" height="1" fill="url(#register-patch-c)" />
          </mask>
          <mask id="register-mask-d" maskContentUnits="objectBoundingBox">
            <rect width="1" height="1" fill="url(#register-patch-d)" />
          </mask>
        </defs>

        <rect width="100%" height="100%" fill="url(#register-light-grid)" />
        <rect
          width="100%"
          height="100%"
          fill="url(#register-mid-grid)"
          mask="url(#register-mask-a)"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#register-dark-grid)"
          mask="url(#register-mask-b)"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#register-mid-grid)"
          mask="url(#register-mask-c)"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#register-dark-grid)"
          mask="url(#register-mask-d)"
        />
      </svg>
    </div>
  );
}

function QuoteLines() {
  return (
    <svg
      aria-hidden="true"
      className={styles.quoteLines}
      viewBox="0 0 1200 1200"
      preserveAspectRatio="none"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M170 0Q360 160 360 230V970Q360 1040 170 1200" />
        <path d="M0 330L150 600L0 870" />
        <path d="M1030 0Q840 160 840 230V970Q840 1040 1030 1200" />
        <path d="M1200 330L1050 600L1200 870" />
        <rect x="440" y="0" width="320" height="1200" rx="110" />
      </g>
    </svg>
  );
}

function FooterMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 44 44"
      className={styles.footerMark}
      fill="currentColor"
    >
      <rect x="16" y="0" width="8" height="8" />
      <rect x="8" y="8" width="8" height="8" />
      <rect x="24" y="8" width="8" height="8" />
      <rect x="0" y="16" width="8" height="8" />
      <rect x="16" y="16" width="8" height="8" />
      <rect x="32" y="16" width="8" height="8" />
      <rect x="8" y="24" width="8" height="8" />
      <rect x="24" y="24" width="8" height="8" />
      <rect x="16" y="32" width="8" height="8" />
    </svg>
  );
}

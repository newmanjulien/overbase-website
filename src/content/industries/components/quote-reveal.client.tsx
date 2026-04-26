"use client";

import { useEffect, useMemo, useRef, type CSSProperties } from "react";

import { quoteFont } from "@/app/fonts";
import { drawQuoteReveal } from "@/content/industries/components/quote-reveal-canvas";
import { mapRevealTimeline } from "@/content/industries/components/quote-reveal-timeline";
import { useQuoteLayout } from "@/content/industries/components/use-quote-layout";
import { useViewportProgress } from "@/content/industries/components/use-viewport-progress";

interface QuoteRevealProps {
  quote: string;
}

export function QuoteReveal({ quote }: QuoteRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const blockquoteRef = useRef<HTMLQuoteElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fullQuote = useMemo(() => `“${quote}”`, [quote]);
  const rawProgress = useViewportProgress(wrapperRef, {
    start: 0.88,
    end: 0.16,
  });
  const revealProgress = mapRevealTimeline(rawProgress, {
    hold: 0.34,
    span: 0.408,
  });
  const layout = useQuoteLayout({
    quoteRef: blockquoteRef,
    textRef,
    text: fullQuote,
  });
  const revealCount = layout
    ? Math.min(
        layout.revealableCount,
        Math.floor(revealProgress * layout.revealableCount),
      )
    : 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !layout) {
      return;
    }

    drawQuoteReveal({
      canvas,
      layout,
      revealCount,
      text: fullQuote,
    });
  }, [fullQuote, layout, revealCount]);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-xl">
      <blockquote
        ref={blockquoteRef}
        className={`${quoteFont.className} text-balance text-[1.6rem] leading-[1.15] tracking-[-0.01em] text-gray-200`}
        style={{ "--quote-reveal-ink": "rgb(3 7 18)" } as CSSProperties}
      >
        <span ref={textRef}>{fullQuote}</span>
      </blockquote>

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full"
      />
    </div>
  );
}

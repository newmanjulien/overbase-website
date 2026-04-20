"use client";

import { useLayoutEffect, useState, type RefObject } from "react";

import type { QuoteLayout, QuoteLineLayout } from "@/content/challenges/components/quote-reveal-types";

interface UseQuoteLayoutOptions {
  quoteRef: RefObject<HTMLQuoteElement | null>;
  textRef: RefObject<HTMLSpanElement | null>;
  text: string;
}

interface RevealUnit {
  startOffset: number;
  endOffset: number;
  revealIndex: number;
}

export function useQuoteLayout({
  quoteRef,
  textRef,
  text,
}: UseQuoteLayoutOptions) {
  const [layout, setLayout] = useState<QuoteLayout | null>(null);

  useLayoutEffect(() => {
    const quoteElement = quoteRef.current;
    const textElement = textRef.current;
    const textNode = textElement?.firstChild;

    if (!quoteElement || !(textNode instanceof Text)) {
      return;
    }

    let frameId = 0;

    const measure = () => {
      frameId = 0;

      const nextLayout = buildQuoteLayout({
        quoteElement,
        text,
        textNode,
      });

      setLayout(nextLayout);
    };

    const requestMeasure = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(measure);
    };

    requestMeasure();

    const resizeObserver = new ResizeObserver(requestMeasure);
    resizeObserver.observe(quoteElement);

    const fontSet = document.fonts;
    fontSet.ready.then(requestMeasure);
    fontSet.addEventListener("loadingdone", requestMeasure);

    return () => {
      resizeObserver.disconnect();
      fontSet.removeEventListener("loadingdone", requestMeasure);

      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [quoteRef, textRef, text]);

  return layout;
}

function buildQuoteLayout({
  quoteElement,
  text,
  textNode,
}: {
  quoteElement: HTMLQuoteElement;
  text: string;
  textNode: Text;
}) {
  const revealUnits = buildRevealUnits(text);
  const quoteRect = quoteElement.getBoundingClientRect();
  const style = getComputedStyle(quoteElement);
  const lineDrafts: QuoteLineDraft[] = [];
  const fullRange = document.createRange();
  const lineRange = document.createRange();

  for (const unit of revealUnits) {
    fullRange.setStart(textNode, 0);
    fullRange.setEnd(textNode, unit.endOffset);

    const rects = Array.from(fullRange.getClientRects());
    const lastRect = rects.at(-1);
    if (!lastRect) {
      continue;
    }

    const relativeTop = lastRect.top - quoteRect.top;
    const currentLine = lineDrafts.at(-1);

    if (
      !currentLine ||
      Math.abs(currentLine.y - relativeTop) > LINE_MERGE_TOLERANCE
    ) {
      const textStartOffset = lineDrafts.length === 0 ? 0 : unit.startOffset;

      lineRange.setStart(textNode, textStartOffset);
      lineRange.setEnd(textNode, unit.endOffset);

      const lineRects = Array.from(lineRange.getClientRects());
      const firstRect = lineRects[0];
      if (!firstRect) {
        continue;
      }

      lineDrafts.push({
        x: firstRect.left - quoteRect.left,
        y: firstRect.top - quoteRect.top,
        height: Math.max(...lineRects.map((rect) => rect.height)),
        textStartOffset,
        revealStart: unit.revealIndex,
        revealEndOffsets: [unit.endOffset],
      });
      continue;
    }

    currentLine.height = Math.max(currentLine.height, lastRect.height);
    currentLine.revealEndOffsets.push(unit.endOffset);
  }

  return {
    width: quoteRect.width,
    height: quoteRect.height,
    revealableCount: revealUnits.length,
    font: buildCanvasFont(style),
    letterSpacing: style.letterSpacing,
    fillStyle:
      style.getPropertyValue("--quote-reveal-ink").trim() || "rgb(3 7 18)",
    lines: lineDrafts,
  } satisfies QuoteLayout;
}

function buildCanvasFont(style: CSSStyleDeclaration) {
  const computedFont = style.getPropertyValue("font").trim();
  if (computedFont) {
    return computedFont;
  }

  return [
    style.fontStyle,
    style.fontWeight,
    style.fontSize,
    style.fontFamily,
  ]
    .filter(Boolean)
    .join(" ");
}

function buildRevealUnits(text: string) {
  const segmenter = new Intl.Segmenter(undefined, { granularity: "word" });
  const wordSegments = Array.from(segmenter.segment(text));
  const units: RevealUnit[] = [];
  let revealIndex = 0;

  for (let index = 0; index < wordSegments.length; index += 1) {
    const current = wordSegments[index];
    if (!current.isWordLike) {
      continue;
    }

    let endOffset = text.length;

    for (let nextIndex = index + 1; nextIndex < wordSegments.length; nextIndex += 1) {
      const next = wordSegments[nextIndex];

      if (next.isWordLike) {
        endOffset = next.index;
        break;
      }

      endOffset =
        nextIndex + 1 < wordSegments.length
          ? wordSegments[nextIndex + 1].index
          : text.length;
    }

    units.push({
      startOffset: current.index,
      endOffset,
      revealIndex,
    });

    revealIndex += 1;
  }

  return units;
}

type QuoteLineDraft = QuoteLineLayout;

const LINE_MERGE_TOLERANCE = 2;

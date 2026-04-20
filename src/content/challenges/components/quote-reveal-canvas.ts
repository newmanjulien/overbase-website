import type { QuoteLayout } from "@/content/challenges/components/quote-reveal-types";

interface DrawQuoteRevealOptions {
  canvas: HTMLCanvasElement;
  layout: QuoteLayout;
  revealCount: number;
  text: string;
}

export function drawQuoteReveal({
  canvas,
  layout,
  revealCount,
  text,
}: DrawQuoteRevealOptions) {
  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  const dpr = window.devicePixelRatio || 1;
  const width = Math.max(1, Math.ceil(layout.width));
  const height = Math.max(1, Math.ceil(layout.height));

  if (canvas.width !== Math.ceil(width * dpr)) {
    canvas.width = Math.ceil(width * dpr);
  }

  if (canvas.height !== Math.ceil(height * dpr)) {
    canvas.height = Math.ceil(height * dpr);
  }

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  context.setTransform(dpr, 0, 0, dpr, 0, 0);
  context.clearRect(0, 0, width, height);

  if (revealCount <= 0) {
    return;
  }

  context.font = layout.font;
  context.fillStyle = layout.fillStyle;
  context.textBaseline = "top";

  applyCanvasTypography(context, layout.letterSpacing);

  for (const line of layout.lines) {
    const lineRevealCount = clamp(
      revealCount - line.revealStart,
      0,
      line.revealEndOffsets.length,
    );

    if (lineRevealCount === 0) {
      continue;
    }

    const endOffset = line.revealEndOffsets[lineRevealCount - 1];
    const lineText = text.slice(line.textStartOffset, endOffset);
    context.fillText(lineText, line.x, line.y);
  }
}

function applyCanvasTypography(
  context: CanvasRenderingContext2D,
  letterSpacing: string,
) {
  const typographyContext = context as CanvasRenderingContext2D & {
    fontKerning?: CanvasFontKerning;
    letterSpacing?: string;
  };

  typographyContext.fontKerning = "normal";
  typographyContext.letterSpacing = letterSpacing;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

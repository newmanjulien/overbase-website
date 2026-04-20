export interface QuoteLineLayout {
  x: number;
  y: number;
  height: number;
  textStartOffset: number;
  revealStart: number;
  revealEndOffsets: number[];
}

export interface QuoteLayout {
  width: number;
  height: number;
  revealableCount: number;
  font: string;
  letterSpacing: string;
  fillStyle: string;
  lines: QuoteLineLayout[];
}

interface RevealTimelineOptions {
  hold?: number;
  span?: number;
  easing?: (value: number) => number;
}

export function mapRevealTimeline(
  rawProgress: number,
  options: RevealTimelineOptions = {},
) {
  const hold = options.hold ?? 0.46;
  const span = options.span ?? 0.4;
  const easing = options.easing ?? easeInOutCubic;
  const normalized = normalizeWindow(rawProgress, hold, hold + span);

  return easing(normalized);
}

function normalizeWindow(value: number, start: number, end: number) {
  if (end <= start) {
    return value >= end ? 1 : 0;
  }

  return clamp((value - start) / (end - start), 0, 1);
}

function easeInOutCubic(value: number) {
  if (value < 0.5) {
    return 4 * value * value * value;
  }

  return 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

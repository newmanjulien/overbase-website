export type PreviewSignalSource = {
  name: string;
  logo: string;
};

export type PreviewSignal = {
  id: string;
  title: string;
  summary: string;
  sources: PreviewSignalSource[];
};

export type SignalsExample = {
  id: string;
  signals: PreviewSignal[];
};

export type QuadrantPoint = {
  id: string;
  label: string;
  x: number;
  y: number;
  description: string;
  xPx: number;
  yPx: number;
  labelOffset: number;
  labelAnchor: "start" | "end";
  color: string;
};

export type QuadrantChartLayout = {
  dimensions: { width: number; height: number };
  plotArea: { left: number; right: number; top: number; bottom: number };
  axisLabelOffset: { x: number; y: number };
  ticks: { value: number; x: number; y: number }[];
  midLines: { x: number; y: number };
};

export type QuadrantChartData = {
  id: string;
  title: string;
  subtitle: string;
  xLabel: string;
  yLabel: string;
  xMid: number;
  yMid: number;
  disagreeThreshold: number;
  layout: QuadrantChartLayout;
  points: QuadrantPoint[];
};

type CalendarEventLayout = {
  topPx: number;
  heightPx: number;
  widthPercent: number;
  leftPercent: number;
  zIndex: number;
};

type CalendarBaseEvent = CalendarEventLayout & {
  id: string;
  title: string;
};

export type CalendarDefaultEvent = CalendarBaseEvent & {
  variant: "default";
};

export type CalendarPopoverEvent = CalendarBaseEvent & {
  variant: "popover";
};

export type CalendarEvent = CalendarDefaultEvent | CalendarPopoverEvent;

export type CalendarGraphicDay = {
  id: string;
  label: string;
  bodyHeightPx: number;
  hourLabels: string[];
  hourBoundaries: { id: string; topPx: number }[];
  events: CalendarEvent[];
};

export type SlackMessage = {
  id: string;
  userName: string;
  avatarUrl: string;
  paragraphs: string[];
};

export type SlackThread = {
  id: string;
  dayLabel: string;
  message: SlackMessage;
  composerPlaceholder: string;
};

export type SlackExample = {
  id: string;
  threads: SlackThread[];
};

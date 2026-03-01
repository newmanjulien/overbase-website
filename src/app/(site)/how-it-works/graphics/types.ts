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
};

export type QuadrantChartData = {
  id: string;
  title: string;
  subtitle: string;
  xLabel: string;
  yLabel: string;
  xMid: number;
  yMid: number;
  points: QuadrantPoint[];
};

export type CalendarEvent = {
  id: string;
  title: string;
  topPx: number;
  heightPx: number;
  widthPercent: number;
  leftPercent: number;
  zIndex: number;
  isOverlay?: boolean;
};

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

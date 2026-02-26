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
  start: number;
  end: number;
};

export type CalendarDay = {
  id: string;
  label: string;
  startHour: number;
  endHour: number;
  events: CalendarEvent[];
};

import type { QuadrantChartData } from "@/components/charts/QuadrantChart";

export const quadrantSample: QuadrantChartData = {
  id: "internal-audit-sample-quadrant",
  title: "Quadrant analysis: signal strength vs coverage",
  subtitle: "Signals grouped by impact and adoption percentile.",
  xLabel: "Percentile of signal strength",
  yLabel: "Percentile of coverage",
  xMid: 50,
  yMid: 50,
  points: [
    { id: "q1", label: "Northwind", x: 82, y: 91, color: "#111827" },
    { id: "q2", label: "Beacon", x: 67, y: 78, color: "#111827" },
    { id: "q3", label: "Horizon", x: 74, y: 58, color: "#111827" },
    { id: "q4", label: "Citrine", x: 58, y: 86, color: "#111827" },
    { id: "q5", label: "Atlas", x: 45, y: 70, color: "#6b7280" },
    { id: "q6", label: "Lattice", x: 32, y: 62, color: "#6b7280" },
    { id: "q7", label: "Mercury", x: 24, y: 38, color: "#9ca3af" },
    { id: "q8", label: "Vega", x: 18, y: 26, color: "#9ca3af" },
    { id: "q9", label: "Cascade", x: 12, y: 14, color: "#9ca3af" },
    { id: "q10", label: "Helix", x: 86, y: 42, color: "#374151" },
    { id: "q11", label: "Solstice", x: 92, y: 63, color: "#111827" },
    { id: "q12", label: "Summit", x: 52, y: 52, color: "#111827" },
  ],
};

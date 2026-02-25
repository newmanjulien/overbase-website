import type { AreaChartData } from "@/app/pricing/examples/area-chart";

export const areaChartExample: AreaChartData = {
  id: "example-area-chart",
  rangeLabel: "Jan 2027 - Jan 2031",
  xLabel: "Quarter",
  yLabel: "ACV",
  types: [
    { key: "current", label: "Current forecast", color: "#7f9fc4" },
    { key: "overbase", label: "Overbase forecast", color: "#f4b36b" },
  ],
  data: [
    {
      date: "2027-01",
      values: { current: 32000000, overbase: 29000000 },
      profitRatio: { current: 0.06, overbase: 0.03 },
    },
    {
      date: "2027-02",
      values: { current: 35333000, overbase: 32000000 },
      profitRatio: { current: 0.0533, overbase: 0.0267 },
    },
    {
      date: "2027-03",
      values: { current: 38667000, overbase: 35000000 },
      profitRatio: { current: 0.0467, overbase: 0.0233 },
    },
    {
      date: "2027-04",
      values: { current: 42000000, overbase: 38000000 },
      profitRatio: { current: 0.04, overbase: 0.02 },
    },
    {
      date: "2027-05",
      values: { current: 41000000, overbase: 40667000 },
      profitRatio: { current: 0.03, overbase: 0.0067 },
    },
    {
      date: "2027-06",
      values: { current: 40000000, overbase: 43333000 },
      profitRatio: { current: 0.02, overbase: -0.0067 },
    },
    {
      date: "2027-07",
      values: { current: 39000000, overbase: 46000000 },
      profitRatio: { current: 0.01, overbase: -0.02 },
    },
    {
      date: "2027-08",
      values: { current: 41000000, overbase: 47667000 },
      profitRatio: { current: 0.0233, overbase: -0.01 },
    },
    {
      date: "2027-09",
      values: { current: 43000000, overbase: 49333000 },
      profitRatio: { current: 0.0367, overbase: 0 },
    },
    {
      date: "2027-10",
      values: { current: 45000000, overbase: 51000000 },
      profitRatio: { current: 0.05, overbase: 0.01 },
    },
    {
      date: "2027-11",
      values: { current: 46667000, overbase: 49667000 },
      profitRatio: { current: 0.04, overbase: 0.01 },
    },
    {
      date: "2027-12",
      values: { current: 48333000, overbase: 48333000 },
      profitRatio: { current: 0.03, overbase: 0.01 },
    },
    {
      date: "2028-01",
      values: { current: 50000000, overbase: 47000000 },
      profitRatio: { current: 0.02, overbase: 0.01 },
    },
    {
      date: "2028-02",
      values: { current: 51000000, overbase: 47667000 },
      profitRatio: { current: 0.0233, overbase: 0.0133 },
    },
    {
      date: "2028-03",
      values: { current: 52000000, overbase: 48333000 },
      profitRatio: { current: 0.0267, overbase: 0.0167 },
    },
    {
      date: "2028-04",
      values: { current: 53000000, overbase: 49000000 },
      profitRatio: { current: 0.03, overbase: 0.02 },
    },
    {
      date: "2028-05",
      values: { current: 52000000, overbase: 48667000 },
      profitRatio: { current: 0.0333, overbase: 0.0233 },
    },
    {
      date: "2028-06",
      values: { current: 51000000, overbase: 48333000 },
      profitRatio: { current: 0.0367, overbase: 0.0267 },
    },
    {
      date: "2028-07",
      values: { current: 50000000, overbase: 48000000 },
      profitRatio: { current: 0.04, overbase: 0.03 },
    },
    {
      date: "2028-08",
      values: { current: 52667000, overbase: 53333000 },
      profitRatio: { current: 0.0467, overbase: 0.0267 },
    },
    {
      date: "2028-09",
      values: { current: 55333000, overbase: 58667000 },
      profitRatio: { current: 0.0533, overbase: 0.0233 },
    },
    {
      date: "2028-10",
      values: { current: 58000000, overbase: 64000000 },
      profitRatio: { current: 0.06, overbase: 0.02 },
    },
    {
      date: "2028-11",
      values: { current: 59333000, overbase: 65000000 },
      profitRatio: { current: 0.0467, overbase: 0.0167 },
    },
    {
      date: "2028-12",
      values: { current: 60667000, overbase: 66000000 },
      profitRatio: { current: 0.0333, overbase: 0.0133 },
    },
    {
      date: "2029-01",
      values: { current: 62000000, overbase: 67000000 },
      profitRatio: { current: 0.02, overbase: 0.01 },
    },
    {
      date: "2029-02",
      values: { current: 60000000, overbase: 65333000 },
      profitRatio: { current: 0.0167, overbase: 0.0033 },
    },
    {
      date: "2029-03",
      values: { current: 58000000, overbase: 63667000 },
      profitRatio: { current: 0.0133, overbase: -0.0033 },
    },
    {
      date: "2029-04",
      values: { current: 56000000, overbase: 62000000 },
      profitRatio: { current: 0.01, overbase: -0.01 },
    },
    {
      date: "2029-05",
      values: { current: 60000000, overbase: 62667000 },
      profitRatio: { current: 0.0233, overbase: 0.0033 },
    },
    {
      date: "2029-06",
      values: { current: 64000000, overbase: 63333000 },
      profitRatio: { current: 0.0367, overbase: 0.0167 },
    },
    {
      date: "2029-07",
      values: { current: 68000000, overbase: 64000000 },
      profitRatio: { current: 0.05, overbase: 0.03 },
    },
    {
      date: "2029-08",
      values: { current: 69333000, overbase: 65000000 },
      profitRatio: { current: 0.0467, overbase: 0.0267 },
    },
    {
      date: "2029-09",
      values: { current: 70667000, overbase: 66000000 },
      profitRatio: { current: 0.0433, overbase: 0.0233 },
    },
    {
      date: "2029-10",
      values: { current: 72000000, overbase: 67000000 },
      profitRatio: { current: 0.04, overbase: 0.02 },
    },
    {
      date: "2029-11",
      values: { current: 74000000, overbase: 68667000 },
      profitRatio: { current: 0.0467, overbase: 0.0233 },
    },
    {
      date: "2029-12",
      values: { current: 76000000, overbase: 70333000 },
      profitRatio: { current: 0.0533, overbase: 0.0267 },
    },
    {
      date: "2030-01",
      values: { current: 78000000, overbase: 72000000 },
      profitRatio: { current: 0.06, overbase: 0.03 },
    },
    {
      date: "2030-02",
      values: { current: 79333000, overbase: 73333000 },
      profitRatio: { current: 0.0533, overbase: 0.0267 },
    },
    {
      date: "2030-03",
      values: { current: 80667000, overbase: 74667000 },
      profitRatio: { current: 0.0467, overbase: 0.0233 },
    },
    {
      date: "2030-04",
      values: { current: 82000000, overbase: 76000000 },
      profitRatio: { current: 0.04, overbase: 0.02 },
    },
    {
      date: "2030-05",
      values: { current: 83333000, overbase: 77333000 },
      profitRatio: { current: 0.0433, overbase: 0.0233 },
    },
    {
      date: "2030-06",
      values: { current: 84667000, overbase: 78667000 },
      profitRatio: { current: 0.0467, overbase: 0.0267 },
    },
    {
      date: "2030-07",
      values: { current: 86000000, overbase: 80000000 },
      profitRatio: { current: 0.05, overbase: 0.03 },
    },
    {
      date: "2030-08",
      values: { current: 87333000, overbase: 81333000 },
      profitRatio: { current: 0.0433, overbase: 0.0233 },
    },
    {
      date: "2030-09",
      values: { current: 88667000, overbase: 82667000 },
      profitRatio: { current: 0.0367, overbase: 0.0167 },
    },
    {
      date: "2030-10",
      values: { current: 90000000, overbase: 84000000 },
      profitRatio: { current: 0.03, overbase: 0.01 },
    },
    {
      date: "2030-11",
      values: { current: 92000000, overbase: 85333000 },
      profitRatio: { current: 0.04, overbase: 0.02 },
    },
    {
      date: "2030-12",
      values: { current: 94000000, overbase: 86667000 },
      profitRatio: { current: 0.05, overbase: 0.03 },
    },
    {
      date: "2031-01",
      values: { current: 96000000, overbase: 88000000 },
      profitRatio: { current: 0.06, overbase: 0.04 },
    },
  ],
  yMax: 120000000,
};

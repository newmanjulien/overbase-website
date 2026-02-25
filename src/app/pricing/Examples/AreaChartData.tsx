import type { AreaChartData } from "@/app/pricing/Examples/AreaChart";

export const areaChartExample: AreaChartData = {
  id: "example-area-chart",
  rangeLabel: "Jan 2027 - Jan 2031",
  xLabel: "Date",
  yLabel: "ACV",
  types: [
    { key: "forecast", label: "Forecast", color: "#7f9fc4" },
    { key: "overbase", label: "Overbase Forecast", color: "#f4b36b" },
  ],
  data: [
    {
      date: "2027-01",
      values: { forecast: 12000000, overbase: 9000000 },
      profitRatio: { forecast: 0.06, overbase: 0.03 },
    },
    {
      date: "2027-02",
      values: { forecast: 15333000, overbase: 12000000 },
      profitRatio: { forecast: 0.0533, overbase: 0.0267 },
    },
    {
      date: "2027-03",
      values: { forecast: 18667000, overbase: 15000000 },
      profitRatio: { forecast: 0.0467, overbase: 0.0233 },
    },
    {
      date: "2027-04",
      values: { forecast: 22000000, overbase: 18000000 },
      profitRatio: { forecast: 0.04, overbase: 0.02 },
    },
    {
      date: "2027-05",
      values: { forecast: 21000000, overbase: 20667000 },
      profitRatio: { forecast: 0.03, overbase: 0.0067 },
    },
    {
      date: "2027-06",
      values: { forecast: 20000000, overbase: 23333000 },
      profitRatio: { forecast: 0.02, overbase: -0.0067 },
    },
    {
      date: "2027-07",
      values: { forecast: 19000000, overbase: 26000000 },
      profitRatio: { forecast: 0.01, overbase: -0.02 },
    },
    {
      date: "2027-08",
      values: { forecast: 21000000, overbase: 27667000 },
      profitRatio: { forecast: 0.0233, overbase: -0.01 },
    },
    {
      date: "2027-09",
      values: { forecast: 23000000, overbase: 29333000 },
      profitRatio: { forecast: 0.0367, overbase: 0 },
    },
    {
      date: "2027-10",
      values: { forecast: 25000000, overbase: 31000000 },
      profitRatio: { forecast: 0.05, overbase: 0.01 },
    },
    {
      date: "2027-11",
      values: { forecast: 26667000, overbase: 29667000 },
      profitRatio: { forecast: 0.04, overbase: 0.01 },
    },
    {
      date: "2027-12",
      values: { forecast: 28333000, overbase: 28333000 },
      profitRatio: { forecast: 0.03, overbase: 0.01 },
    },
    {
      date: "2028-01",
      values: { forecast: 30000000, overbase: 27000000 },
      profitRatio: { forecast: 0.02, overbase: 0.01 },
    },
    {
      date: "2028-02",
      values: { forecast: 31000000, overbase: 27667000 },
      profitRatio: { forecast: 0.0233, overbase: 0.0133 },
    },
    {
      date: "2028-03",
      values: { forecast: 32000000, overbase: 28333000 },
      profitRatio: { forecast: 0.0267, overbase: 0.0167 },
    },
    {
      date: "2028-04",
      values: { forecast: 33000000, overbase: 29000000 },
      profitRatio: { forecast: 0.03, overbase: 0.02 },
    },
    {
      date: "2028-05",
      values: { forecast: 32000000, overbase: 28667000 },
      profitRatio: { forecast: 0.0333, overbase: 0.0233 },
    },
    {
      date: "2028-06",
      values: { forecast: 31000000, overbase: 28333000 },
      profitRatio: { forecast: 0.0367, overbase: 0.0267 },
    },
    {
      date: "2028-07",
      values: { forecast: 30000000, overbase: 28000000 },
      profitRatio: { forecast: 0.04, overbase: 0.03 },
    },
    {
      date: "2028-08",
      values: { forecast: 32667000, overbase: 33333000 },
      profitRatio: { forecast: 0.0467, overbase: 0.0267 },
    },
    {
      date: "2028-09",
      values: { forecast: 35333000, overbase: 38667000 },
      profitRatio: { forecast: 0.0533, overbase: 0.0233 },
    },
    {
      date: "2028-10",
      values: { forecast: 38000000, overbase: 44000000 },
      profitRatio: { forecast: 0.06, overbase: 0.02 },
    },
    {
      date: "2028-11",
      values: { forecast: 39333000, overbase: 45000000 },
      profitRatio: { forecast: 0.0467, overbase: 0.0167 },
    },
    {
      date: "2028-12",
      values: { forecast: 40667000, overbase: 46000000 },
      profitRatio: { forecast: 0.0333, overbase: 0.0133 },
    },
    {
      date: "2029-01",
      values: { forecast: 42000000, overbase: 47000000 },
      profitRatio: { forecast: 0.02, overbase: 0.01 },
    },
    {
      date: "2029-02",
      values: { forecast: 40000000, overbase: 45333000 },
      profitRatio: { forecast: 0.0167, overbase: 0.0033 },
    },
    {
      date: "2029-03",
      values: { forecast: 38000000, overbase: 43667000 },
      profitRatio: { forecast: 0.0133, overbase: -0.0033 },
    },
    {
      date: "2029-04",
      values: { forecast: 36000000, overbase: 42000000 },
      profitRatio: { forecast: 0.01, overbase: -0.01 },
    },
    {
      date: "2029-05",
      values: { forecast: 40000000, overbase: 42667000 },
      profitRatio: { forecast: 0.0233, overbase: 0.0033 },
    },
    {
      date: "2029-06",
      values: { forecast: 44000000, overbase: 43333000 },
      profitRatio: { forecast: 0.0367, overbase: 0.0167 },
    },
    {
      date: "2029-07",
      values: { forecast: 48000000, overbase: 44000000 },
      profitRatio: { forecast: 0.05, overbase: 0.03 },
    },
    {
      date: "2029-08",
      values: { forecast: 49333000, overbase: 45000000 },
      profitRatio: { forecast: 0.0467, overbase: 0.0267 },
    },
    {
      date: "2029-09",
      values: { forecast: 50667000, overbase: 46000000 },
      profitRatio: { forecast: 0.0433, overbase: 0.0233 },
    },
    {
      date: "2029-10",
      values: { forecast: 52000000, overbase: 47000000 },
      profitRatio: { forecast: 0.04, overbase: 0.02 },
    },
    {
      date: "2029-11",
      values: { forecast: 54000000, overbase: 48667000 },
      profitRatio: { forecast: 0.0467, overbase: 0.0233 },
    },
    {
      date: "2029-12",
      values: { forecast: 56000000, overbase: 50333000 },
      profitRatio: { forecast: 0.0533, overbase: 0.0267 },
    },
    {
      date: "2030-01",
      values: { forecast: 58000000, overbase: 52000000 },
      profitRatio: { forecast: 0.06, overbase: 0.03 },
    },
    {
      date: "2030-02",
      values: { forecast: 59333000, overbase: 53333000 },
      profitRatio: { forecast: 0.0533, overbase: 0.0267 },
    },
    {
      date: "2030-03",
      values: { forecast: 60667000, overbase: 54667000 },
      profitRatio: { forecast: 0.0467, overbase: 0.0233 },
    },
    {
      date: "2030-04",
      values: { forecast: 62000000, overbase: 56000000 },
      profitRatio: { forecast: 0.04, overbase: 0.02 },
    },
    {
      date: "2030-05",
      values: { forecast: 63333000, overbase: 57333000 },
      profitRatio: { forecast: 0.0433, overbase: 0.0233 },
    },
    {
      date: "2030-06",
      values: { forecast: 64667000, overbase: 58667000 },
      profitRatio: { forecast: 0.0467, overbase: 0.0267 },
    },
    {
      date: "2030-07",
      values: { forecast: 66000000, overbase: 60000000 },
      profitRatio: { forecast: 0.05, overbase: 0.03 },
    },
    {
      date: "2030-08",
      values: { forecast: 67333000, overbase: 61333000 },
      profitRatio: { forecast: 0.0433, overbase: 0.0233 },
    },
    {
      date: "2030-09",
      values: { forecast: 68667000, overbase: 62667000 },
      profitRatio: { forecast: 0.0367, overbase: 0.0167 },
    },
    {
      date: "2030-10",
      values: { forecast: 70000000, overbase: 64000000 },
      profitRatio: { forecast: 0.03, overbase: 0.01 },
    },
    {
      date: "2030-11",
      values: { forecast: 72000000, overbase: 65333000 },
      profitRatio: { forecast: 0.04, overbase: 0.02 },
    },
    {
      date: "2030-12",
      values: { forecast: 74000000, overbase: 66667000 },
      profitRatio: { forecast: 0.05, overbase: 0.03 },
    },
    {
      date: "2031-01",
      values: { forecast: 76000000, overbase: 68000000 },
      profitRatio: { forecast: 0.06, overbase: 0.04 },
    },
  ],
  yMax: 120000000,
};

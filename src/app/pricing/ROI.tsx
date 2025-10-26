"use client";

import { useState } from "react";
import { Slider } from "../../components/ui/slider";
import { Card } from "../../components/ui/card";

export function ROICalculator() {
  const [numberOfCustomers, setNumberOfCustomers] = useState(250);
  const [averageACV, setAverageACV] = useState(100000);
  const [churnRate, setChurnRate] = useState(5);

  const lostToChurn = numberOfCustomers * averageACV * (churnRate / 100);
  const churnWithOverbase = churnRate / 2;
  const revenueWithOverbase = lostToChurn / 2;

  return (
    <div className="max-w-3xl mx-auto py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-medium text-gray-900">
          Reduce churn +50%
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          Calculate the revenue you'd get by using Overbase
        </p>
      </div>
      <Card className="p-6 md:p-9 bg-white border-1 border-gray-100 rounded-3xl shadow-none">
        <div className="space-y-10">
          {/* Number of customers slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <label className="text-gray-600">Total number of customers</label>
              <span className="font-medium text-gray-900">
                {numberOfCustomers} customers
              </span>
            </div>
            <Slider
              value={[numberOfCustomers]}
              onValueChange={(value) => setNumberOfCustomers(value[0])}
              min={50}
              max={1000}
              step={10}
              className="w-full"
            />
          </div>

          {/* ACV slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <label className="text-gray-600">
                Average ACV of your customers
              </label>
              <span className="font-medium text-gray-900">
                ${averageACV.toLocaleString("en-US")}
              </span>
            </div>
            <Slider
              value={[averageACV]}
              onValueChange={(value) => setAverageACV(value[0])}
              min={20000}
              max={900000}
              step={20000}
              className="w-full"
            />
          </div>

          {/* Churn slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <label className="text-gray-600">Current churn rate</label>
              <span className="font-medium text-gray-900">{churnRate}%</span>
            </div>
            <Slider
              value={[churnRate]}
              onValueChange={(value) => setChurnRate(value[0])}
              min={1}
              max={20}
              step={0.5}
              className="w-full"
            />
          </div>

          {/* Results */}
          <div className="pt-8 border-t-1 border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-sm text-gray-600 mb-2">
                  Currently lost to churn
                </div>
                <div className="text-2xl text-gray-900">
                  ${lostToChurn.toLocaleString("en-US")}
                </div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-sm text-gray-600 mb-2">
                  Churn with Overbase{" "}
                </div>
                <div className="text-2xl text-gray-900">
                  {churnWithOverbase}%
                </div>
              </div>

              <div className="text-center p-4 bg-gray-900 rounded-xl">
                <div className="text-sm text-gray-400 mb-2">
                  Extra revenue you'd get
                </div>
                <div className="text-2xl text-white">
                  ${revenueWithOverbase.toLocaleString("en-US")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

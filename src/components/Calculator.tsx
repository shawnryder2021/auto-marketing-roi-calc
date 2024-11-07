import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Percent, Users, Car, TrendingUp, Download } from 'lucide-react';
import { Chart } from './Chart';
import { Tips } from './Tips';

interface ROIData {
  monthlyBudget: number;
  averageLeadValue: number;
  conversionRate: number;
  numberOfLeads: number;
}

interface HistoricalData {
  date: string;
  roi: number;
}

export default function ROICalculator() {
  const [data, setData] = useState<ROIData>({
    monthlyBudget: 5000,
    averageLeadValue: 300,
    conversionRate: 15,
    numberOfLeads: 100,
  });
  const [history, setHistory] = useState<HistoricalData[]>([]);
  const [showTips, setShowTips] = useState(false);

  useEffect(() => {
    const result = calculateROI();
    const newEntry = {
      date: new Date().toISOString(),
      roi: result.roi
    };
    setHistory(prev => [...prev, newEntry].slice(-6)); // Keep last 6 months
  }, [data]);

  const calculateROI = () => {
    const revenue = (data.numberOfLeads * (data.conversionRate / 100)) * data.averageLeadValue;
    const roi = ((revenue - data.monthlyBudget) / data.monthlyBudget) * 100;
    const costPerLead = data.monthlyBudget / data.numberOfLeads;
    const projectedAnnualRevenue = revenue * 12;
    const monthlyProfit = revenue - data.monthlyBudget;
    return { revenue, roi, costPerLead, projectedAnnualRevenue, monthlyProfit };
  };

  const { revenue, roi, costPerLead, projectedAnnualRevenue, monthlyProfit } = calculateROI();

  const handleExport = () => {
    const results = {
      ...data,
      calculatedResults: {
        monthlyRevenue: revenue,
        roi,
        costPerLead,
        projectedAnnualRevenue,
        monthlyProfit
      },
      exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'roi-calculation-results.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getROIStatus = (roi: number) => {
    if (roi > 500) return 'text-green-600 bg-green-50';
    if (roi > 200) return 'text-blue-600 bg-blue-50';
    return 'text-yellow-600 bg-yellow-50';
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800">Input Your Data</h3>
              <button
                onClick={() => setShowTips(!showTips)}
                className="text-blue-600 hover:text-blue-700 flex items-center"
              >
                {showTips ? 'Hide Tips' : 'Show Tips'}
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
                  Monthly Marketing Budget
                </label>
                <input
                  type="number"
                  value={data.monthlyBudget}
                  onChange={(e) => setData({ ...data, monthlyBudget: Number(e.target.value) })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  min="0"
                />
              </div>

              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <Car className="w-5 h-5 mr-2 text-blue-600" />
                  Average Lead Value
                </label>
                <input
                  type="number"
                  value={data.averageLeadValue}
                  onChange={(e) => setData({ ...data, averageLeadValue: Number(e.target.value) })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  min="0"
                />
              </div>

              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <Percent className="w-5 h-5 mr-2 text-blue-600" />
                  Conversion Rate (%)
                </label>
                <input
                  type="number"
                  value={data.conversionRate}
                  onChange={(e) => setData({ ...data, conversionRate: Number(e.target.value) })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  min="0"
                  max="100"
                />
              </div>

              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  Number of Monthly Leads
                </label>
                <input
                  type="number"
                  value={data.numberOfLeads}
                  onChange={(e) => setData({ ...data, numberOfLeads: Number(e.target.value) })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  min="0"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Your ROI Results</h3>
              <button
                onClick={handleExport}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Export Results
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow col-span-2">
                <p className="text-gray-600">Monthly Revenue</p>
                <p className="text-3xl font-bold text-blue-600">
                  ${revenue.toLocaleString()}
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-600">Monthly Profit</p>
                <p className="text-3xl font-bold text-green-600">
                  ${monthlyProfit.toLocaleString()}
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-600">Cost per Lead</p>
                <p className="text-3xl font-bold text-purple-600">
                  ${costPerLead.toFixed(2)}
                </p>
              </div>

              <div className={`p-4 rounded-lg shadow col-span-2 ${getROIStatus(roi)}`}>
                <p className="text-gray-600">Return on Investment</p>
                <p className="text-3xl font-bold">
                  {roi.toFixed(2)}%
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow col-span-2">
                <p className="text-gray-600">Projected Annual Revenue</p>
                <p className="text-3xl font-bold text-blue-600">
                  ${projectedAnnualRevenue.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showTips && <Tips />}
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">ROI Trend Analysis</h3>
        <Chart data={history} />
      </div>
    </div>
  );
}
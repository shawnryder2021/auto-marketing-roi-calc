import React from 'react';
import { Lightbulb } from 'lucide-react';

export function Tips() {
  const tips = [
    {
      title: "Optimizing Your Marketing Budget",
      content: "Start with a conservative budget and gradually increase based on performance. Track which channels deliver the best ROI and adjust accordingly."
    },
    {
      title: "Improving Lead Quality",
      content: "Focus on targeted advertising to attract high-intent leads. Quality leads typically result in better conversion rates and higher ROI."
    },
    {
      title: "Boosting Conversion Rates",
      content: "Implement lead nurturing strategies, improve follow-up processes, and optimize your sales funnel to increase conversion rates."
    },
    {
      title: "Understanding the Numbers",
      content: "A healthy ROI in automotive digital marketing typically starts at 5:1 (500%). If you're below this, consider reviewing your strategy."
    }
  ];

  return (
    <div className="bg-blue-50 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <Lightbulb className="w-6 h-6 mr-2 text-yellow-500" />
        Pro Tips for Maximizing Your ROI
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-blue-600 mb-2">{tip.title}</h4>
            <p className="text-gray-600">{tip.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
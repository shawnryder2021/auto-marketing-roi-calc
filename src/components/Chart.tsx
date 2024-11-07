import React from 'react';
import { TrendingUp } from 'lucide-react';

interface ChartProps {
  data: Array<{
    date: string;
    roi: number;
  }>;
}

export function Chart({ data }: ChartProps) {
  if (data.length < 2) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
        <div className="text-center text-gray-500">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <p>Keep using the calculator to see ROI trends over time</p>
        </div>
      </div>
    );
  }

  const maxROI = Math.max(...data.map(d => d.roi));
  const minROI = Math.min(...data.map(d => d.roi));
  const range = maxROI - minROI;

  return (
    <div className="h-64 flex items-end space-x-2">
      {data.map((entry, index) => {
        const height = ((entry.roi - minROI) / range) * 100;
        const date = new Date(entry.date).toLocaleDateString('en-US', { month: 'short' });
        
        return (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-blue-500 rounded-t-lg transition-all duration-500"
              style={{ height: `${Math.max(height, 5)}%` }}
            >
              <div className="text-white text-center text-sm -mt-6">
                {entry.roi.toFixed(1)}%
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-2">{date}</div>
          </div>
        );
      })}
    </div>
  );
}
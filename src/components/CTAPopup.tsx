import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CTAPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000); // Show after 30 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md mx-4 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Want to Maximize Your Digital Marketing ROI?
        </h3>
        
        <p className="text-gray-600 mb-6">
          Let me help you transform your automotive digital marketing strategy with proven techniques that drive results.
        </p>

        <a
          href="https://shawnryder.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Learn More with Shawn Ryder
        </a>
      </div>
    </div>
  );
}
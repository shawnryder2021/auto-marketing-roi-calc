import React from 'react';
import { BookOpen } from 'lucide-react';

export default function MarketingGuide() {
  const topics = [
    {
      title: 'What is Digital Marketing?',
      content:
        'Digital marketing uses online channels like search engines, social media, and email to promote your dealership. It allows you to reach shoppers where they spend their time.'
    },
    {
      title: 'Key Metrics for Dealers',
      content:
        'Important metrics include cost per lead (CPL), conversion rate, and overall return on investment (ROI). Tracking these helps you understand which campaigns actually drive sales.'
    },
    {
      title: 'Popular Channels',
      content:
        'Dealers often rely on search ads, social media advertising, email marketing, and video to attract customers. A balanced strategy across channels is typically most effective.'
    },
    {
      title: 'Getting Started',
      content:
        'Start by defining your goals and budget, then test one or two channels. Measure results each month using this calculator and adjust your campaigns based on the data.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto my-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <BookOpen className="w-8 h-8 mr-3 text-blue-600" />
        Digital Marketing Basics
      </h2>
      <div className="space-y-6">
        {topics.map((topic, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{topic.title}</h3>
            <p className="text-gray-600">{topic.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

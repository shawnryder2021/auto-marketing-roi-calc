import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "How does the Automotive Digital Marketing ROI Calculator work?",
      answer: "Our calculator takes your monthly marketing budget, average lead value, conversion rate, and number of leads to compute your ROI. It provides instant insights into your marketing performance and helps you make data-driven decisions."
    },
    {
      question: "What metrics should I track for automotive digital marketing?",
      answer: "Key metrics include cost per lead, conversion rate, total revenue generated, and overall ROI. Our calculator helps you analyze all these crucial metrics in one place."
    },
    {
      question: "How often should I calculate my digital marketing ROI?",
      answer: "I recommend calculating your ROI monthly to track performance trends and make necessary adjustments to your marketing strategy. Regular monitoring helps optimize your campaigns effectively."
    },
    {
      question: "What's a good ROI for automotive digital marketing?",
      answer: "A healthy ROI typically starts at 5:1 (500%), but this can vary based on your market and business model. Our calculator helps you benchmark your performance against industry standards."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto my-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <HelpCircle className="w-8 h-8 mr-3 text-blue-600" />
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
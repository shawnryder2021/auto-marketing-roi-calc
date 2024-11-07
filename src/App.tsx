import React from 'react';
import { Calculator as CalculatorIcon, ArrowRight } from 'lucide-react';
import Calculator from './components/Calculator';
import FAQ from './components/FAQ';
import CTAPopup from './components/CTAPopup';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <CalculatorIcon className="w-8 h-8 mr-3 text-blue-600" />
              Automotive Digital Marketing ROI Calculator
            </h1>
            <a
              href="https://shawnryder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hi, I'm Shawn Ryder, and I've created this simple tool to help you measure and maximize your automotive digital marketing ROI. Just input your numbers below to get started!
          </p>
        </div>

        {/* Calculator Component */}
        <Calculator />

        {/* How to Use Section */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How to Use the Automotive Digital Marketing ROI Calculator
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p>
              Using our Automotive Digital Marketing ROI Calculator is super easy! Just follow these simple steps:
            </p>
            <ol className="list-decimal pl-6 space-y-4 mt-4">
              <li>Enter your monthly marketing budget - this is how much you spend on digital marketing</li>
              <li>Input your average lead value - how much a typical lead is worth to your dealership</li>
              <li>Add your conversion rate - the percentage of leads that become customers</li>
              <li>Put in your number of monthly leads - how many leads you get each month</li>
            </ol>
            <p className="mt-6">
              The calculator will instantly show you your monthly revenue, ROI percentage, and cost per lead. This helps you make smart decisions about your marketing spend!
            </p>
          </div>
        </section>

        {/* FAQ Component */}
        <FAQ />

        {/* Bottom CTA */}
        <div className="bg-blue-50 rounded-xl p-8 text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Digital Marketing Strategy?
          </h2>
          <p className="text-gray-600 mb-6">
            Let me help you implement these insights and boost your dealership's digital marketing performance.
          </p>
          <a
            href="https://shawnryder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Work with Shawn Ryder
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Shawn Ryder Digital Marketing. All rights reserved.</p>
        </div>
      </footer>

      {/* Popup Component */}
      <CTAPopup />
    </div>
  );
}

export default App;
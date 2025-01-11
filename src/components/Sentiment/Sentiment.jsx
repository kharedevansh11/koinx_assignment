import React from 'react';
import { FaNewspaper, FaChartLine } from 'react-icons/fa';

const KeyEvent = ({ icon, title, description, bgColor }) => (
  <div className={`${bgColor} rounded-lg p-5 min-w-[320px]`}>
    <div className="flex gap-2.5 items-start">
      <div className="p-2 bg-blue-100 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const AnalystEstimate = () => (
  <div className="flex items-center gap-8">
    <div className="flex items-center justify-center w-24 h-24 bg-green-100 rounded-full">
      <span className="text-2xl font-bold text-green-600">76%</span>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-4 mb-3">
        <span className="w-12 text-sm">Buy</span>
        <div className="flex-1 h-2 bg-gray-200 rounded-full">
          <div className="w-[76%] h-full bg-green-500 rounded-full"></div>
        </div>
        <span className="w-12 text-sm">76%</span>
      </div>
      <div className="flex items-center gap-4 mb-3">
        <span className="w-12 text-sm">Hold</span>
        <div className="flex-1 h-2 bg-gray-200 rounded-full">
          <div className="w-[8%] h-full bg-gray-500 rounded-full"></div>
        </div>
        <span className="w-12 text-sm">8%</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm">Sell</span>
        <div className="flex-1 h-2 bg-gray-200 rounded-full">
          <div className="w-[16%] h-full bg-red-500 rounded-full"></div>
        </div>
        <span className="w-12 text-sm">16%</span>
      </div>
    </div>
  </div>
);

const Sentiment = () => {
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-6">Sentiment</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Key Events</h3>
        <div className="flex gap-4 overflow-x-auto pb-4">
          <KeyEvent 
            icon={<FaNewspaper className="text-blue-600 text-xl" />}
            title="Lorem ipsum dolor sit amet consectetur"
            description="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
            bgColor="bg-blue-50"
          />
          <KeyEvent 
            icon={<FaChartLine className="text-green-600 text-xl" />}
            title="Lorem ipsum dolor sit amet consectetur"
            description="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
            bgColor="bg-green-50"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Analyst Estimates</h3>
        <AnalystEstimate />
      </div>
    </div>
  );
};

export default Sentiment; 
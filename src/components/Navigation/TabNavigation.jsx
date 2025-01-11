import React, { useState } from 'react';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const tabs = [
    'Overview',
    'Fundamentals',
    'News Insights',
    'Sentiments',
    'Team',
    'Technicals',
    'Tokenomics'
  ];

  return (
    <div className="border-b border-gray-200 mb-6">
      <div className="flex overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold whitespace-nowrap ${
              activeTab === tab.toLowerCase()
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation; 
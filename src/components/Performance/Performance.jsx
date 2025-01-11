import React from 'react';

const FundamentalRow = ({ label, value, borderBottom = true }) => (
  <div className={`flex justify-between py-3 ${borderBottom ? 'border-b border-gray-200' : ''}`}>
    <span className="text-gray-500">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const Performance = ({ low24h, high24h, currentPrice }) => {
  const percentage = ((currentPrice - low24h) / (high24h - low24h)) * 100;

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-6">Performance</h2>
      
      {/* Today's Range */}
      <div className="mb-8">
        <div className="flex justify-between mb-2 text-sm text-gray-500">
          <span>Today's Low</span>
          <span>Today's High</span>
        </div>
        <div className="relative h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full">
          <div 
            className="absolute -top-3 transform -translate-x-1/2"
            style={{ left: `${percentage}%` }}
          >
            <div className="relative">
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs">
                ${currentPrice.toLocaleString()}
              </span>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-sm font-medium">${low24h.toLocaleString()}</span>
          <span className="text-sm font-medium">${high24h.toLocaleString()}</span>
        </div>
      </div>

      {/* 52W Range */}
      <div className="mb-8">
        <div className="flex justify-between mb-2 text-sm text-gray-500">
          <span>52W Low</span>
          <span>52W High</span>
        </div>
        <div className="relative h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full">
          <div 
            className="absolute -top-3 transform -translate-x-1/2"
            style={{ left: `${percentage}%` }}
          >
            <div className="relative">
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs">
                ${currentPrice.toLocaleString()}
              </span>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-sm font-medium">$16,930.22</span>
          <span className="text-sm font-medium">$49,743.83</span>
        </div>
      </div>

      {/* Fundamentals Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Fundamentals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <FundamentalRow label="Bitcoin Price" value="$16,815.46" />
            <FundamentalRow label="24h Low / 24h High" value="$16,382.07 / $16,874.12" />
            <FundamentalRow label="7d Low / 7d High" value="$16,382.07 / $16,874.12" />
            <FundamentalRow label="Trading Volume" value="$23,249,202,782" />
            <FundamentalRow label="Market Cap Rank" value="#1" borderBottom={false} />
          </div>
          
          <div>
            <FundamentalRow label="Market Cap" value="$323,507,290,047" />
            <FundamentalRow label="Market Cap Dominance" value="38.343%" />
            <FundamentalRow label="Volume / Market Cap" value="0.0718" />
            <FundamentalRow 
              label="All-Time High" 
              value={
                <div className="text-right">
                  <div>$69,044.77 <span className="text-red-500">-75.6%</span></div>
                  <div className="text-sm text-gray-500">Nov 10, 2021 (about 1 year)</div>
                </div>
              } 
            />
            <FundamentalRow 
              label="All-Time Low" 
              value={
                <div className="text-right">
                  <div>$67.81 <span className="text-green-500">24729.1%</span></div>
                  <div className="text-sm text-gray-500">Jul 06, 2013 (over 9 years)</div>
                </div>
              }
              borderBottom={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance; 
import React from 'react';

const TradingViewChart = ({ symbol }) => {
  const timeframes = ['1H', '24H', '7D', '1M', '3M', '6M', '1Y', 'ALL'];
  
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{symbol} Price Chart (USD)</h2>
        <div className="flex gap-2">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe}
              className={`px-3 py-1 rounded-lg text-sm font-medium 
                ${timeframe === '7D' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-500 hover:bg-gray-100'}`}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-[400px] w-full">
        <iframe
          title="Trading View Chart"
          style={{
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_b4400&symbol=CRYPTO:${symbol}USD&interval=D&hidesidetoolbar=1&symboledit=0&saveimage=1&toolbarbg=F1F3F6&studies=[]&hideideas=1&theme=Light&style=1&timezone=Etc%2FUTC&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en`}
        />
      </div>
    </div>
  );
};

export default TradingViewChart; 
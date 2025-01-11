import React from 'react';
import { formatCurrency, formatPercentage } from '../../utils/formatters';

const CoinInfo = ({ coinData, coinId }) => {
  if (!coinData || !coinData[coinId]) return null;

  const data = coinData[coinId];
  const priceChangeColor = data.usd_24h_change >= 0 ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex items-center gap-4 mb-6">
        <img 
          src={`https://assets.coingecko.com/coins/images/1/small/bitcoin.png`} 
          alt={coinId}
          className="w-8 h-8"
        />
        <h1 className="text-2xl font-bold capitalize">{coinId}</h1>
        <span className="text-gray-500 font-medium">
          {coinId.toUpperCase()}/USD
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold">
          ${formatCurrency(data.usd)}
        </span>
        <span className={`${priceChangeColor} text-sm font-medium px-2 py-1 bg-opacity-10 rounded`}>
          {formatPercentage(data.usd_24h_change)}%
        </span>
      </div>

      <div className="mt-2 text-gray-500">
        ₹{formatCurrency(data.inr)}
      </div>
    </div>
  );
};

export default CoinInfo; 
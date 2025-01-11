import React from 'react';
import { Link } from 'react-router-dom';

const TrendingCoins = ({ coins }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {coins.slice(0,3).map((coin) => (
          <Link 
            key={coin.item.id}
            to={`/${coin.item.id}`}
            className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <img 
                src={coin.item.small} 
                alt={coin.item.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="font-medium">{coin.item.name}</span>
            </div>
            <div className={`text-sm font-medium ${
              coin.item.data.price_change_percentage_24h.usd >= 0 
                ? 'text-green-500' 
                : 'text-red-500'
            }`}>
              {coin.item.data.price_change_percentage_24h.usd >= 0 ? '↑' : '↓'}
              {Math.abs(coin.item.data.price_change_percentage_24h.usd).toFixed(2)}%
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins; 
import { useState, useEffect } from 'react';
import { getCoinData, getTrendingCoins } from '../services/api';

export const useCoingecko = (coinId) => {
  const [coinData, setCoinData] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [priceData, trendingData] = await Promise.all([
          getCoinData(coinId),
          getTrendingCoins()
        ]);
        
        setCoinData(priceData);
        setTrendingCoins(trendingData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [coinId]);

  return { coinData, trendingCoins, loading, error };
};

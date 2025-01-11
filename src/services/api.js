import axios from 'axios';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

export const getCoinData = async (coinId) => {
  try {
    const [priceData, detailData] = await Promise.all([
      axios.get(`${COINGECKO_API}/simple/price`, {
        params: {
          ids: coinId,
          vs_currencies: 'inr,usd',
          include_24hr_change: true,
          include_24hr_vol: true,
          include_market_cap: true,
        }
      }),
      axios.get(`${COINGECKO_API}/coins/${coinId}`, {
        params: {
          localization: false,
          tickers: false,
          market_data: true,
          community_data: false,
          developer_data: false,
          sparkline: true
        }
      })
    ]);

    return {
      ...priceData.data,
      details: detailData.data
    };
  } catch (error) {
    console.error('Error fetching coin data:', error);
    return null;
  }
};

export const getTrendingCoins = async () => {
  try {
    const response = await axios.get(`${COINGECKO_API}/search/trending`);
    return response.data.coins;
  } catch (error) {
    console.error('Error fetching trending coins:', error);
    return [];
  }
};

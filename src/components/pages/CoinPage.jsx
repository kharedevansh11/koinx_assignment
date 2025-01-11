import React from 'react';
import { useParams } from 'react-router-dom';
import { useCoingecko } from '../../hooks/useCoingecko';
import CoinInfo from '../CoinInfo/CoinInfo';
import TradingViewChart from '../TradingViewChart/TradingViewChart';
import TrendingCoins from '../TrendingCoins/TrendingCoins';
import YouMayLike from '../YouMayLike/YouMayLike';
import TabNavigation from '../Navigation/TabNavigation';
import Performance from '../Performance/Performance';
import Sentiment from '../Sentiment/Sentiment';
import About from '../About/About';
import GetStarted from '../GetStarted/GetStarted';
import Tokenomics from '../Tokenomics/Tokenomics';
import Team from '../Team/Team';

const CoinPage = () => {
  const { coinId = 'bitcoin' } = useParams();
  const { coinData, trendingCoins, loading, error } = useCoingecko(coinId);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <CoinInfo coinData={coinData} coinId={coinId} />
          <TradingViewChart symbol={coinId.toUpperCase()} />
          <TabNavigation />
          <Performance 
            low24h={46953.04}
            high24h={49343.83}
            currentPrice={48285.34}
          />
          {/* <Fundamentals data={coinData} /> */}
          <Sentiment />
          <About coinId={coinId} />
          <Tokenomics />
          <Team />
        </div>
        
        <div className="lg:w-1/3">
            <GetStarted />
          <TrendingCoins coins={trendingCoins} />
        </div>
      </div>
      
      <YouMayLike coins={trendingCoins} />
    </div>
  );
};

export default CoinPage;
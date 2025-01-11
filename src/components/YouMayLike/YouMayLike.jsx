import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const YouMayLike = ({ coins }) => {
  const formatPrice = (price) => {
    if (!price) return '$0.00';
    const priceStr = String(price);
    return priceStr.startsWith('$') ? priceStr : `$${priceStr}`;
  };

  const formatPercentage = (percentage) => {
    if (!percentage) return '0.00%';
    const value = percentage.usd || percentage;
    return value > 0 ? `+${value.toFixed(2)}%` : `${value.toFixed(2)}%`;
  };

  return (
    <>
      <div className="bg-white rounded-lg p-6 mt-8">
        <h2 className="text-xl font-bold mb-4">You May Like</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={4}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {coins?.map((coin) => (
            <SwiperSlide key={coin.item.id}>
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={coin.item.thumb} 
                    alt={coin.item.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">{coin.item.name}</h3>
                    <span className="text-sm text-gray-500">{coin.item.symbol}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">
                    {formatPrice(coin.item.data?.price)}
                  </span>
                  <span className={`text-sm ${
                    coin.item.data?.price_change_percentage_24h?.usd > 0 
                      ? 'text-green-500' 
                      : 'text-red-500'
                  }`}>
                    {formatPercentage(coin.item.data?.price_change_percentage_24h)}
                  </span>
                </div>
                <img 
                  src={coin.item.data?.sparkline} 
                  alt="Price graph"
                  className="w-full h-16 mt-2"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bg-white rounded-lg p-6 mt-8">
        <h2 className="text-xl font-bold mb-4">Trending Coins</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={5}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {coins?.map((coin) => (
            <SwiperSlide key={`trend-${coin.item.id}`}>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src={coin.item.thumb} 
                    alt={coin.item.symbol}
                    className="w-6 h-6"
                  />
                  <span className="font-medium">{coin.item.symbol}</span>
                  <span className={`text-xs ${
                    coin.item.data?.price_change_percentage_24h?.usd > 0 
                      ? 'text-green-500' 
                      : 'text-red-500'
                  }`}>
                    {formatPercentage(coin.item.data?.price_change_percentage_24h)}
                  </span>
                </div>
                <div className="font-medium mb-2">
                  {formatPrice(coin.item.data?.price)}
                </div>
                <img 
                  src={coin.item.data?.sparkline} 
                  alt="Trend graph"
                  className="w-full h-12"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default YouMayLike; 
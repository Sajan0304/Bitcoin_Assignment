import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchBitcoinData = async () => {
  const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
    params: {
      vs_currency: 'usd',
      days: '30',
      interval: 'daily'
    }
  });
  return response.data;
};

export const useBitcoinData = () => {
  return useQuery({
    queryKey: ['bitcoinData'],
    queryFn: fetchBitcoinData,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 5 * 60 * 1000, // 5 minutes
  });
};

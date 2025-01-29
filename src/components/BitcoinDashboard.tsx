import { motion } from 'framer-motion';
import { useBitcoinData } from '../hooks/useBitcoinData';
import { useBitcoinStore } from '../store/bitcoinStore';

const BitcoinDashboard = () => {
  const { data, isLoading, error } = useBitcoinData();
  const { bitcoinData, setBitcoinData } = useBitcoinStore();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          className="w-16 h-16 border-4 border-blue-500 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-xl">Error loading Bitcoin data</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-lg shadow-xl p-6"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Bitcoin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Price Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Current Price</h2>
            <p className="text-2xl font-bold text-green-400">
              ${data?.prices?.[data.prices.length - 1]?.[1]?.toFixed(2) || 'N/A'}
            </p>
          </motion.div>

          {/* Market Cap Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Market Cap</h2>
            <p className="text-2xl font-bold text-blue-400">
              ${data?.market_caps?.[data.market_caps.length - 1]?.[1]?.toLocaleString() || 'N/A'}
            </p>
          </motion.div>

          {/* Volume Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-4">24h Volume</h2>
            <p className="text-2xl font-bold text-purple-400">
              ${data?.total_volumes?.[data.total_volumes.length - 1]?.[1]?.toLocaleString() || 'N/A'}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BitcoinDashboard;

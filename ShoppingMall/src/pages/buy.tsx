import { motion } from 'framer-motion';

function Buy() {
  return (
    <motion.div 
      className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Order Now</h1>
        <p className="text-lg text-gray-600">Place your order for fresh, hot food delivery</p>
        <button className="mt-6 bg-[#ED573E] text-white px-6 py-3 rounded-full hover:bg-[#ED573E]/90 transition-all duration-300">
          Start Ordering
        </button>
      </div>
    </motion.div>
  );
}

export default Buy; 
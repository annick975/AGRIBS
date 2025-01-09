import { motion } from "framer-motion";

const Offers = () => {
  const offers = [
    {
      title: "For Farmers",
      benefits: [
        "Direct market access",
        "Competitive pricing",
        "Secure payments",
        "Real-time market insights",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 12L3 9l9-3 9 3-9 3z"
          />
        </svg>
      ),
    },
    {
      title: "For Buyers",
      benefits: [
        "Fresh produce direct from farms",
        "Transparent pricing",
        "Quality guarantees",
        "Scheduled deliveries",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#004d36] via-[#013d2d] to-[#003628] font-lora overflow-hidden" id="offers">
    
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/40/40')] opacity-20" />
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-green-900/20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-500/20 to-transparent rounded-full filter blur-3xl" />
      </div>

     
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="relative inline-block text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4ade80] mb-6">
              Our Offers
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#4ade80]/20 via-[#4ade80]/40 to-[#4ade80]/20 rounded-full"
              />
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Get the best deals on fresh produce and market access through our
              platform
            </p>
          </motion.div>

         
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4ade80]/10 to-[#4ade80]/5 rounded-2xl transform group-hover:scale-105 transition-all duration-300" />
                <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="text-[#4ade80] mb-6">{offer.icon}</div>
                  <h3 className="text-2xl font-bold text-[#4ade80] mb-4">
                    {offer.title}
                  </h3>
                  <ul className="space-y-3">
                    {offer.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        className="flex items-center text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 text-green-400 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

       
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-[#4ade80] text-[#003628]
                       text-lg font-medium rounded-xl shadow-lg
                       hover:shadow-2xl transition-all duration-300"
            >
              <div
                className="absolute inset-0 bg-white/10 rounded-xl opacity-0 
                           group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative flex items-center gap-3">
                Get Started Today
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </div>
            </motion.button>
          </motion.div>
        </div>

   
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#4ade80]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute right-4 bottom-1/4 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[#4ade80]"
        />
      </div>
    </div>
  );
};

export default Offers;

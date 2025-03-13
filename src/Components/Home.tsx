import { motion } from "framer-motion";

import jake from "../assets/farmer1.jpeg";
import ruth from "../assets/farmer2.jpg";
import modern from "../assets/modern.jpeg"


const Home = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#004d36] via-[#013d2d] to-[#003628] overflow-hidden font-lora"
      id="home"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Dot pattern background overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-20" />

        {/* Gradient accent */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-500/20 to-transparent rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative z-10 max-w-2xl lg:max-w-none"
          >
            <div className="relative inline-block mb-6 md:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Grow Your
                <span className="text-[#4ade80] relative inline-block ml-3">
                  Future
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-2 left-0 h-3 bg-green-500/20 -z-10 rounded-full"
                  />
                </span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 block">
                  With Modern Farming
                </span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 md:mb-12"
            >
              Connect with trusted buyers through{" "}
              <span className="text-[#4ade80] font-semibold">AGRIBS</span>.
              Streamline your agricultural business and maximize your harvest
              value.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-[#4ade80] text-[#003628]
                         text-lg sm:text-xl font-medium rounded-xl shadow-lg
                         hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className="absolute inset-0 bg-white/10 rounded-xl opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative flex items-center justify-center gap-3">
                  Start Growing Today
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 border-2 border-[#4ade80] text-[#4ade80]
                         text-lg sm:text-xl font-medium rounded-xl hover:bg-[#4ade80]/10
                         transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-xl lg:max-w-none"
          >
            <div className="relative w-full aspect-square">
              {/* Image container with glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-300/10 rounded-full blur-3xl" />

              <div className="relative w-full h-full flex items-center justify-center">
                {/* Main circular frame */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative w-4/5 aspect-square rounded-full overflow-hidden border-4 border-green-400/30"
                >
                  <img
                    src={modern}
                    alt="Aerial view of modern farm"
                    className="absolute w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003628]/60 to-transparent" />
                </motion.div>

                {/* Small floating elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40"
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-green-400/40 shadow-lg shadow-green-400/20">
                    <img
                      src={jake}
                      alt="Wheat close-up"
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="absolute bottom-10 left-0 w-24 h-24 md:w-32 md:h-32"
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-green-400/40 shadow-lg shadow-green-400/20">
                    <img
                      src={ruth}
                      alt="Farmer using technology"
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { label: "Active Farmers", value: "2,500+" },
            { label: "Daily Transactions", value: "800+" },
            { label: "Products Listed", value: "1,000+" },
            { label: "Satisfied Buyers", value: "3,000+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl
                         hover:bg-white/10 transition-colors duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#4ade80] mb-2">
                {stat.value}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

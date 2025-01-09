import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#004d36] via-[#013d2d] to-[#003628] overflow-hidden font-lora" id="home">

      <div className="absolute inset-0">
        
        <svg
          className="absolute top-0 right-0 w-2/3 h-2/3 text-green-900/20"
          viewBox="0 0 200 200"
        >
          <path
            d="M 100,0 C 150,50 150,150 100,200 C 50,150 50,50 100,0"
            fill="currentColor"
          />
        </svg>

       
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-20" />

    
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-500/20 to-transparent rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
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
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-300/10 rounded-full blur-3xl" />
              <svg className="relative w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <radialGradient id="field-gradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4ade80" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#4ade80" stopOpacity="0.1" />
                  </radialGradient>
                  <pattern
                    id="field-pattern"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M0,10 Q10,0 20,10"
                      stroke="#4ade80"
                      strokeWidth="0.5"
                      fill="none"
                      opacity="0.3"
                    />
                  </pattern>
                </defs>

            
                <circle cx="200" cy="200" r="180" fill="url(#field-gradient)" />
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="url(#field-pattern)"
                  fillOpacity="0.3"
                />

                
                <g transform="translate(100, 100)">
                
                  {[0, 40, 80].map((x, i) => (
                    <motion.g
                      key={i}
                      transform={`translate(${x}, ${i * 10})`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                    >
                      <rect
                        x="8"
                        y="30"
                        width="8"
                        height="20"
                        fill="#4ade80"
                        opacity="0.8"
                      />
                      <path
                        d="M0,30 L12,-5 L24,30"
                        fill="#4ade80"
                        opacity="0.6"
                      />
                      <path
                        d="M2,20 L12,-15 L22,20"
                        fill="#4ade80"
                        opacity="0.7"
                      />
                      <path
                        d="M4,10 L12,-25 L20,10"
                        fill="#4ade80"
                        opacity="0.8"
                      />
                    </motion.g>
                  ))}

                  
                  {[...Array(8)].map((_, i) => (
                    <motion.g
                      key={`crop-${i}`}
                      transform={`translate(${i * 25}, 150)`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                    >
                      <path
                        d="M0,0 Q5,-10 10,0"
                        stroke="#4ade80"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.8"
                      >
                        <animate
                          attributeName="d"
                          values="M0,0 Q5,-10 10,0;M0,0 Q5,-8 10,0;M0,0 Q5,-10 10,0"
                          dur={`${2 + i * 0.5}s`}
                          repeatCount="indefinite"
                        />
                      </path>
                      <circle
                        cx="5"
                        cy="0"
                        r="2"
                        fill="#4ade80"
                        opacity="0.8"
                      />
                    </motion.g>
                  ))}

                  <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <circle
                      cx="220"
                      cy="-20"
                      r="25"
                      fill="#4ade80"
                      opacity="0.8"
                    >
                      <animate
                        attributeName="r"
                        values="25;27;25"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    {[...Array(12)].map((_, i) => {
                      const angle = (i * 30 * Math.PI) / 180;
                      const length = 15;
                      return (
                        <motion.line
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
                          x1={220 + Math.cos(angle) * 25}
                          y1={-20 + Math.sin(angle) * 25}
                          x2={220 + Math.cos(angle) * (25 + length)}
                          y2={-20 + Math.sin(angle) * (25 + length)}
                          stroke="#4ade80"
                          strokeWidth="2"
                          strokeLinecap="round"
                          opacity="0.6"
                        >
                          <animate
                            attributeName="strokeWidth"
                            values="2;3;2"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                        </motion.line>
                      );
                    })}
                  </motion.g>
                </g>
              </svg>
            </div>
          </motion.div>
        </div>

       
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

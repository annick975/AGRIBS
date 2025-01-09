import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
 
  };

  return (
    <div
      className="relative bg-gradient-to-br from-[#004d36] via-[#013d2d] to-[#003628] min-h-screen font-lora"
      id="contact"
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 right-0 w-1/3 h-1/3 text-green-500/5"
          viewBox="0 0 200 200"
        >
          <path
            d="M 0,100 C 0,0 100,0 100,100 C 100,200 200,200 200,100"
            fill="currentColor"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-1/2 h-1/2 text-green-500/5"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="80" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
         
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-white/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl text-[#4ade80] mb-2">Have questions?</h3>
              <h2 className="text-4xl font-bold text-white mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Name"
                    className="w-full px-6 py-4 bg-white/5 rounded-xl border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#4ade80] transition-all duration-300"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      placeholder="Email*"
                      className="w-full px-6 py-4 bg-white/5 rounded-xl border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#4ade80] transition-all duration-300"
                    />
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-6 py-4 bg-white/5 rounded-xl border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#4ade80] transition-all duration-300"
                    />
                  </div>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    placeholder="Drop us a line*"
                    rows={4}
                    className="w-full px-6 py-4 bg-white/5 rounded-xl border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#4ade80] transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-4 bg-[#4ade80] hover:bg-[#4ade80]/90 text-[#013d2d] font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <Send className="w-5 h-5" />
                  Get in touch
                </motion.button>
              </form>
            </div>
          </motion.div>

      
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white lg:pl-12 flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold mb-12 relative inline-block">
              Contact Information
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#4ade80] to-transparent"
              />
            </h2>

            <div className="space-y-8">
              {[
                { icon: Phone, label: "Hot line", value: "+250 780 000 000" },
                {
                  icon: MapPin,
                  label: "Our Location",
                  value: "Kigali, Rwanda",
                },
                {
                  icon: Mail,
                  label: "Official Email",
                  value: "info@agribs.com",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="p-4 bg-white/10 rounded-xl group-hover:bg-[#4ade80]/20 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-[#4ade80]" />
                  </div>
                  <div>
                    <p className="text-gray-400">{item.label}</p>
                    <p className="text-xl font-semibold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

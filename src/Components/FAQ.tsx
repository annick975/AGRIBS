import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "How does AGRIBS connect farmers with buyers?",
      answer:
        "AGRIBS connects farmers and buyers through a platform that enables direct communication and transaction facilitation.",
    },
    {
      question: "Is there a fee to use AGRIBS?",
      answer:
        "AGRIBS is free to use for buyers. Sellers may have different subscription models.",
    },
    {
      question: "How do I ensure the quality of the produce I buy?",
      answer:
        "AGRIBS allows reviews and ratings from previous buyers, and sellers are verified on the platform.",
    },
    {
      question: "What delivery options are available?",
      answer:
        "AGRIBS provides various delivery options, including standard and express delivery.",
    },
    {
      question: "How do I get started with AGRIBS?",
      answer:
        "Simply sign up on the AGRIBS website, create your profile, and start browsing products.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-[#004d36] via-[#013d2d] to-[#003628] text-white font-lora min-h-screen overflow-hidden" id="faq">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-6xl font-bold relative inline-block">
            FAQ
            <span className="text-[#4ade80]">s</span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-400 to-transparent"
            />
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Find answers to common questions about how AGRIBS connects farmers
            with buyers
          </p>
        </motion.div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl hover:bg-white/15 transition-colors duration-300">
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full text-left p-6 flex items-center justify-between"
                >
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#4ade80] transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-[#4ade80] transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeIndex === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-gray-200 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

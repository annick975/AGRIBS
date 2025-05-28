import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import tomatoes from "../assets/tomatoes.jpeg";
import chilli from "../assets/chilli.jpeg"

interface ExploreLink {
  name: string;
  sectionId?: string;
  path?: string;
}

interface BlogPost {
  date: string;
  title: string;
  image: string;
  category: string;
  readTime: string;
}

const Footer = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const exploreLinks: ExploreLink[] = [
    { name: "Home", sectionId: "home" },
    { name: "Contact Us", sectionId: "contact" },
    { name: "Our Offers", sectionId: "offers" },
    { name: "About Us", sectionId: "about" },
    { name: "Sign up", path: "/signup" },
    { name: "Login", path: "/login" },
  ];

  const posts: BlogPost[] = [
    {
      date: "January 01 2025",
      title: "Latest updates on tomato farming",
      image: tomatoes,
      category: "Farming",
      readTime: "5 min read",
    },
    {
      date: "December 29 2024",
      title: "New insights on chile cultivation",
      image: chilli,
      category: "Cultivation",
      readTime: "4 min read",
    },
  ];

  const handleNavigation = (item: ExploreLink): void => {
    if (item.sectionId) {
      scrollToSection(item.sectionId);
    } else if (item.path) {
      window.location.href = item.path;
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#004d36] via-[#013d2d] to-[#003628] text-white font-lora relative overflow-hidden">
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
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#4ade80] mb-4">AGRIBS</h2>
            <p className="text-gray-300 leading-relaxed">
              Dedicated to strengthening the agricultural supply chain by
              connecting farmers with buyers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6 relative inline-block">
              Explore
              <div className="absolute -bottom-2 left-0 h-1 w-12 bg-[#4ade80]" />
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  onClick={() => handleNavigation(item)}
                  className="cursor-pointer text-gray-300 hover:text-[#4ade80] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-6 relative inline-block">
              Recent Posts
              <div className="absolute -bottom-2 left-0 h-1 w-12 bg-[#4ade80]" />
            </h4>
            <div className="space-y-6">
              {posts.map((post, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 p-4 border border-[#4ade80]/10 hover:border-[#4ade80]/30 transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-[#4ade80] px-2 py-1 rounded-full bg-[#4ade80]/10">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-400">
                            {post.readTime}
                          </span>
                        </div>
                        <h5 className="font-semibold text-gray-200 group-hover:text-[#4ade80] transition-colors duration-300 mb-1">
                          {post.title}
                        </h5>
                        <p className="text-sm text-gray-400">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-xl font-semibold mb-6 relative inline-block">
              Contact Info
              <div className="absolute -bottom-2 left-0 h-1 w-12 bg-[#4ade80]" />
            </h4>
            <div className="space-y-4">
              {[
                { Icon: MapPin, text: "Kigali, Rwanda" },
                { Icon: Phone, text: "+250 780 000 000" },
                { Icon: Mail, text: "info@agribs.com" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-300 hover:text-[#4ade80] transition-colors duration-300 cursor-pointer"
                >
                  <item.Icon className="w-5 h-5 text-[#4ade80]" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400">© copyright 2025, All rights reserved</p>
          <div className="flex gap-8">
            {["Terms", "Privacy", "Support"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-[#4ade80] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [currentSection, setCurrentSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Offers", href: "#offers" },
    { name: "Contact us", href: "#contact" },
    { name: "Login", href: "/signup" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Get all sections
      const sections = navItems
        .map((item) => item.href.replace("#", ""))
        .filter(Boolean);

      // Find which section is currently in view
      const currentPosition = window.scrollY + window.innerHeight / 3;

      let activeSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (
            currentPosition >= elementTop &&
            currentPosition <= elementBottom
          ) {
            activeSection = section;
            break;
          }
        }
      }

    
      if (window.scrollY < 100) {
        activeSection = "";
      }

      setCurrentSection(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "#") return currentSection === "";
    return href === `#${currentSection}`;
  };

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${
          scrolled
            ? "py-2 bg-[#004d36]/95 backdrop-blur-md shadow-lg"
            : "py-4 bg-[#004d36]"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center group cursor-pointer"
          >
            <div className="relative w-12 h-12 transition-all duration-300 group-hover:scale-110">
              <div className="w-full h-full bg-[#4ade80] rounded-full flex items-center justify-center text-[#004d36] text-xl font-bold">
                A
              </div>
              <div className="absolute inset-0 bg-[#4ade80]/20 rounded-full filter blur-md group-hover:blur-xl transition-all duration-300 -z-10" />
            </div>
            <span className="text-4xl font-bold bg-gradient-to-r from-[#4ade80] to-green-300 bg-clip-text text-transparent ml-3 group-hover:scale-105 transition-all duration-300">
              AGRIBS
            </span>
          </motion.div>

          <nav className="hidden md:flex gap-2 font-lora">
            {navItems.map((item, index) => (
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={item.name}
                href={item.href}
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem("")}
                className="relative px-4 py-2 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <span
                  className={`relative z-10 ${
                    activeItem === item.name || isActive(item.href)
                      ? "text-[#004d36]"
                      : "text-gray-100"
                  }`}
                >
                  {item.name}
                </span>
                <motion.div
                  initial={false}
                  animate={{
                    opacity:
                      activeItem === item.name || isActive(item.href) ? 1 : 0,
                    scale:
                      activeItem === item.name || isActive(item.href) ? 1 : 0.9,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#4ade80] to-green-300 rounded-lg -z-0"
                />
              </motion.a>
            ))}
          </nav>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#4ade80]/10 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-100" />
            ) : (
              <Menu className="w-6 h-6 text-gray-100" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#004d36] border-t border-[#4ade80]/20 mt-2"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 text-lg font-semibold rounded-lg transition-colors duration-300 ${
                      isActive(item.href)
                        ? "bg-[#4ade80] text-[#004d36]"
                        : "text-gray-100 hover:bg-[#4ade80]/10"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

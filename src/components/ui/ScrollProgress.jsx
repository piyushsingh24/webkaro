import { motion, useScroll } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG Circle Constants
  const radius = 24;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="fixed bottom-2 right-2 z-[60]">
      <div className="relative group">
        {/* Progress Circle */}
        <svg className="w-16 h-16 -rotate-90">
          {/* Track */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            className="text-gray-300 dark:text-gray-700"
          />

          {/* Progress */}
          <motion.circle
            cx="32"
            cy="32"
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            style={{ pathLength: scrollYProgress }}
            strokeLinecap="round"
            className="text-primary-600 dark:text-cyan-400"
          />
        </svg>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="absolute inset-2 flex items-center justify-center
                     bg-white dark:bg-gray-900
                     text-primary-600 dark:text-cyan-400
                     rounded-full shadow-lg
                     hover:bg-primary-600 hover:text-white
                     dark:hover:bg-cyan-400 dark:hover:text-gray-900
                     transition-all duration-300"
        >
          <FaArrowUp className="text-xl" />
        </button>

        {/* Tooltip */}
        <div className="absolute top-1/2 right-20 -translate-y-1/2 px-3 py-1
                        bg-gray-900 text-white text-xs rounded
                        opacity-0 group-hover:opacity-100 transition-opacity
                        whitespace-nowrap hidden md:block">
          Scroll to top
        </div>
      </div>
    </div>
  );
};

export default ScrollProgress;

import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed right-8 bottom-32 z-50 p-3 rounded-full bg-white dark:bg-navy border border-border-color shadow-lg text-primary-600 dark:text-cyan hover:scale-110 active:scale-90 transition-all duration-300"

      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
    </motion.button>
  );
};

export default ThemeToggle;

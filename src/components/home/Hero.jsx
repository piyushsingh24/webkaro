import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../ui/Button';
import { fadeIn, slideUp } from '../../utils/animations';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10  ">
        <div className="max-w-6xl mx-auto text-center ">
          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-text mb-6 leading-tight"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Web<span className="gradient-text">karo</span> Build High-Performance{' '}
            <span className="gradient-text">Web Experiences</span>{' '}
            That Convert
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-muted-text mb-10 max-w-2xl mx-auto"
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Custom websites for startups, founders, and growing businesses and personal portfolio .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <Button
              to="/get-quote"
              variant="primary"
              size="lg"
              className="shadow-xl"
            >
              Get a Free Quote <FaArrowRight />
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
            >
              Book a Call
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-border-color rounded-full mx-auto flex items-start justify-center p-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-1 h-2 bg-primary-600 dark:bg-cyan rounded-full" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

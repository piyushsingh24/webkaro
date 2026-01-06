import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { getFeaturedTestimonials } from '../../data/testimonials';
import SectionHeading from '../ui/SectionHeading';

const Testimonials = () => {
  const testimonials = getFeaturedTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding bg-secondary-900 text-white overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          subtitle="Client Success Stories"
          title="What Clients Say"
        />

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="bg-secondary-800 rounded-2xl p-8 md:p-12"
            >
              <FaQuoteLeft className="text-4xl text-primary-500 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(current.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-secondary-100 mb-8 leading-relaxed">
                "{current.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  {current.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-lg">{current.name}</p>
                  <p className="text-secondary-300">
                    {current.role} • {current.company}
                  </p>
                  <p className="text-sm text-primary-400 mt-1">{current.project}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-secondary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-secondary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-primary-500 w-8' : 'bg-secondary-600'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

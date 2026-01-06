import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../ui/Button';

const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Have an Idea?
            <br />
            <span className="text-primary-200">Let's Build It Right.</span>
          </h2>

          <p className="text-xl md:text-2xl text-secondary-100 mb-10 max-w-2xl mx-auto">
            Turn your vision into reality with a partner who cares about your success as much as you do.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <Button
              to="/get-quote"
              variant="primary"
              size="lg"
              className=" text-white hover:bg-aqua hover:text-white border-2 border-amber-500"
            >
              Get a Free Quote  <FaArrowRight />
            </Button>
            <Button
              to="/portfolio"
              variant="outline"
              size="lg"
              className="text-white hover:bg-white hover:text-primary-600"
            >
              View My Work
            </Button>
          </div>

          <motion.p
            className="mt-8 text-secondary-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            ✓ Free consultation • ✓ No obligation • ✓ Quick response
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;

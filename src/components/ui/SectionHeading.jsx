import { motion } from 'framer-motion';
import { slideUp } from '../../utils/animations';

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <motion.div
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {subtitle && (
        <p className="text-primary-600 dark:text-cyan font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text">
        {title}
      </h2>

    </motion.div>
  );
};

export default SectionHeading;

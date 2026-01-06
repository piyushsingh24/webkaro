import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
  ...props
}) => {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const baseClasses = `bg-white dark:bg-dark-card rounded-xl shadow-md border border-border-color ${paddings[padding]} ${className}`;
  const hoverClasses = hover ? 'card-hover' : '';

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

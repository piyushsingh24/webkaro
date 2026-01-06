import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 dark:hover:bg-primary-600 dark:bg-primary-600 dark:text-navy font-bold hover:shadow-[0_0_20px_rgba(28,126,214,0.5)] transition-all duration-300',
    secondary: 'bg-secondary-700 text-white dark:bg-navy dark:border dark:border-cyan dark:text-cyan hover:bg-secondary-800 dark:hover:bg-navy/80 hover:shadow-lg',
    outline: 'border-2 border-primary-600 text-primary-600 dark:text-cyan dark:border-cyan hover:bg-primary-600 hover:text-white dark:hover:bg-cyan dark:hover:text-navy transition-all duration-300',
    ghost: 'text-primary-600 dark:text-cyan hover:bg-primary-50 dark:hover:bg-cyan/10',
  };


  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  const MotionComponent = motion.button;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionComponent
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default Button;

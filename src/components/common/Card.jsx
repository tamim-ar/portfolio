import { motion } from 'framer-motion';

export const Card = ({ className = '', children, hover = true, animate = true }) => {
  const baseClass = "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6";
  const Component = animate ? motion.div : 'div';
  const props = animate ? { whileHover: hover ? { y: -5 } : undefined } : {};

  return (
    <Component
      {...props}
      className={`${baseClass} ${className}`}
    >
      {children}
    </Component>
  );
};

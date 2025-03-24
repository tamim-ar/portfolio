import { motion } from 'framer-motion';

export const Card = ({ className = '', children, hover = true }) => {
  const baseClass = "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6";
  return hover ? (
    <motion.div
      whileHover={{ y: -5 }}
      className={`${baseClass} ${className}`}
    >
      {children}
    </motion.div>
  ) : (
    <div className={`${baseClass} ${className}`}>{children}</div>
  );
};

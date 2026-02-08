import { motion } from 'framer-motion';
import { ExperienceSection } from '../components/about/ExperienceSection';

const Experience = () => {
  return (
    <div className="min-h-screen py-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            A comprehensive overview of my professional journey and work experience in quality assurance,
            backend development, and data annotation.
          </p>
        </div>
      </motion.div>

      {/* Experience Section */}
      <ExperienceSection />
    </div>
  );
};

export default Experience;

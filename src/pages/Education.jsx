import { motion } from 'framer-motion';
import { EducationSection } from '../components/about/EducationSection';

const Education = () => {
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
            Education
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            My educational background in Computer Science and Engineering, highlighting
            academic excellence and technical foundation.
          </p>
        </div>
      </motion.div>

      {/* Education Section */}
      <EducationSection />
    </div>
  );
};

export default Education;

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ExperienceSection } from '../components/about/ExperienceSection';

const About = () => {
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
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            A passionate Software Quality Assurance Engineer with expertise in automated testing 
            and a strong foundation in computer science. Committed to ensuring software excellence 
            through comprehensive testing methodologies.
          </p>
          <div className="flex justify-center gap-4">
            <SocialButton 
              href="https://github.com/tamim-ar"
              icon={<FaGithub />}
              label="GitHub"
            />
            <SocialButton 
              href="https://linkedin.com/in/tamim-ar"
              icon={<FaLinkedin />}
              label="LinkedIn"
            />
          </div>
        </div>
      </motion.div>

      {/* Education Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Bachelor of Science in Computer Science and Engineering
            </h3>
            <p className="text-primary-600 dark:text-primary-400 mt-1">
              Daffodil International University
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              2020 - 2024 • CGPA: 3.56/4.00
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Download Resume */}
      <div className="container mx-auto px-4 text-center mt-16">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://drive.google.com/file/d/1ezqxBobCsZ5y-jpUVTZsi9rwEZklKj_U/view?usp=sharing"
          className="button-primary inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </motion.a>
      </div>
    </div>
  );
};

const SocialButton = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-gray-800 
             text-gray-900 dark:text-white shadow-md hover:shadow-lg transition-shadow
             border border-gray-200 dark:border-gray-700"
  >
    <span className="text-xl">{icon}</span>
    <span>{label}</span>
  </a>
);

export default About;

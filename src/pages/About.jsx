import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
            A dedicated Software Quality Assurance Engineer with expertise in full-cycle testing,
            test case design, and defect management. With a strong foundation in computer science
            and hands-on experience in backend development, I'm committed to ensuring software
            excellence through comprehensive testing methodologies and collaborative problem-solving.
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

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <Link
              to="/education"
              className="card p-8 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Education
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                View my academic background
              </p>
            </Link>

            <Link
              to="/experience"
              className="card p-8 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Experience
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                View my work experience
              </p>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Download Resume */}
      <div className="container mx-auto px-4 text-center mt-16">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://drive.google.com/file/d/1Oe-BsRZtfYKdU9Qsqlnit77DOrqn-faJ/view?usp=sharing"
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

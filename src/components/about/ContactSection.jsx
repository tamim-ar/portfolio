import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a href="mailto:tamimahasan.ar@gmail.com" 
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                <FaEnvelope className="text-xl" />
                <span>tamimahasan.ar@gmail.com</span>
              </a>
              <a href="tel:+8801611621958"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                <FaPhoneAlt className="text-xl" />
                <span>+880 1611-621958</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Connect With Me
            </h3>
            <div className="flex gap-6">
              <a href="https://github.com/tamim-ar" target="_blank" rel="noopener noreferrer"
                className="text-3xl text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/tamim-ar" target="_blank" rel="noopener noreferrer"
                className="text-3xl text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

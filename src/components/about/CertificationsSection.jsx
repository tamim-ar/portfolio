import { motion } from 'framer-motion';
import { IoCheckmarkCircle } from 'react-icons/io5';

export const CertificationsSection = ({ certifications }) => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-start gap-4">
                <IoCheckmarkCircle className="text-primary-500 text-2xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {cert.issuer} • {cert.date}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    Credential ID: {cert.credentialId}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

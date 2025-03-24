import { motion } from 'framer-motion';

export const AboutHero = () => (
  <div className="relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <div className="prose dark:prose-invert">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              As a Software Quality Assurance Engineer, I am passionate about ensuring 
              software excellence through comprehensive testing and automation. With expertise 
              in various testing tools and methodologies, I focus on delivering high-quality 
              software products while continuously improving testing processes.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />
          <img
            src="/image/about-hero.jpg"
            alt="Working on Quality Assurance"
            className="relative rounded-3xl shadow-2xl w-full"
          />
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export const EducationSection = () => (
  <div className="bg-white dark:bg-gray-800/50 py-12">
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
      <div className="card p-6 hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Daffodil International University
        </h3>
        <p className="text-primary-600 dark:text-primary-400 font-medium">
          2020 - 2024
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Bachelor of Science in Computer Science and Engineering
        </p>
        <div className="mt-4 flex items-center">
          <span className="text-gray-700 dark:text-gray-300 font-medium">CGPA:</span>
          <div className="ml-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
            3.56/4
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

export const CodingProfilesSection = ({ profiles }) => (
  <div className="py-12">
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Coding Profiles
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {profiles.map((profile) => (
          <motion.a
            key={profile.platform}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="card p-6 hover:shadow-xl transition-all"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {profile.platform}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{profile.username}</p>
            <div className="mt-4 text-primary-500 dark:text-primary-400">
              View Profile →
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  </div>
);

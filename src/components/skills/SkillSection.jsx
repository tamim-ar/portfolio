import { motion } from 'framer-motion';

const SkillCard = ({ icon, name, level = null }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="text-4xl text-primary-500 dark:text-primary-400">
      {icon}
    </div>
    <div className="text-center">
      <h3 className="font-medium text-gray-900 dark:text-white">{name}</h3>
      {level && (
        <div className="mt-1">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
            <div 
              className="bg-primary-500 h-1.5 rounded-full"
              style={{ width: `${level}%` }}
            />
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

const SkillCategory = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                   rounded-full text-sm font-medium shadow-sm hover:shadow transition-shadow
                   border border-gray-100 dark:border-gray-700"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export const SkillSection = ({ technologies, skillCategories }) => (
  <div className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Technical Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and tools I work with
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <SkillCard {...tech} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  </div>
);

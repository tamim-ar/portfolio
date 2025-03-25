import { motion } from 'framer-motion';

export const SkillGroupCard = ({ title, skills, icon }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
  >
    <div className="flex items-center gap-3 mb-4">
      {icon && <span className="text-2xl text-primary-500">{icon}</span>}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 text-sm font-medium rounded-full
                   bg-primary-50 dark:bg-primary-900/20
                   text-primary-700 dark:text-primary-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

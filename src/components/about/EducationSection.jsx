import { motion } from 'framer-motion';

const EducationCard = ({ degree, institution, field, duration, grade, details, activities }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="card p-8 mb-6 border-l-4 border-primary-600 dark:border-primary-400 hover:shadow-lg transition-shadow"
  >
    <div className="mb-3">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {degree}
      </h3>
      <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">
        {institution}
      </p>
      {field && (
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
          {field}
        </p>
      )}
    </div>

    <div className="flex flex-wrap gap-3 mb-4 text-xs">
      <span className="text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
        📅 {duration}
      </span>
      <span className="text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
        ⭐ Grade: {grade}
      </span>
    </div>

    {details && (
      <ul className="space-y-2 mb-4">
        {details.map((detail, idx) => (
          <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm flex gap-3">
            <span className="text-primary-600 dark:text-primary-400 font-bold mt-1">▸</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    )}

    {activities && (
      <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Activities & Societies</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {activities}
        </p>
      </div>
    )}
  </motion.div>
);

export const EducationSection = () => (
  <section className="container mx-auto px-4 mb-16">
    <div className="max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-gray-900 dark:text-white mb-10"
      >
        Education
      </motion.h2>

      <EducationCard
        degree="B.Sc. in Computer Science and Engineering"
        institution="Daffodil International University"
        field="Computer Science and Engineering"
        duration="Jan 2020 – Feb 2024"
        grade="3.56/4.00"
        details={[
          "Developed strong foundations in software development, data structures, and algorithms",
          "Studied AI/ML and modern web technologies",
          "Completed academic projects and collaborated in team-based software development",
          "Participated in coding contests and technical competitions"
        ]}
        activities="Active member of the DIU Computer and Programming Club and Programming Contest Team, with regular participation in tech seminars, workshops, and coding events"
      />

      <EducationCard
        degree="HSC - Science"
        institution="Narundi School and College"
        duration="Aug 2017 – Jun 2019"
        grade="4.50/5.00"
      />

      <EducationCard
        degree="SSC - Science"
        institution="Narundi School and College"
        duration="Jan 2015 – Apr 2017"
        grade="4.17/5.00"
      />
    </div>
  </section>
);

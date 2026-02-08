import { motion } from 'framer-motion';

const ExperienceCard = ({ title, company, location, duration, achievements }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="card p-8 mb-6 border-l-4 border-primary-600 dark:border-primary-400 hover:shadow-lg transition-shadow"
  >
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">
          {company}
        </p>
      </div>
    </div>

    <div className="flex flex-wrap gap-3 mb-4 text-xs">
      {location && (
        <span className="text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
          📍 {location}
        </span>
      )}
      <span className="text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
        📅 {duration}
      </span>
    </div>

    <ul className="space-y-2">
      {achievements.map((achievement, idx) => (
        <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm flex gap-3">
          <span className="text-primary-600 dark:text-primary-400 font-bold mt-1">▸</span>
          <span>{achievement}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export const ExperienceSection = () => (
  <section className="container mx-auto px-4 mb-16">
    <div className="max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-gray-900 dark:text-white mb-10"
      >
        Experience
      </motion.h2>

      <ExperienceCard
        title="QA Engineer"
        company="Dream71 Bangladesh Ltd."
        location="Bashundhara R/A, Dhaka"
        duration="Nov 2025 - Present"
        achievements={[
          "Played a core role in quality assurance for NGO Affairs Bureau (NGOAB), supported by Australian Aid and UNDP",
          "Independently handled full-cycle manual testing including UI, functional, and regression testing across multiple modules",
          "Designed, created, reviewed, and executed detailed test cases and test scenarios based on business and functional requirements",
          "Led validation of payment-related workflows, ensuring accuracy, security, and compliance with defined business rules",
          "Actively gathered and analyzed requirements and acted as coordination point between clients and developers",
          "Identified, documented, tracked, and verified defects using proper defect life cycle"
        ]}
      />

      <ExperienceCard
        title="Intern Developer"
        company="Itransition Group"
        location="Lakewood, Colorado, United States · Remote"
        duration="Jul 2025 - Sep 2025"
        achievements={[
          "Worked remotely on .NET applications, contributing to backend development, API integration, and database management",
          "Utilized C#, ASP.NET, and SQL Server technologies"
        ]}
      />

      <ExperienceCard
        title="Freelance Data Annotator"
        company="Quantigo AI"
        location="House #4 Road-3, Dhaka 1230 · Remote"
        duration="Jan 2025 - Jun 2025"
        achievements={[
          "Performed image and video annotation for AI/ML projects",
          "Ensured high-quality labeled data for computer vision model training"
        ]}
      />
    </div>
  </section>
);

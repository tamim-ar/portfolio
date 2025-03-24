import { motion } from 'framer-motion';

export const ExperienceSection = () => (
  <section className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
      <div className="card p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Data Annotator
        </h3>
        <p className="text-primary-600 dark:text-primary-400 mt-1">
          Quantigo AI
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
          Jan 2025 - Present • Remote
        </p>
        <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
          <li>Freelance position focused on data annotation and labeling</li>
          <li>Contributing to AI/ML training datasets</li>
          <li>Working remotely with international teams</li>
        </ul>
      </div>
    </div>
  </section>
);

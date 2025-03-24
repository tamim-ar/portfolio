import { motion } from 'framer-motion';
import { IoSchool, IoBriefcase } from 'react-icons/io5';

export const AboutTimeline = ({ events }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2" />
      
      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="flex-1 md:text-right">
              <div className={`card p-6 ${index % 2 === 0 ? 'ml-8 md:ml-0' : 'ml-8 md:ml-0'}`}>
                <div className="flex items-center gap-2 mb-2 justify-start md:justify-end">
                  {event.type === 'education' ? (
                    <IoSchool className="text-primary-500 text-xl" />
                  ) : (
                    <IoBriefcase className="text-primary-500 text-xl" />
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {event.title}
                  </h3>
                </div>
                <p className="text-primary-600 dark:text-primary-400">
                  {event.type === 'education' ? event.institution : event.company}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  {event.period} • {event.location}
                </p>
                {event.description && (
                  <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
                    {event.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="hidden md:block w-8" />
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

import { motion } from 'framer-motion';
import { SkillGroupCard } from './SkillGroupCard';
import { 
  FaCode, FaTools, FaDatabase, FaTasks,
  FaDesktop, FaServer, FaGitAlt, FaProjectDiagram
} from 'react-icons/fa';
import { SiTestinglibrary, SiJenkins } from 'react-icons/si';
import { BsKanban } from 'react-icons/bs';

export const SkillSection = () => {
  const skillGroups = [
    {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: ['Python', 'Java', 'JavaScript']
    },
    {
      title: 'Frontend Development',
      icon: <FaDesktop />,
      skills: ['HTML', 'CSS', 'React', 'TailwindCSS', 'Bootstrap']
    },
    {
      title: 'Testing Tools',
      icon: <SiTestinglibrary />,
      skills: ['Selenium', 'JUnit', 'TestNG', 'Postman', 'Playwright']
    },
    {
      title: 'Automation',
      icon: <FaTools />,
      skills: ['Selenium WebDriver', 'TestNG', 'Playwright']
    },
    {
      title: 'Backend Testing',
      icon: <FaServer />,
      skills: ['REST APIs']
    },
    {
      title: 'Version Control',
      icon: <FaGitAlt />,
      skills: ['Git', 'GitHub']
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      skills: ['SQL', 'MySQL']
    },
    {
      title: 'Project Management',
      icon: <FaProjectDiagram />,
      skills: ['JIRA', 'Trello']
    },
    {
      title: 'Methodologies',
      icon: <BsKanban />,
      skills: ['Waterfall', 'Agile', 'Scrum']
    },
    {
      title: 'Testing Life Cycle',
      icon: <FaTasks />,
      skills: ['Requirement Analysis', 'Test Planning', 'Test Design', 'Test Execution', 'Defect Reporting']
    },
    {
      title: 'CI/CD',
      icon: <SiJenkins />,
      skills: ['Jenkins', 'GitLab CI', 'CircleCI']
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillGroupCard {...group} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

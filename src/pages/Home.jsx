import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiSelenium, SiJunit5, SiTestinglibrary, SiPostman, SiPlaywright, SiJira } from 'react-icons/si';
import { SkillSection } from '../components/skills/SkillSection';

const Home = () => {
  const technologies = [
    { name: 'Python', icon: <FaPython />, level: 90 },
    { name: 'Java', icon: <FaJava />, level: 85 },
    { name: 'JavaScript', icon: <FaJs />, level: 80 },
    { name: 'React', icon: <FaReact />, level: 75 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
    { name: 'Git', icon: <FaGitAlt />, level: 85 },
    { name: 'JIRA', icon: <SiJira />, level: 90 },
    { name: 'Selenium', icon: <SiSelenium />, level: 95 },
    { name: 'JUnit', icon: <SiJunit5 />, level: 85 },
    { name: 'Postman', icon: <SiPostman />, level: 90 },
    { name: 'Playwright', icon: <SiPlaywright />, level: 80 },
  ];

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'JavaScript']
    },
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'React', 'TailwindCSS', 'Bootstrap']
    },
    {
      title: 'Testing Tools',
      skills: ['Selenium', 'JUnit', 'TestNG', 'Postman', 'Playwright']
    },
    {
      title: 'Automation',
      skills: ['Selenium WebDriver', 'TestNG', 'Playwright']
    },
    {
      title: 'Backend Testing',
      skills: ['REST APIs']
    },
    {
      title: 'Version Control',
      skills: ['Git', 'GitHub']
    },
    {
      title: 'Databases',
      skills: ['SQL', 'MySQL']
    },
    {
      title: 'Project Management',
      skills: ['JIRA', 'Trello']
    },
    {
      title: 'Methodologies',
      skills: ['Waterfall', 'Agile', 'Scrum']
    },
    {
      title: 'Testing Life Cycle',
      skills: ['Requirement Analysis', 'Test Planning', 'Test Design', 'Test Execution', 'Defect Reporting']
    },
    {
      title: 'CI/CD',
      skills: ['Jenkins', 'GitLab CI', 'CircleCI']
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-gray-900/50 dark:to-gray-800/50 -z-10" />
      
      <div className="relative pt-20 lg:pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  <span className="block text-gray-900 dark:text-white">Software Quality</span>
                  <span className="block bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                    Assurance Engineer
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                  Ensuring software excellence through comprehensive testing and automation strategies.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <a href="/contact" 
                    className="bg-primary-500 text-white hover:bg-primary-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                    Get in touch
                  </a>
                  <a href="/projects"
                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700">
                    View Projects
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <SocialLink href="https://github.com/tamim-ar" icon={<FaGithub />} />
                  <SocialLink href="https://www.linkedin.com/in/tamim-ar" icon={<FaLinkedin />} />
                  <SocialLink href="https://www.facebook.com/hellotamim" icon={<FaFacebook />} />
                  <SocialLink href="https://www.instagram.com/tamim__ahasan" icon={<FaInstagram />} />
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex-1 relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />
                <img 
                  src="./image/dp.jpg" 
                  alt="Tamim Ahasan Rijon"
                  className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Replace the old technologies section with the new SkillSection */}
        <SkillSection 
          technologies={technologies}
          skillCategories={skillCategories}
        />
        
        {/* Competitive Programming section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Competitive Programming
            </h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Solved 300+ problems in OOP, DSA, and coding challenges of varying difficulty across online judges. 
              Focused on improving problem-solving, mastering algorithms, and enhancing logical thinking. 
              Also participated in multiple programming contests to refine competitive coding skills.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { platform: 'Beecrowd', id: '1016150', link: 'https://www.beecrowd.com.br/judge/en/profile/1016150' },
                { platform: 'LeetCode', id: 'tamimahasan', link: 'https://leetcode.com/tamimahasan' },
                { platform: 'Codeforces', id: 'tamimahasan', link: 'https://codeforces.com/profile/tamimahasan' },
                { platform: 'HackerRank', id: 'tamimahasan', link: 'https://www.hackerrank.com/tamimahasan' },
              ].map((profile) => (
                <a
                  key={profile.platform}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 hover:scale-105 transition-transform"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {profile.platform}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {profile.id}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
  >
    {icon}
  </a>
);

export default Home;

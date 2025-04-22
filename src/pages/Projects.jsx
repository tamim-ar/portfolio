import { motion } from 'framer-motion';
import { ProjectCard } from '../components/projects/ProjectCard';
import { Card } from '../components/common/Card';
import { useState } from 'react';
import { SearchInput } from '../components/common/SearchInput';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      name: 'RailSync',
      description: 'A Java-based Railway Management System featuring a GUI built with JFrame and Swing, integrated with MySQL database. Streamlines railway schedule management and ticket purchasing processes.',
      technologies: ['Java', 'Swing', 'JFrame', 'MySQL', 'GUI Development'],
      github: 'https://github.com/tamim-ar/rail-sync'
    },
    {
      name: 'CrisisCompass',
      description: 'A Disaster Management Web Application using MERN stack to facilitate efficient disaster response, including features for crisis management, donation collection, and resource allocation. Features an intuitive and responsive frontend using Tailwind CSS and Bootstrap.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Bootstrap'],
      github: 'https://github.com/tamim-ar/crisis-compass'
    },
    {
      name: 'AgriClassify',
      description: 'A web-based application for agricultural disease detection using deep learning models to identify plant diseases from user-submitted images. Built with Python, Flask, and modern web technologies.',
      technologies: ['Python', 'Flask', 'Deep Learning', 'HTML', 'CSS', 'Machine Learning'],
      github: 'https://github.com/tamim-ar/agri-classify'
    }
  ];

  const practiceRepos = [
    {
      category: 'Software Quality Assurance',
      repos: [
        { name: 'QA Explorer', link: 'https://github.com/tamim-ar/hackerrank', description: ' My personal repo for software testing insights and techniques' }
      ]
    },
    {
      category: 'Competitive Programming',
      repos: [
        { name: 'HackerRank Solutions', link: 'https://github.com/tamim-ar/hackerrank', description: 'Solutions to HackerRank programming challenges' },
        { name: 'Codeforces Solutions', link: 'https://github.com/tamim-ar/codeforces', description: 'Solutions to Codeforces contest problems' },
        { name: 'Beecrowd Solutions', link: 'https://github.com/tamim-ar/beecrowd', description: 'Solutions to Beecrowd programming problems' },
        { name: 'LeetCode Solutions', link: 'https://github.com/tamim-ar/leetcode', description: 'Solutions to LeetCode coding challenges' }
      ]
    },
    {
      category: 'Learning & Practice',
      repos: [
        { name: 'Python Practice', link: 'https://github.com/tamim-ar/python', description: 'Python programming practice and examples' },
        { name: 'HTML Practice', link: 'https://github.com/tamim-ar/html', description: 'HTML markup and structure examples' },
        { name: 'CSS Practice', link: 'https://github.com/tamim-ar/css', description: 'CSS styling and layout practice' },
        { name: 'JavaScript Practice', link: 'https://github.com/tamim-ar/javascript', description: 'JavaScript programming exercises' },
        { name: 'Java Practice', link: 'https://github.com/tamim-ar/java', description: 'Java programming practice and examples' }
      ]
    },
    {
      category: 'Framework Practice',
      repos: [
        { name: 'React Practice', link: 'https://github.com/tamim-ar/react', description: 'React.js components and application examples' },
        { name: 'Laravel Practice', link: 'https://github.com/tamim-ar/laravel', description: 'Laravel PHP framework practice projects' }
      ]
    }
  ];

  const categoryKeywords = {
    'Competitive Programming': ['algorithms', 'coding', 'problem solving', 'competitive'],
    'Learning & Practice': ['learning', 'tutorials', 'examples', 'practice'],
    'Framework Practice': ['frameworks', 'libraries', 'development']
  };

  const searchKeywords = searchQuery.toLowerCase().split(' ').filter(word => word.length > 0);

  const filteredProjects = projects.filter(project => {
    if (searchKeywords.length === 0) return true;

    const searchableText = [
      project.name,
      project.description,
      ...project.technologies,
      project.github
    ].join(' ').toLowerCase();

    return searchKeywords.every(keyword => searchableText.includes(keyword));
  });

  const filteredPracticeRepos = practiceRepos.map(category => ({
    ...category,
    repos: category.repos.filter(repo => {
      if (searchKeywords.length === 0) return true;

      const categorySpecificKeywords = categoryKeywords[category.category] || [];
      const searchableText = [
        repo.name,
        repo.description,
        category.category,
        ...categorySpecificKeywords,
        repo.link
      ].join(' ').toLowerCase();

      return searchKeywords.every(keyword => searchableText.includes(keyword));
    })
  })).filter(category => category.repos.length > 0);

  const hasResults = filteredProjects.length > 0 || filteredPracticeRepos.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16 max-w-7xl"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Project Portfolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A collection of development projects, quality assurance work, and programming practice across various technologies
        </p>
      </div>

      <div className="sticky top-20 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-4 mb-8">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search all projects, repositories, and technologies..."
          className="w-full"
        />
      </div>

      {!hasResults && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No results found for "{searchQuery}"
          </p>
        </div>
      )}

      {filteredProjects.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </section>
      )}

      {filteredPracticeRepos.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Learning & Practice
          </h2>
          {filteredPracticeRepos.map((category) => (
            <div key={category.category} className="mb-12">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.repos.map((repo) => (
                  <a 
                    key={repo.name}
                    href={repo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card className="hover:scale-105 transition-transform h-full">
                      <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                        {repo.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {repo.description}
                      </p>
                      <div className="mt-4 text-primary-500 dark:text-primary-400">
                        View Repository →
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}
    </motion.div>
  );
};

export default Projects;

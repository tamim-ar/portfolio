import { Card } from '../common/Card';

export const ProjectCard = ({ name, description, technologies, github }) => (
  <Card>
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{name}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>
    <div className="mb-4">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies & Tools:</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center"
    >
      View Project →
    </a>
  </Card>
);

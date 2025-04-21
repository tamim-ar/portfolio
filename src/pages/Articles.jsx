import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { getAllArticles } from '../utils/articleUtils';
import { SearchInput } from '../components/common/SearchInput';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadArticles = async () => {
      const allArticles = await getAllArticles();
      setArticles(allArticles);
    };
    loadArticles();
  }, []);

  const searchKeywords = searchQuery.toLowerCase().split(' ').filter(word => word.length > 0);

  const filteredArticles = articles.filter(article => {
    if (searchKeywords.length === 0) return true;

    const searchableText = [
      article.title,
      article.excerpt,
      ...article.tags,
      article.content
    ].join(' ').toLowerCase();

    return searchKeywords.every(keyword => searchableText.includes(keyword));
  });

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'MMMM dd, yyyy');
    } catch (error) {
      return dateString;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Articles</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Technical articles about software testing, automation strategies, quality assurance best practices, and development workflows.
        </p>
        <div className="mb-8">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by title, content, or tags..."
            className="w-full"
          />
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <Link
            key={article.slug}
            to={`/articles/${article.slug}`}
            className="card p-6 hover:transform hover:scale-105 transition-all flex flex-col"
          >
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {article.title}
              </h2>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {formatDate(article.date)}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 
                             text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <span className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
        {filteredArticles.length === 0 && (
          <div className="col-span-full text-center py-8 text-gray-500 dark:text-gray-400">
            No articles found matching your search.
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Articles;

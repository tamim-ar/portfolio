import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { getAllPosts } from '../utils/blogUtils';
import { SearchInput } from '../components/common/SearchInput';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };
    loadPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Insights and articles about software testing, automation strategies, quality assurance best practices, and development workflows.
        </p>
        <div className="flex justify-end">
          <div className="w-full max-w-md">
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search blog posts..."
            />
          </div>
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="card p-6 hover:transform hover:scale-105 transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {post.title}
            </h2>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {formatDate(post.date)}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 
                           text-primary-700 dark:text-primary-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
        {filteredPosts.length === 0 && (
          <div className="col-span-full text-center py-8 text-gray-500 dark:text-gray-400">
            No blog posts found matching your search.
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Blog;

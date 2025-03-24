import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { getPostBySlug } from '../utils/blogUtils';
import { FaArrowLeft } from 'react-icons/fa';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const postData = await getPostBySlug(slug);
      setPost(postData);
    };
    loadPost();
  }, [slug]);

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'MMMM dd, yyyy');
    } catch (error) {
      return dateString;
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <button
        onClick={() => navigate('/blog')}
        className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
      >
        <FaArrowLeft />
        <span>Back to Blog</span>
      </button>
      <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <div className="text-gray-600 dark:text-gray-400 mb-6">
          {formatDate(post.date)}
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 
                       text-primary-700 dark:text-primary-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="markdown-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </motion.div>
  );
};

export default BlogPost;

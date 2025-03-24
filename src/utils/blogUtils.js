import blogData from '../content/blog/posts.json';

export const getAllPosts = async () => {
  return blogData.posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getPostBySlug = async (slug) => {
  const post = blogData.posts.find(post => post.slug === slug);
  if (!post) {
    console.error(`Post not found: ${slug}`);
    return null;
  }
  return post;
};

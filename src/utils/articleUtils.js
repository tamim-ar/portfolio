import articleData from '../content/articles/articles.json';

export const getAllArticles = async () => {
  return articleData.articles.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getArticleBySlug = async (slug) => {
  const article = articleData.articles.find(article => article.slug === slug);
  if (!article) {
    console.error(`Article not found: ${slug}`);
    return null;
  }
  return article;
};

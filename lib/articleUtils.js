import articleData from '../content/articles/articles.json';

export function getAllArticles() {
  return [...articleData.articles].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug) {
  return articleData.articles.find((article) => article.slug === slug) ?? null;
}

import { notFound } from 'next/navigation';
import ArticlePage from '../../../components/articles/ArticlePage';
import { getAllArticles, getArticleBySlug } from '../../../lib/articleUtils';

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!getArticleBySlug(slug)) notFound();
  return <ArticlePage />;
}

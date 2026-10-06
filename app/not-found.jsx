import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container min-h-[60vh] flex flex-col items-center justify-center text-center py-24">
      <p className="text-primary-500 font-semibold mb-2">404</p>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Page not found</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">The page you are looking for does not exist.</p>
      <Link href="/" className="button-primary">Back Home</Link>
    </div>
  );
}

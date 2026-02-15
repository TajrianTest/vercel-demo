'use client';

import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const username = searchParams.get('username') || process.env.NEXT_PUBLIC_USERNAME || 'Guest';

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Hi {username}, Welcome to Opti DAM
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium">
          The best DAM in the market
        </p>
      </main>
    </div>
  );
}

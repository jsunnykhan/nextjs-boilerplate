'use client';

import { useGetHealthReportQuery } from '@/services/health-service';

export default function Home() {
  const { data, isLoading } = useGetHealthReportQuery();

  if (isLoading) return <div className="px-5 py-7"> loading ...</div>;

  return (
    <main className="flex min-h-screen items-start px-5 py-7">
      <div className="flex space-x-2 items-center">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <p>{data.message}</p>
      </div>
    </main>
  );
}

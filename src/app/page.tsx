'use client';

import { useGetAllTodosQuery } from '@/services/Todo';

export default function Home() {
  const { data, isLoading, isError } = useGetAllTodosQuery();

  console.log({ data, isLoading, isError });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {data &&
        data.map((todo: any, index: number) => (
          <div key={index}>{todo.title}</div>
        ))} */}
    </main>
  );
}

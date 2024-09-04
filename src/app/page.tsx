'use client';
import { useSession } from 'next-auth/react';

export default function Home() {
  // const session = await auth();
  const { data: session } = useSession();
  console.log('sessions', session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="bg-green-600">Hello</button>
    </main>
  );
}

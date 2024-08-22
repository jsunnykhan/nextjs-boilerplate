import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json([
    { title: '1st todo' },
    { title: '2nd todo' },
    { title: '3rd todo' },
  ]);
}

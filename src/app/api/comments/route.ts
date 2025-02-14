import { type NextRequest, NextResponse } from 'next/server';

import { type Comment } from '@/app/comments/_components/comments';

const comments: Comment[] = [
  {
    id: 1,
    body: 'This is a comment',
    postId: 1,
  },
  {
    id: 2,
    body: 'This is another comment',
    postId: 1,
  },
];

export async function GET() {
  try {
    const data: Comment[] = await new Promise(resolve => {
      setTimeout(() => {
        resolve(comments);
      }, 2000);
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const randomUUID = Math.floor(Math.random() * 100000);
    comments.push({
      id: randomUUID,
      body: body,
      postId: 1,
    });

    return NextResponse.json({});
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

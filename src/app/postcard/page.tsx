import Container from '@/components/Container';
import { posts } from '@/data/post-data';

import PostCard from './_components/post-card';

export default function Page() {
  return (
    <main>
      <Container className="flex-col gap-y-6 py-6">
        <div className="text-xl font-semibold">
          Normal Component Rendering with props
        </div>
        <div className="flex gap-4">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </main>
  );
}

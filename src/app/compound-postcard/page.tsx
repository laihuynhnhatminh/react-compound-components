import Container from '@/components/Container';
import { posts } from '@/data/post-data';

import {
  CompoundPostCard,
  CompoundPostCardActions,
  CompoundPostCardContent,
  CompoundPostCardTitle,
  CompoundPostCardUser,
} from './_components/post-card-compount';

export default function Page() {
  return (
    <main>
      <Container className="flex-col gap-y-6 py-6">
        <h1 className="font-semi text-xl">Compound Components</h1>
        <div className="flex gap-4">
          {posts.map(post => (
            <CompoundPostCard key={post.id} post={post}>
              <CompoundPostCardTitle />
              <CompoundPostCardContent />
              <CompoundPostCardUser />
              <CompoundPostCardActions />
            </CompoundPostCard>
          ))}
        </div>
      </Container>
    </main>
  );
}

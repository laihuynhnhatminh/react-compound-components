import Container from '@/components/Container';
import { posts } from '@/data/post-data';

import {
  CustomPostCard,
  CustomPostCardActions,
  CustomPostCardContent,
  CustomPostCardTitle,
  CustomPostCardUser,
} from './_components/custom-postcard';

export default function Page() {
  return (
    <main>
      <Container className="flex-col gap-y-6 py-6">
        <div className="text-xl font-semibold">
          Highly customizable PostCard
        </div>
        <div className="flex gap-4">
          {posts.map(post => (
            <CustomPostCard key={post.id}>
              <CustomPostCardTitle>{post.title}</CustomPostCardTitle>
              <CustomPostCardContent>{post.content}</CustomPostCardContent>
              <CustomPostCardUser>{`By ${post.user.name}`}</CustomPostCardUser>
              <CustomPostCardActions>
                <button className="rounded-lg bg-gradient-to-r from-white to-yellow-500 px-4 py-2 text-neutral-900 hover:opacity-80">
                  Read More
                </button>
                <button className="rounded-lg bg-gradient-to-r from-white to-yellow-500 px-4 py-2 text-neutral-900 hover:opacity-80">
                  Comments
                </button>
              </CustomPostCardActions>
            </CustomPostCard>
          ))}
        </div>
      </Container>
    </main>
  );
}

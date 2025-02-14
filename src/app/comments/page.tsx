import Container from '@/components/Container';

import Comments from './_components/comments';

export default function Page() {
  return (
    <main>
      <Container className="flex-col gap-y-6 py-6">
        <h1 className="font-semi text-xl">Comments</h1>
        <Comments />
      </Container>
    </main>
  );
}

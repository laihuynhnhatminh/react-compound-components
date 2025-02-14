/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import useCreateComment from '../_hooks/use-create-comment';
import useFetchComments from '../_hooks/use-fetch-comments';

export type Comment = {
  id: number;
  body: string;
  postId: number;
};

export default function Comments() {
  const { comments, loading, error, refetch } = useFetchComments();
  const { commentRef, isSubmitting, submitError } = useCreateComment(refetch);

  return (
    <div>
      <h1>Comments</h1>
      <textarea
        className="border-border w-full border"
        ref={commentRef}
        disabled={isSubmitting}
      />
      {submitError && <p>{submitError}</p>}
      <ul>
        {comments?.map(comment => <li key={comment.id}>{comment.body}</li>)}
      </ul>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

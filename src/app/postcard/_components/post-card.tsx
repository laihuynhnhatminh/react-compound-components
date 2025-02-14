import type { Post } from '@/data/post-data';

type PostCardProps = {
  isOnProfile?: boolean;
  isOnSavedScreen?: boolean;
  post: Post;
};

/**
 * - Simple Components with a few conditional props that affect the ui of the component
 * - If this component is being used once or twice and very specific then we can use this
 * - If this component is being used multiple times and in different places with small changes/details then we should use compound components
 */
export default function PostCard({
  isOnProfile,
  isOnSavedScreen,
  post,
}: PostCardProps) {
  return (
    <div className="flex w-[300px] flex-col gap-2 rounded-md bg-neutral-800 p-2 text-white">
      <h2 className="text-lg font-semibold">{post.title}</h2>
      <p>{post.content}</p>
      {!isOnProfile && (
        <p className="text-sm text-neutral-400">By {post.user.name}</p>
      )}

      {!isOnSavedScreen && (
        <div className="flex flex-row gap-2">
          <button className="rounded-lg bg-gradient-to-r from-white to-yellow-500 px-4 py-2 text-neutral-900 hover:opacity-80">
            Read More
          </button>
          <button className="rounded-lg bg-gradient-to-r from-white to-yellow-500 px-4 py-2 text-neutral-900 hover:opacity-80">
            Comments
          </button>
        </div>
      )}
    </div>
  );
}

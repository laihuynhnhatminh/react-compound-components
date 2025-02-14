'use client';

import { createContext, type PropsWithChildren, useContext } from 'react';

import type { Post } from '@/data/post-data';

type CompoundPostCardContextType = {
  post: Post;
};

const CompoundPostCardContext = createContext<
  CompoundPostCardContextType | undefined
>(undefined);

function useCompoundPostCardContext() {
  const context = useContext(CompoundPostCardContext);

  if (!context) {
    throw new Error(
      'CompoundPostCardContext must be used within a CompoundPostCard',
    );
  }

  return context;
}

type CompoundPostCardProps = PropsWithChildren & {
  post: Post;
};

function CompoundPostCard({ post, children }: CompoundPostCardProps) {
  return (
    <CompoundPostCardContext.Provider value={{ post }}>
      <div className="flex w-[300px] flex-col gap-2 rounded-md bg-neutral-800 p-2 text-white">
        {children}
      </div>
    </CompoundPostCardContext.Provider>
  );
}

CompoundPostCard.Title = function CompoundPostCardTitle() {
  const { post } = useCompoundPostCardContext();

  return <h2 className="text-lg font-semibold">{post.title}</h2>;
};

CompoundPostCard.Content = function CompoundPostCardContent() {
  const { post } = useCompoundPostCardContext();

  return <p>{post.content}</p>;
};

CompoundPostCard.User = function CompoundPostCardUser() {
  const { post } = useCompoundPostCardContext();

  return <p className="text-sm text-neutral-400">By {post.user.name}</p>;
};

CompoundPostCard.Actions = function CompoundPostCardActions() {
  return (
    <div className="flex flex-row gap-2">
      <button className="rounded-lg bg-gradient-to-r from-white to-yellow-500 px-4 py-2 text-neutral-900 hover:opacity-80">
        Read More
      </button>
      <button className="rounded-lg bg-gradient-to-r from-white to-yellow-500 px-4 py-2 text-neutral-900 hover:opacity-80">
        Comments
      </button>
    </div>
  );
};

const CompoundPostCardTitle = CompoundPostCard.Title;
const CompoundPostCardContent = CompoundPostCard.Content;
const CompoundPostCardUser = CompoundPostCard.User;
const CompoundPostCardActions = CompoundPostCard.Actions;

export {
  CompoundPostCard,
  CompoundPostCardActions,
  CompoundPostCardContent,
  CompoundPostCardTitle,
  CompoundPostCardUser,
};

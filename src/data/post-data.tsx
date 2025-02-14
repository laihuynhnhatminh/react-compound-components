export type Post = {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
};

export const posts: Post[] = [
  {
    id: 1,
    title: 'Hello, World!',
    content: 'This is my first post!',
    user: {
      id: 1,
      name: 'Alice',
    },
  },
  {
    id: 2,
    title: 'Hello, World!',
    content: 'This is my first post',
    user: {
      id: 2,
      name: 'Bob',
    },
  },
  {
    id: 3,
    title: 'Hello, World!',
    content: 'This is my first post',
    user: {
      id: 3,
      name: 'Charlie',
    },
  },
];

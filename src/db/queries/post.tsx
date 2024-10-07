import type { Post } from '@/types/types';
import { db } from '@/db';

// Modify PostWithData to exclude the full comments array and include the _count.comments
export type PostWithData = Omit<Post, 'comments'> & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

export function fetchPostsBySearchTerm(term: string): Promise<PostWithData[]> {
  return db.post.findMany({
    where: {
      OR: [
        { title: { contains: term } },
        { content: { contains: term } }
      ]
    },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } }
    }
  }) as Promise<PostWithData[]>;  // Cast the return type to PostWithData[]
}

export function fetchPostsByTopicSlug(slug: string): Promise<PostWithData[]> {
  return db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } }
    }
  }) as Promise<PostWithData[]>;  // Cast the return type to PostWithData[]
}

export function fetchTopPosts(): Promise<PostWithData[]> {
  return db.post.findMany({
    orderBy: [{
      comments: {
        _count: 'desc'
      }
    }],
    take: 5,
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } }
    }
  }) as Promise<PostWithData[]>;  // Cast the return type to PostWithData[]
}

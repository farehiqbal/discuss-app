import { db } from '@/db';
import { cache } from 'react';
import { Comment } from '@/types/types';

// Define a specific type for the user field that includes only the selected properties
type MinimalUser = {
  name: string | null;
  image: string | null;
};

// Update the type definition to reflect the minimal user fields
export type CommentWithAuthorWithoutRelations = Omit<Comment, 'post' | 'children' | 'user'> & {
  user: MinimalUser;
};

export const fetchCommentsByPostId = cache((
  postId: string
): Promise<CommentWithAuthorWithoutRelations[]> => {
  console.log('Making a query!');

  return db.comment.findMany({
    where: { postId },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  }) as Promise<CommentWithAuthorWithoutRelations[]>;  // Cast the result to the correct type
});

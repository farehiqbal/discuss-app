// src/types/types.ts

export type User = {
    id: string;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    accounts: Account[];
    sessions: Session[];
    Post: Post[];
    Comment: Comment[];
  };
  
  export type Account = {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    user: User;
  };
  
  export type Session = {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Date;
    user: User;
  };
  
  export type VerificationToken = {
    identifier: string;
    token: string;
    expires: Date;
  };
  
  export type Topic = {
    id: string;
    slug: string;
    description: string;
    posts: Post[];
    createdAt: Date;
    updatedAt: Date;
  };
  
  export type Post = {
    id: string;
    title: string;
    content: string;
    userId: string;
    topicId: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    topic: Topic;
    comments: Comment[];
  };
  
  export type Comment = {
    id: string;
    content: string;
    postId: string;
    userId: string;
    parentId?: string | null;
    createdAt: Date;
    updatedAt: Date;
    parent?: Comment | null;
    post: Post;
    user: User;
    children: Comment[];
  };
  
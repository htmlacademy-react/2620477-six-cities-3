import { User } from './user';

export type Comment = {
  id: number;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type Comments = Comment[];

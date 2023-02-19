import { Comment } from "./comment";

export interface Post {
  id: string;
  title: string;
  text: string;
  date: Date;
  username: string;
  tags: string[];
  comments: Comment[];
  avatar: string;
}

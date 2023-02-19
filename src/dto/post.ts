export interface CreatePostDto {
  username: string;
  title: string;
  text: string;
  tags: string[];
  avatar: string;
}

export interface UpdatePostDto {
  text: string;
}

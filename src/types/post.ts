import {User} from "./user"

export interface Post{
    id: string;
    title: string;
    text: string;
    date: Date;
    username: string;
    tags: string[];
}
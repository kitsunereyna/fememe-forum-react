import axios from "axios";
import { CreatePostDto } from "../dto/post";
import { BASE_URL } from "./api";

export const getAllPosts = async () => {
  const response = await axios.get(`${BASE_URL}/api/posts`);

  return response;
};

export const getPostById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/api/posts/${id}`);

  return response;
};

export const createPost = async (dto: CreatePostDto) => {
  const response = await axios.post(`${BASE_URL}/api/posts`, dto);

  return response;
};

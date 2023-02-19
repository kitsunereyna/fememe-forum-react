import axios from "axios";
import { CreateCommentDto } from "../dto/comment";
import { BASE_URL } from "./api";

export const createComment = async (dto: CreateCommentDto, id: string) => {
  const response = await axios.post(`${BASE_URL}/api/posts/comment/${id}`, dto);

  return response;
};

export const getCommentsByPostId = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/api/posts/comment/${id}`);

  return response;
};

export const deleteByCommentId = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/api/posts/comment/${id}`);

  return response;
};

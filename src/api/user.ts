import axios from "axios";
import { AuthResponse, LoginDto, RegisterDto } from "../dto/user";
import { BASE_URL } from "./api";

export const loginUser = async (dto: LoginDto) => {
  const response = await axios.post(`${BASE_URL}/users/login`, dto);

  return response;
};

export const registerUser = async (dto: RegisterDto) => {
  const response = await axios.post(`${BASE_URL}/users/signup`, dto);

  return response;
};

export const deleteUser = async (username: string) => {
  const response = await axios.delete(`${BASE_URL}/users/${username}`);

  return response;
};

export const saveAuthToLocalStorage = (authRes: AuthResponse) => {
  localStorage.setItem("auth", JSON.stringify(authRes));
};

export const getAuthFromLocalStorage = () => {
  const res = localStorage.getItem("auth");

  return JSON.parse(res || "null");
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

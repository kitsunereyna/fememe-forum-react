import { IUser } from "../types/user";

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  username: string;
  password: string;
  avatar: string;
}

export interface AuthResponse {
  token: string;
  user: IUser;
}

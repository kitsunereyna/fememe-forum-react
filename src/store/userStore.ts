import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IUser } from "../types/user";

interface UserState {
  token: string | null;
  user: IUser | null;
  isAuth: boolean;

  fillUserState: (token: string, user: IUser) => void;
}

export const useUserStore = create<UserState>(set => ({
  token: null,
  user: null,
  isAuth: false,
  fillUserState: (token: string, user: IUser) =>
    set({ token: token, user: user, isAuth: true }),
}));

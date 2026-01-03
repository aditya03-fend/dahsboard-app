import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState } from "../types/auth.types";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      login: () => set({ isAuth: true }),
      logout: () => set({ isAuth: false }),
    }),
    {
      name: "auth-storage",
    }
  )
);

import { create } from "zustand";
import { StoreInterface } from "./types/storeInterface";

export const useAppStore = create<StoreInterface>((set) => ({
  scrollPosition: 0,
  setScrollPosition: (scrollPosition) => set({ scrollPosition }),

  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),

  connection: false,
  setConnection: (connection) => set({ connection }),
}));

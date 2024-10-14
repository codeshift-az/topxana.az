import { create } from 'zustand';

interface Layout {
  isFixed: boolean;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setIsFixed: (isFixed: boolean) => void;
}

export const useLayoutStore = create<Layout>((set) => ({
  isFixed: false,
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsFixed: (isFixed) => set({ isFixed }),
}));

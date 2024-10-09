import { create } from 'zustand';

interface HeaderFixed {
  isFixed: boolean;
  setIsFixed: (isFixed: boolean) => void;
}

export const useHeaderFixedStore = create<HeaderFixed>((set) => ({
  isFixed: false,
  setIsFixed: (isFixed) => set({ isFixed }),
}));

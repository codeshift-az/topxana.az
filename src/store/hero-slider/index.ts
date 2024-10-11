import { create } from 'zustand';

import { HeroSlider } from '@/types';

import { getHeroSlider } from '@/api/hero-slider';

interface HeroSliderState {
  data: HeroSlider[] | null;
  isLoading: boolean;
  loadInfo: () => void;
}

export const useHeroSliderStore = create<HeroSliderState>((set, get) => ({
  data: null,
  isLoading: false,
  loadInfo: () => {
    const state = get();

    if (!state.data) {
      set({ isLoading: true });
      getHeroSlider()
        .then((info) => {
          set({ data: info });
        })
        .catch((error) => console.log(error))
        .finally(() => set({ isLoading: false }));
    }
  },
}));

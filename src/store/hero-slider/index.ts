import { create } from 'zustand';

import { HeroSlider } from '@/types';

interface HeroSliderState {
  state: HeroSlider[];
  updateInfo: (info: HeroSlider[]) => void;
}

export const useHeroSliderStore = create<HeroSliderState>((set) => ({
  state: [] as HeroSlider[],
  updateInfo: (info) => set({ state: info }),
}));

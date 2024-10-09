import { create } from 'zustand';

import { PaginatedResponse, Service } from '@/types';

interface HeroSliderState {
  state: PaginatedResponse<Service>;
  updateInfo: (info: PaginatedResponse<Service>) => void;
}

export const useServicesStore = create<HeroSliderState>((set) => ({
  state: {} as PaginatedResponse<Service>,
  updateInfo: (info) => set({ state: info }),
}));

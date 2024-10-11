import { create } from 'zustand';

import { Service } from '@/types';

import { getServices } from '@/api/services';

interface ServiceState {
  state: Service[] | null;
  isLoading: boolean;
  loadInfo: () => void;
}

export const useServicesStore = create<ServiceState>((set, get) => ({
  state: null,
  isLoading: false,
  loadInfo: () => {
    const state = get();

    if (!state.state) {
      set({ isLoading: true });
      getServices()
        .then((info) => set({ state: info }))
        .catch((error) => console.log(error))
        .finally(() => set({ isLoading: false }));
    }
  },
}));

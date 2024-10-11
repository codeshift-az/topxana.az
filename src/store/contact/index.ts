import { create } from 'zustand';

import { ContactInformation } from '@/types';

import { getContactInformation } from '@/api/contact';

interface ContactState {
  data: ContactInformation | null;
  isLoading: boolean;
  loadInfo: () => void;
}

export const useContactStore = create<ContactState>((set, get) => ({
  data: null,
  isLoading: false,
  loadInfo: () => {
    const state = get();

    if (!state.data) {
      set({ isLoading: true });
      getContactInformation()
        .then((data) => set({ data: data }))
        .catch((error) => console.log(error))
        .finally(() => set({ isLoading: false }));
    }
  },
}));

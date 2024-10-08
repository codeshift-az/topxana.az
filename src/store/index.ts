import { create } from 'zustand';

import { ContactInformation } from '@/types';

interface ContactState {
  state: ContactInformation;
  updateInfo: (info: ContactInformation) => void;
}

export const useContactStore = create<ContactState>((set) => ({
  state: {} as ContactInformation,
  updateInfo: (info) => set({ state: info }),
}));

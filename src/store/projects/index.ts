import { create } from 'zustand';

interface ProjectsFilterState {
  activeService: string | null;
  setActiveService: (service: string) => void;
}

export const useProjectsFilterStore = create<ProjectsFilterState>((set) => ({
  activeService: null,
  setActiveService: (service) => set({ activeService: service }),
}));

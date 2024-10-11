import { create } from 'zustand';

import { Project } from '@/types';

import { getProjects } from '@/api/projects';

interface ProjectsFilterState {
  activeService: string | null;
  setActiveService: (service: string) => void;
}

interface ProjectsState {
  data: Project[] | null;
  isLoading: boolean;
  loadInfo: () => void;
}

export const useProjectsFilterStore = create<ProjectsFilterState>((set) => ({
  activeService: null,
  setActiveService: (service) => set({ activeService: service }),
}));

export const useProjectsStore = create<ProjectsState>((set, get) => ({
  data: null,
  isLoading: false,
  loadInfo: () => {
    const state = get();

    if (!state.data) {
      set({ isLoading: true });
      getProjects()
        .then((info) => {
          set({ data: info });
        })
        .catch((error) => console.log(error))
        .finally(() => set({ isLoading: false }));
    }
  },
}));

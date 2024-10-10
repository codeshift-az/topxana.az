import { create } from 'zustand';

import { Project } from '@/types';

interface ProjectsFilterState {
  activeService: string | null;
  setActiveService: (service: string) => void;
}

interface ProjectsState {
  state: Project[];
  updateInfo: (info: Project[]) => void;
}

export const useProjectsFilterStore = create<ProjectsFilterState>((set) => ({
  activeService: null,
  setActiveService: (service) => set({ activeService: service }),
}));

export const useProjectsStore = create<ProjectsState>((set) => ({
  state: [] as Project[],
  updateInfo: (info) => set({ state: info }),
}));

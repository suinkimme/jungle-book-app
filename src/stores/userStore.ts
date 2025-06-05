import { create } from 'zustand';

interface IUserStore {
  id: number | null;
  login: string | null;
  name: string | null;
  avatarUrl: string | null;
  setUser: (user: Omit<IUserStore, 'setUser'>) => void;
}

export const useUserStore = create<IUserStore>(set => ({
  id: null,
  login: null,
  name: null,
  avatarUrl: null,
  setUser: user => set(user),
}));

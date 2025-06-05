import { create } from 'zustand';

interface IUserStore {
  id: number;
  login: string;
  name: string;
  avatarUrl: string;
}

export const useUserStore = create<IUserStore>(set => ({
  id: 0,
  login: '',
  name: '',
  avatarUrl: '',
  setUser: (user: IUserStore) => set(user),
}));

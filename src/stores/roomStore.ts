import { create } from 'zustand';
import type { IRoom } from '@/types';

interface IRoomStore {
  rooms: IRoom[];
  setRooms: (rooms: IRoom[]) => void;
}

export const useRoomStore = create<IRoomStore>(set => ({
  rooms: [],
  setRooms: (rooms: IRoom[]) => set({ rooms }),
}));

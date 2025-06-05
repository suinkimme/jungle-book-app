import { create } from 'zustand';
import type { IRoom } from '@/types';

interface IRoomStore {
  rooms: IRoom[];
}

export const useRoomStore = create<IRoomStore>(set => ({
  rooms: [],
  setRooms: rooms => set({ rooms }),
}));

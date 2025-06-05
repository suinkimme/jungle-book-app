import { create } from 'zustand';
import type { IRoom } from '@/types';
import { getRooms as getRoomsApi } from '@/api';

interface IRoomStore {
  rooms: IRoom[];
  getRooms: () => IRoom[];
  updateRoomStatus: (roomId: number, isReserved: boolean) => void;
  fetchRooms: () => Promise<void>;
}

export const useRoomStore = create<IRoomStore>((set, get) => ({
  rooms: [],
  getRooms: () => get().rooms,
  updateRoomStatus: (roomId, isReserved) => {
    set(state => ({
      rooms: state.rooms.map(room =>
        room.room_id === roomId ? { ...room, is_reserved: isReserved } : room,
      ),
    }));
  },
  fetchRooms: async () => {
    try {
      const response = await getRoomsApi();
      set({ rooms: response });
    } catch (error) {
      console.error(error);
    }
  },
}));

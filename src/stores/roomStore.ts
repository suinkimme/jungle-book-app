import { create } from 'zustand';
import type { IRoom } from '@/types';

interface IRoomStore {
  rooms: IRoom[];
  getRooms: () => IRoom[];
  updateRoomStatus: (roomId: number, isReserved: boolean) => void;
  setRooms: (rooms: IRoom[]) => void;
}

export const useRoomStore = create<IRoomStore>((set, get) => ({
  rooms: [],
  getRooms: () => get().rooms,
  updateRoomStatus: (roomId, isReserved) => {
    set(state => ({
      rooms: state.rooms.map(room =>
        room.room_id === roomId ? { ...room, can_reserve: isReserved } : room,
      ),
    }));
  },
  setRooms: rooms => set({ rooms }),
}));

import { create } from 'zustand';

interface IReservationStore {
  roomName: string | null;
  setRoomName: (roomName: string | null) => void;
}

export const useReservationStore = create<IReservationStore>(set => ({
  roomName: null,
  setRoomName: roomName => set({ roomName }),
}));

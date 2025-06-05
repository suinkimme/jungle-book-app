import { create } from 'zustand';

interface IReservationStore {
  roomName: string | null;
  reservedRoomIds: Set<number>;
  roomStatuses: Record<number, 'available' | 'unavailable'>;
  setRoomName: (roomName: string | null) => void;
  addReservedRoom: (roomId: number) => void;
  removeReservedRoom: (roomId: number) => void;
  isRoomReserved: (roomId: number) => boolean;
  setRoomStatus: (roomId: number, status: 'available' | 'unavailable') => void;
  getRoomStatus: (
    roomId: number,
    initialStatus: 'available' | 'unavailable',
  ) => 'available' | 'unavailable';
}

export const useReservationStore = create<IReservationStore>(set => ({
  roomName: null,
  reservedRoomIds: new Set(),
  roomStatuses: {},
  setRoomName: roomName => set({ roomName }),
  addReservedRoom: roomId =>
    set(state => ({
      reservedRoomIds: new Set([...state.reservedRoomIds, roomId]),
      roomStatuses: { ...state.roomStatuses, [roomId]: 'unavailable' },
    })),
  removeReservedRoom: roomId =>
    set(state => {
      const newSet = new Set(state.reservedRoomIds);
      newSet.delete(roomId);
      return {
        reservedRoomIds: newSet,
        roomStatuses: { ...state.roomStatuses, [roomId]: 'available' },
      };
    }),
  isRoomReserved: roomId => {
    const state = useReservationStore.getState();
    return state.reservedRoomIds.has(roomId);
  },
  setRoomStatus: (roomId, status) =>
    set(state => ({
      roomStatuses: { ...state.roomStatuses, [roomId]: status },
    })),
  getRoomStatus: (roomId, initialStatus) => {
    const state = useReservationStore.getState();
    return state.roomStatuses[roomId] ?? initialStatus;
  },
}));

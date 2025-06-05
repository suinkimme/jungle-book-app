import { reservationRoom } from '@/api';

export const useReservation = () => {
  const handleReservation = async (roomId: number) => {
    try {
      const response = await reservationRoom(roomId);
    } catch (error) {
      console.error(error);
    }
  };

  return { handleReservation };
};

import { reservationRoom } from '@/api';

export const useReservation = () => {
  const handleReservation = async (roomId: number) => {
    try {
      const response = await reservationRoom(roomId);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return { handleReservation };
};

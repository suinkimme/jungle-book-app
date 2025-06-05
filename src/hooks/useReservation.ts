import { reservationRoom } from '@/api';
import { toast } from 'sonner';

export const useReservation = () => {
  const handleReservation = async (roomId: number) => {
    try {
      const response = await reservationRoom(roomId);
      toast.error(response.message);
    } catch (error) {
      toast.error('예약에 실패했습니다.');
    }
  };

  return { handleReservation };
};

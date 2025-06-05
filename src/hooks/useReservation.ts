import { reservationRoom, cancelReservation } from '@/api';
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

  const handleCancel = async () => {
    try {
      const response = await cancelReservation();
      toast.error(response.message);
    } catch (error) {
      console.log(error);
      toast.error('예약 취소에 실패했습니다.');
    }
  };
  return { handleReservation, handleCancel };
};

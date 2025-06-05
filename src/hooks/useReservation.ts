import { reservationRoom, cancelReservation } from '@/api';
import { toast } from 'sonner';
import { useRoomStore } from '@/stores/roomStore';

export const useReservation = () => {
  const { updateRoomStatus } = useRoomStore();

  const handleReservation = async (roomId: number) => {
    // 낙관적 업데이트
    updateRoomStatus(roomId, true);

    try {
      const response = await reservationRoom(roomId);
      toast.success(response.message);
    } catch (error) {
      // 실패 시 원래 상태로 되돌림
      updateRoomStatus(roomId, false);
      toast.error('예약에 실패했습니다.');
    }
  };

  const handleCancel = async (roomId: number) => {
    // 낙관적 업데이트
    updateRoomStatus(roomId, false);

    try {
      const response = await cancelReservation();
      toast.success(response.message);
    } catch (error) {
      // 실패 시 원래 상태로 되돌림
      updateRoomStatus(roomId, true);
      toast.error('예약 취소에 실패했습니다.');
    }
  };

  return { handleReservation, handleCancel };
};

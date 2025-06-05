import { reservationRoom, cancelReservation } from '@/api';
import { toast } from 'sonner';
import { useRoomStore } from '@/stores/roomStore';
import { useReservationStore } from '@/stores/reservationStore';
import { userStorage } from '@/storage';

export const useReservation = () => {
  const { updateRoomStatus } = useRoomStore();
  const { setRoomName } = useReservationStore();
  const user = userStorage.get();

  const handleReservation = async (roomId: number, roomName: string) => {
    if (!user) {
      toast.error('로그인 후 이용해주세요.');
      return;
    }

    // 낙관적 업데이트
    updateRoomStatus(roomId, true);
    setRoomName(roomName);

    try {
      const response = await reservationRoom(roomId);
      toast.success(response.message);
    } catch (error) {
      // 실패 시 원래 상태로 되돌림
      updateRoomStatus(roomId, false);
      setRoomName(null);
      toast.error('예약에 실패했습니다.');
    }
  };

  const handleCancel = async (roomId: number) => {
    if (!user) {
      toast.error('로그인 후 이용해주세요.');
      return;
    }

    // 낙관적 업데이트
    updateRoomStatus(roomId, false);
    setRoomName(null);

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

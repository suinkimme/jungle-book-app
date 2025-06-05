import { reservationRoom, cancelReservation } from '@/api';
import { toast } from 'sonner';
import { useRoomStore } from '@/stores/roomStore';
import { useReservationStore } from '@/stores/reservationStore';
import { userStorage } from '@/storage';

export const useReservation = () => {
  const { updateRoomStatus } = useRoomStore();
  const { roomName, setRoomName } = useReservationStore();
  const user = userStorage.get();

  const handleReservation = async (roomId: number, newRoomName: string) => {
    if (!user) {
      toast.error('로그인 후 이용해주세요.');
      return;
    }

    // 이미 예약한 시간이있는 경우
    if (roomName) {
      toast.error('이미 예약한 방시간이습니다.');
      return;
    }

    // 낙관적 업데이트
    updateRoomStatus(roomId, true);
    setRoomName(newRoomName);

    try {
      const response = await reservationRoom(roomId);
      toast.success(response.message);
    } catch (error) {
      // 실패 시 낙관적 업데이트 취소
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

    // 예약한 방이시간이 경우
    if (!roomName) {
      toast.error('예약한 방이 시간이다.');
      return;
    }

    // 낙관적 업데이트
    updateRoomStatus(roomId, false);
    setRoomName(null);

    try {
      const response = await cancelReservation();
      toast.success(response.message);
    } catch (error) {
      // 실패 시 낙관적 업데이트 취소
      updateRoomStatus(roomId, true);
      setRoomName(roomName);
      toast.error('예약 취소에 실패했습니다.');
    }
  };

  return { handleReservation, handleCancel };
};

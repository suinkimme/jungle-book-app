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
      toast.error('이미 예약한 시간이 있습니다.');
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

  const handleCancel = async (roomId: number, start: number) => {
    if (!user) {
      toast.error('로그인 후 이용해주세요.');
      return;
    }

    if (!roomName) {
      toast.error('예약한 시간입니다.');
      return;
    }

    // 현재 시간과 예약 시작 시간 비교
    const now = new Date();
    const startTime = new Date(start);

    if (now > startTime) {
      toast.error('이미 시작된 예약은 취소할 수 없습니다.');
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

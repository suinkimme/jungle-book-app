import { toast } from 'sonner';
import { reservationRoom, cancelReservation } from '@/api';
import { isBefore10AM, isAfter4AM } from '@/utils';

export const useReservation = () => {
  const handleReservation = async (roomId: number) => {
    if (isBefore10AM(new Date())) {
      toast.error('예약 시간은 10시 이후부터 가능합니다.');
      return;
    }

    if (isAfter4AM(new Date())) {
      toast.error('예약 시간은 4시 이전부터 가능합니다.');
      return;
    }

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

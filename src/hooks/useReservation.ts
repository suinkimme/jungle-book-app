import { toast } from 'sonner';
import debounce from 'lodash/debounce';

import { reservationRoom, cancelReservation } from '@/api';
import { useRooms } from '@/hooks';
import { isBefore10AM, isAfter4AM } from '@/utils';

export const useReservation = () => {
  const { fetchRoomList } = useRooms();

  const handleReservation = debounce(async (roomId: number) => {
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
      // TODO: 낙관적 UI update로 분리해야함
      fetchRoomList();
    } catch (error) {
      toast.error('예약에 실패했습니다.');
    }
  }, 400);

  const handleCancel = debounce(async () => {
    try {
      const response = await cancelReservation();
      toast.success(response.message);
      // TODO: 낙관적 UI update로 분리해야함
      fetchRoomList();
    } catch (error) {
      console.log(error);
      toast.error('예약 취소에 실패했습니다.');
    }
  }, 400);

  return { handleReservation, handleCancel };
};

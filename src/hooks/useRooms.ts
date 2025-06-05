import { useEffect, useCallback } from 'react';

import { getRooms as getRoomsApi } from '@/api';
import { useRoomStore } from '@/stores/roomStore';

export const useRooms = () => {
  const { rooms, setRooms } = useRoomStore();
  const fetchRoomList = useCallback(async () => {
    try {
      const response = await getRoomsApi();
      setRooms(response);
    } catch (error) {
      // TODO: 전역으로 에러핸들링해보기
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchRooms();
  }, []);

  return { rooms };
};

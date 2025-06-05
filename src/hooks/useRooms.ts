import { useEffect } from 'react';
import { getRooms as getRoomsApi } from '@/api';
import { useRoomStore } from '@/stores/roomStore';

export const useRooms = () => {
  const { getRooms, setRooms } = useRoomStore();

  const fetchRooms = async () => {
    try {
      const response = await getRoomsApi();
      setRooms(response);
    } catch (error) {
      // TODO: 전역으로 에러핸들링해보기
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return { getRooms, fetchRooms };
};

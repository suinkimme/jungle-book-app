import { useState, useEffect, useMemo, useCallback } from 'react';

import type { IRoom } from '@/types';
import { userStorage } from '@/storage';
import { getRooms as getRoomsApi } from '@/api';

export const useRooms = () => {
  const [rooms, setRooms] = useState<IRoom[]>([]);

  const fetchRoomList = useCallback(async () => {
    try {
      const response = await getRoomsApi();
      setRooms(response);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getRooms = useMemo(() => {
    return [...rooms];
  }, [rooms]);

  useEffect(() => {
    fetchRoomList();
  }, []);

  return { getRooms };
};

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { IRoom } from '@/types';
import { userStorage } from '@/storage';

export const useRooms = () => {
  const [rooms, setRooms] = useState<IRoom[]>([]);

  const fetchRoomList = useCallback(async () => {
    try {
      const response = await fetch('https://coachroom.duckdns.org/api/room', {
        headers: {
          Authorization: `Bearer ${userStorage.get()}`,
        },
      });
      const data = await response.json();
      setRooms(data.room_list);
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

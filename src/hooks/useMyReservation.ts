import { useEffect } from 'react';
import { getMyReservation } from '@/api';
import { useReservationStore } from '@/stores/reservationStore';

export const useMyReservation = () => {
  const { roomName, setRoomName } = useReservationStore();

  const fetchMyReservation = async () => {
    try {
      const response = await getMyReservation();
      setRoomName(response.room_name);
    } catch (error) {
      console.error(error);
      setRoomName(null);
    }
  };

  useEffect(() => {
    fetchMyReservation();
  }, []);

  return { message: roomName, setRoomName };
};

import { useEffect, useState } from 'react';
import { getMyReservation } from '@/api';

export const useMyReservation = () => {
  const [reservationStatus, setReservationStatus] = useState<string | null>();

  const fetchMyReservation = async () => {
    try {
      const response = await getMyReservation();
      setReservationStatus(response.room_name);
    } catch (error) {
      console.error(error);
      setReservationStatus(error.message);
      return null;
    }
  };

  useEffect(() => {
    fetchMyReservation();
  }, []);

  return { message: reservationStatus };
};

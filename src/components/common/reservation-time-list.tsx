import { useEffect } from 'react';
import { ReservationTimeItem } from '@/components/common/reservation-time-item';
import { formatHour } from '@/utils/date';
import { useRoomStore } from '@/stores/roomStore';

export const ReservationTimeList = () => {
  const { getRooms, fetchRooms } = useRoomStore();

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <>
      {getRooms().map(room => (
        <ReservationTimeItem
          key={room.room_id}
          roomId={room.room_id}
          start={formatHour(room.start_hour)}
          end={formatHour(room.end_hour)}
          status={room.is_reserved ? 'unavailable' : 'available'}
        />
      ))}
    </>
  );
};

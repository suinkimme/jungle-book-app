import { useEffect } from 'react';
import { ReservationTimeItem } from '@/components/common/reservation-time-item';

import { useRooms } from '@/hooks';

export const ReservationTimeList = () => {
  const { rooms, fetchRoomList } = useRooms();

  useEffect(() => {
    fetchRoomList();
  }, []);

  return (
    <>
      {rooms.map(room => (
        <ReservationTimeItem
          key={room.room_id}
          roomId={room.room_id}
          startHour={room.start_hour}
          startTime={room.start_time}
          endHour={room.end_hour}
          endTime={room.end_time}
          status={room.can_reserve}
          reservedBy={room.reserved_by}
        />
      ))}
    </>
  );
};

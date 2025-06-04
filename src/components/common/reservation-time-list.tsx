import { ReservationTimeItem } from '@/components/common/reservation-time-item';

import { formatHour } from '@/utils/date';
import { useRoom } from '@/hooks';

export const ReservationTimeList = () => {
  const { getRooms } = useRoom();
  const rooms = getRooms();

  return (
    <>
      {rooms.map((room, index) => (
        <ReservationTimeItem
          key={room.room_id}
          start={formatHour(room.start_hour)}
          end={formatHour(room.end_hour)}
          status={room.is_reserved ? 'unavailable' : 'available'}
        />
      ))}
    </>
  );
};

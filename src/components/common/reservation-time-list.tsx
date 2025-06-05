import { ReservationTimeItem } from '@/components/common/reservation-time-item';
import { formatHour } from '@/utils/date';
import { useRooms } from '@/hooks/useRooms';

export const ReservationTimeList = () => {
  const { getRooms } = useRooms();
  console.log(getRooms());

  return (
    <>
      {getRooms().map(room => (
        <ReservationTimeItem
          key={room.room_id}
          roomId={room.room_id}
          start={formatHour(room.start_hour)}
          end={formatHour(room.end_hour)}
          status={room.is_reserved ? 'unavailable' : 'available'}
          roomName={room.room_name}
        />
      ))}
    </>
  );
};

import { ReservationTimeItem } from '@/components/common/reservation-time-item';
import { useRooms } from '@/hooks/useRooms';

export const ReservationTimeList = () => {
  const { getRooms } = useRooms();

  return (
    <>
      {getRooms().map(room => (
        <ReservationTimeItem
          key={room.room_id}
          roomId={room.room_id}
          start={room.start_hour}
          end={room.end_hour}
          status={room.can_reserve ? 'available' : 'unavailable'}
          roomName={room.room_name}
        />
      ))}
    </>
  );
};

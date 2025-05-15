import { Profile } from '@/components/common/profile';
import { RoomNumberContainer } from '@/components/common/room-number-container';
import { DateDisplay } from '@/components/common/date-display';
import { ReservationTimeItem } from '@/components/common/reservation-time-item';
import { generateTimeSlots } from '@/utils/date';

export default function Dashboard() {
  const reservationTimeSlots = generateTimeSlots(10, 23);

  return (
    <>
      <Profile />
      <RoomNumberContainer />
      <DateDisplay />
      {reservationTimeSlots.map((times, index) => (
        <ReservationTimeItem
          key={index}
          start={times[0]}
          end={times[1]}
          status={index % 3 === 0 ? 'available' : 'unavailable'}
        />
      ))}
    </>
  );
}

import { Profile } from '@/components/common/profile';
import { RoomNumberContainer } from '@/components/common/room-number-container';
import { DateDisplay } from '@/components/common/date-display';
import { ReservationTimeItem } from '@/components/common/reservation-time-item';

export default function Dashboard() {
  return (
    <>
      <Profile />
      <RoomNumberContainer />
      <DateDisplay />
      {Array.from({ length: 13 }).map((_, index) => (
        <ReservationTimeItem key={index} />
      ))}
    </>
  );
}

import { ProfileSwitcher } from '@/components/profile-switcher';
import { RoomNumberContainer } from '@/components/common/room-number-container';
import { DateDisplay } from '@/components/common/date-display';
import { ReservationTimeList } from '@/components/common/reservation-time-list';

export default function Dashboard() {
  return (
    <>
      <ProfileSwitcher />
      <RoomNumberContainer />
      <DateDisplay />
      <ReservationTimeList />
    </>
  );
}

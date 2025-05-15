import { Profile } from '@/components/common/profile';
import { RoomNumberContainer } from '@/components/common/room-number-container';
import { DateDisplay } from '@/components/common/date-display';

export default function Dashboard() {
  return (
    <>
      <Profile />
      <RoomNumberContainer />
      <DateDisplay />
    </>
  );
}

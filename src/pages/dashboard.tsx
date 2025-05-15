import { Profile } from '@/components/common/profile';
import { RoomNumberContainer } from '@/components/common/room-number-container';
import { AppLayout } from '@/components/layout/app-layout';

export default function Dashboard() {
  return (
    <>
      <Profile />
      <RoomNumberContainer />
      <AppLayout>
        <p>hello world</p>
      </AppLayout>
    </>
  );
}

import { AppLayout } from '@/components/layout/app-layout';
import { RoomNumberContainer } from '@/components/common/room-number-container';

export default function Dashboard() {
  return (
    <>
      <RoomNumberContainer />
      <AppLayout>
        <p>hello world</p>
      </AppLayout>
    </>
  );
}

import { AppLayout } from '@/components/layout/app-layout';
import { Profile } from '@/components/common/profile';
import { ReservationCalendar } from '@/components/common/reservation-calendar';

export default function Dashboard() {
  return (
    <AppLayout>
      <Profile />
      <ReservationCalendar />
    </AppLayout>
  );
}

import { useEffect } from 'react';

import { ProfileSwitcher } from '@/components/profile-switcher';
import { RoomNumberContainer } from '@/components/common/room-number-container';
import { DateDisplay } from '@/components/common/date-display';
import { ReservationTimeList } from '@/components/common/reservation-time-list';

import { generateTimeSlots } from '@/utils/date';
import { userStorage } from '@/storage';

export default function Dashboard() {
  const user = userStorage.get();

  return (
    <>
      <ProfileSwitcher />
      <RoomNumberContainer />
      <DateDisplay />
      <ReservationTimeList />
    </>
  );
}

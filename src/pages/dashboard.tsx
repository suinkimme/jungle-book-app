import { useEffect } from 'react';

import { Profile } from '@/components/common/profile';
import { UnauthenticateProfile } from '@/components/common/unauthenticate-profile';
import { RoomNumberContainer } from '@/components/common/room-number-container';
import { DateDisplay } from '@/components/common/date-display';
import { ReservationTimeList } from '@/components/common/reservation-time-list';

import { generateTimeSlots } from '@/utils/date';
import { userStorage } from '@/storage';

export default function Dashboard() {
  const reservationTimeSlots = generateTimeSlots(10, 23);
  const user = userStorage.get();

  return (
    <>
      {user ? <Profile /> : <UnauthenticateProfile />}
      <RoomNumberContainer />
      <DateDisplay />
      <ReservationTimeList />
    </>
  );
}

import { Profile } from '@/components/common/profile';
import { UnauthenticateProfile } from '@/components/common/unauthenticate-profile';

import { userStorage } from '@/storage';

export const ProfileSwitcher = () => {
  const user = userStorage.get();

  return user ? <Profile /> : <UnauthenticateProfile />;
};

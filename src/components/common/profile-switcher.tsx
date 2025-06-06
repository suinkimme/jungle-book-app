import { Profile } from '@/components/common/profile';
import { UnauthenticateProfile } from '@/components/common/unauthenticate-profile';

import { useUserStore } from '@/stores';
import { useUserData } from '@/hooks';

export const ProfileSwitcher = () => {
  useUserData();

  const { name } = useUserStore();

  return name ? <Profile /> : <UnauthenticateProfile />;
};

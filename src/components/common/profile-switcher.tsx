import { Profile } from '@/components/common/profile';
import { UnauthenticateProfile } from '@/components/common/unauthenticate-profile';

import { useUserStore } from '@/stores';

export const ProfileSwitcher = () => {
  const { name } = useUserStore();

  return name ? <Profile /> : <UnauthenticateProfile />;
};

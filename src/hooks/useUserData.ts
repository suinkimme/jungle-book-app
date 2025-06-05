import { useEffect } from 'react';

import { getUserData } from '@/api';
import { useUserStore } from '@/stores';

export const useUserData = () => {
  const { setUser } = useUserStore();

  const fetchUserData = async () => {
    try {
      const response = await getUserData();
      const userData = {
        ...response,
        avatarUrl: response.avatar_url,
      };
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
};

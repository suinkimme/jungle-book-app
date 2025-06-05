import { useEffect, useState } from 'react';

import { getUserData } from '@/api';
import { useUserStore } from '@/stores';

export const useUserData = () => {
  const { setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState(true);

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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return { isLoading };
};

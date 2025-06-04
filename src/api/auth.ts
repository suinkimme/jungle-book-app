import { post } from '@/utils';
import { ENDPOINTS } from '@/constants';

export const login = async (code: string, state: string) => {
  return await post(ENDPOINTS.LOGIN, { code, state });
};

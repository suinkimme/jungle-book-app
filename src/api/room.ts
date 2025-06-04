import { get } from '@/utils';
import { ENDPOINTS } from '@/constants';

export const getRooms = async () => {
  return await get(ENDPOINTS.GET_ROOMS);
};

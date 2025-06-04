import { get } from '@/utils';
import { ENDPOINTS } from '@/constants';
import type { IRoom } from '@/types';

export const getRooms = async () => {
  try {
    const response = await get<{ room_list: IRoom[] }>(ENDPOINTS.GET_ROOMS);
    return response.room_list;
  } catch (error) {
    console.error(error);
    return [];
  }
};

import { post, get } from '@/utils';
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

export const reservationRoom = async (roomId: number) => {
  try {
    const response = await post(ENDPOINTS.RESERVATION_ROOM, {
      room_id: roomId,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

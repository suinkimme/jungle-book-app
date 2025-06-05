import { post, get, del } from '@/utils';
import { ENDPOINTS } from '@/constants';

export const getRooms = async () => {
  try {
    const response = await get(ENDPOINTS.GET_ROOMS);
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

export const cancelReservation = async () => {
  try {
    const response = await del(ENDPOINTS.CANCEL_RESERVATION, {});
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

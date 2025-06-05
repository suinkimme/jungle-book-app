export interface IRoom {
  room_id: 0;
  room_name: string;
  start_hour: number;
  start_time: string;
  end_hour: number;
  end_time: string;
  can_reserve: boolean;
  reserved_by: IReservationBy | null;
  time_slots: Array<{ time_range: string }>;
}

export interface IReservationBy {
  created_at: string;
  login: string;
  reservation_id: number;
  room_id: number;
  room_name: string;
  user_id: number;
  user_name: string;
}

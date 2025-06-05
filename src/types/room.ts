export interface IRoom {
  room_id: 0;
  room_name: string;
  start_hour: number;
  start_time: string;
  end_hour: number;
  end_time: string;
  can_reserve: boolean;
  reserved_by: string | null;
  time_slots: Array<{ time_range: string }>;
}

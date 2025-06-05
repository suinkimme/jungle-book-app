export interface IRoom {
  room_id: 0;
  room_name: string;
  start_hour: number;
  end_hour: number;
  can_reserve: boolean;
  reserved_by: string;
  time_slots: Array<{ time_range: string }>;
}

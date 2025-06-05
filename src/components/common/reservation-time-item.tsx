import { DividerHorizontalIcon } from '@radix-ui/react-icons';
import {
  ReservationButton,
  ReservationCancelButton,
  UnavailableReservationButton,
} from '@/components/common/reservation-button';
import { UnpopularTag } from '@/components/common/popular-tag';
import { useReservation } from '@/hooks';
import { useReservationStore } from '@/stores';
import { formatHour } from '@/utils/date';

interface IReservationTimeItem {
  roomId: number;
  start: number;
  end: number;
  status: 'available' | 'unavailable';
  roomName: string;
}

export const ReservationTimeItem = ({
  roomId,
  start,
  end,
  status,
  roomName,
}: IReservationTimeItem) => {
  const { handleReservation, handleCancel } = useReservation();
  const {
    roomName: reservationRoomName,
    isRoomReserved,
    getRoomStatus,
  } = useReservationStore();
  const isReserved = isRoomReserved(roomId);
  const currentStatus = getRoomStatus(roomId, status);

  return (
    <div className="flex items-center justify-between px-6 py-5">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <p className="text-lg font-semibold">{formatHour(start)}</p>
          <DividerHorizontalIcon className="w-3 text-muted-foreground" />
          <p className="text-lg font-semibold">{formatHour(end)}</p>
        </div>
        <UnpopularTag />
      </div>

      {roomName === reservationRoomName ? (
        <ReservationCancelButton
          handleCancel={() => handleCancel(roomId, start)}
        />
      ) : currentStatus === 'available' && !isReserved ? (
        <ReservationButton
          handleReservation={() => handleReservation(roomId, roomName)}
        />
      ) : (
        <UnavailableReservationButton />
      )}
    </div>
  );
};

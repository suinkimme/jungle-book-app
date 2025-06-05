import dayjs from 'dayjs';
import { DividerHorizontalIcon } from '@radix-ui/react-icons';
import {
  ReservationButton,
  ReservationCancelButton,
  UnavailableReservationButton,
} from '@/components/common/reservation-button';
import {
  ReservationNameTag,
  NotReservationNameTag,
  PastReservationNameTag,
} from '@/components/common/reservation-name-tag';

import { useReservation } from '@/hooks';
import { isPast, formatHour } from '@/utils';
import type { IReservationBy } from '@/types';

interface IReservationTimeItem {
  roomId: number;
  startHour: number;
  startTime: string;
  endHour: number;
  endTime: string;
  status: boolean;
  reservedBy: IReservationBy | null;
}

interface IReservationButton {
  roomId: number;
  isAvailable: boolean;
  isPastTime: boolean;
  handleReservation: (roomId: number) => void;
  handleCancel: () => void;
  reservedBy: IReservationBy | null;
}

const ReservationButtonGroup = ({
  roomId,
  isAvailable,
  isPastTime,
  handleReservation,
  handleCancel,
  reservedBy,
}: IReservationButton) => {
  if (isPastTime) {
    return <UnavailableReservationButton />;
  }

  if (isAvailable) {
    return (
      <ReservationButton
        roomId={roomId}
        handleReservation={handleReservation}
      />
    );
  }

  if (!isAvailable) {
    if (reservedBy !== null) {
      return <ReservationCancelButton handleCancel={handleCancel} />;
    }

    return <UnavailableReservationButton />;
  }
};

export const ReservationTimeItem = ({
  roomId,
  startHour,
  endHour,
  endTime,
  status,
  reservedBy,
}: IReservationTimeItem) => {
  const { handleReservation, handleCancel } = useReservation();
  const {
    roomName: reservationRoomName,
    isRoomReserved,
    getRoomStatus,
  } = useReservationStore();
  const isReserved = isRoomReserved(roomId);
  const currentStatus = getRoomStatus(roomId, status);

  const isPastTime = isPast(dayjs(endTime).toDate());

  return (
    <div
      className={`flex items-center justify-between px-6 py-5 ${isPastTime ? 'opacity-40' : ''}`}
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <p className="text-lg font-semibold">{formatHour(startHour)}</p>
          <DividerHorizontalIcon className="w-3 text-muted-foreground" />
          <p className="text-lg font-semibold">{formatHour(endHour)}</p>
        </div>
        {reservedBy ? (
          <ReservationNameTag name={reservedBy.user_name} />
        ) : isPastTime ? (
          <PastReservationNameTag />
        ) : (
          <NotReservationNameTag />
        )}
      </div>
      <ReservationButtonGroup
        roomId={roomId}
        isAvailable={status}
        isPastTime={isPastTime}
        handleReservation={handleReservation}
        handleCancel={handleCancel}
        reservedBy={reservedBy}
      />
    </div>
  );
};

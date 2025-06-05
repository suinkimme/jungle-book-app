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

interface IReservationTimeItem {
  roomId: number;
  startHour: number;
  startTime: string;
  endHour: number;
  endTime: string;
  status: boolean;
  reservedBy: IResercationBy | null;
}

interface IReservationButton {
  isAvailable: boolean;
  isPastTime: boolean;
  handleReservation: React.MouseEventHandler<HTMLButtonElement>;
  handleCancel: React.MouseEventHandler<HTMLButtonElement>;
  reservedBy: IResercationBy | null;
}

const ReservationButtonGroup = ({
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
    return <ReservationButton handleReservation={handleReservation} />;
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
  startTime,
  endHour,
  endTime,
  status,
  reservedBy,
}: IReservationTimeItem) => {
  const { handleReservation, handleCancel } = useReservation();

  const isPastTime = isPast(dayjs(endTime).toDate()) ? 'opacity-40' : '';

  return (
    <div
      className={`flex items-center justify-between px-6 py-5 ${isPastTime}`}
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
        isAvailable={status}
        isPastTime={isPastTime}
        handleReservation={() => handleReservation(roomId)}
        handleCancel={() => handleCancel(roomId)}
        reservedBy={reservedBy}
      />
    </div>
  );
};

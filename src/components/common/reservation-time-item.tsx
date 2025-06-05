import { DividerHorizontalIcon } from '@radix-ui/react-icons';
import {
  ReservationButton,
  UnavailableReservationButton,
} from '@/components/common/reservation-button';
import { UnpopularTag } from '@/components/common/popular-tag';
import { useReservation } from '@/hooks';

interface IReservationTimeItem {
  roomId: number;
  start: string;
  end: string;
  status: 'available' | 'unavailable';
}

export const ReservationTimeItem = ({
  roomId,
  start,
  end,
  status,
}: IReservationTimeItem) => {
  const { handleReservation, handleCancel } = useReservation();

  return (
    <div className="flex items-center justify-between px-6 py-5">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <p className="text-lg font-semibold">{start}</p>
          <DividerHorizontalIcon className="w-3 text-muted-foreground" />
          <p className="text-lg font-semibold">{end}</p>
        </div>
        <UnpopularTag />
      </div>
      {status === 'available' ? (
        <ReservationButton
          handleReservation={() => handleReservation(roomId)}
        />
      ) : (
        <UnavailableReservationButton
          handleCancel={() => handleCancel(roomId)}
        />
      )}
    </div>
  );
};

import type { MouseEventHandler } from 'react';
import { Button } from '@/components/ui/button';

interface IReservationButton {
  handleReservation: MouseEventHandler<HTMLButtonElement>;
}

export const ReservationButton = ({
  handleReservation,
}: IReservationButton) => {
  return (
    <Button
      size="sm"
      className="font-bold"
      variant="default"
      onClick={handleReservation}
    >
      예약
    </Button>
  );
};

interface IReservationCancelButton {
  handleCancel: MouseEventHandler<HTMLButtonElement>;
}

export const ReservationCancelButton = ({
  handleCancel,
}: IReservationCancelButton) => {
  return (
    <Button
      size="sm"
      className="font-bold"
      variant="outline"
      onClick={handleCancel}
    >
      취소
    </Button>
  );
};

export const UnavailableReservationButton = () => {
  return (
    <Button size="sm" className="font-bold" variant="outline" disabled>
      예약
    </Button>
  );
};

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

interface IUnavailableReservationButton {
  handleCancel: MouseEventHandler<HTMLButtonElement>;
}

export const UnavailableReservationButton = ({
  handleCancel,
}: IUnavailableReservationButton) => {
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

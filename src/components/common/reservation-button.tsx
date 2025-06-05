import { Button } from '@/components/ui/button';
import { useReservation } from '@/hooks';

interface IReservationButton {
  handleReservation: (roomId: number) => void;
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
  handleCancel: (roomId: number) => void;
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

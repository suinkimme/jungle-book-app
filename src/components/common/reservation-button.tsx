import { Button } from '@/components/ui/button';

interface IReservationButton {
  roomId: number;
  handleReservation: (roomId: number) => void;
}

export const ReservationButton = ({
  roomId,
  handleReservation,
}: IReservationButton) => {
  return (
    <Button
      size="sm"
      className="font-bold"
      variant="default"
      onClick={() => handleReservation(roomId)}
    >
      예약
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

interface IReservationCancelButton {
  handleCancel: React.MouseEventHandler<HTMLButtonElement>;
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

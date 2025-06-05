import { Button } from '@/components/ui/button';
import { useReservation } from '@/hooks';

interface IReservationButton {
  roomId: number;
}

export const ReservationButton = ({ roomId }: IReservationButton) => {
  const { handleReservation } = useReservation();

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

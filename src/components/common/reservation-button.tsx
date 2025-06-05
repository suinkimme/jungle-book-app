import { Button } from '@/components/ui/button';
import { useReservation } from '@/hooks';

export const ReservationButton = () => {
  const { handleReservation } = useReservation();

  return (
    <Button
      size="sm"
      className="font-bold"
      variant="default"
      onClick={() => handleReservation(1)}
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

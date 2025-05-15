import { Button } from '@/components/ui/button';

export const ReservationButton = () => {
  return (
    <Button size="sm" className="font-bold" variant="default">
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

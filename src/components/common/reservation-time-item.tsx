import { DividerHorizontalIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { PopularTag, UnpopularTag } from '@/components/common/popular-tag';

export const ReservationTimeItem = () => {
  return (
    <div className="flex items-center justify-between px-6 py-5">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <p className="text-lg font-semibold">오전 10:00</p>
          <DividerHorizontalIcon className="w-3 text-muted-foreground" />
          <p className="text-lg font-semibold">오전 11:00</p>
        </div>
        <UnpopularTag />
      </div>
      <Button size="sm" className="font-bold">
        예약
      </Button>
    </div>
  );
};

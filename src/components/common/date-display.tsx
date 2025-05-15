import { formatDateWithWeekday } from '@/utils/date';

export function DateDisplay() {
  const date = new Date();
  return (
    <div className="flex items-center px-6 py-5 gap-2 border-b">
      <p className="text-xl font-semibold text-muted-foreground">오늘은</p>
      <p className="text-xl font-semibold">{formatDateWithWeekday(date)}</p>
    </div>
  );
}

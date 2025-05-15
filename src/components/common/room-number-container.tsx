import { CubeIcon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';

export function RoomNumberContainer() {
  return (
    <div className="w-full px-6 py-7 flex justify-start items-center gap-3 bg-secondary">
      <CubeIcon className="w-6 h-6" />
      <h1 className="text-2xl font-bold">303 코칭실</h1>
      <Badge variant="outline">예약가능</Badge>
    </div>
  );
}

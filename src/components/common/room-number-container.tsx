import { CubeIcon } from '@radix-ui/react-icons';

export function RoomNumberContainer() {
  const { name } = useUserStore();
  const { message } = useMyReservation();

  const getBadgeContent = () => {
    if (message) {
      return message;
    }
    return '예약 가능';
  };

  return (
    <div className="sticky top-0 z-10 w-full px-6 py-7 flex justify-start items-center gap-3 bg-secondary">
      <CubeIcon className="w-6 h-6" />
      <h1 className="text-2xl font-bold">303 코칭실</h1>
    </div>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { useUserStore } from '@/stores';
import { useUserData } from '@/hooks';

export function Profile() {
  const { name, avatarUrl } = useUserStore();
  const { isLoading } = useUserData();

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 px-6 py-9">
        <Skeleton className="size-15 rounded-full" />
        <div className="px-2 space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-6 py-9">
      <Avatar className="size-15">
        <AvatarImage src={avatarUrl || ''} alt={name || ''} />
        <AvatarFallback>{name?.slice(1, 3) || ''}</AvatarFallback>
      </Avatar>
      <div className="px-2">
        <p className="text-lg font-bold">{name}</p>
        <p className="text-sm text-muted-foreground">크래프톤 정글 9기</p>
      </div>
    </div>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Profile() {
  return (
    <div className="flex items-center gap-2 px-6 py-12">
      <Avatar className="size-15">
        <AvatarImage src="https://github.com/suinkimme.png" />
        <AvatarFallback>SU</AvatarFallback>
      </Avatar>
      <div className="px-2">
        <p className="text-lg font-bold">김민규</p>
        <p className="text-sm text-muted-foreground">크래프톤 정글 9기</p>
      </div>
    </div>
  );
}

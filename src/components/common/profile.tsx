import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Profile() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-15">
        <AvatarImage src="https://github.com/suinkimme.png" />
        <AvatarFallback>SU</AvatarFallback>
      </Avatar>
      <div>
        <p>김민규</p>
        <p>크래프톤 정글 9기</p>
      </div>
    </div>
  );
}

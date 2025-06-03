import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PersonIcon } from '@radix-ui/react-icons';
import { useGithubLogin } from '@/hooks/useGithubLogin';

export function UnauthenticateProfile() {
  const { handleGitHubLogin } = useGithubLogin();

  return (
    <div
      className="flex items-center gap-2 px-6 py-9 cursor-pointer"
      onClick={handleGitHubLogin}
    >
      <Avatar className="size-15">
        <AvatarImage src="" />
        <AvatarFallback>
          <PersonIcon className="size-5" />
        </AvatarFallback>
      </Avatar>
      <div className="px-2">
        <p className="text-lg font-bold">로그인</p>
        <p className="text-sm text-muted-foreground">클릭하여 로그인하세요.</p>
      </div>
    </div>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PersonIcon } from '@radix-ui/react-icons';

const githubLogin = () => {
  const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
  const redirectUri = encodeURIComponent(
    import.meta.env.VITE_GITHUB_REDIRECT_URI,
  );
  const state = crypto.randomUUID();

  const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

  window.location.href = githubUrl;
};

export function UnauthenticateProfile() {
  return (
    <div
      className="flex items-center gap-2 px-6 py-9 cursor-pointer"
      onClick={githubLogin}
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

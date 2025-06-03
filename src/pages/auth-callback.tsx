import { useEffect } from 'react';
import { useGithubLogin } from '@/hooks/useGithubLogin';

export default function AuthCallback() {
  const { fetchGithubAccessToken } = useGithubLogin();

  useEffect(() => {
    const { code, state } = Object.fromEntries(
      new URLSearchParams(window.location.search),
    );
    if (code && state) {
      fetchGithubAccessToken(code, state);
    }
  }, []);

  return <></>;
}

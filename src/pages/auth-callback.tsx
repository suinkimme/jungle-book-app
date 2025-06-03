import { useEffect } from 'react';
import { useGithubLogin } from '@/hooks/useGithubLogin';

export default function AuthCallback() {
  const { fetchGithubAccessToken } = useGithubLogin();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      fetchGithubAccessToken(code);
    }
  }, []);

  return <></>;
}

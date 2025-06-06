import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '@/api';
import { userStorage } from '@/storage';

export const useGithubLogin = () => {
  const navigate = useNavigate();

  const handleGitHubLogin = useCallback(() => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const redirectUri = encodeURIComponent(
      import.meta.env.VITE_GITHUB_REDIRECT_URI,
    );
    const state = crypto.randomUUID();

    const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

    window.location.href = githubUrl;
  }, []);

  const fetchGithubAccessToken = useCallback(
    async (code: string, state: string) => {
      try {
        const response = await login(code, state);
        userStorage.set(response.access_token);
      } catch (error) {
        console.error(error);
      } finally {
        navigate('/');
      }
    },
    [],
  );

  return { handleGitHubLogin, fetchGithubAccessToken };
};

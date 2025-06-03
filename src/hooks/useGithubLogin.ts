import { useCallback } from 'react';

const useGithubLogin = () => {
  const handleGitHubLogin = useCallback(() => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const redirectUri = encodeURIComponent(
      import.meta.env.VITE_GITHUB_REDIRECT_URI,
    );
    const state = crypto.randomUUID();

    const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

    window.location.href = githubUrl;
  }, []);

  return { handleGitHubLogin };
};

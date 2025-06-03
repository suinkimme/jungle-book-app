import { useEffect, useState } from 'react';
import { useGithubLogin } from '@/hooks/useGithubLogin';
import { Github } from 'lucide-react';

export default function AuthCallback() {
  const [dots, setDots] = useState('');
  const { fetchGithubAccessToken } = useGithubLogin();

  useEffect(() => {
    const { code, state } = Object.fromEntries(
      new URLSearchParams(window.location.search),
    );
    if (code && state) {
      fetchGithubAccessToken(code, state);
    }

    const dotsInterval = setInterval(() => {
      setDots(prevDots => {
        if (prevDots.length >= 3) {
          return '';
        }
        return prevDots + '.';
      });
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <Github className="h-10 w-10 animate-spin mb-3" />
      <p className="text-2xl font-bold">Loading{dots}</p>
      <p className="text-sm text-gray-500">
        잠깐만 기다려주세요. 연결하고 있어요.
      </p>
    </div>
  );
}

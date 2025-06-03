import { useEffect } from 'react';

export default function AuthCallback() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    console.log(code);
  }, []);

  return <></>;
}

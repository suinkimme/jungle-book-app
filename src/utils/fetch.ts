import { BASE_URL } from '@/constants';

const _fetch = async (url: string, options: RequestInit) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  return response.json();
};

export const post = async <T>(url: string, body: T) => {
  return _fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
  });
};

export const get = async (url: string) => {
  return _fetch(url, {
    method: 'GET',
  });
};

export const del = async <T>(url: string, body: T) => {
  return _fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(body),
  });
};

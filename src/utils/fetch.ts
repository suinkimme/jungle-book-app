import { userStorage } from '@/storage';

const getAuthHeader = (storage: typeof userStorage) => {
  const token = storage.get();
  return {
    Authorization: `Bearer ${token}`,
  };
};

const _fetch = async (
  url: string,
  options: RequestInit,
  storage: typeof userStorage,
) => {
  const authHeader = getAuthHeader(storage) || {};
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      ...authHeader,
    },
  });

  return response.json();
};

export const post = async <T>(
  url: string,
  body: T,
  storage: typeof userStorage = userStorage,
) => {
  return _fetch(
    url,
    {
      method: 'POST',
      body: JSON.stringify(body),
    },
    storage,
  );
};

export const get = async <T>(
  url: string,
  storage: typeof userStorage = userStorage,
) => {
  return _fetch(
    url,
    {
      method: 'GET',
    },
    storage,
  );
};

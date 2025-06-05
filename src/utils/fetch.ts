import { userStorage } from '@/storage';
import { BASE_URL } from '@/constants';

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
  const response = await fetch(`${BASE_URL}${url}`, {
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

export const get = async (
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

export const del = async <T>(
  url: string,
  body: T,
  storage: typeof userStorage = userStorage,
) => {
  return _fetch(
    url,
    {
      method: 'DELETE',
      body: JSON.stringify(body),
    },
    storage,
  );
};

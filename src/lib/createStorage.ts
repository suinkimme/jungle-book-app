export const createStorage = (key: string, storage = window.localStorage) => {
  const get = () => JSON.parse(storage.getItem(key) || 'null');
  const set = (value: any) => storage.setItem(key, JSON.stringify(value));
  const reset = () => storage.removeItem(key);

  return { get, set, reset };
};

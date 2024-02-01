export const setLocalStorage = <T = any>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

// 从 localStorage 获取值
export const getLocalStorage = <T = any>(key: string): T | null => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

// 从 localStorage 删除值
export const removeLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

"use client";

export const setLocalStorage = <T = any>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = <T = any>(key: string): T | null => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const removeLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

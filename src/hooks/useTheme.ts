import { useEffect, useState } from 'react';

type ThemeMode = 'dark' | 'light';

const getPreferredTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'dark';
  const savedTheme = window.localStorage.getItem('site-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export default function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(getPreferredTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('site-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}

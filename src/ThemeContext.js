import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext();

const THEME_KEY = 'theme-preference';
const themes = ['light', 'dark', 'system'];

function getSystemTheme() {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'system';
    const saved = localStorage.getItem(THEME_KEY);
    return themes.includes(saved) ? saved : 'system';
  });
  const [resolvedTheme, setResolvedTheme] = useState(() => theme === 'system' ? getSystemTheme() : theme);

  // Apply theme to <body> and Tailwind
  const applyTheme = useCallback((t) => {
    const root = window.document.documentElement;
    const body = window.document.body;
    const realTheme = t === 'system' ? getSystemTheme() : t;
    // Remove all theme classes
    body.classList.remove('theme-light', 'theme-dark', 'theme-system');
    root.classList.remove('dark');
    // Add current
    body.classList.add(`theme-${t}`);
    if (realTheme === 'dark') root.classList.add('dark');
    setResolvedTheme(realTheme);
  }, []);

  // On theme or system change
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme, applyTheme]);

  // Listen to system theme changes
  useEffect(() => {
    if (theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => applyTheme('system');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
} 
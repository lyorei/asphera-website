import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BotStatus from './components/BotStatus';
import Footer from './components/Footer';
import { ThemeProvider } from './ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';

const LOCALE_KEY = 'asphera_lang';
const THEME_KEY = 'asphera_theme';

function getInitialLang() {
  // Önce localStorage, yoksa sistem dili, yoksa 'tr'
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(LOCALE_KEY);
    if (stored) return stored;
    const sys = navigator.language || navigator.userLanguage;
    if (sys && sys.toLowerCase().startsWith('en')) return 'en';
    return 'tr';
  }
  return 'tr';
}

function getInitialTheme() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    // Sistem teması algılama
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  }
  return 'dark';
}

function App() {
  const [botStats, setBotStats] = useState({
    servers: 0,
    users: 0,
    uptime: 0
  });
  const [lang, setLang] = useState(getInitialLang());
  const [theme] = useState(getInitialTheme());
  const [loading, setLoading] = useState(true); // ilk açılışta true
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    // İlk açılışta yüklenme animasyonu
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchBotStats = async () => {
      try {
        const res = await fetch('/api/proxy-bot-status');
        const data = await res.json();
        setBotStats({
          servers: data.guildCount || 0,
          users: data.userCount || 0,
          uptime: data.uptime || 0,
          ping: data.ping || 0,
          avatar: data.avatar,
          username: data.username,
          online: data.online
        });
      } catch (err) {
        setBotStats({
          servers: 0,
          users: 0,
          uptime: 0,
          ping: 0,
          avatar: null,
          username: 'Offline',
          online: false
        });
      }
    };
    fetchBotStats();
    const interval = setInterval(fetchBotStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleLangChange = (newLang) => {
    if (newLang !== lang) {
      setScrollPos(window.scrollY); // mevcut scroll pozisyonunu kaydet
      setLoading(true);
      setTimeout(() => {
        setLang(newLang);
        localStorage.setItem(LOCALE_KEY, newLang);
        setLoading(false);
      }, 900); // 0.9 saniye yüklenme animasyonu
    }
  };

  useEffect(() => {
    if (!loading && scrollPos > 0) {
      window.scrollTo({ top: scrollPos, behavior: 'auto' });
      setScrollPos(0);
    }
  }, [loading, scrollPos]);

  // Eğer dil değişirse localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem(LOCALE_KEY, lang);
  }, [lang]);

  // Tema değişince localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Tema class'ı yönetimi
  useEffect(() => {
    const root = document.body;
    // Önce tüm tema classlarını sil
    root.classList.remove('theme-light', 'theme-dark', 'theme-system', 'dark');
    let appliedTheme = theme;
    if (theme === 'system') {
      // Sistem temasını dinle
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      appliedTheme = mq.matches ? 'dark' : 'light';
      root.classList.add('theme-system');
      // Dinamik olarak sistem teması değişirse güncelle
      const handleChange = (e) => {
        root.classList.remove('theme-light', 'theme-dark', 'dark');
        if (e.matches) {
          root.classList.add('theme-dark', 'dark');
        } else {
          root.classList.add('theme-light');
        }
      };
      mq.addEventListener('change', handleChange);
      // İlk yüklemede uygula
      if (appliedTheme === 'dark') {
        root.classList.add('theme-dark', 'dark');
      } else {
        root.classList.add('theme-light');
      }
      return () => {
        mq.removeEventListener('change', handleChange);
      };
    } else if (theme === 'dark') {
      root.classList.add('theme-dark', 'dark');
    } else {
      root.classList.add('theme-light');
    }
  }, [theme]);

  const loadingTexts = {
    tr: 'Yükleniyor...',
    en: 'Loading...'
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <AnimatePresence>
            {loading && (
              <motion.div
                key="loading-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-950 text-white"
                style={{ minHeight: '100vh', minWidth: '100vw' }}
              >
                <div className="flex flex-col items-center justify-center gap-6">
                  <span className="animate-spin rounded-full border-4 border-primary-500 border-t-transparent w-16 h-16 block mb-4"></span>
                  <span className="text-2xl font-bold tracking-wide">{loadingTexts[lang]}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {!loading && (
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header lang={lang} setLang={handleLangChange} ready={!loading} />
                    <main className="relative z-10">
                      <Hero lang={lang} ready={!loading} />
                      <Features lang={lang} ready={!loading} />
                      <BotStatus lang={lang} stats={botStats} ready={!loading} />
                    </main>
                    <Footer lang={lang} ready={!loading} />
                  </>
                }
              />
              <Route path="/terms" element={<TermsOfUse lang={lang} setLang={handleLangChange} ready={!loading} />} />
              <Route path="/privacy" element={<PrivacyPolicy lang={lang} setLang={handleLangChange} ready={!loading} />} />
            </Routes>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 
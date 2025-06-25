import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown, Monitor, Globe } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { useLocation, useNavigate } from 'react-router-dom';

const LANGUAGES = [
  { code: 'tr', label: 'Türkçe', icon: '🇹🇷' },
  { code: 'en', label: 'English', icon: '🇬🇧' },
];

const discordMenuTexts = {
  add: { tr: 'Botu Davet Et', en: 'Add to Discord' },
  addDesc: { tr: 'Asphera ⚡ sunucuna davet et', en: 'Invite Asphera ⚡ to your server' },
  support: { tr: 'Destek Sunucusu', en: 'Support Server' },
  supportDesc: { tr: 'Discord topluluğumuza katıl', en: 'Join our Discord community' }
};

const Header = ({ lang, setLang, ready }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const [isDiscordMenuOpen, setIsDiscordMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [isManualNav, setIsManualNav] = useState(false);
  const discordMenuRef = useRef(null);
  const settingsMenuRef = useRef(null);

  useTheme();

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isManualNav) return;
      const sections = [
        { id: '#hero', offset: 0 },
        { id: '#features', offset: 0 },
        { id: '#status', offset: 0 }
      ];
      let found = '#hero';
      for (let i = 0; i < sections.length; i++) {
        const el = document.querySelector(sections[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 140;
          if (window.scrollY >= top) {
            found = sections[i].id;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isManualNav]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsMenuRef.current && !settingsMenuRef.current.contains(event.target)) {
        setIsSettingsMenuOpen(false);
      }
    };
    if (isSettingsMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSettingsMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (discordMenuRef.current && !discordMenuRef.current.contains(event.target)) {
        setIsDiscordMenuOpen(false);
      }
    };
    if (isDiscordMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDiscordMenuOpen]);

  const navItems = [
    { name: { tr: 'Ana Sayfa', en: 'Home' }, href: '#hero' },
    { name: { tr: 'Özellikler', en: 'Features' }, href: '#features' },
    { name: { tr: 'Durum', en: 'Status' }, href: '#status' },
  ];

  const handleNavClick = (href) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          const offset = window.innerWidth >= 1024 ? 44 : 30;
          const y = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100); // Wait for navigation
    } else {
      const el = document.querySelector(href);
      if (el) {
        const offset = window.innerWidth >= 1024 ? 44 : 30;
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setActiveSection(href);
    setIsManualNav(true);
    setTimeout(() => setIsManualNav(false), 700);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0.8 }}
      animate={ready ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      className={
        `fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-primary-900/10 shadow-sm ` +
        (isScrolled
          ? 'bg-white/90 dark:bg-dark-900/80 text-gray-900 dark:text-white border-b border-gray-200 dark:border-dark-800 shadow-lg dark:shadow-2xl backdrop-blur-xl'
          : 'bg-transparent border-transparent shadow-none backdrop-blur-0')
      }
      style={{ WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none', backdropFilter: isScrolled ? 'blur(16px)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            className="flex items-center space-x-2 focus:outline-none rounded-2xl p-1 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-dark-800 relative"
            style={{ background: 'none', border: 'none', margin: 0 }}
            onClick={() => {
              const el = document.querySelector('#hero');
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              setActiveSection('#hero');
            }}
          >
            <motion.img
              src="/images/Asphera-PNG.png"
              alt="Asphera Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain select-none relative"
              draggable="false"
            />
          </motion.button>
          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                whileHover={{ color: '#7c5fff', y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`text-base lg:text-lg px-1.5 py-0.5 font-medium relative group rounded-xl transition-colors duration-200
                  ${activeSection === item.href ? 'text-primary-500 dark:text-primary-400' : 'text-gray-200 hover:text-primary-500 dark:text-dark-200 dark:hover:text-primary-400'}`}
                style={{ letterSpacing: '0.01em' }}
              >
                <span className={`relative z-10 ${activeSection === item.href ? 'text-primary-500 dark:text-primary-400' : ''}`}>{item.name[lang]}</span>
                <motion.span
                  layoutId="nav-underline"
                  animate={activeSection === item.href ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-500 dark:bg-primary-400 origin-left scale-x-0 group-hover:scale-x-100 z-0 rounded-full"
                  style={{ height: 2, borderRadius: 4 }}
                />
              </motion.a>
            ))}
          </nav>
          {/* Sağ Butonlar */}
          <div className="flex items-center space-x-3 lg:space-x-5">
            {/* Dil Dropdown */}
            <div className="relative" ref={settingsMenuRef}>
              <button
                onClick={() => setIsSettingsMenuOpen((v) => !v)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-base shadow-md transition-all duration-200 focus:outline-none border bg-dark-800 hover:bg-dark-700 border-dark-700 text-white"
                style={{ minHeight: 40 }}
              >
                <Globe className="w-5 h-5" />
                {lang === 'tr' ? 'Dil' : 'Language'}
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <AnimatePresence>
                {isSettingsMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute right-0 mt-3 w-56 rounded-2xl shadow-2xl py-4 z-50 border bg-dark-900 border-dark-700"
                    style={{ boxShadow: '0 8px 32px 0 rgba(30, 34, 54, 0.65)', padding: '1.1rem 0.5rem 1.1rem 0.5rem' }}
                  >
                    <div className="px-5 pt-1 pb-2 text-xs font-semibold tracking-wide text-dark-400 w-full text-center">{lang === 'tr' ? 'DİL' : 'LANGUAGE'}</div>
                    <div className="flex gap-2 px-5 pb-1 flex-wrap justify-center items-center">
                      {LANGUAGES.map(l => (
                        <button
                          key={l.code}
                          onClick={() => { setLang(l.code); setIsSettingsMenuOpen(false); }}
                          className={`flex items-center justify-center px-4 py-1.5 rounded-2xl font-bold text-sm transition-all duration-200
                            ${lang === l.code
                              ? 'bg-primary-500 text-white shadow-lg'
                              : 'bg-dark-800 text-dark-100 hover:bg-dark-700'}
                          `}
                          style={{ minWidth: 80, maxWidth: 120, minHeight: 32, letterSpacing: '0.01em', boxShadow: lang === l.code ? '0 2px 8px 0 #7c5fff33' : undefined, whiteSpace: 'nowrap' }}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Discord Dropdown */}
            <div className="relative" ref={discordMenuRef}>
              <button
                onClick={() => setIsDiscordMenuOpen((v) => !v)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-base shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 border-2 border-primary-500"
              >
                <i className="fa-brands fa-discord text-[20px] align-middle"></i>
                Discord
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <AnimatePresence>
                {isDiscordMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute right-0 mt-3 w-80 bg-white border border-gray-200 rounded-2xl shadow-2xl py-2 z-50 dark:bg-dark-900 dark:border-dark-700"
                  >
                    <a
                      href="https://discord.com/oauth2/authorize?client_id=1380920470576300062&permissions=8&integration_type=0&scope=applications.commands+bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 px-5 py-4 rounded-xl transition-colors group relative overflow-hidden"
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={e => e.currentTarget.classList.add('bg-dark-800')}
                      onMouseLeave={e => e.currentTarget.classList.remove('bg-dark-800')}
                    >
                      <span className="flex items-center self-center min-h-[32px]">
                        <i className="fa-solid fa-plus text-xl align-middle text-primary-500 group-hover:text-primary-400 transition-colors duration-200"></i>
                      </span>
                      <div>
                        <div className="font-semibold text-white text-base">{discordMenuTexts.add[lang]}</div>
                        <div className="text-dark-300 text-sm">{discordMenuTexts.addDesc[lang]}</div>
                      </div>
                    </a>
                    <div className="border-t border-dark-700 mx-4" />
                    <a
                      href="https://discord.gg/wt6rQh8MzR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 px-5 py-4 rounded-xl transition-colors group relative overflow-hidden"
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={e => e.currentTarget.classList.add('bg-dark-800')}
                      onMouseLeave={e => e.currentTarget.classList.remove('bg-dark-800')}
                    >
                      <span className="flex items-center self-center min-h-[32px]">
                        <i className="fa-regular fa-message text-xl align-middle text-primary-500 group-hover:text-primary-400 transition-colors duration-200"></i>
                      </span>
                      <div>
                        <div className="font-semibold text-white text-base">{discordMenuTexts.support[lang]}</div>
                        <div className="text-dark-300 text-sm">{discordMenuTexts.supportDesc[lang]}</div>
                      </div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Mobil Menü */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-900 hover:text-primary-400 transition-colors duration-200 dark:text-white dark:hover:text-primary-400"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
          {/* Mobil Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-2xl dark:border-dark-800 dark:bg-dark-900/95"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 rounded-lg transition-colors duration-200 font-medium
                        ${activeSection === item.href ? 'text-primary-500 bg-gray-100 dark:bg-dark-800' : 'text-gray-900 hover:text-primary-500 hover:bg-gray-100 dark:text-dark-300 dark:hover:text-primary-500 dark:hover:bg-dark-800'}`}
                      onClick={e => {
                        e.preventDefault();
                        handleNavClick(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.name[lang]}
                    </a>
                  ))}
                  <div className="pt-4 space-y-2">
                    <a
                      href="https://discord.com/oauth2/authorize?client_id=1380920470576300062&permissions=8&integration_type=0&scope=applications.commands+bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <i className="fa-brands fa-discord mr-2"></i>
                      Add to Discord
                    </a>
                    <a
                      href="https://discord.gg/wt6rQh8MzR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-dark-300 hover:text-white hover:bg-dark-800 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <i className="fa-regular fa-message mr-2"></i>
                      Support Server
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 
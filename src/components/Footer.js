import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Heart,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const MotionA = motion('a');

const Footer = ({ lang, ready, onShowTerms, onShowPrivacy }) => {
  const t = {
    desc: {
      tr: 'Discord sunucunuz için gelişmiş moderasyon araçları, eğlenceli komutlar ve otomasyon özellikleri ile sunucunuzu bir üst seviyeye taşıyın.',
      en: 'Take your Discord server to the next level with advanced moderation tools, fun commands and automation features.'
    },
    copyright: {
      tr: 'Tüm hakları saklıdır.',
      en: 'All rights reserved.'
    },
    inTurkey: {
      tr: 'Türkiye\'de geliştirildi',
      en: 'Made in Turkey'
    },
    bot: {
      tr: 'Bot',
      en: 'Bot'
    },
    support: {
      tr: 'Destek',
      en: 'Support'
    },
    legal: {
      tr: 'Yasal',
      en: 'Legal'
    },
    invite: {
      tr: 'Botu Davet Et',
      en: 'Invite Bot'
    },
    supportServer: {
      tr: 'Destek Sunucusu',
      en: 'Support Server'
    },
    commands: {
      tr: 'Özellikler',
      en: 'Features'
    },
    status: {
      tr: 'Durum',
      en: 'Status'
    },
    help: {
      tr: 'Yardım Merkezi',
      en: 'Help Center'
    },
    docs: {
      tr: 'Dokümantasyon',
      en: 'Documentation'
    },
    faq: {
      tr: 'SSS',
      en: 'FAQ'
    },
    contact: {
      tr: 'İletişim',
      en: 'Contact'
    },
    terms: {
      tr: 'Kullanım Şartları',
      en: 'Terms of Use'
    },
    privacy: {
      tr: 'Gizlilik Politikası',
      en: 'Privacy Policy'
    },
    cookies: {
      tr: 'Çerez Politikası',
      en: 'Cookie Policy'
    },
    kvkk: {
      tr: 'KVKK',
      en: 'KVKK'
    }
  };
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const socialLinks = [
    {
      name: 'Discord',
      icon: null, // FA ile elle ekleyeceğiz
      href: 'https://discord.gg/wt6rQh8MzR',
      color: 'hover:text-[#5865F2]'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/lyorei',
      color: 'hover:text-white'
    }
  ];

  const footerLinks = [
    {
      title: t.bot[lang],
      links: [
        { name: t.invite[lang], href: 'https://discord.com/oauth2/authorize?client_id=1380920470576300062&permissions=8&integration_type=0&scope=applications.commands+bot', external: true },
        { name: t.supportServer[lang], href: 'https://discord.gg/wt6rQh8MzR', external: true }
      ]
    },
    {
      title: t.support[lang],
      links: [
        { name: t.help[lang], href: '#help', external: false },
        { name: t.faq[lang], href: '#faq', external: false }
      ]
    },
    {
      title: t.legal[lang],
      links: [
        { name: t.terms[lang], href: '/terms', external: false },
        { name: t.privacy[lang], href: '/privacy', external: false }
      ]
    }
  ];

  return (
    <footer
      className={
        `relative w-full pt-12 pb-6 bg-white text-gray-900 border-t border-gray-200 ` +
        `dark:bg-gradient-to-t dark:from-dark-950 dark:to-dark-900 dark:text-white dark:border-dark-800`
      }
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        {/* Brand/Info Block - Top */}
        <motion.div
          key={lang + 'brand'}
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 pb-10 border-b border-gray-200 mb-10 dark:border-dark-800"
        >
          <div className="flex items-center gap-3">
            <img src="/images/Asphera-PNG.png" alt="Asphera Logo" className="h-12 w-12 object-contain rounded-xl" />
            <span className="text-2xl font-bold gradient-text text-gray-900 dark:text-white">Asphera</span>
          </div>
          <p className="text-gray-700 text-center sm:text-left text-base max-w-xl flex-1 dark:text-dark-300">
            {t.desc[lang]}
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 bg-white rounded-xl flex justify-center items-center text-primary-500 transition-colors duration-200 dark:bg-dark-800 dark:text-white hover:bg-[#7b5cff] hover:text-white hover:shadow-lg hover:scale-110`}
                style={social.name === 'Discord' ? { transition: 'all 0.2s' } : { transition: 'all 0.2s' }}
              >
                {social.name === 'Discord' ? (
                  <i className="fa-brands fa-discord align-middle block m-0 -translate-x-0.5" style={{ fontSize: '1.4rem', width: '1.4rem', height: '1.4rem' }}></i>
                ) : (
                  <social.icon className="w-6 h-6 m-0 block" />
                )}
              </a>
            ))}
          </div>
        </motion.div>
        {/* Main Footer Content - 4 columns */}
        <div className="py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full text-center">
            {/* Bot, Destek, Yasal */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title + lang}
                initial={{ opacity: 0, y: 20 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full w-full flex flex-col items-center justify-center text-center"
              >
                <div className="flex flex-col items-center justify-center w-full">
                  <h3 className="text-base font-semibold text-gray-900 mb-1 p-0 m-0 w-full text-center dark:text-white">{section.title}</h3>
                  <ul className="space-y-2 w-full flex flex-col items-center justify-center text-center p-0 m-0">
                    {section.links.map((link) => (
                      <li key={link.name} className="w-full">
                        <MotionA
                          href={link.href}
                          target={
                            link.external || link.href === '/terms' || link.href === '/privacy'
                              ? '_blank'
                              : undefined
                          }
                          rel={
                            link.external || link.href === '/terms' || link.href === '/privacy'
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          whileHover={{ x: 4, color: '#a084ff' }}
                          transition={{ duration: 0.16, ease: 'easeOut' }}
                          className="text-gray-700 hover:text-primary-500 transition-colors duration-200 text-sm flex flex-row items-center justify-center group w-full text-center p-0 m-0 dark:text-dark-300"
                        >
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-1 min-w-0 flex-shrink-0" />
                          <span className="text-center">{link.name}</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1 min-w-0 flex-shrink-0" />
                        </MotionA>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-gray-200 mt-8 dark:border-dark-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-gray-500 text-xs dark:text-dark-400">
              <span>© {currentYear} Asphera Bot. {t.copyright[lang]}</span>
              <span>•</span>
              <span>{t.inTurkey[lang]}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs dark:text-dark-400">
              <span>Made With</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>by</span>
              <a href="https://lyorei.com.tr" target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: '#6030FF' }}>Lyorei.</a>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer; 
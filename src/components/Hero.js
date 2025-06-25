import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ lang, ready }) => {
  const t = {
    badge: {
      tr: '⚡ Güçlü Altyapı & Akıllı Moderasyon',
      en: '⚡ Powerful Infrastructure & Smart Moderation'
    },
    title1: {
      tr: 'Sunucunuzu ',
      en: 'Manage your '
    },
    title2: {
      tr: 'ile Yönetin!',
      en: 'with Asphera!'
    },
    desc: {
      tr: 'Gelişmiş moderasyon, eğlence ve otomasyon özellikleriyle Discord sunucunuzu bir üst seviyeye taşıyın. Hızlı, güvenli ve tamamen Türkçe Discord botu.',
      en: 'Take your Discord server to the next level with advanced moderation, fun and automation features. Fast, secure and fully Turkish Discord bot.'
    },
    invite: {
      tr: 'Botu Davet Et',
      en: 'Invite Bot'
    },
    features: {
      tr: 'Özellikleri Keşfet',
      en: 'Explore Features'
    }
  };
  return (
    <section
      id="hero"
      className={
        `min-h-screen flex flex-col justify-center items-center pt-0 pb-0 relative overflow-hidden ` +
        `bg-white dark:bg-gradient-to-b dark:from-dark-950 dark:via-dark-900 dark:to-dark-950`
      }
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-white dark:bg-gradient-to-b dark:from-dark-950 dark:via-dark-900 dark:to-dark-950" />
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-16 relative z-10 flex flex-col items-center justify-center text-center">
        {/* Avatar + Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative flex justify-center mb-10"
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0.7, scale: 1 }}
            animate={ready ? { opacity: [0.7, 1, 0.7], scale: [1, 1.12, 1] } : {}}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ zIndex: 1 }}
          >
            <div className="w-48 h-48 rounded-full bg-[#6030FF] blur-3xl opacity-60" />
          </motion.div>
          <img src="/images/bot-avatar.png" alt="Bot Avatar" className="w-40 h-40 rounded-full border-4" style={{ borderColor: '#6030FF', zIndex: 2, position: 'relative' }} />
        </motion.div>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary-500/40 text-primary-400 text-sm font-medium shadow-sm bg-[#edefff] dark:bg-[#1a1333]">
            {t.badge[lang]}
          </div>
        </motion.div>
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl font-extrabold mb-8 text-gray-900 dark:text-white"
        >
          {t.title1[lang]}<span className="text-primary-500">Asphera</span>
          <br />{t.title2[lang]}
        </motion.h1>
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl text-gray-700 dark:text-dark-300 max-w-2xl mx-auto mb-10"
        >
          {t.desc[lang]}
        </motion.p>
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          <motion.a
            href="#invite"
            whileHover={{ scale: 1.07, boxShadow: '0 0 32px 0 #6030FF88' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 350, damping: 18 }}
            className="relative flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-primary-500 hover:bg-gradient-to-r hover:from-primary-500 hover:to-purple-500 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-400 overflow-hidden"
            style={{ zIndex: 1 }}
          >
            <span className="flex items-center justify-center"><i className="fa-solid fa-plus text-2xl align-middle"></i></span>
            {t.invite[lang]}
            {/* Glow animasyonu */}
            <motion.span
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.25, scale: 1.3 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 rounded-full bg-[#6030FF] blur-2xl pointer-events-none"
              style={{ zIndex: 0 }}
            />
          </motion.a>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.07, boxShadow: '0 0 32px 0 #6030FF55', background: 'linear-gradient(90deg, #6030FF22 0%, #a084ff22 100%)', color: '#a084ff' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 350, damping: 18 }}
            className="relative flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-primary-500 text-primary-500 dark:text-white bg-transparent shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-400 overflow-hidden"
            style={{ zIndex: 1 }}
          >
            {t.features[lang]}
            {/* Glow animasyonu */}
            <motion.span
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.18, scale: 1.2 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 rounded-full bg-[#6030FF] blur-2xl pointer-events-none"
              style={{ zIndex: 0 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 
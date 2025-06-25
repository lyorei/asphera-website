import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Settings, 
  Activity,
  Sparkles
} from 'lucide-react';

const Features = ({ lang, ready }) => {
  const t = {
    badge: {
      tr: 'Güçlü Özellikler',
      en: 'Powerful Features'
    },
    why: {
      tr: 'Neden ',
      en: 'Why '
    },
    asphera: {
      tr: 'Asphera?',
      en: 'Asphera?'
    },
    desc: {
      tr: 'Discord sunucunuz için ihtiyacınız olan tüm özellikler tek bir botta. Güvenli, hızlı ve kullanıcı dostu.',
      en: 'All the features you need for your Discord server in one bot. Secure, fast and user-friendly.'
    },
    cta: {
      tr: 'Botu Davet Et',
      en: 'Invite Bot'
    }
  };
  const features = [
    {
      icon: Shield,
      title: { tr: 'Gelişmiş Moderasyon', en: 'Advanced Moderation' },
      desc: {
        tr: 'Sunucunuzu güvenli tutmak için kapsamlı moderasyon araçları.',
        en: 'Comprehensive moderation tools to keep your server safe.'
      },
      color: 'from-primary-500 to-primary-600',
      highlights: [
        { tr: 'Otomatik Spam Koruması', en: 'Auto Spam Protection' },
        { tr: 'Rol Yönetimi', en: 'Role Management' },
        { tr: 'Gelişmiş Filtreleme', en: 'Advanced Filtering' }
      ]
    },
    {
      icon: Zap,
      title: { tr: 'Eğlence Komutları', en: 'Fun Commands' },
      desc: {
        tr: 'Sunucunuzu canlandıracak eğlenceli komutlar.',
        en: 'Fun commands to liven up your server.'
      },
      color: 'from-yellow-500 to-orange-500',
      highlights: [
        { tr: 'Müzik Çalma', en: 'Music' },
        { tr: 'Mini Oyunlar', en: 'Mini Games' },
        { tr: 'Anket Sistemi', en: 'Poll System' }
      ]
    },
    {
      icon: Settings,
      title: { tr: 'Otomasyon Sistemi', en: 'Automation System' },
      desc: {
        tr: 'Sunucunuzu otomatikleştirin. Hoş geldin mesajları, otomatik rol verme ve zamanlanmış görevler.',
        en: 'Automate your server. Welcome messages, auto role assignment and scheduled tasks.'
      },
      color: 'from-blue-500 to-cyan-500',
      highlights: [
        { tr: 'Hoş Geldin Mesajları', en: 'Welcome Messages' },
        { tr: 'Otomatik Rol Verme', en: 'Auto Role Assignment' },
        { tr: 'Zamanlanmış Görevler', en: 'Scheduled Tasks' }
      ]
    },
    {
      icon: Activity,
      title: { tr: 'Gelişmiş Log Sistemi', en: 'Advanced Log System' },
      desc: {
        tr: 'Sunucunuzda olan her şeyi takip edin.',
        en: 'Track everything happening on your server.'
      },
      color: 'from-green-500 to-emerald-500',
      highlights: [
        { tr: 'Detaylı Log Kayıtları', en: 'Detailed Logs' },
        { tr: 'Gerçek Zamanlı Bildirimler', en: 'Real-time Notifications' },
        { tr: 'Özelleştirilebilir Kanallar', en: 'Customizable Channels' }
      ]
    }
  ];

  return (
    <section
      id="features"
      className={
        `min-h-screen w-full flex flex-col justify-center items-center ` +
        `bg-white dark:bg-gradient-to-b dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 px-2 sm:px-4 md:px-8`
      }
    >
      <div className="flex-1 flex flex-col items-center justify-center w-full min-h-screen">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#edefff] dark:bg-dark-800/60 border border-primary-500/20 rounded-full px-5 py-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary-400" />
            <span className="text-lg font-semibold text-primary-300">{t.badge[lang]}</span>
          </div>
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center drop-shadow-lg mb-4 sm:mb-6 text-gray-900 dark:text-white">
            {t.why[lang]}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Asphera?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-gray-700 dark:text-dark-200 max-w-2xl mx-auto text-center mb-6 sm:mb-8">
            {t.desc[lang]}
          </p>
          {/* Features Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-10 overflow-x-visible">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title.tr}
                className="flex flex-col items-center justify-between bg-white dark:bg-dark-800/60 border-2 border-gray-200 dark:border-dark-700 rounded-3xl shadow-2xl w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-10 transition-all duration-200 group backdrop-blur-xl relative sm:hover:scale-[1.05] sm:hover:shadow-2xl sm:hover:border-primary-500"
                transition={{ duration: 0.18, ease: 'easeOut' }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-5 shadow-lg`}>
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary-500 dark:text-white" />
                </div>
                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 text-center group-hover:text-primary-400 transition-colors duration-300">
                  {feature.title[lang]}
                </h3>
                {/* Desc */}
                <p className="text-sm sm:text-base text-gray-700 dark:text-dark-200 mb-2 sm:mb-3 text-center">
                  {feature.desc[lang]}
                </p>
                {/* Highlights */}
                <ul className="space-y-1 sm:space-y-2 mb-1">
                  {feature.highlights.map((item, itemIndex) => (
                    <li key={item.tr} className="flex items-center space-x-2 text-primary-400 text-sm sm:text-base font-semibold justify-center">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                      <span>{item[lang]}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          {/* CTA */}
          <motion.a
            href="https://discord.com/oauth2/authorize?client_id=1380920470576300062&permissions=8&integration_type=0&scope=applications.commands+bot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.07, boxShadow: '0 0 48px 0 #6030FF55', background: 'linear-gradient(90deg, #6030FF 0%, #a084ff 100%)', color: '#fff' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 text-lg sm:text-xl font-bold rounded-full border-2 border-primary-500 bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-xl relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-400 mx-auto"
            style={{ maxWidth: '100vw' }}
          >
            <i className="fa-brands fa-discord text-xl sm:text-2xl align-middle"></i>
            {t.cta[lang]}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Features; 
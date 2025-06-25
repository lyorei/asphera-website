import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Users, Server, Clock, Zap, Info } from 'lucide-react';

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    days = Math.floor(duration / (1000 * 60 * 60 * 24));
  return (
    (days > 0 ? days + 'g ' : '') +
    [hours, minutes, seconds].map(v => v.toString().padStart(2, '0')).join(':')
  );
}

const statTooltips = {
  servers: {
    tr: 'Botun aktif olduğu sunucu sayısı',
    en: 'Number of servers the bot is active in'
  },
  users: {
    tr: 'Tüm sunuculardaki toplam kullanıcı',
    en: 'Total users across all servers'
  },
  ping: {
    tr: 'Botun Discord API yanıt süresi',
    en: 'Bot response time to Discord API'
  },
  uptime: {
    tr: 'Botun yeniden başlatılmadan çalışma süresi',
    en: 'Time since last restart'
  }
};

const BotStatus = ({ lang, stats, ready }) => {
  const t = {
    title: { tr: 'Bot Durumu', en: 'Bot Status' },
    desc: {
      tr: 'Asphera\u2019nın canlı istatistiklerini ve durumunu buradan takip edebilirsiniz.',
      en: 'Track Asphera\u2019s live statistics and status here.'
    },
    online: { tr: 'Çevrimiçi', en: 'Online' },
    offline: { tr: 'Çevrimdışı', en: 'Offline' },
    servers: { tr: 'Aktif Sunucu', en: 'Active Servers' },
    users: { tr: 'Toplam Kullanıcı', en: 'Total Users' },
    ping: { tr: 'Ping', en: 'Ping' },
    uptime: { tr: 'Çalışma Süresi', en: 'Uptime' },
    lastUpdate: { tr: 'Son güncelleme', en: 'Last update' },
    allOk: { tr: 'Tüm sistemler normal çalışıyor', en: 'All systems operational' },
    notOk: { tr: 'Bot çevrimdışı', en: 'Bot is offline' },
    serversInfo: { tr: 'Botun aktif olduğu sunucu sayısı', en: 'Number of servers the bot is active in' },
    usersInfo: { tr: 'Tüm sunuculardaki toplam kullanıcı', en: 'Total users across all servers' },
    pingInfo: { tr: 'Botun Discord API yanıt süresi', en: 'Bot response time to Discord API' },
    uptimeInfo: { tr: 'Botun yeniden başlatılmadan çalışma süresi', en: 'Time since last restart' },
    systemsOk: { tr: 'Tüm sistemler normal çalışıyor', en: 'All systems operational' }
  };

  const statusColor = stats.online ? 'bg-green-400' : 'bg-red-400';
  const statusText = stats.online ? t.online[lang] : t.offline[lang];
  const now = new Date();

  const statCards = useMemo(() => [
    {
      icon: Server,
      label: t.servers[lang],
      value: stats.servers?.toLocaleString() || '0',
      color: 'text-primary-400',
      tooltip: statTooltips.servers[lang]
    },
    {
      icon: Users,
      label: t.users[lang],
      value: stats.users?.toLocaleString() || '0',
      color: 'text-green-400',
      tooltip: statTooltips.users[lang]
    },
    {
      icon: Zap,
      label: t.ping[lang],
      value: stats.ping !== undefined ? stats.ping + ' ms' : '--',
      color: 'text-yellow-400',
      tooltip: statTooltips.ping[lang]
    },
    {
      icon: Clock,
      label: t.uptime[lang],
      value: msToTime(stats.uptime || 0),
      color: 'text-orange-400',
      tooltip: statTooltips.uptime[lang]
    }
  ], [stats, lang, t.ping, t.servers, t.uptime, t.users]);

  return (
    <section
      id="status"
      className={
        `min-h-screen flex flex-col justify-center items-center ` +
        `dark:bg-gradient-to-b dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 bg-[#f4f6fb] px-2 sm:px-4 md:px-8`
      }
    >
      <div className="flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 text-gray-900 dark:text-white tracking-tight">
            {t.title[lang]}
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-700 dark:text-dark-300 max-w-2xl mx-auto">
            {t.desc[lang]}
          </p>
        </motion.div>
        {/* Avatar + Badge */}
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <div className="relative flex items-center justify-center">
            <motion.img
              src={'/images/Asphera-PNG.png'}
              alt="Bot Avatar"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-contain select-none"
              draggable="false"
              animate={{ y: [-10, 10] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              style={{ zIndex: 2, position: 'relative' }}
            />
            <span
              className={`absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-7 sm:w-8 h-7 sm:h-8 rounded-full border-2 border-white dark:border-dark-900 shadow flex items-center justify-center ${statusColor}`}
              style={{ zIndex: 10 }}
            >
              <span className="block w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white/80" />
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-5">
            <span className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white drop-shadow-lg">{stats.username || 'Asphera'}</span>
            <span className={`px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-sm sm:text-base font-medium shadow ${stats.online ? 'bg-green-400 text-primary-500' : 'bg-red-400 text-primary-500'}`}>{statusText}</span>
          </div>
        </div>
        {/* Stat Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-10">
          {statCards.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.045, boxShadow: '0 8px 32px 0 #6030FF33' }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className={`flex flex-col items-center justify-center bg-white/10 dark:bg-dark-800/60 backdrop-blur-xl border-2 border-primary-900/10 dark:border-primary-500/20 rounded-2xl shadow-lg min-h-[120px] sm:min-h-[170px] w-full px-6 sm:px-10 py-7 sm:py-12 transition-all duration-200`}
            >
              <item.icon className={`w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 ${item.color} group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-200`} />
              <span className="text-3xl sm:text-4xl font-extrabold mb-1 sm:mb-2 text-white tracking-tight drop-shadow-lg">{item.value}</span>
              <span className="text-lg sm:text-xl text-gray-200 dark:text-gray-300 font-semibold mb-1 sm:mb-2 text-center">{item.label}</span>
              <span className="relative flex items-center justify-center mt-1 sm:mt-2 group">
                <Info className="w-5 h-5 sm:w-6 sm:h-6 ml-1 text-primary-400 group-hover:text-primary-500 transition-colors cursor-pointer" />
                <span className="absolute top-full mt-2 sm:mt-3 left-1/2 -translate-x-1/2 w-40 sm:w-52 bg-white/90 dark:bg-dark-900/95 text-xs sm:text-sm text-gray-900 dark:text-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 border border-primary-500/10 text-center">
                  {item.tooltip}
                </span>
              </span>
            </motion.div>
          ))}
        </div>
        {/* Status Footer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2 mt-5 sm:mt-2 w-full max-w-2xl mx-auto px-0 sm:px-2"
        >
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-dark-800/80 border border-gray-200 dark:border-dark-700 rounded-full px-4 py-2 shadow text-xs text-gray-700 dark:text-dark-300 mb-2 sm:mb-0">
            <div className={`w-2 h-2 rounded-full animate-pulse ${stats.online ? 'bg-green-400' : 'bg-red-400'}`} />
            <span>{stats.online ? t.allOk[lang] : t.notOk[lang]}</span>
          </div>
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-dark-800/80 border border-gray-200 dark:border-dark-700 rounded-full px-4 py-2 shadow text-xs text-gray-700 dark:text-dark-300">
            <Clock className="w-4 h-4 text-primary-400" />
            <span>{t.lastUpdate[lang]}: {now.toLocaleTimeString(lang === 'tr' ? 'tr-TR' : 'en-US')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BotStatus; 
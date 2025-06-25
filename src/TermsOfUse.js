import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Shield, User, Database, AlertTriangle, RefreshCcw, Mail } from 'lucide-react';

const termsContent = {
  tr: (
    <>
      <h1 className="text-4xl font-extrabold mb-8 text-primary-500 text-center flex items-center justify-center gap-3">
        <Shield className="inline w-8 h-8 text-primary-400" /> Kullanım Şartları
      </h1>
      <div className="bg-white dark:bg-dark-900 rounded-3xl shadow-2xl p-8 max-w-3xl mx-auto text-gray-800 dark:text-gray-200 border border-primary-100 dark:border-primary-800">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><User className="w-6 h-6" /> 1. Genel Bilgiler</h2>
          <p>Asphera BOT'u kullanarak bu kullanım şartlarını kabul etmiş olursunuz. Bot, Discord sunucularında moderasyon, ekonomi, kayıt, görev, seviye, envanter, istatistik ve çeşitli otomasyon işlevleri sunar. Botun kullanımı tamamen ücretsizdir.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><Database className="w-6 h-6" /> 2. Hizmetin Kullanımı</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Botu yalnızca Discord'un ve yerel yasaların izin verdiği şekilde kullanmalısınız.</li>
            <li>Botun kötüye kullanımı, spam, saldırı, yasa dışı faaliyetler, veri manipülasyonu ve sistem açıklarını istismar etmek kesinlikle yasaktır.</li>
            <li>Ekonomi, görev, kayıt ve moderasyon sistemlerinde adil kullanım esastır.</li>
            <li>Botun komutlarını ve API'sini otomatikleştirilmiş araçlarla (bot, script, macro vb.) kötüye kullanmak yasaktır.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><AlertTriangle className="w-6 h-6" /> 3. Hesap ve Veri Güvenliği</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Bot, kullanıcıların Discord kimliği (ID), isim, yaş, cüzdan bakiyesi, seviye, görevler, kayıt geçmişi, moderasyon olayları gibi verileri sunucu bazında saklayabilir.</li>
            <li>Kullanıcılar, Discord hesaplarının güvenliğinden kendileri sorumludur.</li>
            <li>Şüpheli aktiviteler tespit edildiğinde, ilgili kullanıcılar kısıtlanabilir veya engellenebilir.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><AlertTriangle className="w-6 h-6" /> 4. Sorumluluk Reddi</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Botun kesintisiz, hatasız veya her zaman erişilebilir olacağı garanti edilmez.</li>
            <li>Botun kullanımı sırasında oluşabilecek veri kaybı, sunucu sorunları veya diğer zararlardan geliştirici sorumlu tutulamaz.</li>
            <li>Botun sunduğu sanal ekonomi ve ödüller gerçek para veya hak teşkil etmez.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><RefreshCcw className="w-6 h-6" /> 5. Değişiklikler ve Güncellemeler</h2>
          <p>Kullanım şartları önceden haber verilmeksizin değiştirilebilir. Güncellemeleri düzenli olarak kontrol ediniz.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><Mail className="w-6 h-6" /> 6. İletişim</h2>
          <p>
            <a href="https://discord.gg/wt6rQh8MzR" className="text-primary-500 underline font-semibold" target="_blank" rel="noopener noreferrer">Destek Sunucusu</a>
          </p>
        </section>
      </div>
    </>
  ),
  en: (
    <>
      <h1 className="text-4xl font-extrabold mb-8 text-primary-500 text-center flex items-center justify-center gap-3">
        <Shield className="inline w-8 h-8 text-primary-400" /> Terms of Use
      </h1>
      <div className="bg-white dark:bg-dark-900 rounded-3xl shadow-2xl p-8 max-w-3xl mx-auto text-gray-800 dark:text-gray-200 border border-primary-100 dark:border-primary-800">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><User className="w-6 h-6" /> 1. General Information</h2>
          <p>By using Asphera BOT, you agree to these terms of use. The bot provides moderation, economy, registration, tasks, leveling, inventory, statistics, and various automation features for Discord servers. The bot is completely free to use.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><Database className="w-6 h-6" /> 2. Use of Service</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must use the bot only as permitted by Discord and local laws.</li>
            <li>Abuse, spam, attacks, illegal activities, data manipulation, and exploiting system vulnerabilities are strictly prohibited.</li>
            <li>Fair use is essential in the bot's economy, tasks, registration, and moderation systems.</li>
            <li>It is forbidden to abuse the bot's commands and API with automated tools (bots, scripts, macros, etc.).</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><AlertTriangle className="w-6 h-6" /> 3. Account and Data Security</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The bot may store user data such as Discord ID, name, age, wallet balance, level, tasks, registration history, and moderation events on a per-server basis.</li>
            <li>Users are responsible for the security of their Discord accounts.</li>
            <li>If suspicious activities are detected, relevant users may be restricted or banned.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><AlertTriangle className="w-6 h-6" /> 4. Disclaimer</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>There is no guarantee that the bot will be uninterrupted, error-free, or always accessible.</li>
            <li>The developer cannot be held responsible for any data loss, server issues, or other damages that may occur during the use of the bot.</li>
            <li>The virtual economy and rewards provided by the bot do not constitute real money or rights.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><RefreshCcw className="w-6 h-6" /> 5. Changes and Updates</h2>
          <p>Terms of use may be changed without prior notice. Please check for updates regularly.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><Mail className="w-6 h-6" /> 6. Contact</h2>
          <p>
            <a href="https://discord.gg/wt6rQh8MzR" className="text-primary-500 underline font-semibold" target="_blank" rel="noopener noreferrer">Support Server</a>
          </p>
        </section>
      </div>
    </>
  )
};

const TermsOfUse = ({ lang, setLang, ready }) => {
  return (
    <>
      <Header lang={lang} setLang={setLang} ready={ready} />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#18192a] via-[#0e1020] to-[#0a0b16] py-12 px-4 mt-20">
        <div className="w-full flex flex-col items-center">
          {termsContent[lang] || termsContent.tr}
        </div>
      </div>
      <Footer lang={lang} ready={ready} />
    </>
  );
};

export default TermsOfUse; 
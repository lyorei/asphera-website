import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Database, User, Lock, EyeOff, RefreshCcw, Mail } from 'lucide-react';

const privacyContent = {
  tr: (
    <>
      <h1 className="text-4xl font-extrabold mb-8 text-primary-500 text-center flex items-center justify-center gap-3">
        <Lock className="inline w-8 h-8 text-primary-400" /> Gizlilik Politikası
      </h1>
      <div className="bg-white dark:bg-dark-900 rounded-3xl shadow-2xl p-8 max-w-3xl mx-auto text-gray-800 dark:text-gray-200 border border-primary-100 dark:border-primary-800">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><User className="w-6 h-6" /> 1. Toplanan Bilgiler</h2>
          <p>Asphera BOT, yalnızca botun işlevselliği için gerekli olan minimum verileri toplar ve saklar. Bu veriler şunları içerebilir:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Discord kullanıcı ID'si, isim, yaş, cüzdan bakiyesi, seviye, görevler, kayıt geçmişi, moderasyon olayları, sunucu ID'si, işlem zamanları, envanter, görev ilerlemesi, şüpheli aktiviteler ve istatistikler.</li>
            <li>Kayıt ve moderasyon işlemlerinde, işlem yapan yetkili ve işlem detayları kaydedilebilir.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><Database className="w-6 h-6" /> 2. Verilerin Kullanımı</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Toplanan veriler yalnızca botun işlevlerini sağlamak, istatistik tutmak, güvenlik ve moderasyon amacıyla kullanılır.</li>
            <li>Veriler üçüncü şahıslarla paylaşılmaz, satılmaz veya ticari amaçla kullanılmaz.</li>
            <li>Yasal zorunluluklar haricinde hiçbir veri paylaşımı yapılmaz.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><EyeOff className="w-6 h-6" /> 3. Çerezler ve Takip</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Bot, web sitesi veya API üzerinden çerez kullanmaz.</li>
            <li>Discord üzerinden yapılan işlemler, sadece Discord API'si aracılığıyla gerçekleşir.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><Lock className="w-6 h-6" /> 4. Güvenlik</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Veriler, güvenli bir şekilde saklanır ve yalnızca yetkili kişiler tarafından erişilebilir.</li>
            <li>Makul teknik ve idari önlemler alınmaktadır.</li>
            <li>Ancak, internet üzerinden iletilen verilerin tam güvenliği garanti edilemez.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><RefreshCcw className="w-6 h-6" /> 5. Veri Saklama ve Silme</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Kullanıcı verileri, ilgili Discord sunucusundan çıkış yapıldığında veya sunucu sahibi tarafından talep edildiğinde silinebilir.</li>
            <li>Kayıt ve moderasyon geçmişi, yasal zorunluluklar dışında makul bir süre saklanır.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><RefreshCcw className="w-6 h-6" /> 6. Değişiklikler</h2>
          <p>Gizlilik politikası önceden haber verilmeksizin değiştirilebilir. Güncellemeleri düzenli olarak kontrol ediniz.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><Mail className="w-6 h-6" /> 7. İletişim</h2>
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
        <Lock className="inline w-8 h-8 text-primary-400" /> Privacy Policy
      </h1>
      <div className="bg-white dark:bg-dark-900 rounded-3xl shadow-2xl p-8 max-w-3xl mx-auto text-gray-800 dark:text-gray-200 border border-primary-100 dark:border-primary-800">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><User className="w-6 h-6" /> 1. Information Collected</h2>
          <p>Asphera BOT collects and stores only the minimum data necessary for its functionality. This may include:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Discord user ID, name, age, wallet balance, level, tasks, registration history, moderation events, server ID, timestamps, inventory, task progress, suspicious activities, and statistics.</li>
            <li>For registration and moderation actions, the responsible staff and action details may be logged.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><Database className="w-6 h-6" /> 2. Use of Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Collected data is used solely to provide bot functionality, maintain statistics, and ensure security and moderation.</li>
            <li>Data is not shared, sold, or used for commercial purposes.</li>
            <li>No data is shared except as required by law.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><EyeOff className="w-6 h-6" /> 3. Cookies and Tracking</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The bot does not use cookies via its website or API.</li>
            <li>All actions are performed solely through the Discord API.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><Lock className="w-6 h-6" /> 4. Security</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Data is stored securely and accessible only by authorized personnel.</li>
            <li>Reasonable technical and administrative measures are taken.</li>
            <li>However, full security of data transmitted over the internet cannot be guaranteed.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><RefreshCcw className="w-6 h-6" /> 5. Data Retention and Deletion</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>User data can be deleted upon leaving the relevant Discord server or upon request by the server owner.</li>
            <li>Registration and moderation history is retained for a reasonable period unless required by law.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><RefreshCcw className="w-6 h-6" /> 6. Changes</h2>
          <p>Privacy policy may be changed without prior notice. Please check for updates regularly.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-primary-500"><Mail className="w-6 h-6" /> 7. Contact</h2>
          <p>
            <a href="https://discord.gg/wt6rQh8MzR" className="text-primary-500 underline font-semibold" target="_blank" rel="noopener noreferrer">Support Server</a>
          </p>
        </section>
      </div>
    </>
  )
};

const PrivacyPolicy = ({ lang, setLang, ready }) => {
  return (
    <>
      <Header lang={lang} setLang={setLang} ready={ready} />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#18192a] via-[#0e1020] to-[#0a0b16] py-12 px-4 mt-20">
        <div className="w-full flex flex-col items-center">
          {privacyContent[lang] || privacyContent.tr}
        </div>
      </div>
      <Footer lang={lang} ready={ready} />
    </>
  );
};

export default PrivacyPolicy; 
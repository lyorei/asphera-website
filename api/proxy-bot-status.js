let cache = null;
let cacheTime = 0;

export default async function handler(req, res) {
  const now = Date.now();
  // 30 saniye cache
  if (cache && now - cacheTime < 30000) {
    return res.status(200).json(cache);
  }
  try {
    const response = await fetch('http://37.114.41.125:2481/api/bot-status');
    const data = await response.json();
    cache = data;
    cacheTime = now;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Bot durumuna ulaşılamadı' });
  }
} 
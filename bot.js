const mineflayer = require('mineflayer');

// إعدادات البوت
const bot = mineflayer.createBot({
  host: 'oeae123666.aternos.me', // عنوان السيرفر الخاص بك
  port: 25171,                   // المنفذ الافتراضي (إذا كان مختلفًا تحقق من لوحة التحكم)
  username: '34Bo21t',           // اسم البوت
  password: '',                  // كلمة المرور (إذا كانت مطلوبة)
});

// حدث عند الاتصال
bot.on('spawn', () => {
  console.log('تم اتصال البوت!');
});

// حدث عند حدوث خطأ
bot.on('error', (err) => {
  console.log('حدث خطأ: ', err);
});

// حدث عند حدوث قطع الاتصال
bot.on('end', () => {
  console.log('تم قطع الاتصال');
});

// حدث عند تلقي رسالة في الدردشة
bot.on('chat', (username, message) => {
  if (message === 'ping') {
    bot.chat('pong');
  }
});

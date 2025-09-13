const mineflayer = require('mineflayer');

// إعدادات البوت
const bot = mineflayer.createBot({
  host: 'oeae123666.aternos.me',  // عنوان السيرفر
  port: 25171,        // منفذ السيرفر
  username: 'mineglass', // اسم البوت
  password: '',        // كلمة المرور إذا كنت تستخدم حسابًا مدفوعًا
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

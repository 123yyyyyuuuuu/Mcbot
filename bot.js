const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'oeae123666.aternos.me', // عنوان السيرفر
  port: 25171, // المنفذ
  username: 'MineScout', // اسم البوت
  password: '', // كلمة المرور (إذا كانت مطلوبة)
});

// محاولة إعادة الاتصال في حالة الخطأ
bot.on('error', (err) => {
  console.log('حدث خطأ: ', err);
  setTimeout(() => {
    console.log('إعادة محاولة الاتصال...');
    bot.quit(); // قطع الاتصال الحالي
    bot.connect(); // إعادة الاتصال
  }, 5000); // المحاولة بعد 5 ثوانٍ
});

// محاولة إعادة الاتصال عند قطع الاتصال
bot.on('end', () => {
  console.log('تم قطع الاتصال');
  setTimeout(() => {
    console.log('إعادة محاولة الاتصال...');
    bot.connect(); // إعادة الاتصال
  }, 5000); // المحاولة بعد 5 ثوانٍ
});

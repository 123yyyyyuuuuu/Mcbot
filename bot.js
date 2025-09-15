const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'oeae123666.aternos.me', // عنوان السيرفر
  port: 25171,                   // البورت
  username: 'MineScout',         // اسم الحساب (بدون كلمة مرور لأن السيرفر offline)
  // password: 'password',       // فقط إذا كان السيرفر في online-mode
});

bot.on('spawn', () => {
  console.log('البوت ظهر في العالم!');
  bot.chat('مرحبا! أنا بوت');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  if (message === 'مرحبا' || message === 'hi') {
    bot.chat(`أهلاً، ${username}!`);
  }
});

bot.on('error', (err) => console.log('خطأ:', err));
bot.on('end', () => console.log('البوت انقطع الاتصال'));

const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'oeae123666.aternos.me',       // عنوان السيرفر أو IP
  port: 25171,             // بورت السيرفر
  username: 'MineScout',     // اسم الحساب (أو الايميل/username للحسابات المضمّنة)
  // password: 'password', // إذا السيرفر في online-mode، فكّر بإضافة كلمة المرور أو استخدام authentication
})

bot.on('spawn', () => {
  console.log('البوت ظهر في العالم!')
  bot.chat('مرحبا! أنا بوت')
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  if (message === 'مرحبا' || message === 'hi') {
    bot.chat(`أهلاً، ${username}!`)
  }
})

bot.on('error', err => console.log('خطأ:', err))
bot.on('end', () => console.log('البوت انقطع الاتصال'))

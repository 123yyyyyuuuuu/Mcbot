const mineflayer = require('mineflayer');

// Create the bot
const bot = mineflayer.createBot({
  host: 'oeae123666.aternos.me', // Change to your server IP or 'localhost'
  port: 25171,        // Default Minecraft port
  username: 'happyoe' // Bot username
});

// When the bot logs in
bot.on('login', () => {
  console.log('Bot has logged in!');
  bot.chat('Hello everyone!');
});

// When the bot receives a message
bot.on('chat', (username, message) => {
  if (username === bot.username) return;

  console.log(`<${username}> ${message}`);

  // Bot responds to "hello"
  if (message === 'hello') {
    bot.chat(`Hi ${username}!`);
  }
});

// Error handling
bot.on('error', err => console.log('Error:', err));
bot.on('end', () => console.log('Bot has been disconnected'));

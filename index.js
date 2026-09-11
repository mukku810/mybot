const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent 
     
});

client.once('ready', () => {
    console.log(Bot online ho gaya hai: ${client.user.tag});
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.reply('Pong! Bot active hai.');
    }
});

// Yahan apna Discord Bot ka Token dalein (ya environment variable use karein)
client.login('MTU0NzI4MjgxNTcwMjI3ODIxNQ.GoJ1q8.Te0qlUa5dQBmfwHMl4kjcnnVfFEdHFeQ0tKwB8');

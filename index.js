const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "#";

bot.on("message", function(message) {
 if (msg.content === prefix + 'ping') {
   msg.reply('pong!');
   msg.reply('caso pra mais comando digite #ajuda!');
 }
})

bot.login("const Discord = require('discord.js');
const client = new Discord.Client();
const prefix '#';

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('NDAzNjk5Mjg3MjczMzczNzA2.DULNDg.8iR87gqqbZt_-cEJSbFs0lPUJkk');

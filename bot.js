const Discord = require("discord.js");
const bot = new Discord.Client();
const client = new Discord.Client();

const token = ''
const token2 = ''
const donotdisturb = 'dnd'


bot.on("ready", () => {
    console.log(bot.user.username + " Selfbot Online!");
    bot.user.setStatus(`dnd`);
    console.log(bot.user.username + " Selfbot Set My Self to " + donotdisturb);
    bot.user.setGame(" On " + bot.guilds.array().length + " Servers");
    console.log(bot.user.username + " Selfbot is in " + bot.guilds.array().length + " Servers");
});
bot.login(token);

client.on("ready", () => {
    console.log(client.user.username + " Selfbot Online!");
    client.user.setStatus(`dnd`);
    console.log(client.user.username + " Selfbot Set My Self to " + donotdisturb);
    client.user.setGame(" On " + client.guilds.array().length + " Servers");
    console.log(client.user.username + " Selfbot is in " + client.guilds.array().length + " Servers");
});
client.login(token2);

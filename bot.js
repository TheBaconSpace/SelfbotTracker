const Discord = require("discord.js");
const bot = new Discord.Client();
const client = new Discord.Client();
const mybot = new Discord.Client();

const token = 'BotToken1'
const token2 = 'BotToken2'
const token3 = 'BotToken3'
const dnd = 'dnd'
const sbt = 'SelfbotTracker '


bot.on("ready", () => {
    console.log(bot.user.username + sbt+" Online!");
    bot.user.setStatus(`dnd`);
    console.log(bot.user.username +  + sbt+ " Set My Self to " + dnd);
    bot.user.setGame(" On " + bot.guilds.array().length + " Servers");
    console.log(bot.user.username + " SelfbotTracker is in " + bot.guilds.array().length + " Servers");
});
bot.login(token);

client.on("ready", () => {
    console.log(client.user.username  + sbt+ " Online!");
    client.user.setStatus(`dnd`);
    console.log(client.user.username  + sbt+ "  Set My Self to " + dnd);
    client.user.setGame(" On " + client.guilds.array().length + " Servers");
    console.log(client.user.username  + sbt+"  is in " + client.guilds.array().length + " Servers");
});
client.login(token2);
mybot.on("ready", () => {
    console.log(mybot.user.username  + sbt+"  Online!");
    mybot.user.setStatus(`dnd`);
    console.log(mybot.user.username  + sbt+"  Set My Self to " + dnd);
    mybot.user.setGame(" On " + mybot.guilds.array().length + " Servers");
    console.log(mybot.user.username +  + sbt+"  is in " + mybot.guilds.array().length + " Servers");
});
mybot.login(token3);

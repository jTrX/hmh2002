const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("533754669747404820")
setInterval(function() {
channel.send(`jTrX THE BEST`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
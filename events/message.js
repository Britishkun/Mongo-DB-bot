const Discord = require('discord.js');
const config = require('../config.json');
const GuildModel = require("../models/guild")
const Levels = require("discord-xp");
const configModel = require("../models/welcomeLeave")
module.exports = async (client, message) => {
     if(message.channel.type === "dm") return;
     if(message.author.id === client.user.id || message.author.bot) return;
    const levelConfig = await configModel.findOne({ GuildID: message.guild.id })
    const randomAmountOfXp = Math.floor(Math.random() * 29) + 1; // Min 1, Max 30

    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
    if(levelConfig.levelMessages === true) {
    if (hasLeveledUp) {
      const user = await Levels.fetch(message.author.id, message.guild.id);
      message.channel.send(`${message.author}, congratulations! You have leveled up to **${user.level}**. :tada:`);
    }
}
    const guildc = await GuildModel.findOne({ GuildID: message.guild.id })
    const prefix = guildc.prefix
    if(message.guild.id === null) prefix = '?';
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift();
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
    if (!command) return;

     if(command.nsfwOnly && !message.channel.nsfw) {
         return message.reply('Only use this in nsfw channels please')
     }
     if(command.ownerOnly && message.author.id !== config.ownerId) {
         return message.reply("Only the owner is allowed to run this")
     }

    if (!client.cooldowns.has(command.name)) {
        client.cooldowns.set(command.name, new Discord.Collection());
    };

    const now = Date.now();
    const timestamps = client.cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 0) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        };
    };

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
        command.execute(client, message, args);
    } catch (error) {
        console.log(error);
        message.reply('there was an error trying to execute that command!');
    }   
    


};
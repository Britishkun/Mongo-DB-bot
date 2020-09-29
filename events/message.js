const Discord = require('discord.js');
const config = require('../config.json');
const GuildModel = require("../models/guild")
module.exports = async (client, message) => {
    const guild = await GuildModel.findOne({ GuildID: message.guild.id })
    
    const prefix = guild.prefix
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
    if (!command) return;

    if (command.guildOnly && message.channel.type == 'dm') {
        return message.reply('I can\'t execute this command inside of DM\'s');
    };
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
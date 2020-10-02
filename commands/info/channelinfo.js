const { MessageEmbed } = require('discord.js')
const dateformat = require("dateformat")
module.exports = {
    name: 'channelinfo', 
    description: 'Pong!', 
    aliases: ['p'], 
    cooldown: 5, 
    usage: '<member>',
    category: 'Info', 
    ownerOnly: false, 
    nsfwOnly: false, 
   async execute(client, message, args) {
     const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel;
     if(!channel) return message.reply("Please mention a channel")
     let name = channel.name;
     let id = channel.id;
     let type = channel.type;
     let createdAt = dateformat(channel.createdAt);
     let embed = new MessageEmbed()
     .addField("Name", name, true)
     .addField("ID", id, true)
     .addField("Type", type, true)
     .addField("Created at", createdAt, true)
     message.channel.send(embed)
    }
};
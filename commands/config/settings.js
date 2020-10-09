const configModel = require("../../models/welcomeLeave")
const guildModel = require("../../models/guild");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'settings', 
    description: 'Pong!', 
    aliases: ['p'], 
    guildOnly: true, 
    cooldown: 5, 
    usage: '<member>',
    category: 'Info', 
    ownerOnly: false, 
    nsfwOnly: false, 
    async execute(client, message, args) {
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send("You dont have the right permissions!")
     let guildFig = await guildModel.findOne({ GuildID: message.guild.id })
     let configG = await configModel.findOne({ GuildID: message.guild.id })
     let prefix = guildFig.prefix;
     let welcomeChannel = message.guild.channels.cache.get(configG.welcomeChannelId) || "None";
     let leaveChannel = message.guild.channels.cache.get(configG.leaveChannelId) || "None";
     let autoRole = message.guild.roles.cache.get(configG.autoRole) || "None"
     let levelMsg = guildFig.levelMessages;
     let modlog = message.guild.channels.cache.get(configG.modlog) || "None";
     let botrole = message.guild.roles.cache.get(configG.botrole) || "None";


     let embed = new MessageEmbed()
     .setTitle(`${message.guild.name}'s settings!`)
     .addField("Prefix", prefix, true)
     .addField("Welcome channel", welcomeChannel, true)
     .addField("Leave channel", leaveChannel, true)
     .addField("AutoRole", autoRole, true)
     .addField("Level messages", levelMsg, true)
     .addField("Modlog", modlog, true)
     .addField("Bot role", botrole, true)
     message.channel.send(embed)
    }
};
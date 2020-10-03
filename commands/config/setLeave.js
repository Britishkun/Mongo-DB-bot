const welcomeModel = require("../../models/welcomeLeave")
let configModel = welcomeModel;
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'setLeave', 
    description: 'set the leave channel!', 
    aliases: ['setL'], 
    cooldown: 5, 
    usage: '<channel>',
    category: 'Config', 
    ownerOnly: false, 
    nsfwOnly: false, 
    testing: true,
   async execute(client, message, args) {
    if(!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.reply("You need manage channels permission!")
 let channel = message.mentions.channels.first()
 if(!channel) {
     await configModel.findOneAndUpdate({ GuildID: message.guild.id, leaveChannelId: "null" })
     message.channel.send("Leave Channel reseted")
 }
 if(channel) {
 let congig = await configModel.findOne({ GuildID: message.guild.id })
 let modlog = congig.modlog;
 let embed = new MessageEmbed()
 .setTitle(`**action:** leaveChannel change`)
 .setDescription(`**Moderator:** ${message.author.username}`)
 .addField(`New channel:`, channel)
 let config = await welcomeModel.findOneAndUpdate({
     GuildID: message.guild.id,
     leaveChannelId: channel.id,
 });
 message.channel.send("done!")
 client.channels.cache.get(modlog).send(embed)
}
}
}
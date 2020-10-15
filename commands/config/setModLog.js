const { MessageEmbed } = require("discord.js")
const welcomeModel = require("../../models/welcomeLeave")
module.exports = {
    name: 'setModlog', 
    description: 'set the modlog channel!', 
    aliases: ['setmodlog', 'setmod'], 
    cooldown: 5, 
    usage: '<channel>',
    category: 'Config', 
    ownerOnly: false, 
    nsfwOnly: false, 
    testing: true,
   async execute(client, message, args) {
       if(!message.member.hasPermission("MANAGE_CHANNELS"))
       return message.reply("You need manage channels permission!")
       const model = welcomeModel.findOne({ GuildID: message.guild.id })
 let channel = message.mentions.channels.first()
 if(!channel) {
     await model.updateOne({
         GuildID: message.guild.id,
         modlog: "null",
     });
     message.reply('Modlog reseted!')
 }
 let modbed = new MessageEmbed()
 .setTitle("**modlog:** setted channel")
 .setDescription(`**moderator:** ${message.author.username}`)
 let config = await model.updateOne({
     GuildID: message.guild.id,
     modlog: channel.id,
 });
 message.channel.send("done!")
 channel.send(modbed)
}
}
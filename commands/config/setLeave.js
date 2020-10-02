const welcomeModel = require("../../models/welcomeLeave")
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
 if(!channel) return message.reply("Please mention a channel!")

 let config = await welcomeModel.findOneAndUpdate({
     GuildID: message.guild.id,
     leaveChannelId: channel.id,
 });
 message.channel.send("done!")
}
}
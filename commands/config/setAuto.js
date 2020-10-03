const configModel = require("../../models/welcomeLeave")
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'setAuto', 
    description: 'sets the autorole!', 
    aliases: ['setA'], 
    cooldown: 20, 
    usage: '<role>',
    category: 'Config', 
    ownerOnly: false, 
    nsfwOnly: false, 
    async execute(client, message, args) {
        if(!message.member.hasPermission("MANAGE_ROLES"))
        return message.reply("You need manage roles permissions!")
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
        if(!role) {
             await configModel.findOneAndUpdate({ GuildID: message.guild.id, autoRole: "null" }) 
            message.channel.send("AutoRole is now resetted!")}
            let congig = await configModel.findOne({ GuildID: message.guild.id })
            let modlog = congig.modlog;
            let embed = new MessageEmbed()
            .setTitle(`**action:** autoRole change`)
            .setDescription(`**Moderator:** ${message.author.username}`)
        let config = await configModel.findOneAndUpdate({
            GuildID: message.guild.id,
            autoRole: role.id || role,
        })
        message.channel.send("Done")
        client.channels.cache.get(modlog).send(embed)
     
    }
};
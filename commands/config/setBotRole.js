const configModel = require("../../models/welcomeLeave")
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'setBotRole', 
    description: 'sets the role for the bots!', 
    aliases: ['setB'], 
    cooldown: 20, 
    usage: '<role>',
    category: 'Config', 
    ownerOnly: false, 
    nsfwOnly: false, 
    async execute(client, message, args) {
        if(!message.member.hasPermission("MANAGE_ROLES"))
        return message.reply("You need manage roles permissions!")
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
        let congig = await configModel.findOne({ GuildID: message.guild.id })
        if(!role) {
             await congig.updateOne({ GuildID: message.guild.id, botRole: "null" }) 
            message.channel.send("The bot role is now resetted!")}
            let modlog = congig.modlog;
            let embed = new MessageEmbed()
            .setTitle(`**action:** botRole change`)
            .setDescription(`**Moderator:** ${message.author.username}`)
        let config = await congig.updateOne({
            GuildID: message.guild.id,
            botRole: role.id || role,
        })
        message.channel.send("Done")
        client.channels.cache.get(modlog).send(embed)
     
    }
};
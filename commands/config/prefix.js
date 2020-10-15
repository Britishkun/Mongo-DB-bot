const { MessageEmbed } = require("discord.js")
const guildModel = require("../../models/guild")
const configModel = require("../../models/welcomeLeave")
const config = require('../../config.json')
module.exports = {
    name: 'prefix',
    description: 'set the prefix',
    cooldown: 1,
    usage: '<prefix>',
    category: 'Config',
    ownerOnly: false, 
    nsfwOnly: false,
    async execute(client, message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR"))
        return message.channel.send("You do not have the required permission `ADMINISTARTOR`")
        let congig = await configModel.findOne({ GuildID: message.guild.id })
        const Guild = await guildModel.findOne({ GuildID: message.guild.id })
        let modlog = congig.modlog;
        let prefix = args[0]
        if(!prefix) {
            await Guild.updateOne({ GuildID: message.guild.id, prefix: config.prefix })
            message.channel.send(`Prefix has been resetted to \`${config.prefix}\``)
        }
    if(prefix) {

    let guild = await Guild.updateOne({
        
            GuildID: message.guild.id,
            prefix: prefix,
        
    });
    let embed = new MessageEmbed()
    .setTitle(`**action:** prefix change`)
    .setDescription(`**Moderator:** ${message.author.username}`)
    .addField("New prefix:", prefix)
     message.channel.send("Done!")
     client.channels.cache.get(modlog).send(embed)
}
    },
}
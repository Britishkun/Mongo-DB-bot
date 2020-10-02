const GuildModel = require("../models/welcomeLeave")
const { MessageEmbed } = require("discord.js")

module.exports = async (client, member) => {
    const guild = await GuildModel.findOne({
        GuildID: member.guild.id,
    })
    let welcomeChannel = guild.leaveChannelId
    if(!welcomeChannel && welcomeChannelId === null) return;
    let welcomeEmbed = new MessageEmbed()
    .setTitle(`Goodbye! ${member.name}`)
    .setDescription(`Goodbye from ${member.guild.name}`)
    client.channels.cache.get(welcomeChannel).send(welcomeEmbed)
}
const GuildModel = require("../models/welcomeLeave")
const { MessageEmbed } = require("discord.js")
const Levels = require('discord-xp')
module.exports = async (client, member) => {
    const guild = await GuildModel.findOne({
        GuildID: member.guild.id,
    })
    let welcomeChannel = guild.leaveChannelId
    if(!welcomeChannel && welcomeChannelId === null) return;
    let welcomeEmbed = new MessageEmbed()
    .setTitle(`Goodbye! ${member.user.username}`)
    .setDescription(`Goodbye from ${member.guild.name}`)
    client.channels.cache.get(welcomeChannel).send(welcomeEmbed);
    Levels.deleteUser(member.id, member.guild.id)
}
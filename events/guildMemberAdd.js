const GuildModel = require("../models/welcomeLeave")
const { MessageEmbed } = require("discord.js")

module.exports = async (client, member) => {
    const guild = await GuildModel.findOne({
        GuildID: member.guild.id,
    })
    let botRole = guild.botRole;
    if(member.user.bot) {
        member.roles.add(botRole)
    } else {
    let autoRole = guild.autoRole;

    if(autoRole === null) return;
    let welcomeChannel = guild.welcomeChannelId
    if(!welcomeChannel && welcomeChannelId === null) return;
    let welcomeEmbed = new MessageEmbed()
    .setTitle(`Welcome ${member.user.username}`)
    .setDescription(`Welcome to ${member.guild.name}`)
    client.channels.cache.get(welcomeChannel).send(welcomeEmbed)
    member.roles.add(autoRole)
    }
}
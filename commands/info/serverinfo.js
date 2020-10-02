const { MessageEmbed } = require('discord.js')
const dateformat = require('dateformat')
module.exports = {
    name: 'serverinfo', 
    description: 'Pong!', 
    aliases: ['p'], 
    cooldown: 5, 
    usage: '<member>',
    category: 'Info', 
    ownerOnly: false, 
    nsfwOnly: false, 
    async execute(client, message, args) {
        const guild = message.guild;
        let { 
            afkChannel,
            afkTimeout,
            verified,
            memberCount,
        } = guild;
     let afk = afkChannel ? `${afkChannel.name}` : "This server doesnt have a afk channel!";
     let afktime = afkTimeout ? `${afkTimeout}` : "This server doesnt have a afk timeout!";
     let premiumtier = message.guild.premiumTier;
     let premiumsubs = message.guild.premiumSubscriptionCount;
     let boost = premiumtier;
     let boostLevel = premiumsubs;
     let verify = verified ? "Yes this server is verified" : "No this server isnt verified!"
     let owner = message.guild.owner;
     let region = message.guild.region;
     let name = message.guild.name;
     let partnerCheck = message.guild.partnered;
     let partner = partnerCheck ? "Yes this server is partnered" : "No this server isnt partnered";
     let channelSize = message.guild.channels.cache.size;
     let emojis = message.guild.emojis.cache.size;
     let systemChannel = message.guild.systemChannel;
     let system = systemChannel ? `${systemChannel}` : `None`
     let createdAt = dateformat(message.guild.createdAt);
     let roles = message.guild.roles.cache.size;
     let verificationLevel = message.guild.verificationLevel;
     let embed = new MessageEmbed()
     .setTitle(`${name}'s info`)
     .addField("Afk channel", afk, true)
     .addField("Afk timeout", afktime, true)
     .addField("Boost", boostLevel, true)
     .addField("Boost level", boost, true)
     .addField("Member count", memberCount, true)
     .addField("Owner", owner, true)
     .addField("Region", region, true)
     .addField("Verified", verify , true)
     .addField("Channels", channelSize, true)
     .addField("Emojis", emojis, true)
     .addField("Created at", createdAt, true)
     .addField("Roles", roles, true)
     .addField("Partnered", partner, true)
     .addField("Verification Level", verificationLevel,  true)
     .addField("System Channel", system, true)
     .setThumbnail(message.guild.iconURL())
     message.channel.send(embed)
    }
};
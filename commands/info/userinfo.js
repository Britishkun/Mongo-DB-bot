const { MessageEmbed } = require("discord.js")
const { oneLine } = require("common-tags");
const moment = require("moment")
module.exports = {
    name: 'userinfo', 
    description: 'Pong!', 
    aliases: ['whois'], 
    guildOnly: true, 
    cooldown: 5, 
    usage: '<member>',
    category: 'Info', 
    ownerOnly: false, 
    nsfwOnly: false, 
    async execute(client, message, args) {
     let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||message.member;
     let avatar = member.user.displayAvatarURL()
     let discriminator = member.user.discriminator;
     let id = member.user.id;
     let lastMessage = member.user.lastMessage;
     if(lastMessage === null) lastMessage = "None";
     let status = member.user.presence.status;
     let badges = (await member.user.fetchFlags()).toArray().map((badges) => [badges]) 
     if(!badges || !badges.length) badges = "None";
    let embed = new MessageEmbed()
    .setTitle(`${member.user.username}'s info`)
    .addField("Discriminator", discriminator, true)
    .addField("ID", id, true)
    .addField("Last message", lastMessage, true)
    .addField("Presence", status, true)
    .addField("Badges", badges, true)
    .setImage(avatar)
    message.channel.send(embed)
    }
};
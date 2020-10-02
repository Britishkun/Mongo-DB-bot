const { MessageEmbed } = require("discord.js")
const { oneLine } = require("common-tags");
const moment = require("moment")
const dateformat = require("dateformat")
module.exports = {
    name: 'userinfo', 
    description: 'Pong!', 
    aliases: ['whois'], 
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
     let username = member.user.username;
     let nickname = member.user.nickname || "None";
     let lastMessage = member.user.lastMessage;
     if(lastMessage === null) lastMessage = "None";
     let status = member.user.presence.status;
     let badges = (await member.user.fetchFlags()).toArray().map((badges) => [badges]) 
     if(!badges || !badges.length) badges = "None";
     let joinedAt = dateformat(member.user.joinedAt);
     let bannable = member.user.bannable ? "Yes" : "No";
     let kickable = member.user.kickable ? "Yes" : "No";
    let embed = new MessageEmbed()
    .setTitle(`${member.user.username}'s info`)
    .addField("Discriminator", discriminator, true)
    .addField("ID", id, true)
    .addField("Last message", lastMessage, true)
    .addField("Presence", status, true)
    .addField("Badges", badges, true)
    .addField("Joined at", joinedAt, true)
    .addField("Bannable", bannable, true)
    .addField("Kick able", kickable, true)
    .addField("Nickname", nickname, true)
    .setImage(avatar)
    message.channel.send(embed)
    }
};
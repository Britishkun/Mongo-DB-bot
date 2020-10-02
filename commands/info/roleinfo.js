const { MessageEmbed } = require('discord.js')
const dateformat = require("dateformat")
module.exports = {
    name: 'roleinfo', 
    description: 'get info about a role!', 
    aliases: ['p'], 
    cooldown: 5, 
    usage: '<member>',
    category: 'Info', 
    ownerOnly: false, 
    nsfwOnly: false, 
    async execute(client, message, args) {
     const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
    if(!role) return message.channel.send("Please mention a role!")
     let name = role.name;
     let color = role.color;
     let createdAt = dateformat(role.createdAt);
     let id = role.id;
     let mentionable = role.mentionable;
     let position = role.position;
     let permissions = role.permissions.toArray().map((permissions) => [permissions])
     let embed = new MessageEmbed()
     .setTitle(`${role.name}'s info`)
     .addField("Name", name, true)
     .addField("Created at", createdAt, true)
     .addField("Color", color, true)
     .addField("ID", id, true)
     .addField("Mentionable", mentionable, true)
     .addField("Position", position, true)
     .addField("Permissions", permissions, true)
     .setThumbnail(message.guild.iconURL())
     message.channel.send(embed)
    }
};
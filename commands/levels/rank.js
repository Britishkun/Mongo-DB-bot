const Levels = require('discord-xp')
const { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'rank', 
    description: 'get your level!', 
    aliases: ['level', 'r'], 
    guildOnly: true, 
    cooldown: 5, 
    usage: '<member>',
    category: 'Levels', 
    ownerOnly: false, 
    nsfwOnly: false, 
    async execute(client, message, args) {
        const target = message.mentions.users.first() ||  message.guild.members.cache.get(args[0]) || message.author; // Grab the target.
 
        const user = await Levels.fetch(target.id, message.guild.id); // Selects the target from the database.
         
        if (!user) return message.channel.send("Seems like this user has not earned any xp so far."); // If there isnt such user in the database, we send a message in general.
         let embed = new MessageEmbed()
         .addField("User", target.tag, true)
         .addField("Level", user.level, true)
         .addField("XP", user.xp.toLocaleString(), true)
         .setThumbnail(target.displayAvatarURL())
        message.channel.send(embed); // We show the level.
    }
};
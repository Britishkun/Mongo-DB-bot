const { MessageEmbed } = require('discord.js')
const config = require("../../models/guild")
let wow = require("../../models/welcomeLeave")
module.exports = {
    name: 'levelMessages', 
    description: 'toggle levelmessages!', 
    aliases: ['p'], 

    cooldown: 5, 
    usage: 'on | off',
    category: 'Config', 
    ownerOnly: false, 
    nsfwOnly: false, 
    async execute(client, message, args) {
    
        if(!message.member.hasPermission("ADMINISTRATOR"))
       return message.reply("You need Admin permission!")
       let mod = await config.findOne({ GuildID: message.guild.id })
       let config2 = await wow.findOne({ GuildID: message.guild.id })
       let onbed = new MessageEmbed()
       .setTitle("**action:** level messages on")
       .setDescription(`Moderator: ${message.author.username}`)
       let offbed = new MessageEmbed()
       .setTitle("**action:** level messages off")
       .setDescription(`Moderator: ${message.author.username}`)
       if(config2.modlog === null) { return }
       const modChannel = config2.modlog
    let option = args[0]
    if(!option) return message.reply("Please use on or off!")
    switch (option.toLowerCase()) {
        case "on":
        await mod.updateOne({ GuildID: message.guild.id, levelMessages: true })
        message.channel.send("Succes! Level messages are now on!")
        client.channels.cache.get(modChannel).send(onbed)
        
        break;
        case "off":
            await mod.findOneAndUpdate({ GuildID: message.guild.id, levelMessages: false })
            message.channel.send("Succes! Level messages are now off!")
            client.channels.cache.get(modChannel).send(offbed)
            break;
    }

    }
};
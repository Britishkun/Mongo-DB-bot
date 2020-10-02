const config = require("../../models/welcomeLeave")
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
    let option = args[0]
    if(!option) return message.reply("Please use on or off!")
    switch (option.toLowerCase()) {
        case "on":
        await config.findOneAndUpdate({ GuildID: message.guild.id, levelMessages: true })
        message.channel.send("Succes!")
        break;
        case "off":
            await config.findOneAndUpdate({ GuildID: message.guild.id, levelMessages: false })
            message.channel.send("Succes")
    }

    }
};
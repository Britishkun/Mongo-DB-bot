const guildModel = require("../../models/guild")
const configModel = require("../../models/welcomeLeave")
module.exports = {
    name: 'setup', 
    description: 'only works when the models doesnt exist!', 
    aliases: ['p'], 
    cooldown: 5, 
    usage: '<member>',
    category: 'Config', 
    ownerOnly: false, 
    nsfwOnly: false, 
    async execute(client, message, args) {
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("You do not have the right permissions for this!")
    const configLmao = await configModel.findOne({ GuildID: message.guild.id })
    
    if(!configLmao) {
     let guild = new configModel(
         {
             GuildID: message.guild.id,
         }
     )
     guild.save()
     message.channel.send("Done we have put a config model in the db")
    }
    if(configLmao) return message.reply("You are already in the db!")
}
};
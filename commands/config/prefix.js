const guildModel = require("../../models/guild")
module.exports = {
    name: 'prefix',
    description: 'set the prefix',

    cooldown: 1,
    usage: '<prefix>',
    category: 'Config',
    ownerOnly: false, 
    nsfwOnly: false,
    async execute(client, message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR"))
        return message.channel.send("You do not have the required permission `ADMINISTARTOR`")

        let prefix = args[0]
        if(!prefix) {
            message.channel.send("Please provide a prefix first")
        }
    let guild = await guildModel.findOneAndUpdate({
        
            GuildID: message.guild.id,
            prefix: prefix,
        
    });
     message.channel.send("Done!")
    },
}
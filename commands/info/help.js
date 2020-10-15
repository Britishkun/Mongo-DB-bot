const Discord = require('discord.js');
const guildConfig = require("../../models/guild")
const { ownerId } = require('../../config.json')
module.exports = {
    name: 'help',
    description: 'Get help on all the commands',
    aliases: ['h'],
    cooldown: 5,
    usage: '<command>',
    category: 'Info',
    ownerOnly: false, 
    nsfwOnly: false, 
    async execute(client, message, args) {
        let guildModel = await guildConfig.findOne({ GuildID: message.guild.id })
        let prefix = guildModel.prefix;
        const embed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .addField(`My source code!`, `[code](https://github.com/tovade/Mongo-DB-bot)`)


        const cmd = message.client.commands.get(args[0]);
        if (cmd) {
            const data = [];

            data.push(`**Command:** ${cmd.name}`);
            if (cmd.description) data.push(`**Description:** ${cmd.description}`);
            if (cmd.aliases ? cmd.aliases.length : null) data.push(`**Aliases:** ${cmd.aliases.map(a => `\`${a}\``).join(', ')}`);
            if (cmd.usage) data.push(`**Usage:** ${prefix}${cmd.name} ${cmd.usage}`);
            if (cmd.cooldown) data.push(`**Cooldown:** ${cmd.cooldown}`);
            data.push(`**Nsfw Only:** ${cmd.nsfwOnly ? 'Yes' : 'No'}`);
            data.push(`**Owner Only:** ${cmd.ownerOnly ? 'Yes' : 'No'}`);
            if (cmd.category) data.push(`**Category:** ${cmd.category}`);

            embed.setDescription(data.join('\n'));
        } else {

    
            }
            const commands = client.commands
            const utilCmds = commands.filter(({ category }) => category === "Utility").map(({ name }) => name).join(", ")
            const configCmds = commands.filter(({ category }) => category === "Config").map(({ name }) => name).join(", ")
            const funCmds = commands.filter(({ category }) => category === "Fun").map(({ name }) => name).join(", ")
            const infoCmds = commands.filter(({ category }) => category === "Info").map(({ name }) => name).join(", ")
            const musicCmds = commands.filter(({ category }) => category === "Music").map(({ name }) => name).join(", ")
            const levelCmds = commands.filter(({ category }) => category === "Levels").map(({ name }) => name).join(", ")
            const ownerCmds = commands.filter(({ category }) => category === "Owner").map(({ name }) => name).join(", ")


            embed.addField("Config", `\`${configCmds}\``)
            .addField("Info", `\`${infoCmds}\``)
            .addField("Fun", `\`${funCmds}\``)
            if(message.author.id !== ownerId) {
                embed.addField("Owner", `Ownly viewable by the owner!`)
            } else {
                embed.addField("Owner", `\`${ownerCmds}\``)
            }
            embed.addField("Levels", `\`${levelCmds}\``)
            .addField("Music", `\`${musicCmds}\``)
            .addField("Util", `\`${utilCmds}\``)
    
        

        message.channel.send(embed);
    }
};
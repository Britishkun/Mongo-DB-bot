const Discord = require('discord.js');
const guildConfig = require("../../models/guild")

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
            const categories = new Discord.Collection();

            message.client.commands.forEach(command => { 
                const category = categories.get(command.category);

                if (category) {
                    category.set(command.name, command);
                } else {
                    categories.set(command.category, new Discord.Collection().set(command.name, command));
                };
            });

            categories.forEach((category, name) => {
                embed.addField(name, category.map(command => `\`${command.name}\``).join(' '));
            });
        };

        message.channel.send(embed);
    }
};
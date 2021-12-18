const ms = require('ms')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'giveaway',
    description: "sends youtube link",
    async execute(client, message, args, cmd, Discord){
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You must have `MANAGE MESSAGES` to run this command!');
        const channel = message.mentions.channels.first();

        const duration = ms(args[1])
        if(!duration) return message.reply('specify a duration for the giveaway to last')

        const winners = args[2]
        if(!winners) return message.channel.send('Please specify a number of winners')

        const prize = args.slice(3).join(" ")
        if(!prize) return message.reply('Please specify a reward for this giveaway!')

        await client.giveaways.startGiveaway({
            prize: prize,
            channelId: channel.id,
            guildId: message.guild.id,
            duration: duration, 
            winners: winners, 
            hostedBy: message.author.id
        });
    }
}

const { Message, MessageEmbed } = require('discord.js')
const serverSettings = require('../models/serversettings')
module.exports = {
    name :'dm',
    async execute(client, message, args, cmd, Discord, profileData){
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You must have `MANAGE MESSAGES` to run this command!')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        const reason = args.slice(1).join(" ")
        user.send(new MessageEmbed()
            .setDescription(`${reason}`)
            .setColor("RED")
            .setAuthor(message.author.tag, message.author.displayAvatarURL ({ dynamic: true}))
            .setFooter('you cannot reply to this message')
        )
        const setting = await serverSettings.findOne({ serverID: message.guild.id }) 
        message.guild.channels.cache.get(`${setting.modLog}`).send(new MessageEmbed()
            .setDescription(`<@${message.author.id}> has dmmed ${reason} to ${user}`)
        )
        message.channel.send(new MessageEmbed()
            .setDescription(`Sent message to ${user} with ${reason}`)
            .setColor('RED')
        )
    }
}
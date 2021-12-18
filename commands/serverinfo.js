const Commando = require('discord.js-commando')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { version, name, author, description } = require(`../package.json`)
module.exports = {
    name: 'serverinfo',
    description: 'bot info',
    async execute(client, message, args, cmd, Discord){
        const embed = new MessageEmbed()
        .setAuthor(`Information about this server`)
        .addFields(
            {name: '`Server Name`', value: `${message.guild.name}`},
            {name: '`Number of Members:`', value: `${message.guild.memberCount}`}



            )
        .setURL('https://sites.google.com/view/noodlemod/home')
        message.channel.send(embed)
    }
}
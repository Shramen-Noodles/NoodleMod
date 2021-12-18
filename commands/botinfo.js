const Commando = require('discord.js-commando')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { version, name, author, description } = require(`../package.json`)
module.exports = {
    name: 'botinfo',
    description: 'bot info',
    async execute(client, message, args, cmd, Discord){
        const embed = new MessageEmbed()
        .setAuthor(`Information about this Bot`)
        .addFields(
            {name: '`Bot Name`', value: `NoodleMod`},
            {name: '`Description`', value: description},
            {name: '`Bot Developer`', value: author}, 
            {name: '`Bot Website`', value: `https://noodle.webador.com/`}, 
            {name: '`Total Servers`', value: `${client.guilds.cache.size}` },
            {name: '`Discord.js Version`', value: `^12.5.1` },



            )
        .setURL('https://sites.google.com/view/noodlemod/home')
        message.channel.send(embed)
    }
}
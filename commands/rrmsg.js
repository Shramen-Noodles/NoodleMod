
const { Guild, DiscordAPIError } = require("discord.js")
const messageSchema = require('../models/message')
const serversettings = require('../models/serversettings')
const { addToCache } = require('../features/rr')
module.exports = {
    name: "rrmsg",
    async execute(client, message, args, cmd, Discord){
        const ss = await serversettings.findOne({ serverID: message.guild.id })
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Must have `ADMINISTRATOR` to run this command!')
        const targetChannel = message.mentions.channels.first() || message.channel
        
        
        
        if(message.mentions.channels.first()){
            args.shift()
        }
        
        const text = args.join(' ')
        if(!text) return message.channel.send('Specify message content!')
        if(!text) return message.channel.send('Incorrect command usage! rrmsg [#channel] <message content>')
        const lolembed = new Discord.MessageEmbed()
        .setColor(`${ss.welcomecolor}`)
        .setDescription(`${text}`)
        const newMessage = await targetChannel.send(text)

        if (message.guild.me.hasPermission('MANAGE_MESSAGES')){
            message.delete()
        }

        if (!message.guild.me.hasPermission('MANAGE_ROLES')){
            return message.channel.send('I need to have manage roles perm!')
        }

        addToCache(message.guild.id, newMessage)

        new messageSchema({
            guildID: message.guild.id,
            channelId: targetChannel.id,
            messageId: newMessage.id,
        })
        .save()
        .catch(() => {
            message.reply('Failed to save to database!')
            .then((message) => {
                message.delete({ timeout: 5000 })
            })
        })
        //TODO: Add guild id amd message to our cache, save guildID channelID and messageID to database in an array
    }
}

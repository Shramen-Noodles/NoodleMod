const db = require('../models/warns.js')
const { Message, MessageEmbed } = require('discord.js')
const serverSettings = require('../models/serversettings')
module.exports = {
    name :'warn',
    async execute(client, message, args, cmd, Discord, profileData){
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You must have `MANAGE MESSAGES` to run this command!')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        const reason = args.slice(1).join(" ")
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    guildid: message.guild.id,
                    user : user.user.id,
                    content : [
                        {
                            moderator : message.author.id,
                            reason : reason
                        }
                    ]
                })
            } else {
                const obj = {
                    moderator: message.author.id,
                    reason : reason
                }
                data.content.push(obj)
            }
            data.save()
        });
        user.send(new MessageEmbed()
            .setDescription(`You have been warned for ${reason}`)
            .setColor("RED")
        )
        const setting = await serverSettings.findOne({ serverID: message.guild.id }) 
        message.guild.channels.cache.get(`${setting.modLog}`).send(new MessageEmbed().setDescription(`${user} has been warned for ${reason} by <@${message.author.id}>`)
        )
        message.channel.send(new MessageEmbed()
            .setDescription(`Warned ${user} for ${reason}`).setColor('RED')
        )
    }
}
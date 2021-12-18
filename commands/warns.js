const db = require('../models/warns.js')
const { Message, MessageEmbed } = require(`discord.js`)

module.exports = {
    name :'warns',
    async execute(client, message, args, cmd, Discord, profileData){
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You must have `MANAGE MESSAGES` to run this command!')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        const reason = args.slice(1).join(" ")
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.channel.send(new MessageEmbed()
                    .setTitle(`${user.user.tag}'s warns`)
                    .setDescription(
                        data.content.map(
                            (w, i) => 
                            `\`${i + 1}\` | Moderator : ${message.guild.members.cache.get(w.moderator).user.tag}\nReason : ${w.reason}`
                        )
                    )
                    .setColor("RED")
                )
            } else {
                message.channel.send('User has no warns')
            }

        })
    }
}

const bk = require('../models/bonks.js')
const { Message, MessageEmbed } = require(`discord.js`)

module.exports = {
    name :'bonks',
    async execute(client, message, args, cmd, Discord, profileData){
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You must have `MANAGE MESSAGES` to run this command!')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const content = bk.content
        if(!user) return message.channel.send('User not found.')
        bk.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.channel.send(new MessageEmbed()
                    .setTitle(`${user.user.tag}'s bonks`)
                    .setDescription(
                        data.content.map(
                            (w, i) => 
                            `\`${i + 1}\` | Message Content : ${w.content}`
                        )
                    )
                    .setColor("RED")
                    .setFooter('10 bonks is a warn')
                )
            } else {
                message.channel.send('Bonks do not exist!')
            }

        })
    }
}
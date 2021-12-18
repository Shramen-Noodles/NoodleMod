const mute = require('../models/mute')
module.exports = {
    name: "mutes",
    async execute(client, message, args, cmd, Discord){
        const target = message.mentions.users.first()
        const mm = mute.findOne({ userID: target.id, serverID: message.guild.id  })
        const embed = new Discord.MessageEmbed()
        .setTitle(`${target.username}'s mutes`)
        .setDescription(`Currently muted?: ${mm.muted} \nTotal Mutes: ${mm.mutes.toLocaleString()}`)
        message.channel.send(embed)
    }
}
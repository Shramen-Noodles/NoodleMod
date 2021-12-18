const serversettings = require('../models/serversettings')
module.exports = {
    name: "nuke",
    async execute(client, message, args, cmd, Discord){
        const ss = await serversettings.findOne({ serverID: message.guild.id })
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.channel.send('You must have `ADMINISTRATOR` to run this command!')
        }
        
        message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)
            channel.send('yeetus skeetus channel go deletus')
            message.guild.channels.cache.get(`${ss.modlog}`).send(new Discord.MessageEmbed().setDescription(`${channel.name} was nuked by <@${message.author.id}>`))
        })
        message.channel.delete()
    }
}



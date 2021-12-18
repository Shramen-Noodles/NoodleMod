const Levels = require('discord-xp')
module.exports = {
    name: "setlevel",
    aliases: ["setrank"],
    async execute(client, message, args, cmd, Discord){
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You must have `ADMINISTRATOR` to use this.')
        const target = message.mentions.users.first()
        const level = args[1]
        if(!level) return message.channel.send('Specify which level you want to set them to')
        if(!target) return message.channel.send('Which users level are you changing?')
        if(isNaN(target)) return message.channel.send('Must be a real number!')
        if(target <0 ) return message.channel.send('Must be a positive integer!')
        Levels.setLevel(target.id, message.guild.id, level);
        message.channel.send(`${target.username}'s level has been set to ${level}`)
    }
}
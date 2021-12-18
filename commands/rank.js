const Levels = require('discord-xp')
const canvacord = require('canvacord')
const serversettings = require('../models/serversettings')
module.exports = {
    name: "rank",
    aliases: ["level"],
    async execute(client, message, args, cmd, Discord){
        const ss = await serversettings.findOne({ serverID: message.guild.id })
        if(ss.levels === "off") return message.channel.send('Levelling is disabled for this server')
        const target = message.mentions.users.first() || message.author; // Grab the target.

        const user = await Levels.fetch(target.id, message.guild.id, true); // Selects the target from the database.
        const neededXP = Levels.xpFor(parseInt(user.level) +1)
        if (!user) return message.channel.send("Seems like this user has not earned any xp so far."); // If there isnt such user in the database, we send a message in general.
        
    
        



        const ranker = new canvacord.Rank()
        .setAvatar(target.displayAvatarURL({ dynamic: false, format: 'png'}))
        .setCurrentXP(user.xp)
        .setRequiredXP(neededXP)
        .setStatus(target.presence.status)
        .setProgressBar(`${ss.welcomecolor}`, 'COLOR')
        .setUsername(target.username)
        .setDiscriminator(target.discriminator)
        .setLevel(user.level)
        .setRank(user.position, 'RANK', true)
        
    ranker.build()
        .then(data => {
            const attachment = new Discord.MessageAttachment(data, `${target.username}s_rank.png`)
            message.channel.send(attachment)
        })
    }
}
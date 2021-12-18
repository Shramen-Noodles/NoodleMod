const message = require('../models/message')
const serversettings = require('../models/serversettings')
module.exports = {
    name: "eeeee",
    async execute(client, message, args, cmd, Discord){
        const ss = serversettings.findOne({ serverID: message.guild.id })
        const embed = new Discord.MessageEmbed()
        .setColor(`${ss.welcomecolor}`)
        .setTitle(`Server Rules`)
        .setDescription('1. No innapropriate Content (Mods can decide what this means) \n2. No explicit words!\n3. Do not be rude\n4. No asking for or giving away personal information of anyone\n5. Keep things in their respective channels (self promo in self promo, spam in spam)\n6. No begging for roles. Either use -apply or ask and if we say no, stop asking.\n7. Follow the Discord ToS!\n**Five strikes and you\'re out! 1 warn = 10m mute. 2 warns = 30m mute, 3rd warn: 2 hour mute. 4th warn: kick and/or 1 day mute. 5th warn: ban/any actions the mods deem necessary')
        message.channel.send(embed)
    }
    }

    
const serversettings = require('../models/serversettings')
module.exports = {
    name: "settings",
    async execute(client, message, args, cmd, Discord){
        const ss = await serversettings.findOne({ serverID: message.guild.id })
        const embed = new Discord.MessageEmbed()
        .setDescription(`These are the settings for this server. If nothing is set up for a field, it will show as *none* or *undefined*`)
        .setTitle(`Settings for ***${message.guild.name}***`)
        .addFields(
            {name: `Prefix`, value: `${ss.prefix}`},
            {name: `Blacklist`, value: `${ss.blacklist}`},
            {name: `Modlog Channel`, value: `<#${ss.modLog}>`},
            {name: `Blacklist Channel`, value: `<#${ss.blacklistlog}>`},
            {name: `Application Channel`, value: `<#${ss.appChannel}>`},
            {name: `Welcome Channel`, value: `<#${ss.welcomechannel}>`},
            {name: `Welcome Color`, value: `The color to the left of this embed`},
            {name: `Muterole`, value: `<@&${ss.muterole}>`},
            {name: `Leveling`, value: `${ss.levels}`},
            {name: `F`, value: `${ss.f}`},
            {name: `TTS`, value: `<#${ss.tts}>`},
            {name: `Level Up channel`, value: `<#${ss.levelup}>`},
            {name: `Leveling ignore channels`, value: `1: <#${ss.levelignore1}> 2: <#${ss.levelignore2}> 3: <#${ss.levelignore3}> 4: <#${ss.levelignore4}> 5: <#${ss.levelignore5}>`},
            {name: `Level Rewards`, value: `1: Level ${ss.lrole1level} -> Role <@&${ss.levelrole1}> 2: Level ${ss.lrole2level} -> Role <@&${ss.levelrole2}> 3: Level ${ss.lrole3level} -> Role <@&${ss.levelrole3}> 4: Level ${ss.lrole4level} -> Role <@&${ss.levelrole4}> 5: Level ${ss.lrole5level} -> Role <@&${ss.levelrole5}>`},
            {name: `Autoroles 1-10`, value: `1: <@&${ss.autorole1}> 2: <@&${ss.autorole2}> 3: <@&${ss.autorole3}> 4: <@&${ss.autorole4}> 5: <@&${ss.autorole5}> 6: <@&${ss.autorole6}> 7: <@&${ss.autorole7}> 8: <@&${ss.autorole8}> 9: <@&${ss.autorole9}> 10: <@&${ss.autorole10}>`}

        )
        .setColor(`${ss.welcomecolor}`)
        message.channel.send(embed)
    }
}
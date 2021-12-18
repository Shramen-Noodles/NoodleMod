const { MessageEmbed } = require("discord.js");

module.exports = {
    name: `famfriendlymode`,
    aliases: [`ffmoff`, `ffmon`],
    description: "run this command to join the notification squad role",
    execute(client, message, args, cmd, Discord){
        if (cmd === 'ffmon') {

            if(message.member.roles.cache.has('813579185532436551')){
                const embed = new MessageEmbed()
                .setColor(`#FF0000`)
                .setTitle(`Family Friendly Settings`)
                .setDescription('Family Friendly is already `🟢 Enabled` run ***-ffmoff*** to turn it off')
                message.channel.send(embed)
            } else  {
                message.member.roles.add('813579185532436551');
                const embed = new MessageEmbed()
                .setColor(`#FF0000`)
                .setTitle(`Family Friendly Settings`)
                .setDescription('Family Friendly is now `🟢 Enabled`')
                message.channel.send(embed)
            }

        }

        if (cmd === 'ffmoff') {

            if(message.member.roles.cache.has('813579185532436551')){
                message.member.roles.remove(`813579185532436551`)
                const embed = new MessageEmbed()
                .setColor(`#FF0000`)
                .setTitle(`Family Friendly Settings`)
                .setDescription('Family Friendly is now `🔴 Disabled`')
                message.channel.send(embed)
            } else  {
                const embed = new MessageEmbed()
                .setColor(`#FF0000`)
                .setTitle(`Family Friendly Settings`)
                .setDescription('Family Friendly is already `🔴 Disabled` run ***-ffmon*** to turn it on')
                message.channel.send(embed)
            }

        }

        
        
    }
}
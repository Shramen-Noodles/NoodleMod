const distube = require('distube')
module.exports = {
    name: "stop",
    async execute(client, message, args, cmd, Discord){
        const voice_channel = message.member.voice.channel;
        if (!voice_channel){
            const embed = new Discord.MessageEmbed()
            .setDescription('You have to be in a channel to stop a song!')
            .setColor(`#c21000`)
            return message.channel.send(embed);
        } 
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')){
            const embed = new Discord.MessageEmbed()
            .setDescription('You dont have the right perms!')
            .setColor(`#c21000`)
            return message.channel.send(embed);
        }
        if (!permissions.has('SPEAK')){
            const embed = new Discord.MessageEmbed()
            .setDescription('You dont have the right perms!')
            .setColor(`#c21000`)
            return message.channel.send(embed);
        }
        
        await client.distube.stop(message)
        message.channel.send('Stopped the music!')
    }
}
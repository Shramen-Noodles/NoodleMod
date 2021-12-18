const { MessageEmbed } = require("discord.js");
const serverSettings = require('../models/serversettings')
module.exports = {
    name: 'kick',
    description: "Kicks people",
    async execute(client, message, args, cmd, Discord){
        const member = message.mentions.users.first();
        
        if(message.member.hasPermission('KICK_MEMBERS')){
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send("User has been kicked");
                const setting = await serverSettings.findOne({ serverID: message.guild.id }) 
                message.guild.channels.cache.get(`${setting.modLog}`).send(new MessageEmbed().setDescription(`${memberTarger} was kicked by <@${message.author.id}>`))
            }else{
                message.channel.send('You couldnt kick that member because no member was mentioned');
            }
        }else {
            message.channel.send('You must have `KICK MEMBERS` to run this command!')
        }
        
       
    }
}
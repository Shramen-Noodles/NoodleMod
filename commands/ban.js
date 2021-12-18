const serverSettings = require('../models/serversettings')
module.exports = {
    name: 'ban',
    
    description: "Bans people",
    async execute(client, message, args, cmd, Discord){
        const member = message.mentions.users.first();
        
        if(message.member.hasPermission('BAN_MEMBERS')){
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send("User has been banned");
                const setting = await serverSettings.findOne({ serverID: message.guild.id }) 
                const embed = new Discord.MessageEmbed().setDescription(`${memberTarger} was banned from the server by <@${message.author.id}>`)
                message.guild.channels.cache.get(`${setting.modLog}`).send(embed)
            }else{
                message.channel.send('You couldnt ban that member because no member was mentioned');
            }
        }else {
            message.channel.send('You must have `BAN MEMBERS` to run this command!')
        }
        
       
    }
}
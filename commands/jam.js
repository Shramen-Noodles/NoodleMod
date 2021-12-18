const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'jam',
    description: "displays a list of all commands",
    execute(client, message, args, Discord){
        const embed = new MessageEmbed()
        .setColor('#c21000')
        .setTitle('JAM SESSSHHHH')
        .setDescription('Shramen is having a Jam sesh, you can join too!')

        message.channel.send(embed);
    }
}
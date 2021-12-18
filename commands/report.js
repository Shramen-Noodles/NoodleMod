const { Client, Message, MessageEmbed } = require('discord.js')
const { execute } = require('./clear')
const serverSettings = require('../models/serversettings')

module.exports = {
    name: 'report',
    aliases: [],
    cooldown: 2,
    async execute(client, message, args, cmd, Discord, profileData){
        const setting = await serverSettings.findOne({ serverID: message.guild.id }) 
        if(!setting.appChannel || setting.appChannel < 1) return message.channel.send('The owner of this server has not set up reports yet.')
        message.reply(`Continue filing your report in DMS`)
        const questions = [
            "What or who are you reporting?",
            "Why are you reporting it/them",
            "Anything else you would like to add?",
            "What action would you like us to take on this?"
        ];
        
        let collectCounter = 0;
        let endCounter = 0;




        const filter = (m) => m.author.id === message.author.id;

        const appStart = await message.author.send(questions[collectCounter++]);
        const channel = appStart.channel;

        const collector = channel.createMessageCollector(filter);

        collector.on("collect", () => {
            if(collectCounter < questions.length){
                channel.send(questions[collectCounter++])
            } else {
                channel.send("Your report has been filed. We will take whatever actions we deem necessary")
                collector.stop("fulfilled");
            }
        });


        
        const rChannel = client.channels.cache.get(`${setting.appChannel}`);
        collector.on('end', (collected, reason) => {
            if(reason === 'fulfilled'){
                let index = 1;
                const mappedResponses = collected.map((msg) => {
                    return `${index++}) ${questions[endCounter++]}\n ${msg.content}`
                })
                .join('\n\n');

                rChannel.send(
                    new MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL ({ dynamic: true}))
                    .setTitle('NEW REPORT!')
                    .setDescription(mappedResponses)
                    .setColor('RED')
                    .setTimestamp()
                )
            }


            
        })
    }
}
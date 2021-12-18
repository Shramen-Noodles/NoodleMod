const { Client, Message, MessageEmbed } = require('discord.js')
const { execute } = require('./clear')
const serverSettings = require('../models/serversettings')
module.exports = {
    name: 'suggest',
    aliases: [],
    cooldown: 2,
    async execute(client, message, args, cmd, Discord, profileData){
        const setting = await serverSettings.findOne({ serverID: message.guild.id }) 
        if(!setting.appChannel || setting.appChannel < 1) return message.channel.send('The owner of this server has not set up suggestions yet.')
        message.reply(`Please await a DM from <@796502288251224084> and fill out the suggestion there!`)
        const questions = [
            "What is ur suggestion?"
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
                channel.send("Your suggestion has been sent. Await a DM from ShramenMod saying that it has been accepted or rejected. ")
                collector.stop("fulfilled");
            }
        });


        
        const sChannel = client.channels.cache.get(`${setting.appChannel}`);
        collector.on('end', (collected, reason) => {
            if(reason === 'fulfilled'){
                let index = 1;
                const mappedResponses = collected.map((msg) => {
                    return `${msg.content}`
                })
                .join('\n\n');

                const pollEmbed = new Discord.MessageEmbed()
                    .setFooter(message.author.tag, message.author.displayAvatarURL ({ dynamic: true}))
                    .setDescription(`\`New Suggestion!\`\n` + mappedResponses)
                    .setColor('RED')
                    .setTimestamp()

                sChannel.send(pollEmbed).then(messageReaction => {
                    messageReaction.react("✔️");
                    messageReaction.react("❌");
                } 
                )
            }


            
        })
    }
}
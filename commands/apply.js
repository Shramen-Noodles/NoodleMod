const { Client, Message, MessageEmbed } = require('discord.js')
const { execute } = require('./clear')
const serverSettings = require('../models/serversettings')


module.exports = {
    name: 'apply',
    aliases: [],
    cooldown: 1000,
    async execute(client, message, args, cmd, Discord, profileData){
        const setting = await serverSettings.findOne({ serverID: message.guild.id })
        
        if(!setting.appChannel || setting.appChannel < 1) return message.channel.send('The owner of this server has not set up applications yet.')
        message.reply(new MessageEmbed().setDescription('Please continue your application in Direct Messages').setColor('RED'))
        const age = new MessageEmbed().setDescription(`How old are you?`).setColor('RED')
        const role = new MessageEmbed().setDescription(`What role are you applying for?`).setColor('RED')
        const reason = new MessageEmbed().setDescription(`Why do you want to be this role, what will you do, and why are you fit?`).setColor('RED')
        const questions = [
            "How old are you?",
            "What role do you want to be?",
            "Why do you want to be this role?"
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
                channel.send("Your Application is Complete. Please await a DM from ShramenMod or one of the Staff Members")
                collector.stop("fulfilled");
            }
        });


        const appsChannel = client.channels.cache.get(`${setting.appChannel}`);
        collector.on('end', (collected, reason) => {
            if(reason === 'fulfilled'){
                let index = 1;
                const mappedResponses = collected.map((msg) => {
                    return `${index++}) ${questions[endCounter++]}\n ${msg.content}`
                })
                .join('\n\n');

                appsChannel.send(
                    new MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL ({ dynamic: true}))
                    .setTitle('New Application!')
                    .setDescription(mappedResponses)
                    .setColor('RED')
                    .setTimestamp()
                )
            }


            
        })
    }
}
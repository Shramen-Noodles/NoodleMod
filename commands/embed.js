const ServerSettings = require('../models/serversettings')
const Discord = require("discord.js");
module.exports = {
    name: "embed",
    async execute(client, message, args, cmd, Discord){
            const ss = ServerSettings.findOne({ serverID: message.guild.id })
        const titleQ = await message.channel.send(`What should the title of this embed be?`)

        try{
            let msgs = await message.channel.awaitMessages(u2=>u2.author.id === message.author.id, { time: 60000, max: 1, errors: ["time"]})
            if(msgs.first().content){
                const embedTitle = msgs.first().content

                const descQ = await message.channel.send(`What should the description of the embed be?`)

                try{
                    let mmsms = await message.channel.awaitMessages(u2=>u2.author.id === message.author.id, {time: 60000, max: 1, errors: ["time"]})

                    const embedDesc = mmsms.first().content
                    message.channel.send(new Discord.MessageEmbed().setDescription(`${embedDesc}`).setTitle(`${embedTitle}`).setColor("BLUE").setFooter(message.author.tag, message.author.displayAvatarURL ({ dynamic: true})))
                    
                    
                    message.delete()
                    msgs.first().delete()
                    mmsms.first().delete()
                    descQ.delete()
                    titleQ.delete()
                } catch (e) {
                    console.log(e)
                    return message.channel.send(`No response provided in 1 minute. Embed creation cancelled`)
                }
            }
        
        } catch (e) {
            console.log(e)
            return message.channel.send('No response provided in 1 minute. Embed creation cancelled.')
        }
    }
}



/*
const { Collector } = require("discord.js");

module.exports = {
    name: "embed",
    aliases: ["createembed"],
    async execute(client, message, args, cmd, Discord){
        const questions = [
            "What should the title of the embed be?",
            "What should the message of the embed be?"
        ]

        let collectCounter = 0;
        let endCounter = 0;


        const filter = (m) => m.author.id === message.author.id;

        const appStart = await message.author.send(questions[collectCounter++])
        const channel = appStart.channel;

        const collector = channel.createMessageCollector(filter)

        collector.on("collect", () => {
            if(collectCounter < questions.length){
                channel.send(questions[collectCounter++])
            } else{
                collector.stop('fulfilled')
            }
        })

        collector.on('end', (collected, reason) => {
            if(reason === 'fulfilled'){
                let index = 1;
                const ememememed = new Discord.MessageEmbed()
                .setFooter(message.author.tag, message.author.displayAvatarURL ({ dynamic: true}))
                .setTitle(`${msg.content}`)
                .setDescription(`${msg.content}`)

            }
            message.channel.send(ememememed)
        })
    }
}
*/
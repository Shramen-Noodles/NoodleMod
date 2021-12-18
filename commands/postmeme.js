/*

Must have phone to do it!
+1000-10,000 Karma
1 coin is 10 Karma, so 1000 karma is 1 coin. Must have 50,000 karma to redeem 5000 coins

*/
const profileModel = require('../models/profileSchema')
module.exports = {
    name: "postmeme",
    cooldown: 30,
    aliases: ["pm", "pmeme"],
    async execute(client, message, args, cmd, Discord, profileData){
        if(profileData.phone < 1) return message.channel.send('You must have a phone to post a meme!')
        
        message.channel.send(new Discord.MessageEmbed().setDescription('**Send the Number of the Type of Meme you wish to post**\n1. Repost\n2. Dank Meme\n3. Science Meme\n4. Wholesome Meme'))
        try{
            let msgs = await message.channel.awaitMessages(u2=>u2.author.id === message.author.id, { time: 15000, max: 1, errors: ["time"]})
        if(parseInt(msgs.first().content)== '1'){
            const chance = ["1", "1", "1", "1", "1", "1", "2"]
            const final = chance[Math.floor(Math.random() * chance.length)]
            if(final === "1"){
                const randomNumber = Math.floor(Math.random()*5000) +1
                const chances =  [
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good", 
                    "break"
                ]
        
                const result = chances[Math.floor(Math.random() * chances.length)]
                if(result === "good"){
                    const randomNumber = Math.floor(Math.random()*5000) +1
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`You posted a meme and got <:RamenCoin:815247142352322620> ${randomNumber} RSP`)
                    .setColor('RED')
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                coins: randomNumber
                            }
                        }
                    )
                    return message.reply(embed)
                } else if(result === "break"){
                    const options = [
                        "Oh no! You were about to post the meme, but you dropped your phone and the screen cracked... it never turned back on!",
                        "There was an error posting your meme, and a hacker hacked your phone so you need a new one...",
                        "Some person stole your phone. L"
                    ]
                    const opt = options[Math.floor(Math.random() * options.length)]
                    const randomNumber = Math.floor(Math.random()*5000) +1
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`${opt}`)
                    .setColor('RED')
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                phone: -1,
                            }
                        }
                    )
                    return message.reply(embed)
                }
            } else{
                const chances =  [
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good", 
                    "break"
                ]
        
                const result = chances[Math.floor(Math.random() * chances.length)]
                if(result === "good"){
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`You posted a meme and got SO MANY DOWNVOTES. NO MONEY FOR YOU!`)
                    .setColor('RED')
                    return message.reply(embed)
                } else if(result === "break"){
                    const options = [
                        "Oh no! You were about to post the meme, but you dropped your phone and the screen cracked... it never turned back on!",
                        "There was an error posting your meme, and a hacker hacked your phone so you need a new one...",
                        "Some person stole your phone. L"
                    ]
                    const opt = options[Math.floor(Math.random() * options.length)]
                    const randomNumber = Math.floor(Math.random()*5000) +1
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`${opt}`)
                    .setColor('RED')
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                phone: -1,
                            }
                        }
                    )
                    return message.reply(embed)
                }
            }
          }
        else if(parseInt(msgs.first().content)== '2'){
            const chance = ["1", "1", "1", "1", "1", "1", "2"]
            const final = chance[Math.floor(Math.random() * chance.length)]
            if(final === "1"){
                const randomNumber = Math.floor(Math.random()*5000) +1
                const chances =  [
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good", 
                    "break"
                ]
        
                const result = chances[Math.floor(Math.random() * chances.length)]
                if(result === "good"){
                    const randomNumber = Math.floor(Math.random()*5000) +1
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`You posted a meme and got <:RamenCoin:815247142352322620> ${randomNumber} RSP`)
                    .setColor('RED')
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                coins: randomNumber
                            }
                        }
                    )
                    return message.reply(embed)
                } else if(result === "break"){
                    const options = [
                        "Oh no! You were about to post the meme, but you dropped your phone and the screen cracked... it never turned back on!",
                        "There was an error posting your meme, and a hacker hacked your phone so you need a new one...",
                        "Some person stole your phone. L"
                    ]
                    const opt = options[Math.floor(Math.random() * options.length)]
                    const randomNumber = Math.floor(Math.random()*5000) +1
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`${opt}`)
                    .setColor('RED')
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                phone: -1,
                            }
                        }
                    )
                    return message.reply(embed)
                }
            } else{
                const chances =  [
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good", 
                    "break"
                ]
        
                const result = chances[Math.floor(Math.random() * chances.length)]
                if(result === "good"){
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`You posted a meme and got SO MANY DOWNVOTES. NO MONEY FOR YOU!`)
                    .setColor('RED')
                    return message.reply(embed)
                } else if(result === "break"){
                    const options = [
                        "Oh no! You were about to post the meme, but you dropped your phone and the screen cracked... it never turned back on!",
                        "There was an error posting your meme, and a hacker hacked your phone so you need a new one...",
                        "Some person stole your phone. L"
                    ]
                    const opt = options[Math.floor(Math.random() * options.length)]
                    const randomNumber = Math.floor(Math.random()*5000) +1
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`${opt}`)
                    .setColor('RED')
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                phone: -1,
                            }
                        }
                    )
                    return message.reply(embed)
                }
            }
        }
        else if(parseInt(msgs.first().content)== '3'){
            const chance = ["1", "1", "1", "1", "1", "1", "2"]
            const final = chance[Math.floor(Math.random() * chance.length)]
            if(final === "1"){
                const randomNumber = Math.floor(Math.random()*5000) +1
                const chances =  [
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good", 
                    "break"
                ]
        
                const result = chances[Math.floor(Math.random() * chances.length)]
                if(result === "good"){
                    const randomNumber = Math.floor(Math.random()*5000) +1
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`You posted a meme and got <:RamenCoin:815247142352322620> ${randomNumber} RSP`)
                    .setColor('RED')
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                coins: randomNumber
                            }
                        }
                    )
                    return message.reply(embed)
                } else if(result === "break"){
                    const options = [
                        "Oh no! You were about to post the meme, but you dropped your phone and the screen cracked... it never turned back on!",
                        "There was an error posting your meme, and a hacker hacked your phone so you need a new one...",
                        "Some person stole your phone. L"
                    ]
                    const opt = options[Math.floor(Math.random() * options.length)]
                    const randomNumber = Math.floor(Math.random()*5000) +1
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`${opt}`)
                    .setColor('RED')
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                phone: -1,
                            }
                        }
                    )
                    return message.reply(embed)
                }
            } else{
                const chances =  [
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good", 
                    "break"
                ]
        
                const result = chances[Math.floor(Math.random() * chances.length)]
                if(result === "good"){
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`You posted a meme and got SO MANY DOWNVOTES. NO MONEY FOR YOU!`)
                    .setColor('RED')
                    return message.reply(embed)
                } else if(result === "break"){
                    const options = [
                        "Oh no! You were about to post the meme, but you dropped your phone and the screen cracked... it never turned back on!",
                        "There was an error posting your meme, and a hacker hacked your phone so you need a new one...",
                        "Some person stole your phone. L"
                    ]
                    const opt = options[Math.floor(Math.random() * options.length)]
                    const randomNumber = Math.floor(Math.random()*5000) +1
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`${opt}`)
                    .setColor('RED')
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                phone: -1,
                            }
                        }
                    )
                    return message.reply(embed)
                }
            }
        }
        else if(parseInt(msgs.first().content)== '4'){
            const chance = ["1", "1", "1", "1", "1", "1", "2"]
            const final = chance[Math.floor(Math.random() * chance.length)]
            if(final === "1"){
                const randomNumber = Math.floor(Math.random()*5000) +1
                const chances =  [
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good", 
                    "break"
                ]
        
                const result = chances[Math.floor(Math.random() * chances.length)]
                if(result === "good"){
                    const randomNumber = Math.floor(Math.random()*5000) +1
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`You posted a meme and got <:RamenCoin:815247142352322620> ${randomNumber} RSP`)
                    .setColor('RED')
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                coins: randomNumber
                            }
                        }
                    )
                    return message.reply(embed)
                } else if(result === "break"){
                    const options = [
                        "Oh no! You were about to post the meme, but you dropped your phone and the screen cracked... it never turned back on!",
                        "There was an error posting your meme, and a hacker hacked your phone so you need a new one...",
                        "Some person stole your phone. L"
                    ]
                    const opt = options[Math.floor(Math.random() * options.length)]
                    const randomNumber = Math.floor(Math.random()*5000) +1
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`${opt}`)
                    .setColor('RED')
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                phone: -1,
                            }
                        }
                    )
                    return message.reply(embed)
                }
            } else{
                const chances =  [
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good",
                    "good", 
                    "break"
                ]
        
                const result = chances[Math.floor(Math.random() * chances.length)]
                if(result === "good"){
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`You posted a meme and got SO MANY DOWNVOTES. NO MONEY FOR YOU!`)
                    .setColor('RED')
                    return message.reply(embed)
                } else if(result === "break"){
                    const options = [
                        "Oh no! You were about to post the meme, but you dropped your phone and the screen cracked... it never turned back on!",
                        "There was an error posting your meme, and a hacker hacked your phone so you need a new one...",
                        "Some person stole your phone. L"
                    ]
                    const opt = options[Math.floor(Math.random() * options.length)]
                    const randomNumber = Math.floor(Math.random()*5000) +1
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`${opt}`)
                    .setColor('RED')
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                phone: -1,
                            }
                        }
                    )
                    return message.reply(embed)
                }
            }   
        }
        } catch (e) {
            return message.channel.send('you did not reply with a number in time!')
        }
        
        //RANDOM RESPONSE: 
        
        const r = [
           "Insert responses into array"
        ]
        const rs = r[Math.floor(Math.random() * r.length)]


        
    }
}
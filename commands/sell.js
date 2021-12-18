const { MessageEmbed } = require("discord.js");
const profileModel = require("../models/profileSchema");
module.exports = {
  name: "sell",
  description: "beg for coins",
  cooldown: 1,
  async execute(client, message, args, cmd, Discord, profileData) {
    const ags = args[0]
    if(!ags) return message.channel.send('What item do you wish to sell?')
    const item = ags.toLowerCase()
    const amount = args[1]
    if(item === 'fish'){
        if(amount === "all"){
            const amt = profileData.fish
            if(amt < 1) return message.channel.send('You dont have any fish to sell!')
            const embed = new MessageEmbed()
            .setDescription(`You have succesfully sold 🐟 *${amt} Fish* for <:RamenCoin:815247142352322620> ${(amt*200).toLocaleString()} RSP`)
            .setColor('RED')
    
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: amt*200,
                        fish: -amt,
                    },
                }
            )
    
            return message.channel.send(embed)
        } else if(amount){
            if(profileData.fish < amount) return message.channel.send('You dont have enough fish there m8!')
            const embed = new MessageEmbed()
            .setDescription(`You have succesfully sold 🐟 *${amount} Fish* for <:RamenCoin:815247142352322620> ${(amount*200).toLocaleString()} RSP`)
            .setColor('RED')
    
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: amount*200,
                        fish: -amount,
                    },
                }
            )
    
            return message.channel.send(embed)
        } else if(!amount){
            if(profileData.fish < 1) return message.channel.send('You dont have enough fish there m8!')
            const embed = new MessageEmbed()
            .setDescription('You have succesfully sold 🐟 *1 Fish* for <:RamenCoin:815247142352322620> 200 RSP')
            .setColor('RED')
    
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: 200,
                        fish: -1,
                    },
                }
            )
    
            return message.channel.send(embed)
        } else{
            message.channel.send('ERR')
        }
    } else if(item === 'rod'){
        if(profileData.rod < 1) return message.channel.send('You need to own a rod in order to sell one genius!')
        const embed = new MessageEmbed()
            .setDescription(`You have succesfully sold 🎣 *1 Fishing Rod* for <:RamenCoin:815247142352322620> 1,500 RSP`)
            .setColor('RED')
    
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: 1500,
                        rod: -1,
                    },
                }
            )
        return message.channel.send(embed)
    } else if(item === 'stove'){
        if(profileData.stoves < 1) return message.channel.send('You need to own a stove in order to sell a stove genius!')
        const embed = new MessageEmbed()
            .setDescription(`You have succesfully sold 🍳 *1 Stove* for <:RamenCoin:815247142352322620> 10,000 RSP`)
            .setColor('RED')
    
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: 10000,
                        stove: -1,
                    },
                }
            )
        return message.channel.send(embed)
    } else if(item === 'cookie'){
        if(amount === 'all'){
            const amt = profileData.cookies
            if(amt < 1) return message.channel.send('You dont have any cookies to sell!')
            const embed = new MessageEmbed()
            .setDescription(`You have succesfully sold 🍪 *${amt.toLocaleString()} Cookies* for <:RamenCoin:815247142352322620> ${(amt*50).toLocaleString()} RSP`)
            .setColor('RED')
    
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: amt*50,
                        cookies: -amt,
                    },
                }
            )
    
            return message.channel.send(embed)
        } else if(amount){
            if(profileData.cookies < amount) return message.channel.send('You dont have enough cookies there Mr. Eager!')
            const embed = new MessageEmbed()
            .setDescription(`You have succesfully sold 🍪 *${amount.toLocaleString()} Cookies* for <:RamenCoin:815247142352322620> ${(amount*50).toLocaleString()} RSP`)
            .setColor('RED')
    
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: amount*50,
                        cookies: -amount,
                    },
                }
            )
    
            return message.channel.send(embed)
        } else if(!amount){
            if(profileData.cookies < 1) return message.channel.send('You dont have enough fish there Mr. Eager!')
            const embed = new MessageEmbed()
            .setDescription('You have succesfully sold 🍪 *1 Cookie* for <:RamenCoin:815247142352322620> 50 RSP')
            .setColor('RED')
    
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: 50,
                        cookies: -1,
                    },
                }
            )
    
            return message.channel.send(embed)
        } else{
            message.channel.send('ERR')
        }
    } else if(item === 'art' || item === 'project'){
        if(profileData.laptop < 1) return message.channel.send('You must have a laptop in order to sell on etsy')
        if(amount){
            if(profileData.projects < amount) return message.channel.send('You dont have enough art projects there m8!')
            const embed = new MessageEmbed()
            .setDescription(`You have succesfully sold 🎨 *${amount.toLocaleString()} Projects* for <:RamenCoin:815247142352322620> ${(amount*1500).toLocaleString()} RSP`)
            .setColor('RED')
    
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: amount*1500,
                        projects: -amount,
                    },
                }
            )
    
            return message.channel.send(embed)
        } else if(!amount){
            if(profileData.projects < 1) return message.channel.send('You dont have enough art projects there m8!')
            const embed = new MessageEmbed()
            .setDescription('You have succesfully sold 🎨 *1 Art Project* for <:RamenCoin:815247142352322620> 1,500 RSP')
            .setColor('RED')
    
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: 1500,
                        projects: -1,
                    },
                }
            )
    
            return message.channel.send(embed)
        } else{
            message.channel.send('ERR')
        }
    } else if(item === "laptop"){
        if(profileData.laptop < 1) return message.channel.send('You need to own a laptop in order to sell a laptop genius!')
        const embed = new MessageEmbed()
            .setDescription(`You have succesfully sold 💻 *1 Laptop* for <:RamenCoin:815247142352322620> 1,000 RSP`)
            .setColor('RED')
    
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: 1000,
                        laptop: -1,
                    },
                }
            )
        return message.channel.send(embed)
    } else if(item === "pc"){
        if(profileData.pc < 1) return message.channel.send('You need to own a PC in order to sell one lol')
        const embed = new MessageEmbed()
            .setDescription(`You have succesfully sold 🖥️ *1 PC* for <:RamenCoin:815247142352322620> 70,000 RSP`)
            .setColor('RED')
    
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: 70000,
                        pc: -1,
                    },
                }
            )
        return message.channel.send(embed)
    } else if(item === 'melon'){
        return message.channel.send('You cannot sell collectibles!')
    } else if(item === 'phone'){
        if(profileData.phone < 1) return message.channel.send('You need to own a phone in order to sell one lol')
        const embed = new MessageEmbed()
            .setDescription(`You have succesfully sold 📱 *1 Mobile Phone* for <:RamenCoin:815247142352322620> 4,000 RSP`)
            .setColor('RED')
    
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: 4000,
                        phone: -1,
                    },
                }
            )
        return message.channel.send(embed)
    } else{
        return message.channel.send('Either you cannot sell that item, you spelled it wrong, or you have the wrong ID')
    }
    
    }
}
const profileModel = require("../models/profileSchema"); 
module.exports = {
    name: "buy",
    aliases: ["shop"],
    async execute(client, message, args, cmd, Discord, profileData){
        const item = args[0]
        if(cmd === 'shop'){
          const page = args[0]
          if(!page){
            const embed = new Discord.MessageEmbed()
            .setDescription('These are all the items that are available to buy!')
            .setTitle('The Shop (1/2)')
            .addFields(
                {name: '🎣 Fishing Rod', value: '2,000 RSP `(id: rod)`'},
                {name: '🍳 Stove', value: '20,000 RSP `(id: stove)`'},
                {name: '🔒 Security', value: '5,000 RSP `(id: sec)`'},
                {name: '⚠️ Scam', value: 'WASTE MONEY! Choose how much to waste `(id: scam)`'},
                {name: '💻 Laptop', value: '5,000 RSP `(id: laptop)`'},
                {name: '🎨 Art Supplies', value: '1,000 RSP `(id: art)`'},
            )
            .setColor("RED")
            .setFooter(`💰 Your Bowl: ${profileData.coins.toLocaleString()} RSP`)
            return message.channel.send(embed)
          } else if(page === "2"){
            const embed = new Discord.MessageEmbed()
            .setDescription('These are all the items that are available to buy!')
            .setTitle('The Shop (2/2)')
            .addFields(
                {name: '🖥️ Gaming PC', value: '100,000 RSP `(id: pc)`'},
                {name: '📱 Mobile Phone', value: '10,000 RSP `(id: phone)`'},
                {name: '🍉 Watermelon', value: 'Collectible, 20,000 RSP `(id: melon)`'},
                {name: `🍪 Cookie Boost`, value: '20,000 RSP. Boosts cookies 10 times. `(id: cb)`'},
                {name: `🐟 Fish Boost`, value: '20,000 RSP. Boosts fish 10 times. `(id: fb)`'},
                {name: `💰 Beg Boost`, value: '10,000 RSP. Boosts begs 10 times.`(id: bb)`'},
                
            )
            .setColor("RED")
            .setFooter(`💰 Your Bowl: ${profileData.coins.toLocaleString()} RSP`)
            return message.channel.send(embed)
          } else{
            const embed = new Discord.MessageEmbed()
            .setDescription('These are all the items that are available to buy!')
            .setTitle('The Shop (1/2)')
            .addFields(
                {name: '🎣 Fishing Rod', value: '2000 RSP (id: rod)'},
                {name: '🍳 Stove', value: '20,000 RSP (id: stove)'},
                {name: '🔒 Security', value: '5,000 RSP (id: sec)'},
                {name: '⚠️ Scam', value: 'WASTE MONEY! Choose how much to waste (id: scam)'},
                {name: '💻 Laptop', value: '5,000 RSP (id: laptop)'},
                {name: '🎨 Art Supplies', value: '1,000 RSP (id: art)'},
            )
            .setColor("RED")
            .setFooter(`💰 Your Bowl: ${profileData.coins.toLocaleString()} RSP`)
            return message.channel.send(embed)
          }
          
        }
        if(!item){
            return message.channel.send('use -shop to browse through items')
        } else if(item === 'rod'){
            if(profileData.coins < 2000 ) return message.channel.send('You do not have enough coins to buy this item!')
            const embed = new Discord.MessageEmbed()
            .setDescription('You succesfully bought a ***🎣 fishing rod*** for <:RamenCoin:815247142352322620> 2,000 RSP! Enjoy your fishing!')
            .setColor("RED")
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    rod: 1,
                    coins: -2000,
                  },
                }
              );
             return message.channel.send(embed)
        } else if(item === 'stove'){
            if(profileData.stoves > 0) return message.channel.send('you have the max amount of this item!')
            if(profileData.coins < 20000 ) return message.channel.send('You do not have enough coins to buy this item!')
            const embed = new Discord.MessageEmbed()
            .setDescription('You succesfully bought a ***🍳 stove*** for <:RamenCoin:815247142352322620> 20,000 RSP! Enjoy your cooking!')
            .setColor("RED")
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: -20000,
                    stove: 1,
                  },
                }
              );
             return message.channel.send(embed)
        } else if(item === "sec"){
            if(profileData.security > 5) return message.channel.send('you have the max amount of this item!')
            if(profileData.coins < 5000 ) return message.channel.send('You do not have enough coins to buy this item!')
            const embed = new Discord.MessageEmbed()
            .setDescription('You succesfully bought ***🔒 Security*** for <:RamenCoin:815247142352322620> 5,000 RSP! Enjoy your safety!')
            .setColor("RED")
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: -5000,
                    security: 1,
                  },
                }
              );
             return message.channel.send(embed)     
        } else if(item === 'scam'){
            const amount = args[1]
            if(!amount) return message.channel.send('How much are you wasting in this scam?')
            if(amount > profileData.coins) return message.channel.send('You do not have enough coins to waste money on this much!')
            const embed = new Discord.MessageEmbed()
            .setDescription(`You succesfully bought ***⚠️ Scam*** for <:RamenCoin:815247142352322620> ${amount.toLocaleString()} RSP! Enjoy your scam!`)
            .setColor("RED")
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: -amount,
                  },
                }
              );
              return message.channel.send(embed)
        } else if(item === "laptop"){
            if(profileData.laptop > 9) return message.channel.send('you have the max amount of this item!')
            if(profileData.coins < 5000 ) return message.channel.send('You do not have enough coins to buy this item!')
            const embed = new Discord.MessageEmbed()
            .setDescription('You succesfully bought ***💻 Laptop*** for <:RamenCoin:815247142352322620> 5,000 RSP! Enjoy your tech!')
            .setColor("RED")
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: -5000,
                    laptop: 1,
                  },
                }
              );
             return message.channel.send(embed)   
        } else if(item === "art"){
            if(profileData.coins < 1000 ) return message.channel.send('You do not have enough coins to buy this item!')
            const embed = new Discord.MessageEmbed()
            .setDescription('You succesfully bought ***🎨 Art Supplies*** for <:RamenCoin:815247142352322620> 1,000 RSP! Enjoy your painting!')
            .setColor("RED")
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: -1000,
                    art: 1,
                  },
                }
              );
             return message.channel.send(embed)  
        } else if(item === 'pc'){
          if(profileData.coins < 100000 ) return message.channel.send('You do not have enough coins to buy this item!')
          if(profileData.pc >= 1) return message.channel.send('You already have a PC!')
            const embed = new Discord.MessageEmbed()
            .setDescription('You succesfully bought ***🖥️ Gaming PC*** for <:RamenCoin:815247142352322620> 100,000 RSP! Enjoy your gaming!')
            .setColor("RED")
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: -100000,
                    pc: 1,
                  },
                }
              );
              return message.channel.send(embed)
        } else if(item === "melon"){
          if(profileData.coins < 20000 ) return message.channel.send('You do not have enough coins to buy this item!')
            const embed = new Discord.MessageEmbed()
            .setDescription('You succesfully bought ***🍉 Watermelon*** for <:RamenCoin:815247142352322620> 20,000 RSP! Enjoy your melon!')
            .setColor("RED")
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: -20000,
                    melon: 1,
                  },
                }
              );
              return message.channel.send(embed)
        } else if(item === "cb"){
          if(profileData.coins < 20000 ) return message.channel.send('You do not have enough coins to buy this item!')
          const embed = new Discord.MessageEmbed()
          .setDescription('You succesfully bought ***🍪 Cookie Boost*** for <:RamenCoin:815247142352322620> 20,000 RSP! Enjoy your boost!')
          .setColor("RED")
          await profileModel.findOneAndUpdate(
              {
                userID: message.author.id,
              },
              {
                $inc: {
                  coins: -20000,
                  cookieboost: 10,
                },
              }
            );
            return message.channel.send(embed)
        } else if(item === "fb"){
          if(profileData.coins < 20000 ) return message.channel.send('You do not have enough coins to buy this item!')
          const embed = new Discord.MessageEmbed()
          .setDescription('You succesfully bought ***🐟 Fish Boost*** for <:RamenCoin:815247142352322620> 20,000 RSP! Enjoy your boost!')
          .setColor("RED")
          await profileModel.findOneAndUpdate(
              {
                userID: message.author.id,
              },
              {
                $inc: {
                  coins: -20000,
                  fishboost: 10,
                },
              }
            );
            return message.channel.send(embed)
        } else if(item === "bb"){
          if(profileData.coins < 10000 ) return message.channel.send('You do not have enough coins to buy this item!')
          const embed = new Discord.MessageEmbed()
          .setDescription('You succesfully bought ***💰 Beg Boost*** for <:RamenCoin:815247142352322620> 10,000 RSP! Enjoy your boost!')
          .setColor("RED")
          await profileModel.findOneAndUpdate(
              {
                userID: message.author.id,
              },
              {
                $inc: {
                  coins: -10000,
                  begboost: 10,
                },
              }
            );
            return message.channel.send(embed)
        } else if(item === 'phone'){
          if(profileData.coins < 10000 ) return message.channel.send('You do not have enough coins to buy this item!')
          const embed = new Discord.MessageEmbed()
          .setDescription('You succesfully bought ***📱 Mobile Phone*** for <:RamenCoin:815247142352322620> 10,000 RSP! Enjoy your phone!')
          .setColor("RED")
          await profileModel.findOneAndUpdate(
              {
                userID: message.author.id,
              },
              {
                $inc: {
                  coins: -10000,
                  phone: 1,
                },
              }
            );
            return message.channel.send(embed)
        }else{
          return message.channel.send('That item is not in the shop, or you used the wrong id/spelling!')
        }
    }
}
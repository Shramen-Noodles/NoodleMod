const profileModel = require('../models/profileSchema')
module.exports = {
    name: "coinflip",
    aliases: ["cf"],
    async execute(client, message, args, cmd, Discord, profileData){
      var prediction = args[0]
      const choices = [
        "heads",
        "tails"
      ]
      var bet = args[1]
      if(!prediction) return message.channel.send('predict a side!')
      if(!bet) return message.channel.send('specify an amount of coins to wager!')
      if(bet < 0) return message.channel.send('Your bet must be a positive integer')
      if(bet > profileData.coins) return message.channel.send('You do not have enough in your wallet to bet that much!')
      const choice = choices[Math.floor(Math.random() * choices.length)]
      if(prediction == choice){
        await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $inc: {
              coins: bet,
            },
          }
        );
        return message.channel.send(`Congrats, you guessed right! ** ${bet.toLocaleString()} RSP** has been placed into your wallet!`);
      } else{
        await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $inc: {
              coins: -bet,
            },
          }
        );
        return message.channel.send(`Booooo, you guessed wrong! ** ${bet.toLocaleString()} RSP** has been taken from your wallet!`);
      }
      
    }
}
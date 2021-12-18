const profileModel = require("../models/profileSchema");
module.exports = {
  name: "give",
  aliases: [],
  description: "give a player some coins",
  async execute(client, message, args, cmd, discord, profileData) {
    
    if (message.member.id != "689934581645705259") return message.channel.send(`Sorry only **Shramen** can run this command 😔`);
    if (!args.length) return message.channel.send("You need to mention a player to give them RSP");
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("That user does not exist");

    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit amount must be a whole number");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user doens't exist in the db`);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            coins: amount,
          },
        }
      );

      return message.channel.send(`This player has been given <:RamenCoin:815247142352322620> ${amount.toLocaleString()} RSP!`);
    } catch (err) {
      console.log(err);
    }
  },
};


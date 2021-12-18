const profileModel = require('../models/profileSchema.js')
const { MessageEmbed } = require(`discord.js`)
module.exports = {
    name : 'reset',
    aliases: ["rst"],
    async execute(client, message, args, cmd, Discord, profileData){
        if (message.member.id != "689934581645705259") return message.channel.send(`Sorry only **Shramen** can run this command 😔`);
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const theirData = await profileModel.findOne({ userID: user.id })
        if(!user) return message.channel.send('User not found.')
        const c = theirData.coins
        const b = theirData.bank
        const f = theirData.fish
        const r = theirData.rod
        const s = theirData.stove
        const ck = theirData.cookies
        const sc = theirData.security
        const lp = theirData.laptop
        const at = theirData.art
        const prj = theirData.projects

        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $inc: {
                coins: -c,
                bank: -b,
                fish: -f,
                rod: -r,
                stove: -s,
                cookies: -ck,
                security: -sc,
                laptop: -lp,
                art: -at,
                projects: -prj,
              },
            }
          );
          return message.channel.send(`<@${user.id}>'s profile has been reset`);
    }
}
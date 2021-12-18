module.exports = {
    name: "jobs",
    async execute(client, message, args, cmd, Discord, profileData){
            const embed = new Discord.MessageEmbed()
            .setDescription('There are only a few jobs to choose from right now, but more are coming!')
            .setTitle('Job Options')
            .setColor('RED')
            .addFields(
                {name: `📺 Twitch Streamer`, value: `Stream everyday to get a good amount of RSP, and a random bonus! (id: streamer)`},
                {name: `👨‍🍳 Chef`, value: `Get more cookies upon baking! Earn convection oven upon enrolling (-50,000 RSP)`},
                {name: `👨‍⚕️ Doctor`, value: `1) Go to school (-1,000,000 RSP) 2) Do your job (+10-40 RSP)`},
                {name: `💸 Entrepreneur `, value: `Get a random amount of money, but there is a chance you can loose money! Investment cost now lowered!`}
            )
            return message.channel.send(embed)
    }
}
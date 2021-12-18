const distube = require('distube')
module.exports = {
    name: "queue",
    async execute(client, message, args, cmd, Discord){
        
        let queue = client.distube.getQueue(message)
        message.channel.send(new Discord.MessageEmbed()
                    .setTitle(`${message.guild.name}'s queue`)
                    .setDescription(
                        queue.songs.map(
                            (song, id) => 
                            `${id + 1}) ${song.name} -- \`${song.formattedDuration}\``
                        )
                    )
                )
        //message.channel.send('Current queue:\n' + queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``)).slice(0, 10).join("\n");
    }
}
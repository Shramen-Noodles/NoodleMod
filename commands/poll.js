module.exports = {
    name: 'poll',
    description: "poll",
    execute(client, message, args, cmd, Discord){
        message.delete({ timeout: 1234 })
        const Embed = new Discord.MessageEmbed()
        .setColor('#c21000')
        .setTitle("Start Poll")
        .setDescription("-poll to run a simple yes or no poll");

        if(!args[1]){
            message.channel.send(Embed);
        } else{
            let msgArgs = args.slice(0).join(" ");

            const pollEmbed = new Discord.MessageEmbed()
            .setColor('#c21000')
            .setDescription(msgArgs)
            .setAuthor(message.author.tag, message.author.displayAvatarURL ({ dynamic: true}))
        
            message.channel.send(pollEmbed).then(messageReaction => {
                messageReaction.react("✔️");
                messageReaction.react("❌");
        });
        } 
    }

}
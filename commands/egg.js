module.exports = {
    name: 'egg',
    description: "a seriously stupid egg command",
    execute(client, message, args, cmd, Discord){

        message.channel.send(`:egg: eg`)
        
    }
}
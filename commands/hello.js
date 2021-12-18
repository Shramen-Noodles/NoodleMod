

module.exports = {
    name: 'hello',
    description: "replies with pong!",
    execute(client, message, args, cmd, Discord){
        message.channel.send(`>>> *${message.content} text*`);
    }
}
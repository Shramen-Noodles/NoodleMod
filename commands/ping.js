module.exports = {
    name: 'ping',
    description: "replies with pong!",
    execute(client, message, args, cmd, Discord){
        message.channel.send('pong!');
    }
}
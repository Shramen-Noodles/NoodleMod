const api = require('random-stuff-api')


module.exports = {
    name: 'joke',
    description: "insult",
    execute(client, message, args, cmd, Discord){
            api.random.joke().then(joke => {
                message.channel.send(joke)
            })
    
}
}
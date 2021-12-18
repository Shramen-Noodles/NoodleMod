const api = require('random-stuff-api')


module.exports = {
    name: 'insult',
    description: "insult",
    async execute(client, message, args, cmd, Discord){
            api.random.insult().then(insult => {
             message.channel.send(insult)
            })
    
}
}
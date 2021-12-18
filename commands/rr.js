
const { fetchCache, addToCache } = require('../features/rr')
const messageSchema = require('../models/message')
module.exports = {
    name: "rr",
    async execute(client, message, args, cmd, Discord){
        if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send('I must have manage roles permission for this to work!')
        
        let emoji = args.shift()
        let role = args.shift()
        const displayName = args.join(' ')

        if(role.startsWith('<@&')) {
            
            role = role.substring(3, role.length - 1)
            console.log(role)
        }

        const newRole = message.guild.roles.cache.find(r => {
            return r.name === role || r.id === role
        }) || null

        if(!newRole){
            message.reply(`Could not find a role for "${role}"`)
            return
        }

        role = newRole
        console.log(emoji)

        if(emoji.includes(':')){
            const emojiName = emoji.split(':')[1]
            emoji = message.guild.emojis.cache.find((e) => {
                return e.name === emojiName
            })
        }
        const [fetchedMessage] = fetchCache(message.guild.id)
    if (!fetchedMessage) {
      message.reply('An error occurred, please try again')
      return
    }

    const newLine = `${emoji} ${displayName}`
    let { content } = fetchedMessage

    if (content.includes(emoji)) {
      const split = content.split('\n')

      for (let a = 0; a < split.length; ++a) {
        if (split[a].includes(emoji)) {
          split[a] = newLine
        }
      }

      content = split.join('\n')
    } else {
      content += `\n${newLine}`
      fetchedMessage.react(emoji)
    }

    fetchedMessage.edit(content)

    const obj = {
      guildId: message.guild.id,
      channelId: fetchedMessage.channel.id,
      messageId: fetchedMessage.id,
    }

    await messageSchema.findOneAndUpdate(
      obj,
      {
        ...obj,
        $addToSet: {
          roles: {
            emoji,
            roleId: role.id,
          },
        },
      },
      {
        upsert: true,
      }
    )

    addToCache(message.guild.id, fetchedMessage, emoji, role.id)

    }
}
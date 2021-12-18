const mongoose = require('mongoose')

const reqString = {
    type: String, 
    reqiuired: true
  }

let messageSchema = new mongoose.Schema({
    guildId: reqString,
    channelId: reqString,
    messageId: reqString,
    roles: [
        {
            emoji: reqString,
            roleId: reqString,
        },
    ],
})

module.exports = mongoose.model('rrdb', messageSchema);

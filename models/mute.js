const { Message, MessageEmbed } = require('discord.js')
const { Mongoose } = require('mongoose')
const mongoose = require(`mongoose`)

let muteSchema = new mongoose.Schema({
    serverID: String,
    userID: String,
    mutes: Number,
    muted: { type: String, default: "no" }
})

const mute = mongoose.model('mute', muteSchema);

module.exports = mute;




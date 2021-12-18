const { Message, MessageEmbed } = require('discord.js')
const { Mongoose } = require('mongoose')
const mongoose = require(`mongoose`)

let bonkSchema = new mongoose.Schema({
    guildid: String,
    user: String,
    content: Array
})

const bk = mongoose.model('bk', bonkSchema);

module.exports = bk;




const { Message, MessageEmbed } = require('discord.js')
const { Mongoose } = require('mongoose')
const mongoose = require(`mongoose`)

let WarnSchema = new mongoose.Schema({
    guildid: String,
    user: String,
    content: Array
})

const db = mongoose.model('db', WarnSchema);

module.exports = db;




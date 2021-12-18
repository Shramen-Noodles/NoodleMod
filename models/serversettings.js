const mongoose = require("mongoose");


const serverSettings = new mongoose.Schema({
  serverID: { type: String, require: true },
  servername: { type: String },
  modLog: { type: String, default: "none" },
  appChannel: { type: String },
  blacklist: { type: String, default: "off" },
  notifRole: { type: String, default: "none" },
  autorole1: { type: String, default: "none" },
  welcomechannel: { type: String, default: "none" },
  welcomecolor: { type: String, default: '#c21000'},
  blacklistlog: { type: String, default: "none" },
  autorole1: { type: String, default: "none" },
  autorole2: { type: String, default: "none" },
  autorole3: { type: String, default: "none" },
  autorole4: { type: String, default: "none" },
  autorole5: { type: String, default: "none" },
  autorole6: { type: String, default: "none" },
  autorole7: { type: String, default: "none" },
  autorole8: { type: String, default: "none" },
  autorole9: { type: String, default: "none" },
  autorole10: { type: String, default: "none" },
  muterole: { type: String, default: "none" },
  prefix: { type: String, default: "-"},
  levelignore1: { type: String, default: "none" },
  levelignore2: { type: String, default: "none" },
  levelignore3: { type: String, default: "none" },
  levelignore4: { type: String, default: "none" },
  levelignore5: { type: String, default: "none" },
  levels: { type: String, default: "on"},
  levelup: { type: String },
  levelrole1: { type: String },
  lrole1level: { type: String },
  levelrole2: { type: String },
  lrole2level: { type: String },
  levelrole3: { type: String },
  lrole3level: { type: String },
  levelrole4: { type: String },
  lrole4level: { type: String },
  levelrole5: { type: String },
  lrole5level: { type: String },
  membercounter: { type: String },
  f: { type: String, default: "on"},
  tts: { String },
  aroles: { type: Array, },
  aroleids: { type: Array },

});

const settings = mongoose.model("ServerSettings", serverSettings);

module.exports = settings;

const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  serverID: { type: String, require: true },
  coins: { type: Number, default: 1000 },
  bank: { type: Number },
  fish: { type: Number, default: 0},
  rod: { type: Number, default: 0 },
  stove: { type: Number, default: 0 },
  cookies: { type: Number, default: 0},
  security: { type: Number, default: 0},
  laptop: { type: Number, default: 0},
  pc: { type: Number, default: 0},
  art: { type: Number, default: 0},
  projects: { type: Number, default: 0},
  job: { type: String, default: "unemployed"},
  doctor: { type: String, default: "no"},
  melon: { type: Number, default: 0 },
  cookieboost: { type: Number, default: 0 },
  fishboost: { type: Number, default: 0 },
  begboost: { type: Number, default: 0 },
  oven: { type: Number, default: 0 },
  phone: { type: Number, default: 0},
  passive: { type: String, default: "off"}
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;

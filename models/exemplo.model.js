const mongoose = require("mongoose");

const meuSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  idade: { type: Number, required: true },
});

const db = mongoose.model("user", meuSchema);

module.exports = db;

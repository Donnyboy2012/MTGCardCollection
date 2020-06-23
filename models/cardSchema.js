const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: String,
  Scryfall: String,
  rarity: String,
  qty: Number
});

const Card = mongoose.model('cardSchema', cardSchema);

module.exports = Card;

const mongoose = require('mongoose');

const EscudoSchema = new mongoose.Schema({
  IdEsc: {
    type: int,
    required: true
  },
  Nombre: {
    type: String,
    required: true
  },
});
module.exports = mongoose.model('Escudo', EscudoSchema);

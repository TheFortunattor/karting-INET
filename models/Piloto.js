const mongoose = require('mongoose');


const PilotoSchema = new mongoose.Schema({
  IdPil: {
    type: int,
    required: true
  },
  Nombre: {
    type: String,
    required: true
  },
  Apellido: {
    type: String,
    required: true
  },
  DNI: {
    type: int,
    required: true
  },
});

module.exports = mongoose.model('Piloto', PilotoSchema);

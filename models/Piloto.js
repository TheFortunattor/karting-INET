const mongoose = require('mongoose');

// User schema
const UserSchema = new mongoose.Schema({
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
// User model
module.exports = mongoose.model('Piloto', PilotoSchema);

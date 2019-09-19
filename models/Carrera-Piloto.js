const mongoose = require('mongoose');

// User schema
const CarreraPilotoSchema = new mongoose.Schema({
  IdCar: {
    type: int,
    required: true
  },
  IdPil: {
    type: Int,
    required: true
  },
  TiempoActual: {
    type: time,
    required: false
  },
  TiempoAcum: {
    type: time,
    required: false
  },
  Vuelta: {
    type: int,
    required: false
  },
});
// User model
module.exports = mongoose.model('CarreraPiloto', RolSchema);

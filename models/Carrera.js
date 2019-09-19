const mongoose = require('mongoose');


const CarreraSchema = new mongoose.Schema({
  IdCar: {
    type: int,
    required: true
  },
  fecha_hora: {
    type: Date,
    required: true
  },
});

module.exports = mongoose.model('Piloto', CarreraSchema);

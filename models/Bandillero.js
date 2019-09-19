const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  Idb: {
    type: int,
    required: true
  },
  Idusr: {
    type: int,
    required: true
  },
  Idsec: {
    type: int,
    required: true
  },
});
module.exports = mongoose.model('Bandillero', BandilleroSchema);

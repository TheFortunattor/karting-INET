const mongoose = require('mongoose');

// User schema
const RolSchema = new mongoose.Schema({
  IdRol: {
    type: int,
    required: true
  },
  Nombre: {
    type: String,
    required: true
  },
});
// User model
module.exports = mongoose.model('Rol', RolSchema);

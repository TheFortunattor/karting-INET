const mongoose = require('mongoose');

// User schema
const UserSchema = new mongoose.Schema({
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

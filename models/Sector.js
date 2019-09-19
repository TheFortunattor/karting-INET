const mongoose = require('mongoose');

const SectorSchema = new mongoose.Schema({
  IdSect: {
    type: int,
    required: true
  },
  IdBandera: {
    type: int,
    required: false
  },
});
module.exports = mongoose.model('Sector', BandilleroSchema);

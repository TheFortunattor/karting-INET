const Sector = require('../models/Sector');

// POST /api/sector
exports.save = (req, res, next) => {
  const sector = new Sector({
    IdSect: sector.id,
    IdBandera: bandera.id,
  });
  reading.save(err => {
    if (err) return next(err);
    res.status(200).json(reading);
  });
};

// PUT /sector/:id
exports.update = (req, res) => {
  res.send('TODO');
};

// GET /sector/:id
exports.one = (req, res, next) => {
  Sector.findById(req.params.id, (err, sector) => {
    if (err) return next(err);
    res.status(200).json(sector);
  });
};

// GET /api/sector
exports.all = (req, res) => {
  Sector.find((err, sector) => {
    if (err) return next(err);
    res.status(200).json(sector);
  });
};

// DELETE /api/sector/:id
exports.delete = (req, res) => {
  Sector.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.status(200).json({ msg: 'delete OK' });
  });
};

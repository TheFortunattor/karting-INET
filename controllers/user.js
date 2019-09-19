const User = require('../models/User');
const bcrypt = require('bcrypt');

// POST /api/user
exports.save = (req, res, next) => {
  const user = new User({
    Idus: req.body.IdUs,
    idrol: req.body.IdRol,
    nombre: req.body.Nombre,
    contraseña: req.body.Contraseña,
  });
};

// GET /api/users
exports.all = (req, res) => {
  User.find((err, users) => {
    if (err) return next(err);
    res.status(200).json(users);
  });
};

// GET /api/user/:id
exports.one = (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return next(err);
    res.status(200).json(user);
  });
};

// PUT /api/user/:id
exports.update = (req, res) => {
  res.send('TODO');
};

// DELETE /api/user/:id
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.status(200).json({ msg: 'delete OK' });
  });
};

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Users = require('./users.model');
const router = express.Router();

const SECRET_KEY = 'tu_clave_secreta'; // Usa una clave segura y almacénala en variables de entorno

router.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body;

    // Verificar si el usuario existe
    const user = await Users.findOne({ phone });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Generar un token JWT válido por una hora
    const token = jwt.sign({ id: user._id, name: user.name }, SECRET_KEY, {
      expiresIn: '1h',
    });

    return res.status(200).json({ token, message: 'Inicio de sesión exitoso' });
  } catch (err) {
    console.error('Error en el login:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;

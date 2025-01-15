const express = require('express');
const { create, getAll, getById, getList, update, remove } = require('./catalog_products.controller');
const { authenticateJWT } = require('../middleware/auth');
const router = express.Router();

router.post('/products', authenticateJWT, create);

router.get('/products', authenticateJWT, getAll);

router.get('/products/list', authenticateJWT, getList);

router.get('/products/:id', authenticateJWT, getById);

router.put('/products/:id', authenticateJWT, update);

router.delete('/products/:id', authenticateJWT, remove);

module.exports = router;
const express = require('express');
const { create, getAll, getById, getList, update, remove} = require('./catalog_products.controller');
const router = express.Router();

router.post('/', create);

router.get('/', getAll);

router.get('/list', getList);

router.get('/:id', getById);

router.put('/:id', update);

router.delete('/:id', remove);

module.exports = router;
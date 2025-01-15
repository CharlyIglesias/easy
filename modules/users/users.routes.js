const express = require('express');
const { create, getAll, getById, getList, update, remove, login } = require('./users.controller');
const { createSchema, updateSchema, loginSchema } = require('./users.validation'); // Import createSchema and updateSchema
const validate = require('../../middleware/validate'); // Import validate middleware
const router = express.Router();

router.post('/', validate(createSchema), create); // Use create function from users.controller

router.get('/', getAll);

router.get('/list', getList);

router.get('/:id', getById);

router.put('/:id', validate(updateSchema), update); // Use updateSchema for validation

router.delete('/:id', remove);

router.post('/login', validate(loginSchema), login);

module.exports = router;

const Joi = require('joi');

const updateSchema = Joi.object({
        user_id: Joi.array().items(Joi.string()),
        token: Joi.string(),})

const createSchema = Joi.object({
        user_id: Joi.array().items(Joi.string()).required(),
        token: Joi.string(),})

module.exports = {
    createSchema,
    updateSchema
}


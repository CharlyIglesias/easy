
const Joi = require('joi');

const updateSchema = Joi.object({
        name: Joi.string(),
        description: Joi.string(),
        height: Joi.number(),
        length: Joi.number(),
        width: Joi.number(),})

const createSchema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string(),
        height: Joi.number(),
        length: Joi.number(),
        width: Joi.number(),})

module.exports = {
    createSchema,
    updateSchema
}


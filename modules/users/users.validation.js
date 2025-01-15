
const Joi = require('joi');

const updateSchema = Joi.object({
        name: Joi.string(),
        phone: Joi.string(),
        img_profile: Joi.string(),
        password: Joi.string()})

const createSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Name is required',
    'any.required': 'Name is required'
  }),
  phone: Joi.string().required().messages({
    'string.empty': 'Phone is required',
    'any.required': 'Phone is required'
  }),
  img_profile: Joi.string().uri().required().messages({
    'string.empty': 'Profile image URL is required',
    'any.required': 'Profile image URL is required',
    'string.uri': 'Profile image URL must be a valid URI'
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Password is required',
    'any.required': 'Password is required'
  })
});

const loginSchema = Joi.object({
        password: Joi.string().required().messages({
          'string.empty': 'Password is required',
          'any.required': 'Password is required'
        })
      });

module.exports = {
createSchema,
updateSchema,
loginSchema
};


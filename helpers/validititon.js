const Joi = require("@hapi/joi");

const schema = Joi.object({
  name: Joi.string()
    .min(1)
    .trim()
    .required(),

  lastname: Joi.string()
    .min(1)
    .trim()
    .required(),

  age: Joi.number()
    .min(18)
    .required(),

  class: Joi.string().min(3),

  location: Joi.any().allow("BER", "HH", "DUS")
});

const dataToValidate = { 
    name 'chris', 
    age: 31 
  } 
  const result = Joi.validate(dataToValidate, schema); 
let Joi = require("@hapi/joi")


let validateFunc = () => {
    return Joi.object({
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
}




module.exports = validateFunc;
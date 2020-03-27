const Joi = require("@hapi/joi");

let validatePost = dataToValidate => {
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
  return schema.validate(dataToValidate);
};

// if (error) {
//   res.status(422).json({
//     message: "Invalid request"
//   });
// } else {
//   // const createdPost = await api.createPost(data);
//   res.json({ message: "Resource created" });
// }

module.exports = validatePost;

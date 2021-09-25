import Joi from 'joi';

const schema = Joi.object({
  n1: Joi.number().required().error(new Error('Invalid number (n1)')),
  n2: Joi.number().required().error(new Error('Invalid number (n2)')),
});

export { schema };

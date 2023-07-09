import * as Joi from 'joi';
export const validationSchema = Joi.object({
    NODE_ENV: Joi.string()
        .valid('development', 'production', 'test', 'provision')
        .default('development'),
    RMQ_URI: Joi.string().required(),
    RMQ_AUTH_QUEUE: Joi.string().required(),
    HTTP_TIMEOUT: Joi.number().required(),
    HTTP_MAX_REDIRECTS: Joi.number().required(),
})

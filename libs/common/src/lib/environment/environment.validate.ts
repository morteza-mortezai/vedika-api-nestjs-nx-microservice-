import * as Joi from 'joi';
export const validationSchema = Joi.object({
    NODE_ENV: Joi.string()
        .valid('development', 'production', 'test', 'provision')
        .default('development'),
    APP_PORT: Joi.number().default(3001),
    RMQ_URI: Joi.string().required(),
    RMQ_USERS_QUEUE: Joi.string().required(),
    HTTP_TIMEOUT: Joi.number().required(),
    HTTP_MAX_REDIRECTS: Joi.number().required(),
    POSTGRES_HOST: Joi.string().required(),
    POSTGRES_PORT: Joi.number().required(),
    POSTGRES_USER: Joi.string().required(),
    POSTGRES_PASSWORD: Joi.string().required(),
    POSTGRES_DB: Joi.string().required(),
})

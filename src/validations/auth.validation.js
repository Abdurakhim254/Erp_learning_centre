import Joi from "joi";

export const authregisterchema=Joi.object({
    id:Joi.number().integer().min(1),
    name:Joi.string().min(3).required(),
    email:Joi.string().min(10).pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required(),
    password:Joi.string().min(5).required(),
    date_created:Joi.date(),
    last_login:Joi.date(),
    account_id:Joi.string().required(),
    role:Joi.string().min(4)
})

export const authloginSchema=Joi.object({
    email:Joi.string().min(10).pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required(),
    password:Joi.string().min(5).required(),
})
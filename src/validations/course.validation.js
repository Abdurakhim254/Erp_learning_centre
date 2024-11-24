import Joi from "joi";

export const courseValidationSchema=Joi.object({
    id:Joi.number().integer().min(1),
    name:Joi.string().min(3).required(),
    desc:Joi.string().min(5).required(),
    start_time:Joi.date(),
    end_time:Joi.date(),
})
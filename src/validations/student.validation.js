import Joi from "joi";

export const studentValidationSchema=Joi.object({
    id:Joi.number().integer().min(1),
    permission:Joi.boolean().required(),
    user_id:Joi.number().integer().min(1).required(),
})
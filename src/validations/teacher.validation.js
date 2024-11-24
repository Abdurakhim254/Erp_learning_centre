import Joi from "joi";

export const CheckteacherValidationSchema=Joi.object({
    id:Joi.number().integer().min(1),
    user_id:Joi.number().integer().min(1).required(),
})
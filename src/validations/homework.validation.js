import Joi from "joi";

export const homeworkDataValidationSchema=Joi.object({
    id:Joi.number().integer().min(1),
    student_id:Joi.number().integer().min(1).required(),
    description:Joi.string().min(5).required(),
    title:Joi.string().min(5).required()
})
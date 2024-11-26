import Joi from "joi";

export const lessonDataValidationSchema=Joi.object({
    id:Joi.number().integer().min(1),
    course_id:Joi.number().integer().min(1).required(),
    description:Joi.string().min(5).required(),
    title:Joi.string().min(5).required()
})
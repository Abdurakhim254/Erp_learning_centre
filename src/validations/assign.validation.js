import Joi from "joi";

export const AssignValidationSchema=Joi.object({
    id:Joi.number().integer().min(1),
    course_id:Joi.number().integer().min(1).required(),
    student_id:Joi.number().integer().min(1).required(),
    teacher_id:Joi.number().integer().min(1).required()
})
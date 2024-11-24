export const checkAssignDataMiddleware=(schema)=>{
    return (req,res,next)=>{
        const {teacher_id,student_id,course_id}=req.body
        const {error}=schema.validate({teacher_id,student_id,course_id})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}

export const UpdateAssignDataMiddleware=(schema)=>{
    return (req,res,next)=>{
        const{id}=req.params
        const {teacher_id,student_id,course_id}=req.body
        const {error}=schema.validate({id,teacher_id,student_id,course_id})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}
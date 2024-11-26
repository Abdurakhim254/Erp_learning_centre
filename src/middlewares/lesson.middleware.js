export const CheckLessonDatamiddlewareData=(schema)=>{
    return (req,res,next)=>{
        const {course_id,description,title}=req.body
        const {error}=schema.validate({course_id,description,title})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}

export const UpdateLessonDatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {id}=req.params
        const {course_id,description,title}=req.body
        const {error}=schema.validate({id,course_id,description,title})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}
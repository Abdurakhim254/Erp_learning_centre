export const CheckHomeworkDatamiddlewareData=(schema)=>{
    return (req,res,next)=>{
        const {student_id,description,title}=req.body
        const {error}=schema.validate({student_id,description,title})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}

export const UpdateHomeworkDatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {id}=req.params
        const {student_id,description,title}=req.body
        const {error}=schema.validate({id,student_id,description,title})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}
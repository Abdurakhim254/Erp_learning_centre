export const checkTeacherDataMiddleware=(schema)=>{
    return (req,res,next)=>{
        const {user_id}=req.body
        const {error}=schema.validate({user_id})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}

export const updateTeacherDataMiddleware=(schema)=>{
    return (req,res,next)=>{
        const {id}=req.params
        const {user_id}=req.body
        const {error}=schema.validate({user_id,id})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}
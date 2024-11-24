export const CheckCourseDatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {name,desc,start_time,end_time}=req.body
        const {error}=schema.validate({name,desc,start_time,end_time})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }

    }
}

export const updateCourseDatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {id}=req.params
        const {name,desc,start_time,end_time}=req.body
        const {error}=schema.validate({name,id,desc,start_time,end_time})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}
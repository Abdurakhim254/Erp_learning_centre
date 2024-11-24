export const authRegisterMiddleware=(schema)=>{
    return (req,res,next)=>{
        const {name,email,password,date_created,last_login,account_id,role}=req.body
        const {error}=schema.validate({name,email,password,date_created,last_login,account_id,role})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}

export const authLoginMiddleware=(schema)=>{
    return (req,res,next)=>{
        const {email,password}=req.body
        const {error}=schema.validate({email,password})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    } 
}
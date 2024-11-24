import {getUsers, updateuser,deleteuser} from "../services/index.js"


export const Userobj={
    getAllusers:async function(req,res){
        try {
            const result=await getUsers()
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    ,

    Updateuser:async function(req,res){
        try {
            const {email}=req.params
            const {name,password,date_created,last_login,account_id,role}=req.body
            const result=await updateuser({name,email,password,date_created,last_login,account_id,role})
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    ,

    DeleteUser:async function(req,res){
        try {
            const {email}=req.params
            const result=await deleteuser({email})
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}
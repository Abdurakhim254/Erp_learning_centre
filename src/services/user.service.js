import {connect} from "../database/index.js"

export const findByEmail=async(email)=>{
    try {
        const result=await connect.select("*").table("user").where({email})
        if(result.length>=1){
            return result
        }else{
           return "Ro'yxatdan o'tishingiz kerak"
        }
    } catch (error) {
        return error.message
    }
}

export const getUsers=async()=>{
    try {
        const result=await connect.select("*").table("user")
        if(result.length>=1){
            return result
        }else{
            return "Userlar Topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const updateuser=async({name,email,password,date_created,last_login,account_id,role})=>{
    try {
        if(role){
            var data={name,email,password,date_created,last_login,account_id,role}
        }else{
            var data={name,email,password,date_created,last_login,account_id}
        }
        const result=await connect.select("*").table("user").where({email}).update(data).returning("*")
        if(result.length>=1){
            delete result[0].password
            return result
        }else{
            return "Yangilanadigan User topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const deleteuser=async({email})=>{
    try {
        const result=await connect.select("*").table("user").where({email}).del().returning("*")
        if(result.length>=1){
            return result
        }else{
            return "O'chiriladigan User topilmadi"
        }
    } catch (error) {
        return error.message
    }
}
